/**
* name 
*/
module gametongyong.page {
	export class TongYongPlayerList extends game.gui.base.Page {
		private _viewUI: ui.ajqp.game_ui.tongyong.WanJiaLBUI;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = true;
			this._asset = [
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
			];
		}

		protected init(): void {
			this._viewUI = this.createView('game_ui.tongyong.WanJiaLBUI');
			this.addChild(this._viewUI);

		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.list_player.vScrollBarSkin = "";
			this._viewUI.list_player.scrollBar.autoHide = false;
			this._viewUI.list_player.scrollBar.elasticDistance = 100;
			this._viewUI.list_player.itemRender = this.createChildren("game_ui.tongyong.WanJiaUI", PlayerItemRender);
			this._viewUI.list_player.renderHandler = new Handler(this, this.renderHandler);

			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUpdateUnit);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUpdateUnit);
			this.onUpdateUnit();
			this._viewUI.list_player.dataSource = this.dataSource;
		}

		private renderHandler(cell: PlayerItemRender, index: number) {
			if (cell) {
				cell.setData(this._game, cell.dataSource);
			}
		}

		private onUpdateUnit() {
			let unitList = [];
			for (let key in this._game.sceneObjectMgr.unitDic) {
				if (this._game.sceneObjectMgr.unitDic.hasOwnProperty(key)) {
					let unit = this._game.sceneObjectMgr.unitDic[key];
					if (unit) {
						unitList.push(unit);
					}
				}
			}
			unitList.sort((a: Unit, b: Unit) => {
				return a.GetMoney() > b.GetMoney() ? -1 : 1;
			});
			let len = unitList.length > 20 ? 20 : unitList.length;
			let playerList = [];
			for (let i = 0; i < len; i++) {
				let obj = { unit: unitList[i], index: i + 1 };
				playerList.push(obj);
			}
			this._viewUI.list_player.dataSource = playerList;
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.list_player.vScrollBarSkin = null;
			}
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUpdateUnit);
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUpdateUnit);
			super.close();
		}
	}

	class PlayerItemRender extends ui.ajqp.game_ui.tongyong.WanJiaUI {
		private _game: Game;
		private _unit: Unit;
		private _index: number;
		private _clipNum: TongyongClip;
		private _clipMoney: TongyongClip;
		setData(game: Game, data: any) {
			this._game = game;
			this._unit = data.unit;
			this._index = data.index;

			this.txt_name.text = this._unit.GetName();
			this.img_head.skin = TongyongUtil.getHeadUrl(this._unit.GetHeadImg(), 2);
			this.img_txk.skin = TongyongUtil.getTouXiangKuangUrl(this._unit.GetHeadKuangImg());
			if (!this._clipNum) {
				this._clipNum = new TongyongClip(TongyongClip.RANK_FONT2)
				this._clipNum.centerX = this.clip_num.centerX;
				this._clipNum.centerY = this.clip_num.centerY;
				this.clip_num.parent.addChild(this._clipNum);
				this.clip_num.visible = false;
			}
			this._clipNum.setText(this._index + "", true, false);
			if (!this._clipMoney) {
				this._clipMoney = new TongyongClip(TongyongClip.MONEY_FONT)
				this._clipMoney.x = this.clip_money.x;
				this._clipMoney.y = this.clip_money.y;
				this.clip_money.parent.addChild(this._clipMoney);
				this.clip_money.visible = false;
			}
			this._clipMoney.setText(EnumToString.getPointBackNum(TongyongUtil.getMoneyChange(this._unit.GetMoney()), 2) + "", true, false);
		}
	}
}