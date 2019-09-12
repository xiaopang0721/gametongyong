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
		static get PAGE_TONGYONG_QIFU_ANI() {//祈福动画
			this.ins;
			return this.GAME_NAME + "3";
		};
		static get PAGE_TONGYONG_QIFU() {//祈福界面
			this.ins;
			return this.GAME_NAME + "4";
		};
		static get PAGE_TONGYONG_SETTING() {//设置界面
			this.ins;
			return this.GAME_NAME + "5";
		};
		static get PAGE_TONGYONG_RECORD() {//战绩界面
			this.ins;
			return this.GAME_NAME + "6";
		};
		static get PAGE_TONGYONG_TIPS() {//提示界面
			this.ins;
			return this.GAME_NAME + "7";
		};
		static get PAGE_TONGYONG_MATCH() {//匹配界面
			this.ins;
			return this.GAME_NAME + "8";
		};
		static get PAGE_TONGYONG_SETTLE() {//百人场结算界面
			this.ins;
			return this.GAME_NAME + "9";
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
			View.regViewRuntime("ui.nqp.game_ui.tongyong.HudUI", TongyongHudNqpPage)
			PageDef._pageClassMap[this.PAGE_TONGYONG_RECORD] = RecordPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_TIPS] = TipsPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_BATTER_INFO] = PaiJuInfoPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_CLOSE_TIPS] = CloseTipsPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_QIFU_ANI] = QiFuPlayAniPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_QIFU] = QiFuPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_SETTING] = SettingPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_MATCH] = MatchPage;
			PageDef._pageClassMap[this.PAGE_TONGYONG_SETTLE] = SettlePage;
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

		/**对应皮肤资源类型 */
		static get TIPS_SKIN_STR() {
			return {
				"cz": PathGameTongyong.ui_tongyong_dating + "tu_ch.png",		//充值
				"qd": PathGameTongyong.ui_tongyong_dating + "tu_qd.png",		//确定
				"qw": PathGameTongyong.ui_tongyong_dating + "tu_qw.png",		//前往
				"title_qf": PathGameTongyong.ui_tongyong_qifu + "tu_qf.png",		//祈福标题
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
		alertRecharge(str: string, ecb: Function = null, ccb: Function = null, isOnlyOK: boolean = true, okSkin?: string, titleSkin?: string, cancleSkin?: string): void {
			this._game.uiRoot.top.close(TongyongPageDef.PAGE_TONGYONG_TIPS);
			this._game.uiRoot.top.open(TongyongPageDef.PAGE_TONGYONG_TIPS, (tip: TongyongTipsPage) => {
				tip.isOnlyOK = isOnlyOK;
				tip.setInfo(str, ecb, ccb, okSkin, titleSkin, cancleSkin);
			});
		}
	}
}