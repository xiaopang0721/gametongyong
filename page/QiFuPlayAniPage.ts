/**
* name 
*/
module gametongyong.page{
	export class QiFuPlayAniPage extends game.gui.base.Page{
		private _viewUI: ui.nqp.game_ui.tongyong.effect.QiFuUI;
		
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				PathGameTongyong.atlas_game_ui_tongyong+ "qifu.atlas",
			];
		}

		// 页面初始化函数a
		protected init(): void {
			this._viewUI = this.createView('game_ui.tongyong.effect.QiFuUI');
			this.addChild(this._viewUI);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();

			this._viewUI.img0.skin = this.dataSource;
			this._viewUI.img1.skin = this.dataSource;
			this.timer.once(2500, this, this.close);
		}
	
		public close(): void {
			if (this._viewUI) {
				this.timer.clearAll(this);
			}
			super.close();
		}
	}
}