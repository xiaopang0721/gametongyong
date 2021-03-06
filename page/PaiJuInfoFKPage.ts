/**
* name 
*/
module gametongyong.page {
	import PaiJuFangKaT1UI = ui.ajqp.game_ui.tongyong.PaiJuFangKaT1UI
	import PaiJuFangKaT2UI = ui.ajqp.game_ui.tongyong.PaiJuFangKaT2UI
	import PaiJuFangKaT3UI = ui.ajqp.game_ui.tongyong.PaiJuFangKaT3UI
	import PaiJuFangKaT4UI = ui.ajqp.game_ui.tongyong.PaiJuFangKaT4UI
	import PaiJuFangKaT5UI = ui.ajqp.game_ui.tongyong.PaiJuFangKaT5UI
	import PaiJuFangKaT6UI = ui.ajqp.game_ui.tongyong.PaiJuFangKaT6UI

	export class PaiJuInfoFKPage extends game.gui.base.Page {
		static TYPE_ROUND_TITLE: number = 1;//局数标题
		static TYPE_BATTLELOG_TITLE: number = 2;//战斗日志标题
		static TYPE_SHOWCARD_SIXTEEN: number = 3;//摊牌（最多16张）
		static TYPE_SHOWCARD_FIVE: number = 4;//摊牌（最多5张）
		static TYPE_PAODEKUAI_RULE: number = 5;//跑得快规则
		static TYPE_NAME_ADD_DESC: number = 6;//姓名加描述

		protected _viewUI: ui.ajqp.game_ui.tongyong.PaiJu_xq_fkUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
			];
			this._isNeedBlack = true;
			this._isClickBlack = false;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.tongyong.PaiJu_xq_fkUI');
			this.addChild(this._viewUI);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			BattleXiangQingMgr.ins.on(BattleXiangQingMgr.RECORD_CHANGE, this, this.onUpdateInfo);
			this._viewUI.panel_xq.vScrollBarSkin = "";
			this._viewUI.panel_xq.vScrollBar.elasticDistance = 100;
		}

		private _battle_id: string;
		private _game_id: string;
		private _time: number;
		getDataInfo(battle_id: string, game_id: string, time: number) {
			this._battle_id = battle_id;
			this._game_id = game_id;
			this._time = time;
			let data = BattleXiangQingMgr.ins.getDataInfo(this._battle_id, this._game_id, this._time)
			this.onUpdateInfo(battle_id, data);
		}

		private _h: number = 0;//组件总高度
		private _interval: number = 15;//组件间隔
		private onUpdateInfo(battleid: string, data: any) {
			if (!data || !data.length || battleid != this._battle_id) {
				this._view.txt_request.visible = true;
				return;
			}
			this._view.txt_request.visible = false;
			for (let i: number = 0; i < data.length; i++) {
				let obj = data[i];
				switch (obj.type) {
					case PaiJuInfoFKPage.TYPE_ROUND_TITLE://局数标题（例：第x局）
						let component1: PaiJuFangKaT1UI = new PaiJuFangKaT1UI();
						component1.txt_title.text = obj.title;
						component1.y = this._h + this._interval;
						this._h += component1.height;
						this._viewUI.panel_xq.addChild(component1);
						break;
					case PaiJuInfoFKPage.TYPE_BATTLELOG_TITLE://战斗日志类型标题（例：开始抢庄）
						let component2: PaiJuFangKaT2UI = new PaiJuFangKaT2UI();
						component2.txt_title.text = obj.title;
						component2.y = this._h + this._interval;
						this._h += component2.height;
						this._viewUI.panel_xq.addChild(component2);
						break;
					case PaiJuInfoFKPage.TYPE_SHOWCARD_SIXTEEN://房卡跑得快，房卡斗地主摊牌（例：姓名 剩余牌 具体牌）
						let component3: PaiJuFangKaT3UI = new PaiJuFangKaT3UI();
						component3.txt_name.text = obj.name;
						component3.txt_num.text = obj.desc;
						for (let k: number = 0; k < 16; k++) {//一共16张
							component3["card" + k].visible = k < obj.cards.length;
							if (k < obj.cards.length) {
								let val: number = obj.cards[k];
								component3["card" + k].skin = PathGameTongyong.ui_tongyong + "pai/" + val + ".png";
							}
						}
						component3.y = this._h + this._interval;
						this._h += component3.height;
						this._viewUI.panel_xq.addChild(component3);
						break;
					case PaiJuInfoFKPage.TYPE_SHOWCARD_FIVE://房卡抢庄牛牛摊牌（例：姓名 牌型 具体牌）
						let component4: PaiJuFangKaT4UI = new PaiJuFangKaT4UI();
						component4.txt_name.text = obj.name;
						component4.txt_desc.text = obj.desc;
						for (let j: number = 0; j < obj.cards.length; j++) {
							let val: number = obj.cards[j];
							component4["card" + j].skin = PathGameTongyong.ui_tongyong + "pai/" + val + ".png";
							//牛牌后两张上移
							if (obj.isniu && j > 2) {
								component4["card" + j].y = component4["card" + j].y - 10;
							}
						}
						component4.y = this._h + this._interval;
						this._h += component4.height;
						this._viewUI.panel_xq.addChild(component4);
						break;
					case PaiJuInfoFKPage.TYPE_PAODEKUAI_RULE://房卡跑得快规则
						let component5: PaiJuFangKaT5UI = new PaiJuFangKaT5UI();
						for (let index: number = 0; index < obj.rules.length; index++) {
							let str: string = "";
							switch (index) {
								case 0:
									str = "人数：" + obj.rules[index];
									break;
								case 1:
									str = "局数：" + obj.rules[index];
									break;
								case 2:
									str = "玩法：" + obj.rules[index] + "张";
									break;
								case 3:
									str = "先出：" + (obj.rules[index] == 0 ? "黑桃3" : "赢家");
									break;
								case 4:
									str = "顺子：" + obj.rules[index] + "张起";
									break;
								case 5:
									str = obj.rules[index] == 1 ? "有牌必打" : "不需要有牌必打";
									break;
								case 6:
									str = obj.rules[index] == 1 ? "报单保底" : "没有报单保底";
									break;
								case 7:
									str = obj.rules[index] == 1 ? "四带三" : "不能四带三";
									break;
								case 8:
									str = obj.rules[index] == 1 ? "3A为炸弹" : "";
									break;
							}
							component5["rule" + index].text = str;
						}
						component5.y = this._h + this._interval;
						this._h += component5.height;
						this._viewUI.panel_xq.addChild(component5);
						break;
					case PaiJuInfoFKPage.TYPE_NAME_ADD_DESC://姓名加描述文本
						let component6: PaiJuFangKaT6UI = new PaiJuFangKaT6UI();
						TextFieldU.setHtmlText(component6.txt_desc, obj.desc);
						component6.box_boom.visible = obj.boomCount > 0;
						component6.box_boom.x = obj.val >= 100 ? 326 : 316;
						component6.txt_boom.text = obj.boomCount > 0 ? "x" + obj.boomCount : ""
						component6.y = this._h + this._interval;
						this._h += component6.height;
						this._viewUI.panel_xq.addChild(component6);
						break;
				}
			}
		}

		public close(): void {
			if (this._viewUI) {
				BattleXiangQingMgr.ins.off(BattleXiangQingMgr.RECORD_CHANGE, this, this.onUpdateInfo);
			}
			super.close();
		}

	}
}