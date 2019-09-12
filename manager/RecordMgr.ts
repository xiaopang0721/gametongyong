/**
* name 
*/
module gametongyong.manager {
	export class RecordMgr extends gamecomponent.managers.BaseMgr {
		static readonly RECORD_CHANGE: string = "RecordMgr.changge";
		static readonly PAGE_MAX: number = 100;
		private static _ins: RecordMgr;
		static get ins(): RecordMgr {
			if (!this._ins) {
				this._ins = new RecordMgr();
			}
			return this._ins
		}


		public getDataInfo(index: number, first?: boolean) {
			if (index == 6 && first) {
				this._dataInfoList[index] = []
				this._totalList[index] = 0
			}
			return this._dataInfoList[index];
		}

		private _timeTotalNumArr: Array<Object>;
		get timeTotalNumArr() {
			return this._timeTotalNumArr;
		}
		isCurDayHaveNum(strDay: string): number {
			if (this._timeTotalNumArr && this._timeTotalNumArr.length > 0) {
				for (let i = 0; i < this._timeTotalNumArr.length; i++) {
					let curDayObj: any = this._timeTotalNumArr[i];
					if (curDayObj) {
						if (strDay == curDayObj.days) {
							return Number(curDayObj.num);
						}
					}
				}
			}
			return 0;
		}

		private _totalList: { [key: number]: any } = {};
		getTotalByIndex(index: number) {
			return this._totalList[index];
		}
		protected onSucessHandler(data: any) {
			if (data.code == Web_operation_fields.CLIENT_IRCODE_BETLIST) {
				if (data && data.success == 0 && this._game_id == data.game_id) {
					let index = data.msg.index;
					if (!data.msg) return;
					if (data.msg.tjlist)
						this._timeTotalNumArr = data.msg.tjlist;
					if (!this._dataInfoList[index]) this._dataInfoList[index] = {}
					if (!this._totalList[index]) this._totalList[index] = 0
					if (data.msg.list && data.msg.list.length) {
						this._dataInfoList[index][data.msg.page] = data.msg.list;
						this._totalList[index] = data.msg.all;
					}
					this.event(RecordMgr.RECORD_CHANGE, 1);
				}
			}
		}

		private _dataInfoList: { [key: number]: { [key: number]: any } } = {};
		private _game_id: string;

		get game_id() {
			return this._game_id;
		}

		set game_id(v: string) {
			this._game_id = v;
		}
		public getData(page: number, roomId: string, time: number, index: number) {
			let _roomid: number = roomId && roomId != "" ? Number(roomId) : 0;
			logd(Sync.getTimeStr3(time))
			this._game.network.call_get_bet_list(page, RecordMgr.PAGE_MAX, Sync.getYearMonthDayTime(time), this._game_id, _roomid, index);
		}
	}
}