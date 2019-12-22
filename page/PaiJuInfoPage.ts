/**
* name 
*/
module gametongyong.page {
	export class PaiJuInfoPage extends game.gui.base.Page {
		protected _viewUI: ui.ajqp.game_ui.tongyong.PaiJu_xqUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._asset = [
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.tongyong.PaiJu_xqUI');
			this.addChild(this._viewUI);
			this._viewUI.list_info.dataSource = [];
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			BattleXiangQingMgr.ins.on(BattleXiangQingMgr.RECORD_CHANGE, this, this.onUpdateInfo);
			this._viewUI.list_info.vScrollBarSkin = "";
			this._viewUI.list_info.scrollBar.elasticDistance = 100;
			this._viewUI.list_info.itemRender = this.createChildren("game_ui.tongyong.PaiJu_xqTUI", PaiJuItemRender);
			this._viewUI.list_info.renderHandler = new Handler(this, this.renderHandler);
		}

		private _h: number;
		private renderHandler(cell: Laya.View, index: number) {
			// if (index == 0) {
			// 	this._h = 0;
			// }
			// cell.y = this._h
			// this._h += cell.height
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

		private onUpdateInfo(battleid: string, data: any) {
			if (!data || battleid != this._battle_id) return;
			let allArr: any[] = data.split("#");
			if (allArr.length == 1) {
				this._viewUI.txt_info.text = allArr[0];
				this._viewUI.list_info.visible = false;
				this._viewUI.panel_xq.visible = true;
				this._viewUI.txt_request.visible = false;
			} else {
				this._viewUI.list_info.dataSource = allArr;
				this._viewUI.list_info.visible = true;
				this._viewUI.panel_xq.visible = false;
				this._viewUI.txt_request.visible = false;
			}
		}

		public close(): void {
			if (this._viewUI) {
				BattleXiangQingMgr.ins.off(BattleXiangQingMgr.RECORD_CHANGE, this, this.onUpdateInfo);
			}
			super.close();
		}

	}
	class PaiJuItemRender extends ui.ajqp.game_ui.tongyong.PaiJu_xqTUI {
		set dataSource(v: string) {
			if (!v || v == "") {
				this.visible = false;
				return;
			}
			this.visible = true;
			let infoArr: string[] = v.split("|");
			this.txt_title.text = "";
			this.txt_info.text = "";

			if (infoArr.length == 1) {
				//没有标题信息
				this.txt_info.x = 0;
				this.txt_info.text = infoArr[0];
			} else {
				let titleStr: string = infoArr[0];
				let color: string = "";
				switch (titleStr) {
					case "开牌":
						color = TeaStyle.COLOR_YELLOW;
						break
					case "下注":
						color = TeaStyle.COLOR_GREEN;
						break
					case "结算":
						color = TeaStyle.COLOR_RED;
						break
				}
				this.txt_info.x = 110;
				this.txt_title.text = titleStr;
				this.txt_title.color = color;
				this.txt_info.text = infoArr[1];
			}
			this.height = this.txt_info.textField.height;
		}
	}
}