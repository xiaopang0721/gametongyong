/**
* 路径配置
*/
module gametongyong.data {
	export class Path {

		static music: string = 'music/';
		static music_money: string = Path.music +'money.mp3';
		static music_tongyong: string = Path.music +'tongyong/';

		static ui_tongyong: string = "tongyong_ui/game_ui/tongyong/";
		static ui_tongyong_touxiang: string = Path.ui_tongyong + "touxiang/";
		static ui_tongyong_pai: string = Path.ui_tongyong + "pai/";
		static ui_tongyong_general: string = Path.ui_tongyong + "general/";
		static ui_tongyong_sk: string = Path.ui_tongyong + "sk/";
		static ui_tongyong_tuichu: string = Path.ui_tongyong + "tuichu/";
		static ui_tongyong_logo: string = Path.ui_tongyong + "logo/";
		static ui_tongyong_jiaru: string = Path.ui_tongyong + "jiaru/";
		static ui_tongyong_hud: string = Path.ui_tongyong + "hud/";
		static ui_tongyong_dating: string = Path.ui_tongyong + "dating/";
		static atlas_game_ui_tongyong: string = "tongyong_res/atlas/tongyong_ui/game_ui/tongyong/";
	}
}