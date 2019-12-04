/**
* name 
*/
module gametongyong.page {
	export class MatchPage extends game.gui.base.Page {
		protected _viewUI: ui.ajqp.game_ui.tongyong.PiPeiUI;
		private _story: gamecomponent.story.StoryNormalBase;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = false;
			this._isNeedDuang = false;
			this._asset = [
				PathGameTongyong.atlas_game_ui_tongyong+ "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong+ "logo.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.tongyong.PiPeiUI');
			this.addChild(this._viewUI);
			this._viewUI.box.visible = true;
			// this._viewUI.btn_continue.visible = !this._viewUI.box.visible;
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			if (WebConfig.server_close) {
				TongyongPageDef.ins.alertRecharge(StringU.substitute("亲爱的玩家，游戏服务器正在火速升级中，请稍候1分钟再进入游戏场，游戏有您更精彩~"), () => {
				}, () => {
				}, true, TongyongPageDef.TIPS_SKIN_STR["qd"]);
				this._game.sceneObjectMgr.leaveStory(true);
				this.close();
				return;
			}
			if (this._game.sceneObjectMgr.story instanceof gamecomponent.story.StoryNormalBase) {
				this._story = this._game.sceneObjectMgr.story;
				this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
				this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
				this._story.isMatchGame = this._viewUI.box.visible;
				this._viewUI.btn_cancle.on(LEvent.CLICK, this, this.onBtnClickWithTween)
				// this._viewUI.btn_continue.on(LEvent.CLICK, this, this.onBtnClickWithTween)
			} else {
				this.close();
			}
		}

		private onUpdateMapInfo() {
			if (this._game.sceneObjectMgr.story.mapinfo && this._viewUI.box.visible) {
				this.dataSource = false;
				this.close();
			}
		}

		protected onBtnTweenEnd(e: any, target: any) {
			if (target == this._viewUI.btn_cancle) {
				this._story.isMatchGame = false;
			}
		}

		private onOptHandler(optcode: number, msg: any): void {
			if (msg.type == Operation_Fields.OPRATE_TELEPORT) {//登录操作错误类型
				switch (msg.reason) {
					case Operation_Fields.OPRATE_TELEPORT_MAP_MATHCH_JOIN_SUCESS:             // 地图匹配加入成功
						this._viewUI.box.visible = true;
						break;
					case Operation_Fields.OPRATE_TELEPORT_MAP_MATHCH_CANCLE_SUCESS:             // 地图匹配取消成功
						this.dataSource = true;
						this.close();
						break;
					case Operation_Fields.OPRATE_TELEPORT_CAN_NOT_JOIN:             //加入游戏失败，条件不允许
						this._game.showTips("匹配失败，请重新匹配");
						this.dataSource = true;
						this.close();
						break;
				}
			}
		}

		public close(): void {
			if (this._viewUI) {
				this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
				this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
			}
			super.close();
		}
	}
}