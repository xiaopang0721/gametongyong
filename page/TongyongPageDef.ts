/**
* 通用 
*/
module gametongyong.page {
	export class TongyongPageDef extends game.gui.page.PageDef {
		static get GAME_NAME() {//战斗详情
			this.ins;
			return "tongyong";
		};
		static get PAGE_TONGYONG_BATTER_INFO() {//战斗详情
			this.ins;
			return this.GAME_NAME + "1";
		};

		static get PAGE_TONGYONG_SETTING() {//设置界面
			this.ins;
			return this.GAME_NAME + "3";
		};
		static get PAGE_TONGYONG_RECORD() {//战绩界面
			this.ins;
			return this.GAME_NAME + "4";
		};
		static get PAGE_TONGYONG_TIPS() {//提示界面
			this.ins;
			return this.GAME_NAME + "5";
		};
		static get PAGE_TONGYONG_MATCH() {//匹配界面
			this.ins;
			return this.GAME_NAME + "6";
		};
		static get PAGE_TONGYONG_SETTLE() {//百人场结算界面
			this.ins;
			return this.GAME_NAME + "7";
		};
		static get PAGE_TONGYONG_GAMESTART() {//游戏开始界面
			this.ins;
			return this.GAME_NAME + "8";
		};
		static get PAGE_TONGYONG_GAMEWIN() {//胜利界面
			this.ins;
			return this.GAME_NAME + "9";
		};
		static get PAGE_TONGYONG_ZJTS() {//庄家通杀界面
			this.ins;
			return this.GAME_NAME + "10";
		};
		static get PAGE_TONGYONG_ZJTP() {//庄家通赔界面
			this.ins;
			return this.GAME_NAME + "11";
		};
		static get PAGE_TONGYONG_BATTLE_INFO_FK() {//战斗房卡详情
			this.ins;
			return this.GAME_NAME + "12";
		};
		static get PAGE_TONGYONG_BATTLE_INFO_WX() {//战斗微信扫雷红包详情
			this.ins;
			return this.GAME_NAME + "13";
		};
		static get PAGE_TONGYONG_PLAYER_LIST() {//在线人数
			this.ins;
			return this.GAME_NAME + "14";
		};

		private static _ins: TongyongPageDef;

		static get ins(): TongyongPageDef {
			if (!this._ins) {
				this._ins = new TongyongPageDef();
				this.myinit(this.GAME_NAME);
			}
			return this._ins;
		}

		private _game: Game;
		constructor() {
			super()
			this._game = main.game;
		}

		static myinit(str: string) {
			super.myinit(str);
			View.regViewRuntime(StringU.substitute("ui.{0}.game_ui.tongyong.HudUI", WebConfig.baseplatform), TongyongHudPage);
			Page.__createChildren("game_ui.tongyong.HudUI", TongyongHudPage);
			View.regViewRuntime(StringU.substitute("ui.{0}.game_ui.tongyong.HudSpUI", WebConfig.baseplatform), TongyongSPHudPage);
			Page.__createChildren("game_ui.tongyong.HudSpUI", TongyongSPHudPage);
			PageDef._pageClassMap[this.PAGE_TONGYONG_RECORD] = RecordPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_TIPS] = TipsPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_BATTER_INFO] = PaiJuInfoPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_SETTING] = SettingPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_MATCH] = MatchPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_SETTLE] = SettlePage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_GAMESTART] = GameStartPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_GAMEWIN] = GameWinPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_ZJTS] = ZjtsPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_ZJTP] = ZjtpPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_BATTLE_INFO_FK] = PaiJuInfoFKPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_BATTLE_INFO_WX] = PaiJuInfoFKWXPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_PLAYER_LIST] = TongYongPlayerList;

			this["__needLoadAsset"] = [
				PathGameTongyong.atlas_game_ui_tongyong + "chongzhi.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "fk.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "ksyx.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "nyl.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "yq.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "qz.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "yq.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "zjtp.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "zjts.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general + "effect/bigwin.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general + "effect/fapai_1.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general + "effect/fapai_3.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general + "effect/hulu.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general + "effect/hulu1.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general + "effect/kaipai.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general + "effect/qp.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general + "effect/shaizi.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general + "effect/xipai.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general + "effect/ying.atlas",
				//公告界面
				DatingPath.atlas_dating_ui + "datinggg.atlas",
				//祈福界面
				DatingPath.atlas_dating_ui + "qifu.atlas",
				DatingPath.atlas_dating_ui + "dating.atlas",
				DatingPath.atlas_dating_ui + 'tongyong.atlas',
				DatingPath.atlas_dating_ui_tongyong + 'anniu.atlas',
				//不打包的图预加载
				DatingPath.ui_dating + "qifu/f_cs1.png",
				DatingPath.ui_dating + "qifu/f_gg1.png",
				DatingPath.ui_dating + "qifu/f_gsy1.png",
				DatingPath.ui_dating + "qifu/f_px1.png",
				DatingPath.ui_dating + "qifu/f_tdg1.png",
				DatingPath.ui_dating + "qifu/f_xs1.png",
			]
			if (WebConfig.needMusicPreload) {
				this["__needLoadAsset"] = this["__needLoadAsset"].concat([
				])
			}
		}

		static CZ_PLAY_DIFF_TIME = 5000;
		/**对应皮肤资源类型 */
		static get TIPS_SKIN_STR() {
			return {
				"cz": PathGameTongyong.ui_tongyong_dating + "tu_ch.png",		//充值
				"qd": PathGameTongyong.ui_tongyong_dating + "tu_qd.png",		//确定
				"qw": PathGameTongyong.ui_tongyong_dating + "tu_qw.png",		//前往
				"fh": PathGameTongyong.ui_tongyong_dating + "tu_fh.png",		//返回
				"js": PathGameTongyong.ui_tongyong_fk + "tu_js.png",			//解散
				"fqtq": PathGameTongyong.ui_tongyong_fk + "tu_fqtp.png",		//发起投票
				"wyqf": DatingPath.ui_dating + "qifu/tu_wyqf.png",	//我要祈福
				"title_qf": DatingPath.ui_dating + "qifu/tu_qf.png",	//祈福标题
				"title_ts": PathGameTongyong.ui_tongyong_dating + "tu_ts.png",	//提示标题
				"title_pdk": DatingPath.ui_dating + "fk/tit_pdk.png",	//跑的快标题
				"title_ddz": DatingPath.ui_dating + "fk/tu_fkddz.png",	//斗地主标题
				"btn_red": PathGameTongyong.ui_tongyong_dating + "btn_1da.png",	//红的按钮
			}
		}

		/**
		 * 弹窗提示
		 * @param str  字符串
		 * @param ecb 确定
		 * @param ccb 取消
		 * @param isOnlyOK  是否只有一个按钮 =》确定
		 * @param okSkin 确定皮肤
		 * @param titleSkin 标题皮肤
		 * @param cancleSkin 取消皮肤
		 */
		alertRecharge(str: string, ecb: Function = null, ccb: Function = null, isOnlyOK: boolean = true, okSkin?: string, titleSkin?: string, cancleSkin?: string, okBtnSkin?: string, cancleBtnSkin?: string
		): void {
			this._game.uiRoot.top.close(TongyongPageDef.PAGE_TONGYONG_TIPS);
			this._game.uiRoot.top.open(TongyongPageDef.PAGE_TONGYONG_TIPS, (tip: TongyongTipsPage) => {
				tip.isOnlyOK = isOnlyOK;
				tip.setInfo(str, ecb, ccb, okSkin, titleSkin, cancleSkin, okBtnSkin, cancleBtnSkin);
			});
		}
	}
}