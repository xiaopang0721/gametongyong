/**
* name 提示
*/
module gametongyong.page {
	export class TipsPageNqp extends game.gui.base.Page {
		private _viewUI: ui.nqp.game_ui.tongyong.TipsUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
			];
			this._isNeedBlack = true;
		}


		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView("game_ui.tongyong.TipsUI");
			this.addChild(this._viewUI);

			this._viewUI.btn_enter.on(LEvent.CLICK, this, this.onMouseHandle);
			this._viewUI.btn_cancle.on(LEvent.CLICK, this, this.onMouseHandle);
		}

		private onMouseHandle(e: LEvent) {
			if (e.currentTarget == this._viewUI.btn_enter) {
				if (this._ecb != null) {
					this._ecb.apply(this);
					this._ecb = null;
				}
				super.close();
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
					this._ccb.apply(this);
					this._ccb = null;
				}
			}
			super.close();
		}

		private _isOnlyOK: boolean
		set isOnlyOK(isOnlyOK: boolean) {
			this._isOnlyOK = isOnlyOK;
			if (isOnlyOK) {
				this._viewUI.btn_enter.centerX = 0;
				this._viewUI.btn_cancle.visible = false;
			} else {
				this._viewUI.btn_enter.right = 30;
				this._viewUI.btn_cancle.left = 30;
				this._viewUI.btn_enter.visible = true;
				this._viewUI.btn_cancle.visible = true;
			}
		}

		private _ecb: Function;
		private _ccb: Function;
		setInfo(str, ecb: Function, ccb: Function, okSkin: string) {
			this._viewUI.txt_label.text = str;
			this._ecb = ecb;
			this._ccb = ccb;
			// if (okSkin) {
			// 	this._viewUI.img_enter.skin = okSkin;
			// }
		}
	}
}