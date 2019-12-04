/**
* name 
*/
module gametongyong.page {
	export class RecordPage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.game_ui.tongyong.ZhanJiUI;
		private _btnList: Array<Button>;
		private _timeList: Array<number>;
		private _selectTime: number;
		private _htmlText: laya.html.dom.HTMLDivElement;
		private _roomId: string;
		private _gameId: string;
		private _isCardRoomType: boolean;
		private _recordMgr: RecordMgr;
		private _selectColor: string;	//选中颜色
		private _unSelectColor: string;	//未选中颜色
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = false;
			this._asset = [
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.tongyong.ZhanJiUI');
			this.addChild(this._viewUI);
			this.initColor();
			this._viewUI.list_record.visible = false;
			this._viewUI.txt_noRecord.visible = false;
			this._timeList = [];
			this._btnList = [];
			for (let i = 0; i < 7; i++) {
				this._btnList.push(this._viewUI["btn_list" + i]);
				this._btnList[i].on(LEvent.CLICK, this, this.onBtnClick, [i]);
			}
			if (!this._htmlText) {
				this._htmlText = TextFieldU.createHtmlText(this._viewUI.txt_total);
			}
			this._notStageClickUI = [this._viewUI.btn_list];
		}

		private initColor(): void {
			this._selectColor = this._viewUI.lab_btn0.color;
			this._unSelectColor = this._viewUI.lb_time.color;
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._recordMgr = RecordMgr.ins;
			if (this._dataSource) {
				if (this._dataSource.hasOwnProperty("isCardRoomType")) {
					this._gameId = this._recordMgr.game_id = this._dataSource.gameid;
					this._isCardRoomType = this._dataSource.isCardRoomType;
				}
				else {
					this._gameId = this._recordMgr.game_id = this._dataSource;
				}
			}
			this.initCardRoomInfo();
			this.onUpdateDataList();
			this.onUpdateDataInfo();
			this._viewUI.list_record.vScrollBarSkin = "";
			this._viewUI.list_record.scrollBar.elasticDistance = 100;
			this._viewUI.list_record.itemRender = this.createChildren("game_ui.tongyong.BaoBiaoTUI", ListRecordItem);
			this._viewUI.list_record.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.img_profit.skin = StringU.substitute(PathGameTongyong.ui_tongyong_general + "{0}.png", this._isCardRoomType ? "bb_jf" : "bb_yl");
			//当天的话，数据重新获取
			this._recordMgr.getData(1, this._roomId, this._selectTime, this._timeSelectIndex);
			for (let i = 0; i < 7; i++) {
				this._viewUI["btn_selected" + i].selected = i == 6;
				this._viewUI["lab_btn" + i].color = (i == 6) ? this._selectColor : this._unSelectColor;
			}
			this._viewUI.btn_list.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._recordMgr.on(RecordMgr.RECORD_CHANGE, this, this.onUpdateDataInfo);
		}

		protected onMouseDown(e: LEvent) {
			return true;
		}

		private _lastIndex: number;
		private renderHandler(cell: ListRecordItem, index: number) {
			if (cell) {
				cell.setData(this._game, cell.dataSource, this._recordMgr.game_id);
				let page = Math.floor((index + 10) / RecordMgr.PAGE_MAX) + 1;
				if (!this._recordMgr.getDataInfo(this._timeSelectIndex, this._gameId)[page]) {
					if (this._recordMgr.getDataInfo(this._timeSelectIndex, this._gameId)[page - 1] && this._recordMgr.getDataInfo(this._timeSelectIndex, this._gameId)[page - 1].length >= RecordMgr.PAGE_MAX) {
						if (index - this._lastIndex < RecordMgr.PAGE_MAX * .5) return;
						this._lastIndex = index;
						this._recordMgr.getData(page, this._roomId, this._selectTime, this._timeSelectIndex);
					}
				}
			}
		}

		private onUpdateDataList() {
			this._selectTime = this._game.sync.serverTimeBys;
			this._timeSelectIndex = 6;
			this._timeList = [];
			for (let i = 0; i < 7; i++) {
				this._timeList.push(this._selectTime - 86400 * (6 - i));
				this._viewUI["lab_btn" + i].text = Sync.getTimeStr3(this._timeList[i]);
			}
			this._viewUI.list_time.visible = false;
			this._viewUI.jiantou_down.visible = false;
			this._viewUI.list_time.dataSource = this._timeList;

			this._viewUI.lb_time.text = Sync.getTimeStr3(this._selectTime);
			let str = "<span style='color:{0}'>汇总：{1}</span>";
			let colorHtml = TeaStyle.COLOR_GREEN;
			let innerHtml = StringU.substitute(str, colorHtml, 0);
			this._htmlText.innerHTML = innerHtml;
		}



		private _dataInfo: any[];
		private onUpdateDataInfo(date?: any) {
			//日期图标显隐,不必重复做
			if (this._recordMgr.timeTotalNumArr && date) {
				for (let i = 0; i < 7; i++) {
					let curTimeStr = Sync.getTimeStr3(this._timeList[i]);
					let isSlected = this._recordMgr.isCurDayHaveNum(curTimeStr) ? true : false;
					this._viewUI["img_data" + i].visible = isSlected;
				}
			}
			this._dataInfo = [];
			let value = this._recordMgr.getDataInfo(this._timeSelectIndex, this._gameId, !date);
			let count: number = 0;
			let curPageCount: number = 0;
			for (let key in value) {
				if (value[key] && value[key].length > 0)
					count++;
			}
			this._viewUI.txt_noRecord.visible = !count;
			this._viewUI.list_record.visible = count > 0;
			let str = "<span style='color:{0}'>汇总：{1}</span>";
			let colorHtml = TeaStyle.COLOR_GREEN;
			let innerHtml = "";
			if (!count) {
				!date && this._recordMgr.getData(1, this._roomId, this._selectTime, this._timeSelectIndex);
				innerHtml = StringU.substitute(str, colorHtml, 0)
				this._htmlText.innerHTML = innerHtml;
				return;
			}

			for (let key in value) {
				if (value.hasOwnProperty(key)) {
					let cc = value[key];
					if (cc) {
						for (let index = 0; index < cc.length; index++) {
							let aa = cc[index];
							aa["rank"] = index + parseInt(key) * RecordMgr.PAGE_MAX - RecordMgr.PAGE_MAX;
							this._dataInfo.push(aa);
							if (this._isCardRoomType) {
								aa.profit = aa.room_point;
							}
						}
					}
				}
			}

			this._viewUI.list_record.dataSource = this._dataInfo;
			let all = this._recordMgr.getTotalByIndex(this._gameId, this._timeSelectIndex);
			colorHtml = all > 0 ? TeaStyle.COLOR_GREEN : TeaStyle.COLOR_RED;
			innerHtml = StringU.substitute(str, colorHtml, EnumToString.getPointBackNum(all, 2))
			this._htmlText.innerHTML = innerHtml;

		}

		//按钮缓动回调
		protected onBtnTweenEnd(e: any, target: any): void {
			switch (target) {
				case this._viewUI.btn_list:
					this._viewUI.list_time.visible = !this._viewUI.list_time.visible;
					this._viewUI.jiantou_down.visible = this._viewUI.list_time.visible;
					this._viewUI.jiantou_up.visible = !this._viewUI.list_time.visible;
					break;
				default:
					break;
			}
		}

		//当前选中的 时间位置
		private _timeSelectIndex: number;
		private onBtnClick(index: number, e: LEvent): void {
			if (index == this._timeSelectIndex) return;
			this._viewUI.list_record.scrollTo(0);
			this._lastIndex = 0;
			this._timeSelectIndex = index;
			this._selectTime = this._timeList[index];//选择的时间
			this._viewUI.lb_time.text = Sync.getTimeStr3(this._selectTime);
			for (let i = 0; i < 7; i++) {
				this._viewUI["btn_selected" + i].selected = (i == index) ? true : false;
				this._viewUI["lab_btn" + i].color = (i == index) ? this._selectColor : this._unSelectColor;
			}

			this.onUpdateDataInfo();
			this.updateBoxBtnStatus();
		}

		private _notStageClickUI: any[]; //不响应舞台点击UI对象集合
		protected onMouseClick(e: LEvent) {
			if (!this._viewUI.list_time.visible) return;
			for (let index = 0; index < this._notStageClickUI.length; index++) {
				let v = this._notStageClickUI[index];
				if (v.contains(e.target)) {
					return;
				}
			}
			this.updateBoxBtnStatus();
		}

		private updateBoxBtnStatus() {
			this._viewUI.list_time.visible = false;
			this._viewUI.jiantou_down.visible = false;
			this._viewUI.jiantou_up.visible = true;
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.btn_list.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				for (let i = 0; i < 7; i++) {
					this._btnList[i] && this._btnList[i].off(LEvent.CLICK, this, this.onBtnClick);
				}
			}
			this._recordMgr.off(RecordMgr.RECORD_CHANGE, this, this.onUpdateDataInfo);
			super.close();
		}

		/** 设置房卡模式战绩查询相关信息 */
		protected initCardRoomInfo() {
			if (this._isCardRoomType) {
				this._roomId = Web_operation_fields.GAME_ROOM_CONFIG_CARD_ROOM.toString();
			} else {
				this._roomId = "";
			}
		}
	}
	export class ListRecordItem extends ui.ajqp.game_ui.tongyong.BaoBiaoTUI {

		constructor() {
			super();
			this.btn_xq.on(LEvent.CLICK, this, this.onMouseClick);
		}
		private _game: Game;
		private _gameId: string;
		private _data: any;//"ddz","niuniu","zjh"
		setData(game: Game, data: any, gameId: string) {
			this._game = game;
			this._gameId = gameId;
			this._data = data;
			this.txt_index.text = data.rank + 1;
			this.txt_id.text = (data.battle_id).toString();
			this.txt_earn.text = data.profit.toString();
			this.img_bg.skin = StringU.substitute(PathGameTongyong.ui_tongyong_general + "tu_bb{0}.png", data.rank % 2 == 0 ? 1 : 2)
			this.txt_earn.color = data.profit > 0 ? TeaStyle.COLOR_GREEN : TeaStyle.COLOR_RED;
			this.txt_type.text = data.room_name.toString();
			this.txt_time.text = Sync.getTimeShortStr(data.end_time * 1000);
			if (this._gameId == "buyu") {//捕鱼没有详情
				let battleidArr = data.battle_id.split("_");
				let str: string = battleidArr.length > 1 ? battleidArr[0] + battleidArr[1] : battleidArr[0];
				this.txt_id.text = str;
				this.btn_xq.visible = false;
			}
		}

		private _cardroomList: string[] = ["rniuniu", "rddz", "rpaodekuai", "rshisanshui"];
		private onMouseClick(e: LEvent): void {
			if (this._game && this._data) {
				if (this._cardroomList.indexOf(this._gameId) != -1) {//房卡类型
					this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_BATTLE_INFO_FK, (page: PaiJuInfoFKPage) => {
						page.getDataInfo(this._data.battle_id, this._gameId, this._data.end_time);
					})
				} else if (this._gameId == "wxsaoleihb") {
					//微信红包扫雷
					this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_BATTLE_INFO_WX, (page: PaiJuInfoFKWXPage) => {
						page.getDataInfo(this._data.battle_id, this._gameId, this._data.end_time);
					})
				} else {//非房卡类型
					this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_BATTER_INFO, (page: PaiJuInfoPage) => {
						page.getDataInfo(this._data.battle_id, this._gameId, this._data.end_time);
					})
				}
			}
		}


		destory(destoryChildern = true) {
			super.destroy(destoryChildern);
			this.btn_xq.off(LEvent.CLICK, this, this.onMouseClick);
		}
	}

}