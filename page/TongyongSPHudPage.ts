/**
* name 
*/
module gametongyong.page {
	export class TongyongSPHudPage extends ui.ajqp.game_ui.tongyong.HudSpUI {
		private _game: Game;
		private _isCardRoomType: boolean;
		private _gameId: string;
		private _isEnterMap: boolean;
		readonly RULE_PAGE: number = 101;
		constructor() {
			super();
		}

		/**
		 * 
		 * @param game 
		 * @param gameId 游戏id
		 * @param isEnterMap 是否发起entermap
		 * @param isCardRoomType 是否房卡类型
		 */
		onOpen(game: Game, gameId: string, isEnterMap: boolean = true, isCardRoomType: boolean = false) {
			//全面屏
			this._game = game;
			this._gameId = gameId;
			this._isCardRoomType = isCardRoomType;
			this._isEnterMap = isEnterMap;
			this.btn_gren.onAPI(LEvent.CLICK, this, this.onBtnClickHandle);
			this.btn_back.on(LEvent.CLICK, this, this.onBtnClickHandle);
			this.btn_ksks.on(LEvent.CLICK, this, this.onBtnClickHandle);

			this.btn_fresh.onAPI(LEvent.CLICK, this, this.onBtnClickHandle)
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
			this.onUpdatePlayerInfo();
			this.ani1.play(0, false);
			let mainPlayer: PlayerData = this._game.sceneObjectMgr.mainPlayer;
			this.updatePos();
		}

		private updatePos() {
			Laya.timer.frameOnce(1, this, () => {
				if (this._game.isFullScreen) {
					let diff = 56
					//有刘海
					this.box_top.top = -1 + diff;
				} else {
					this.box_top.top = -1;
				}
			})
		}

		private _clip_money: TongyongClip;
		private onUpdatePlayerInfo(first: boolean = true) {
			if (!this._game) return;
			if (!WebConfig.info) return;
			let mainPlayer = this._game.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			let playerInfo = this._game.sceneObjectMgr.mainPlayer.playerInfo;
			this.txt_name.text = playerInfo.nickname;

			if (!this._clip_money) {
				this._clip_money = new TongyongClip(TongyongClip.MONEY_FONT2);
				this._clip_money.scale(0.9, 0.9);
				this._clip_money.x = this.clip_money.x;
				this._clip_money.y = this.clip_money.y;
				this.clip_money.parent && this.clip_money.parent.addChild(this._clip_money);
				this.clip_money.removeSelf();
			}
			this._clip_money.setText(EnumToString.getPointBackNum(playerInfo.money, 2) + "", true, false, playerInfo.money < 0 ? PathGameTongyong.ui_tongyong_general + "tu_jianhao.png" : null);
			this.img_txk.skin = TongyongUtil.getTouXiangKuangUrl(playerInfo.headKuang);
			this.btn_gren.skin = TongyongUtil.getHeadUrl(playerInfo.headimg, 2);
		}

		protected onBtnClickHandle(e: LEvent): void {
			if (!this._game) return;
			this._game.uiRoot.btnTween(e.currentTarget)
			switch (e.currentTarget) {
				case this.btn_gren://个人信息
					if (WebConfig.enterGameLocked) return;
					this._game.uiRoot.general.open(DatingPageDef.PAGE_XINXI);
					break;
				case this.btn_fresh://充值
					if (WebConfig.enterGameLocked) return;
					this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
					break;
				case this.btn_back://返回大厅
					this._game.uiRoot.HUD.closeAll();
					this._game.uiRoot.HUD.open(DatingPageDef.PAGE_HUD);
					break;
				case this.btn_ksks://快速开始
					let maplv: number = TongyongUtil.getJoinMapLv(this._gameId, WebConfig.info.money);
					let money: number = TongyongUtil.getJoinMoney(this._gameId, WebConfig.info.money);
					if (!maplv) {
						this._game.alert(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", money), () => {
							this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
						}, () => {
						}, true, Tips.TIPS_SKIN_STR["cz"]);
						return;
					}
					this._game.sceneObjectMgr.intoStory(this._gameId, maplv.toString(), this._isEnterMap);
					break;
			}
		}

		public destroy(): void {
			if (this._game && this._game.sceneObjectMgr) {
				this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
			}
			this.btn_gren.off(LEvent.CLICK, this, this.onBtnClickHandle);
			this.btn_back.off(LEvent.CLICK, this, this.onBtnClickHandle);
			this.btn_fresh.off(LEvent.CLICK, this, this.onBtnClickHandle);
			if (this._clip_money) {
				this._clip_money.removeSelf();
				this._clip_money.destroy();
				this._clip_money = null;
			}
			super.destroy();
		}
	}
}