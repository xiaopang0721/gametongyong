/**
* name 
*/
module gametongyong.page {
	export class TouPiaoJieSanPage extends ui.nqp.game_ui.tongyong.JieSanUI {
		private _game: Game;
		private _count: number;
		private _view: any;
		private _mapinfo: any;
		constructor() {
			super();
		}

		/**
		 * 
		 * @param game 
		 * @param count 游戏人数
		 */
		initUI(game: Game, view: any, mapinfo: any, count: number) {
			this._game = game;
			this._count = count;
			this._view = view;
			this._mapinfo = mapinfo;

			this._game.sceneObjectMgr.on(RniuniuMapInfo.EVENT_TOUPIAO_TIME, this, this.updateTouPiaoTime);//投票解散
			this.btn_ok.on(LEvent.CLICK, this, this.onBtnClickHandle);
			this.btn_refuse.on(LEvent.CLICK, this, this.onBtnClickHandle);
		}

		private _isTouPiaoing: boolean = false;      //是否投票中
		private _tpEndTime: number;  //投票倒计时结束时间
		update(diff: number) {
			if (this._isTouPiaoing) {
				let curTime = this._game.sync.serverTimeBys;
				let txTime = this._tpEndTime - curTime;
				if (txTime > 0) {
					this.pro_time.value = txTime / 30;
				} else {
					//倒计时结束
					this._game.showTips("很遗憾，尚有玩家未同意解散房间");
					this._isTouPiaoing = false;
					this.hideViewTX();
				}
			}
		}

		//更新投票倒计时时间戳
		private updateTouPiaoTime(): void {
			if (!this._mapinfo) return;
			this._tpEndTime = this._mapinfo.GetTouPiaoTime();
		}

		private _countTP: number = 0;    //投票人数
		onBattleUpdate(info) {
			if (info instanceof gamecomponent.object.BattleInfoSponsorVote) {
				if (info.state == 1) {
					//投票开始
					this._isTouPiaoing = true;
					this.showViewTX();
				} else if (info.state == 2) {
					//所有人都投了票,提前结束游戏         
					if (this._isTouPiaoing) {
						if (info.tpResult == 1) {
							this._game.showTips("解散投票通过，本局结束后房间解散");
						} else if (info.tpResult == 2) {
							this._game.showTips("很遗憾，尚有玩家未同意解散房间");
						}
						this._isTouPiaoing = false;
						this.hideViewTX();
					}
				}
			} else {
				if (!this._isTouPiaoing) return;
				let idx = info.SeatIndex;
				let unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
				if (unit) {
					let name = unit.GetName();
					let strTip: string;
					if (info.tpType == 1) strTip = StringU.substitute("{0}<span color='{1}'>{2}</span>解散房间", name, TeaStyle.COLOR_GREEN, "同意");
					else if (info.tpType == 0) strTip = StringU.substitute("{0}<span color='{1}'>{2}</span>解散房间", name, TeaStyle.COLOR_RED, "拒绝");
					this._game.showTips(strTip);
					if (!this._countTP || this._countTP == undefined) this._countTP = 0;
					this._countTP++;
					this._view["clip_" + this._countTP].index = (info.tpType == 1 ? 1 : 0);
					if (unit == this._game.sceneObjectMgr.mainUnit) {
						//自己投过票了
						this._view.btn_ok.visible = false;
						this._view.btn_refuse.visible = false;
						this._view.img_bg.height = 102;
					}
				}
			}
		}

		//发起投降显示
		private _isShowTX: boolean = false;
		showViewTX(): void {
			this._isShowTX = true;
			this._view.right = -335;
			this.initViewTX();
			Laya.Tween.clearAll(this._view);
			Laya.Tween.to(this._view, { right: 10 }, 800, null);
		}

		//发起投降UI排列
		initViewTX(): void {
			this._view.btn_ok.visible = true;
			this._view.btn_refuse.visible = true;
			this._view.img_bg.height = 142;
			for (let i = 1; i < 6; i++) {
				this._view["clip_" + i].index = 2;
				this._view["clip_" + i].width = 56;
				this._view["clip_" + i].height = 19;
				this._view["clip_" + i].x = 140 + (i - 1) * 60;
				this._view["clip_" + i].visible = true;
			}
			//根据游戏人数判断
			switch (this._count) {
				case 3:
					this._view.clip_5.visible = false;
					this._view.clip_4.visible = false;
					for (let i = 1; i < 4; i++) {
						this._view["clip_" + i].x = 160 + (i - 1) * 95;
						this._view["clip_" + i].width = 85;
					}
					break
				case 4:
					this._view.clip_5.visible = false;
					for (let i = 1; i < 5; i++) {
						this._view["clip_" + i].x = 142 + (i - 1) * 77;
						this._view["clip_" + i].width = 70;
					}
					break
				case 5:

					break
			}

		}

		//发起投降隐藏
		hideViewTX(): void {
			this._isShowTX = false;
			this._view.right = 10;
			Laya.Tween.clearAll(this._view);
			Laya.Tween.to(this._view, { right: -335 }, 800, null);
		}

		protected onBtnClickHandle(e: LEvent): void {
			if (!this._game) return;
			this._game.uiRoot.btnTween(e.currentTarget)
			switch (e.currentTarget) {


				default:
					break;
			}
		}

		public destroy(): void {
			if (this._game && this._game.sceneObjectMgr) {
				this._game.sceneObjectMgr.off(RniuniuMapInfo.EVENT_TOUPIAO_TIME, this, this.updateTouPiaoTime);
				this.btn_ok.off(LEvent.CLICK, this, this.onBtnClickHandle);
				this.btn_refuse.off(LEvent.CLICK, this, this.onBtnClickHandle);
			}

			super.destroy();
		}
	}
}