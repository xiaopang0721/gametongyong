/**
* name 
*/
module gametongyong.page {
	export class TongyongHudNqpPage extends ui.nqp.game_ui.tongyong.HudUI {
		private _game: Game;
		private _isCardRoomType: boolean;
		private _gameId: string;
		readonly RULE_PAGE: number = 101;
		constructor() {
			super();
		}

		/**
		 * 
		 * @param game 
		 * @param gameId 游戏id
		 * @param isCardRoomType 是否房卡类型
		 */
		onOpen(game: Game, gameId: string, isCardRoomType?: boolean) {
			this._game = game;
			this._gameId = gameId;
			this._isCardRoomType = isCardRoomType;
			this.btn_record.on(LEvent.CLICK, this, this.onBtnClickHandle);
			this.btn_help.on(LEvent.CLICK, this, this.onBtnClickHandle);
			this.btn_gren.on(LEvent.CLICK, this, this.onBtnClickHandle);
			this.btn_back.on(LEvent.CLICK, this, this.onBtnClickHandle);
			this.btn_fresh.on(LEvent.CLICK, this, this.onBtnClickHandle);
			this.btn_vip.on(LEvent.CLICK, this, this.onBtnClickHandle);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
			this.onUpdatePlayerInfo();
			this.ani1.play(0, false);
			//判断是否绑定了手机
			//游客绑定提示
			let mainPlayer: PlayerData = this._game.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			let playerInfo = mainPlayer.playerInfo;
			if (!playerInfo) return;
			if (!playerInfo.mobile && !this._game.datingGame.isAlertVisitorTip) {
				Laya.timer.once(1000, this, () => {
					this._game.datingGame.isAlertVisitorTip = true;
					this._game.uiRoot.general.open(DatingPageDef["PAGE_GUEST_TIP"]);
				})
			}
			this.updatePos();
		}

		private updatePos() {
			if (this._game.isFullScreen) {
				this.box_btn_top_left.left = 56;
			} else {
				this.box_btn_top_left.left = 0;
			}

		}

		private _clip_money: TongyongClip;
		private _clip_vip: TongyongClip;
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
			if (!this._clip_vip) {
				this._clip_vip = new TongyongClip(ClipUtil.DATING_VIP_FONT);
				this._clip_vip.centerX = this.clip_vip.centerX - 10;
				this._clip_vip.centerY = this.clip_vip.centerY;
				this.clip_vip.parent && this.clip_vip.parent.addChild(this._clip_vip);
				this.clip_vip.removeSelf();
			}
			this._clip_vip.setText(playerInfo.vip_level, true);
			this.btn_gren.skin = TongyongUtil.getHeadUrl(playerInfo.headimg, 2);
			this.img_txk.skin = TongyongUtil.getTouXiangKuangUrl(playerInfo.headKuang, 2);
		}

		protected onBtnClickHandle(e: LEvent): void {
			if (!this._game) return;
			this._game.uiRoot.btnTween(e.currentTarget)
			switch (e.currentTarget) {
				case this.btn_help://规则
					this._game.uiRoot.general.open(this._gameId + this.RULE_PAGE);
					break;
				case this.btn_gren://个人信息
					this._game.uiRoot.general.open(DatingPageDef.PAGE_XINXI);
					break;
				case this.btn_fresh://充值
					this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
					break;
				case this.btn_vip://VIP
					this._game.uiRoot.general.open(DatingPageDef.PAGE_VIP);
					break;
				case this.btn_record://战绩
					this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, (page) => {
						page.dataSource = {
							isCardRoomType: this._isCardRoomType,
							gameid: this._gameId
						};
					});
					break;
				case this.btn_back://返回大厅
					this._game.uiRoot.HUD.closeAll();
					this._game.uiRoot.HUD.open(DatingPageDef.PAGE_HUD);
					break;

				default:
					break;
			}
		}

		public destroy(): void {
			if (this._game && this._game.sceneObjectMgr) {
				this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.onUpdatePlayerInfo);
			}
			this.btn_record.off(LEvent.CLICK, this, this.onBtnClickHandle);
			this.btn_help.off(LEvent.CLICK, this, this.onBtnClickHandle);
			this.btn_gren.off(LEvent.CLICK, this, this.onBtnClickHandle);
			this.btn_back.off(LEvent.CLICK, this, this.onBtnClickHandle);
			this.btn_fresh.off(LEvent.CLICK, this, this.onBtnClickHandle);
			this.btn_vip.off(LEvent.CLICK, this, this.onBtnClickHandle);
			if (this._clip_money) {
				this._clip_money.removeSelf();
				this._clip_money.destroy();
				this._clip_money = null;
			}
			if (this._clip_vip) {
				this._clip_vip.removeSelf();
				this._clip_vip.destroy();
				this._clip_vip = null;
			}
			super.destroy();
		}
	}
}