/*
name 设置
	**/
module gametongyong.page {
	export class SettingPage extends game.gui.base.Page {
		private _viewUI: ui.game_ui.tongyong.SheZhiUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = false;
			this._asset = [
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
			];
		}

		private _gmTxt: Laya.Label;
		protected init(): void {
			this._viewUI = this.createView('game_ui.tongyong.SheZhiUI');
			this.addChild(this._viewUI);

			this._viewUI.box_app.visible = WebConfig.appVersion;
			this._viewUI.txt_appbbh.text = WebConfig.appVersion;
			this._viewUI.box_v.visible = Vesion["_defaultVesion"];
			this._viewUI.txt_bbh.text = Vesion["_defaultVesion"];
			this._viewUI.btn_clear.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_change.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_check.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			if (WebConfig.gameGmOpen) {
				if (!this._gmTxt) {
					this._gmTxt = new Laya.Label();
					this._gmTxt.fontSize = 14;
					this._gmTxt.align = "center";
					this._gmTxt.bold = true;
					this._gmTxt.color = "#00ff47";
					this._gmTxt.text = "点我变魔术";
					this._gmTxt.left = this._gmTxt.top = 20;
					this.addChild(this._gmTxt);
					this._gmTxt.on(LEvent.CLICK, this, this.onMouseGMHandle);
				}
			} else {
				if (this._gmTxt) {
					this._gmTxt.removeSelf();
					this._gmTxt.destroy();
					this._gmTxt = null;
				}
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.hslider0.min = 0;//设置 this.hslider0 最低位置值。
			this._viewUI.hslider0.max = 1;//设置 this.hslider0 最高位置值。
			this._viewUI.hslider0.tick = 0.1;//设置 this.hslider0 刻度值。
			this._viewUI.hslider0.value = Laya.SoundManager.soundVolume;//设置 this.hslider0 当前位置值。
			this._viewUI.hslider0.changeHandler = new Handler(this, this.onChange0);//设置 this.hslider0 位置变化处理器。

			this._viewUI.hslider1.min = 0;//设置 this.hslider0 最低位置值。
			this._viewUI.hslider1.max = 1;//设置 this.hslider0 最高位置值。
			this._viewUI.hslider1.tick = 0.1;//设置 this.hslider0 刻度值。
			this._viewUI.hslider1.value = Laya.SoundManager.musicVolume;//设置 this.hslider0 当前位置值。
			this._viewUI.hslider1.changeHandler = new Handler(this, this.onChange1);//设置 this.hslider0 位置变化处理器。

		}



		private onChange0(value: number) {
			// Laya.SoundManager.soundVolume = value;
			Laya.SoundManager.setSoundVolume(value);
			localSetItem("soundVolume", value.toString());

		}
		private onChange1(value: number) {
			Laya.SoundManager.setMusicVolume(value);
			localSetItem("musicVolume", value.toString());
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.btn_check.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.btn_clear.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.btn_change.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				WebConfig.update_appVersion = null;
				super.close();

			}
		}
		protected onBtnTweenEnd(e: any, target: any) {
			switch (target) {
				case this._viewUI.btn_clear://清理缓存
					TongyongPageDef.ins.alertRecharge("清理缓存将删除本地数据对此造成的损失，本平台将不承担任何责任。为了您的虚拟财产安全,我们强烈建议您先绑定帐号信息!\n是否清除缓存？", () => {
						localClear();
						this._game.showTips("清理缓存成功!")
					}, null, false)
					break;
				case this._viewUI.btn_change://切换账号
					this.close();
					break;
				case this._viewUI.btn_check://检查更新
					this._game.checkClientVesion(true);
					break;
			}
		}


		private onMouseGMHandle() {
			let page = this._game.uiRoot.top.getPage(DatingPageDef.PAGE_GM);
			if (!page)
				this._game.uiRoot.top.open(DatingPageDef.PAGE_GM);
		}
	}


}


