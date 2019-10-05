/**
* name 
*/
module gametongyong.manager {
	export class TouPiaoMgr extends gamecomponent.managers.BaseMgr {
		static readonly EVENT_TOUPIAO_TIME: string = "TouPiaoMgr.EVENT_TOUPIAO_TIME"; //投票解散
		private _count: number;
		private _jiesan: ui.nqp.game_ui.tongyong.JieSanUI;
		private _mapinfo: any;
		private _gameid: string;

		private static _ins: TouPiaoMgr;
		static get ins(): TouPiaoMgr {
			if (!this._ins) {
				this._ins = new TouPiaoMgr();
			}
			return this._ins
		}

		initUI(view: any, mapinfo: any, count: number, gameid: string) {
			this._count = count;
			this._jiesan = view;
			this._mapinfo = mapinfo;
			this._gameid = gameid;
			this._countTP = 0;
			this._game.sceneObjectMgr.on(TouPiaoMgr.EVENT_TOUPIAO_TIME, this, this.updateTouPiaoTime);//投票解散
			this._jiesan.btn_ok.on(LEvent.CLICK, this, this.onBtnClickHandle);
			this._jiesan.btn_refuse.on(LEvent.CLICK, this, this.onBtnClickHandle);
		}

		get isTouPiaoing(): boolean {
			return this._isTouPiaoing;
		}

		get touPiaoResult(): boolean {
			return this._touPiaoResult;
		}

		private _isTouPiaoing: boolean = false;      //是否投票中
		private _touPiaoResult: boolean = false;	//是否解散le
		private _tpEndTime: number = 0;  //投票倒计时结束时间
		update(diff: number) {
			if (this._isTouPiaoing && this._tpEndTime > 0) {
				let curTime = this._game.sync.serverTimeBys;
				let txTime = this._tpEndTime - curTime;
				if (txTime > 0) {
					this._jiesan.pro_time.value = txTime / 30;
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

		private _countTP: number    //投票人数
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
							this._touPiaoResult = true;
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
					if (!this._countTP) this._countTP = 0;
					this._countTP++;
					this._jiesan["clip_" + this._countTP].index = (info.tpType == 1 ? 1 : 0);
					if (unit == this._game.sceneObjectMgr.mainUnit) {
						//自己投过票了
						this._jiesan.btn_ok.visible = false;
						this._jiesan.btn_refuse.visible = false;
						this._jiesan.img_bg.height = 102;
					}
				}
			}
		}

		//发起投降显示
		private _isShowTX: boolean = false;
		showViewTX(): void {
			console.log("showViewTX");
			this._isShowTX = true;
			this._jiesan.right = -335;
			this.initViewTX();
			Laya.Tween.clearAll(this._jiesan);
			Laya.Tween.to(this._jiesan, { right: 10 }, 800, null);
		}

		//发起投降UI排列
		initViewTX(): void {
			console.log("initViewTX", this._count);
			this._jiesan.btn_ok.visible = true;
			this._jiesan.btn_refuse.visible = true;
			this._jiesan.img_bg.height = 142;
			for (let i = 1; i < 6; i++) {
				this._jiesan["clip_" + i].index = 2;
				this._jiesan["clip_" + i].width = 56;
				this._jiesan["clip_" + i].height = 19;
				this._jiesan["clip_" + i].x = 140 + (i - 1) * 60;
				this._jiesan["clip_" + i].visible = i <= this._count;
			}
			//根据游戏人数判断
			switch (this._count) {
				case 2:
					for (let i = 1; i < 3; i++) {
						this._jiesan["clip_" + i].x = 180 + (i - 1) * 150;
						this._jiesan["clip_" + i].width = 145;
					}
					break
				case 3:
					for (let i = 1; i < 4; i++) {
						this._jiesan["clip_" + i].x = 160 + (i - 1) * 95;
						this._jiesan["clip_" + i].width = 85;
					}
					break
				case 4:
					for (let i = 1; i < 5; i++) {
						this._jiesan["clip_" + i].x = 142 + (i - 1) * 77;
						this._jiesan["clip_" + i].width = 70;
					}
					break
			}

		}

		//发起投降隐藏
		hideViewTX(): void {
			this._isShowTX = false;
			this._jiesan.right = 10;
			Laya.Tween.clearAll(this._jiesan);
			Laya.Tween.to(this._jiesan, { right: -335 }, 800, null);
		}

		protected onBtnClickHandle(e: LEvent): void {
			if (!this._game) return;
			this._game.uiRoot.btnTween(e.currentTarget)
			switch (this._gameid) {
				case "rpaodekuai":
					switch (e.currentTarget) {
						case this._jiesan.btn_ok:
							this._game.network.call_rpaodekuai_vote(1);
							break
						case this._jiesan.btn_refuse:
							this._game.network.call_rpaodekuai_vote(0);
							break
					}
					break;
				case "rniuniu":
					switch (e.currentTarget) {
						case this._jiesan.btn_ok:
							this._game.network.call_rniuniu_vote(1);
							break
						case this._jiesan.btn_refuse:
							this._game.network.call_rniuniu_vote(0);
							break
					}
					break;
				case "rddz":
					switch (e.currentTarget) {
						case this._jiesan.btn_ok:
							this._game.network.call_rddz_vote(1);
							break
						case this._jiesan.btn_refuse:
							this._game.network.call_rddz_vote(0);
							break
					}
					break;
				case "rshisanshui":
					switch (e.currentTarget) {
						case this._jiesan.btn_ok:
							this._game.network.call_rshisanshui_vote(1);
							break
						case this._jiesan.btn_refuse:
							this._game.network.call_rshisanshui_vote(0);
							break
					}
					break;
			}

		}

		clear(force?: boolean): void {
			if (force) super.clear(force);
			if (this._game && this._game.sceneObjectMgr) {
				this._game.sceneObjectMgr.off(TouPiaoMgr.EVENT_TOUPIAO_TIME, this, this.updateTouPiaoTime);
			}
			this._jiesan.btn_ok.off(LEvent.CLICK, this, this.onBtnClickHandle);
			this._jiesan.btn_refuse.off(LEvent.CLICK, this, this.onBtnClickHandle);
			this._isTouPiaoing = false;
		}
	}
}