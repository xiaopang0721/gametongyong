/**
* name 
*/
module gametongyong.page {
	import PaiJuFangKaT2UI = ui.nqp.game_ui.tongyong.PaiJuFangKaT2UI
	import SaoLei_1UI = ui.nqp.game_ui.tongyong.SaoLei_1UI;
	import SaoLei_2UI = ui.nqp.game_ui.tongyong.SaoLei_2UI;
	import SaoLei_3UI = ui.nqp.game_ui.tongyong.SaoLei_3UI;
	import SaoLei_4UI = ui.nqp.game_ui.tongyong.SaoLei_4UI;

	export class PaiJuInfoFKWXPage extends game.gui.base.Page {
		//-------微信红包扫雷
		static TYPE_HB_INFO: number = 1;//红包详情
		static TYPE_PLAYER_INFO: number = 2;//个人详情
		static TYPE_TITLE_INFO: number = 3;//标题加信息

		protected _viewUI: ui.nqp.game_ui.tongyong.PaiJu_WXUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
			];
			this._isNeedBlack = true;
			this._isClickBlack = false;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.tongyong.PaiJu_WXUI');
			this.addChild(this._viewUI);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			BattleXiangQingMgr.ins.on(BattleXiangQingMgr.RECORD_CHANGE, this, this.onUpdateInfo);
			this._viewUI.panel_xq.vScrollBarSkin = "";
			this._viewUI.panel_xq.vScrollBar.elasticDistance = 100;
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

		private _h: number = 0;//组件总高度
		private _interval: number = 15;//组件间隔
		private onUpdateInfo(battleid: string, data: any) {
			if (!data || !data.length || battleid != this._battle_id) {
				this._view.txt_request.visible = true;
				return;
			}
			this._view.txt_request.visible = false;
			if (this._game_id == "wxsaoleihb") {
				let total_data = JSON.parse(data);
				let hb_data = total_data.hb_data;
				let lq_datas = total_data.lq_datas;
				this.initHBInfo(hb_data, lq_datas);
			}
		}

		private initHBInfo(hb_data, lq_datas): void {
			let maxIndex = this.searchMax(lq_datas);
			let component7: SaoLei_1UI = new SaoLei_1UI();
			let type_name = hb_data.type == 1 ? "单雷" : "多雷";
			component7.type_name.text = type_name;
			component7.bao_num.text = hb_data.bao_num;
			component7.lb_money.text = hb_data.money;
			component7.lb_ld.text = hb_data.ld_str;
			component7.lb_name.text = hb_data.name;
			component7.y = this._h;
			this._h += component7.height;
			this._viewUI.panel_xq.addChild(component7);

			let component1: PaiJuFangKaT2UI = new PaiJuFangKaT2UI();
			component1.txt_title.text = "开始抢包";
			component1.y = this._h + this._interval;
			this._h += component1.height;
			this._viewUI.panel_xq.addChild(component1);

			for (let key in lq_datas) {
				if (lq_datas.hasOwnProperty(key)) {
					let lq_data = lq_datas[key];
					//首先判断赔付，手机最佳，特殊数值奖励有没有一起
					let is_need_change = false;
					let is_max = Number(key) == maxIndex;
					if (hb_data.is_zl && lq_data.pf_money > 0 && lq_data.sp_money_num > 0 && is_max) {
						is_need_change = true
					}
					let component8: SaoLei_4UI | SaoLei_2UI;
					if (is_need_change) {
						component8 = new SaoLei_4UI();
					} else {
						component8 = new SaoLei_2UI();
					}
					component8.lb_name.text = lq_data.status == 1 ? lq_data.name : "免死金牌";
					let diffMoney = lq_data.lq_money.toFixed(2);
					component8.lb_status.text = lq_data.pf_money > 0 ? "[中雷]" : "[避雷]";
					component8.lb_status.color = lq_data.pf_money > 0 ? TeaStyle.COLOR_RED : TeaStyle.COLOR_GREEN;
					//领取金额
					component8.lb_money.text = (Number(diffMoney) > 0 ? "+" : "") + diffMoney;
					component8.lb_money.color = Number(diffMoney) > 0 ? TeaStyle.COLOR_GREEN : TeaStyle.COLOR_RED;
					//赔付金额
					if (hb_data.is_zl && lq_data.status != 2) {
						component8.box_pf.visible = Number(lq_data.pf_money) > 0;
						if (component8.box_pf.visible) {
							component8.lb_pf.text = "-" + Number(lq_data.pf_money);
						}
					} else {
						component8.box_pf.visible = false;
					}
					//手气最佳
					component8.img_max.visible = is_max && lq_data.status == 1;
					//特殊数值
					component8.lb_special.visible = lq_data.sp_money_num > 0;
					if (component8.lb_special.visible) {
						component8.lb_special.text = StringU.substitute("[特殊数值奖励:{0}]", lq_data.sp_money_num)
					}
					if (component8 instanceof SaoLei_2UI) {
						//调整位置
						if (component8.box_pf.visible) {
							if (component8.lb_special.visible) {
								component8.lb_special.x = component8.box_pf.x + component8.box_pf.width;
							} else {
								component8.img_max.x = component8.box_pf.x + component8.box_pf.width;
							}
						} else {
							//赔付不显示的情况
							if (component8.lb_special.visible) {
								component8.lb_special.x = 410;
							} else {
								component8.img_max.x = 410;
							}
						}
					} else if (component8 instanceof SaoLei_4UI) {
						//全显示的状态。不用调位置
					}
					component8.y = this._h + this._interval;
					this._h += component8.height;
					this._viewUI.panel_xq.addChild(component8);
				}
			}
			let component11: PaiJuFangKaT2UI = new PaiJuFangKaT2UI();
			component11.txt_title.text = "抢包结束";
			component11.y = this._h + this._interval;
			this._h += component11.height;
			this._viewUI.panel_xq.addChild(component11);

			let component9: SaoLei_3UI = new SaoLei_3UI();
			component9.lb_name.text = "红包领取:";
			component9.img_icon.visible = false;
			component9.lb_money.text = StringU.substitute("{0}/{1}", hb_data.lq_num, hb_data.bao_num);
			component9.y = this._h + this._interval;
			this._h += component9.height;
			this._viewUI.panel_xq.addChild(component9);


			let component111: PaiJuFangKaT2UI = new PaiJuFangKaT2UI();
			component111.txt_title.text = "红包结算";
			component111.y = this._h + this._interval;
			this._h += component111.height;
			this._viewUI.panel_xq.addChild(component111);
			//取出自己的数据
			let self_data: any = this.getSelfData(hb_data, lq_datas);	//自己的数据
			let component99: SaoLei_3UI = new SaoLei_3UI();
			component99.lb_name.text = self_data.name;
			let money = Number(self_data.money);
			component99.lb_money.text = (money > 0 ? "+" : "") + money.toFixed(2);
			component99.lb_money.color = self_data.money > 0 ? TeaStyle.COLOR_GREEN : TeaStyle.COLOR_RED;
			component99.y = this._h + this._interval;
			this._h += component99.height;
			this._viewUI.panel_xq.addChild(component99);

			//雷数奖励
			if (self_data.specialMoney > 0) {
				let component999: SaoLei_3UI = new SaoLei_3UI();
				component999.lb_name.text = self_data.isSend ? "雷数奖励:" : "特殊数值奖励:";
				component999.lb_money.text = self_data.specialMoney.toFixed(2);
				component999.y = this._h + this._interval;
				this._h += component999.height;
				this._viewUI.panel_xq.addChild(component999);
			}
		}

		private _player: PlayerData;
		private _playerInfo;
		getSelfData(hb_data, lq_datas): any {
			this._player = this._game.sceneObjectMgr.mainPlayer;
			if (!this._player) return;
			this._playerInfo = this._player.playerInfo;
			let mainUid = this._playerInfo.userid;
			let obj = {
				isSend: false,	//是否是发包人
				name: "",	//名字
				money: 0,	//最后结算钱数
				specialMoney: "",	//特殊数值钱数
			};
			if (hb_data.uid == mainUid) {
				obj.isSend = true;
				obj.name = hb_data.name;
				let settle_money = 0;	//赔付金额计算
				if (hb_data.is_zl) {
					for (let key in lq_datas) {
						if (lq_datas.hasOwnProperty(key)) {
							let lq_data = lq_datas[key];
							settle_money += lq_data.pf_money;
						}
					}
				}
				obj.money = (0 - hb_data.money + settle_money);
				obj.specialMoney = hb_data.sb_num;
			} else {
				//取玩家数据
				for (let key in lq_datas) {
					if (lq_datas.hasOwnProperty(key)) {
						let lq_data = lq_datas[key];
						if (lq_data.uid == mainUid) {
							obj.isSend = false;
							obj.name = lq_data.name;
							if (hb_data.is_zl) {
								obj.money = (lq_data.lq_money - lq_data.pf_money);
							} else {
								obj.money = lq_data.lq_money;
							}
							obj.specialMoney = lq_data.sp_money_num;
						}
					}
				}
			}
			return obj;
		}

		searchMax(lq_datas): number {
			if (!lq_datas || lq_datas.length <= 0) return;
			let maxNum = lq_datas[0].lq_money;
			let index = 0;
			for (let i = 1; i < lq_datas.length; i++) {
				let curMoney: number = lq_datas[i].lq_money;
				if (curMoney > maxNum) {
					maxNum = curMoney;
					index = i;
				}
			}
			return index;
		}

		public close(): void {
			if (this._viewUI) {
				BattleXiangQingMgr.ins.off(BattleXiangQingMgr.RECORD_CHANGE, this, this.onUpdateInfo);
			}
			super.close();
		}

	}
}