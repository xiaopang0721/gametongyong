/**
* 通用百人场游戏结算界面（无庄家）
*/
module gametongyong.page {
	export class SettlePage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.game_ui.tongyong.JieSuanUI;
		private _imgList: Array<LImage> = [];
		private _htmlText: laya.html.dom.HTMLDivElement;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = true;
			this._isNeedDuang = false;
			this._asset = [
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.tongyong.JieSuanUI');
			this.addChild(this._viewUI);
			if (!this._htmlText) {
				this._htmlText = TextFieldU.createHtmlText(this._viewUI.txt_result);
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			//主玩家
			let mainPlayer = this._game.sceneObjectMgr.mainPlayer;
			this._viewUI.img_head.skin = TongyongUtil.getHeadUrl(mainPlayer.playerInfo.headimg, 2);
			this._viewUI.img_txk.skin = TongyongUtil.getTouXiangKuangUrl(mainPlayer.playerInfo.headKuang);
			this._viewUI.txt_name.text = this._game.sceneObjectMgr.mainPlayer.playerInfo.nickname;
			this._viewUI.txt_bet.text = this.dataSource.myBet ? this.dataSource.myBet.toString() : 0;
			this._viewUI.txt_benefit.text = this.dataSource.myBenefit ? this.dataSource.myBenefit.toString() : 0;
			let preStr = StringU.substitute("<span style='color:#fffbb5'>开奖结果： </span>");
			let innerHtml = preStr + StringU.substitute("<span style='color:#ffffff'>{0}</span>", this.dataSource.lottery);
			this._htmlText.innerHTML = innerHtml;
			// this._viewUI.txt_result.text = this.dataSource.lottery.toString();

			// for (let i = 0; i < 4; i++) {
			// 	this._imgList[i] = this._viewUI["img_" + i];
			// 	this._imgList[i].disabled = this.dataSource.myBenefit < 0;
			// }
			// this._viewUI.ani2.on(LEvent.COMPLETE, this, this.onPlayComplte);
			// this._viewUI.ani2.play(0, false);
		}

		private onPlayComplte(): void {
			this.close();
		}

		public close(): void {
			if (this._viewUI) {
				if (this._viewUI) {
					if (this._imgList) {
						this._imgList = null;
					}
					// this._viewUI.ani2.off(LEvent.COMPLETE, this, this.onPlayComplte);
				}
			}
			Laya.timer.clearAll(this);
			super.close();
		}
	}
}