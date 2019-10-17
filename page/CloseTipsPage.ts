/**
* name 
*/
module gametongyong.page {
	export class CloseTipsPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.game_ui.tongyong.Tips_backUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				PathGameTongyong.atlas_game_ui_tongyong + "tuichu.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
			];
			this._isNeedBlack = true;
			this._isClickBlack = false;
			this._isNeedDuang = false;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("game_ui.tongyong.Tips_backUI");
			this.addChild(this._viewUI);
			this._viewUI.btn_enter.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_cancle.on(LEvent.CLICK, this, this.onBtnClickWithTween);
		}

		protected onBtnTweenEnd(e: any, target: any): void {
			if (target == this._viewUI.btn_enter) {
				if (this._ecb != null) {
					this._ecb.run();
					this._ecb.recover();
					this._ecb = null;
				}
				this.close();
			}
			else {
				this.close();
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
		}

		public close(): void {
			if (this._viewUI) {
				if (this._ccb != null) {
					this._ccb.run();
					this._ccb.recover();
					this._ccb = null;
				}
			}
			super.close();
		}

		private _ecb: Handler;
		private _ccb: Handler;
		setInfo(gameId: string, ecb: Handler, ccb?: Handler) {
			this._viewUI.img_bg.skin = StringU.substitute(PathGameTongyong.ui_tongyong_tuichu + "{0}.png", gameId);
			this._ecb = ecb;
			this._ccb = ccb;
		}
	}
}