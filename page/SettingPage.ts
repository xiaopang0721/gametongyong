/*
name 设置
	**/
module gametongyong.page {
	export class SettingPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.game_ui.tongyong.SheZhiUI;
		private _btnSound: Button;
		private _btnMusic: Button;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = false;
			this._asset = [
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
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
			this._btnSound = this.getViewComponentPos("btn_sound") as Button;
			this._btnMusic = this.getViewComponentPos("btn_music") as Button;
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.hslider0.min = 0;//设置 this.hslider0 最低位置值。
			this._viewUI.hslider0.max = 1;//设置 this.hslider0 最高位置值。
			this._viewUI.hslider0.tick = 0.01;//设置 this.hslider0 刻度值。
			this._viewUI.hslider0.changeHandler = new Handler(this, this.onChange0);//设置 this.hslider0 位置变化处理器。
			this._viewUI.hslider0.value = Laya.SoundManager.soundVolume;//设置 this.hslider0 当前位置值。


			this._viewUI.hslider1.min = 0;//设置 this.hslider0 最低位置值。
			this._viewUI.hslider1.max = 1;//设置 this.hslider0 最高位置值。
			this._viewUI.hslider1.tick = 0.01;//设置 this.hslider0 刻度值。
			this._viewUI.hslider1.changeHandler = new Handler(this, this.onChange1);//设置 this.hslider0 位置变化处理器。
			this._viewUI.hslider1.value = Laya.SoundManager.musicVolume;//设置 this.hslider0 当前位置值。			
			this._btnSound.on(LEvent.CLICK, this, this.onCheckClick);
			this._btnMusic.on(LEvent.CLICK, this, this.onCheckClick);

		}

		protected onMouseDown(e: LEvent) {
			return true;
		}

		private onCheckClick(e: LEvent): void {
			switch (e.currentTarget) {
				case this._btnSound://開關音效
					if (this._btnSound.selected) {
						let value;
						value = Number(localGetItem("soundVolumeSelf"));
						if (value <= 0) value = 1;
						this._viewUI.hslider0.value = value;
					} else {
						//记录当前的音量
						localSetItem("soundVolumeSelf", localGetItem("soundVolume"));
						this._viewUI.hslider0.value = 0;
					}
					break;
				case this._btnMusic://開關背景音樂
					if (this._btnMusic.selected) {
						let value;
						value = Number(localGetItem("musicVolumeSelf"));
						if (value <= 0) value = 1;
						this._viewUI.hslider1.value = value;
					} else {
						localSetItem("musicVolumeSelf", localGetItem("musicVolume"));
						this._viewUI.hslider1.value = 0;
					}
					break;
			}
		}



		private onChange0(value: number) {
			value = parseFloat(value.toFixed(2));
			if (value > 0) {
				this._btnSound.selected = true;
			} else {
				this._btnSound.selected = false;
			}
			Laya.SoundManager.setSoundVolume(value);
			localSetItem("soundVolume", value.toString());
		}
		private onChange1(value: number) {
			//防止出现non-finite 无限小数
			value = parseFloat(value.toFixed(2));
			if (value > 0) {
				this._btnMusic.selected = true;
			} else {
				this._btnMusic.selected = false;
			}
			;
			Laya.SoundManager.setMusicVolume(value);
			localSetItem("musicVolume", value.toString());
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.btn_check.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.btn_clear.off(LEvent.CLICK, this, this.onBtnClickWithTween);
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


