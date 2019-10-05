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
		static get PAGE_TONGYONG_CLOSE_TIPS() {//关闭提示
			this.ins;
			return this.GAME_NAME + "2";
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
			View.regViewRuntime("ui.nqp.game_ui.tongyong.HudUI", TongyongHudNqpPage);
			PageDef._pageClassMap[this.PAGE_TONGYONG_RECORD] = RecordPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_TIPS] = TipsPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_BATTER_INFO] = PaiJuInfoPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_CLOSE_TIPS] = CloseTipsPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_SETTING] = SettingPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_MATCH] = MatchPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_SETTLE] = SettlePage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_GAMESTART] = GameStartPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_GAMEWIN] = GameWinPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_ZJTS] = ZjtsPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_ZJTP] = ZjtpPage;
		}

		/**
		 * 退出弹窗提示
		 * @param ecb 确定
		 * @param ccb 取消
		 * @param gameId 游戏id
		 */
		alertClose(gameId: string, caller: any, ecb: Function, ccb?: Function): void {
			this._game.uiRoot.top.close(TongyongPageDef.PAGE_TONGYONG_CLOSE_TIPS);
			this._game.uiRoot.top.open(TongyongPageDef.PAGE_TONGYONG_CLOSE_TIPS, (tip: CloseTipsPage) => {
				if (ccb) {
					tip.setInfo(gameId, Handler.create(caller, ecb), Handler.create(caller, ccb));
				} else {
					tip.setInfo(gameId, Handler.create(caller, ecb));
				}
			});
		}

		static CZ_PLAY_DIFF_TIME = 5000;
		/**对应皮肤资源类型 */
		static get TIPS_SKIN_STR() {
			return {
				"cz": PathGameTongyong.ui_tongyong_dating + "tu_ch.png",		//充值
				"qd": PathGameTongyong.ui_tongyong_dating + "tu_qd.png",		//确定
				"qw": PathGameTongyong.ui_tongyong_dating + "tu_qw.png",		//前往
				"js": PathGameTongyong.ui_tongyong_fk + "tu_js.png",			//解散
				"fqtq": PathGameTongyong.ui_tongyong_fk + "tu_fqtp.png",		//发起投票
				"wyqf": DatingPath.ui_dating + "qifu/tu_wyqf.png",	//我要祈福
				"title_qf": DatingPath.ui_dating + "qifu/tu_qf.png",	//祈福标题
				"title_ts": PathGameTongyong.ui_tongyong_dating + "tu_ts.png",	//提示标题
				"title_pdk": DatingPath.ui_dating + "fk/tit_pdk.png",	//跑的快标题
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