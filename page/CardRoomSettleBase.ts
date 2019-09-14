/**
* 房卡类型游戏结算页面
*/
module gametongyong.page {
    export class CardRoomSettleBase extends game.gui.base.Page {
        private _viewUI: ui.nqp.game_ui.tongyong.JieSuan_FangKaUI;
        private _isGameEnd: boolean = false;  //是否结束
        private _game_id: string;	// 当前游戏ID
        private _create_room_page_id: string;	// 创建房间

        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._isNeedBlack = true;
            this._isClickBlack = false;
            this._asset = [
                PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
            ];
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView('game_ui.tongyong.JieSuan_FangKaUI');
            this.addChild(this._viewUI);
        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();
            this._viewUI.list_settle.vScrollBarSkin = "";
            this._viewUI.list_settle.scrollBar.elasticDistance = 100;
            this._viewUI.list_settle.itemRender = this.createChildren("game_ui.tongyong.JieSuanRender2UI", ListRecordItem);
            this._viewUI.list_settle.renderHandler = new Handler(this, this.renderHandler);
            this._viewUI.list_settle.dataSource = this.dataSource[3];
            this._isGameEnd = (Number(this.dataSource[0]) + 1) == Number(this.dataSource[4]);
            this.setGameEndBtnState(this._isGameEnd);
        }

        //按钮点击
        protected onBtnTweenEnd(e: LEvent, target: any) {
            switch (target) {
                case this._viewUI.btn_create_room:
                    if (!this._create_room_page_id || this._create_room_page_id == "")
                        throw "创建房间失败,请确认游戏类型及房间信息是否正确!";
                    this._game.uiRoot.general.open(this.create_room_page_id);
                    this.close();
                    break;
                case this._viewUI.btn_back_hud:
                    this._game.sceneObjectMgr.leaveStory(true);
                    break;
                default:
                    break;
            }
        }

        // 设置最后结束时的按纽状态
        private setGameEndBtnState(isEventOn) {
            this._viewUI.lab_xinxi.visible = !this._isGameEnd;
            this._viewUI.btn_create_room.visible = this._isGameEnd;
            this._viewUI.btn_back_hud.visible = this._isGameEnd;
            if (isEventOn) {
                this._viewUI.btn_create_room.on(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back_hud.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            } else {
                this._viewUI.btn_create_room.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back_hud.off(LEvent.CLICK, this, this.onBtnClickWithTween);
            }
        }

        private renderHandler(cell: ListRecordItem, index: number) {
            if (cell) {
                cell.setData(this._game, cell.dataSource);
            }
        }

        protected onBlackSpriteClick() {
            if (!this._isGameEnd) return;
            super.onBlackSpriteClick();
        }

        //倒计时
        private _endTime = this._game.sync.serverTimeBys + 5;
        deltaUpdate(): void {
            let curTime = this._game.sync.serverTimeBys;
            let time = Math.floor(this._endTime - curTime) + 1;
            if (time > 0) {
                let str = this.dataSource[1] ? "有玩家余额不足，本轮游戏结束" : time + "S后开始第" + (this.dataSource[0] + 2) + "局，本轮共" + this.dataSource[4] + "局";
                this._viewUI.lab_xinxi.text = str;
            } else {
                // 最后一局不自动关闭
                this._isClickBlack = true;
                if (!this._isGameEnd)
                    this.close();
            }
        }

        get game_id() {
            return this._game_id;
        }

        set game_id(v: string) {
            this._game_id = v;
        }

        get create_room_page_id() {
            return this._create_room_page_id;
        }

        set create_room_page_id(v: string) {
            this._create_room_page_id = v;
        }

        public close(): void {
            this.setGameEndBtnState(false);
            super.close();
        }
    }

    class ListRecordItem extends ui.nqp.game_ui.tongyong.JieSuanRender2UI {
        private _game: Game;
        private _data: any;
        setData(game: Game, data: any) {
            this._game = game;
            this._data = data;
            this.img_bg.visible = this._data.isMain;
            this.img_banker.visible = this._data.isbanker;
            this.lab_name.text = this._data.name;
            this.lab_chip.text = this._data.point;
            this.lab_multiple.text = String(this._data.betmultiple);
            this.lab_point.text = this._data.money;
            this.lbl_totalpoint.text = String(this._data.totalPoint);
            this.lab_name.color = this._data.isMain ? TeaStyle.COLOR_JIESUAN : "#ffffff";
            this.lab_chip.color = this._data.isMain ? TeaStyle.COLOR_JIESUAN : "#ffffff";
            this.lab_multiple.color = this._data.isMain ? TeaStyle.COLOR_JIESUAN : "#ffffff";
            this.lab_point.color = parseFloat(this._data.money) >= 0 ? TeaStyle.COLOR_GREEN : TeaStyle.COLOR_RED;
            this.lbl_totalpoint.color = parseFloat(this._data.money) >= 0 ? TeaStyle.COLOR_GREEN : TeaStyle.COLOR_RED;
        }

        destroy() {
            super.destroy();
        }
    }
}