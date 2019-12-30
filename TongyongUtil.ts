module gametongyong {
    const game_config = {   //高级到低级场排序[maplv，金币额度]
        //房卡场次
        // "ddz": [[14, 1000], [13, 500], [12, 200], [11, 20]],
        // "shisanshui": [[154, 1000], [153, 500], [152, 200], [151, 20]],
        // "paodekuai": [[215, 1000], [214, 500], [213, 200], [212, 20]],
        // "majiang": [[225, 1000], [224, 500], [223, 200], [222, 20]],
        //单人场次
        "zjh": [[4, 1000], [3, 500], [2, 200], [1, 20]],
        "niuniu": [[24, 1000], [23, 500], [22, 200], [21, 20]],
        "tbniuniu": [[44, 1000], [43, 500], [42, 200], [41, 50]],
        "sangong": [[94, 1000], [93, 500], [92, 200], [91, 50]],
        "ebgang": [[114, 1000], [113, 500], [112, 100], [111, 20]],
        "paijiu": [[124, 1000], [123, 500], [122, 100], [121, 50]],
        "dezhou": [[195, 1000], [194, 400], [193, 80], [192, 20]],
        "blackjack": [[34, 2000], [33, 800], [32, 200], [31, 20]],
        "buyu": [[54, 100], [53, 10], [52, 1], [51, 0]],
        "mpniuniu": [[245, 1000], [244, 500], [243, 200], [242, 20]],
        //百人场次规则，最低不限
        "brniuniu": [[74, 1000], [73, 500], [72, 200], [71, 0]],
        "honghei": [[104, 1000], [103, 500], [102, 200], [101, 0]],
        "baijiale": [[144, 1000], [143, 500], [142, 200], [141, 0]],
        "benchibaoma": [[164, 1000], [163, 500], [162, 200], [161, 0]],
        "bairendezhou": [[174, 1000], [173, 500], [172, 200], [171, 0]],
        "toubao": [[184, 1000], [183, 500], [182, 200], [181, 0]],
        "elslp": [[235, 1000], [234, 500], [233, 200], [232, 0]],
        "longhu": [[84, 1000], [83, 500], [82, 200], [81, 0]],
        "zoo": [[205, 1000], [204, 500], [203, 200], [202, 0]],
        "wxsaoleihb": [[254, 40], [253, 10], [252, 1]],
    }
    export class TongyongUtil {
        /**
         * 根据game_id和身上金币，返回快速加入游戏的maplv
         * @param game_id 游戏名 
         * @param money 身上的金币
         */
        public static getJoinMapLv(game_id: string, money: number): number {
            let maplv: number = 0;
            let config = game_config[game_id]
            if (!config) {
                return maplv;
            }
            for (let i = 0; i < config.length; i++) {
                let conf_maplv = config[i][0];
                let conf_money = config[i][1];
                if (conf_money <= money) {
                    maplv = conf_maplv;
                    break;
                }
            }
            return maplv;
        }

        /**
         * 根据game_id和身上金币，返回快速加入游戏所需最低金币
         * @param game_id 游戏名 
         * @param money 身上的金币
         */
        public static getJoinMoney(game_id: string, money: number): number {
            let config = game_config[game_id]
            if (!config) {
                return 0;
            }
            let index = config.length - 1;
            return config[index][1];
        }

        private static _qifuNameStr: string[] = ["xs", "px", "gsy", "gg", "cs", "tdg"];
        public static getHeadUrl(headimg: string, type: number = 2): string {
            headimg = headimg ? headimg : '0';
            let hs = headimg.split('.');
            let headIdx = parseInt(hs[hs.length - 1]);
            //祈福头像
            if (headIdx >= 16 && headIdx <= 21) {
                return PathGameTongyong.ui_tongyong_touxiang + "tu_tx" + this._qifuNameStr[headIdx - 16] + ".png";
            } else {
                return PathGameTongyong.ui_tongyong_touxiang + "tu_tx" + (headimg ? headimg : 0) + ".png";
            }
        }

        public static getTouXiangKuangUrl(headKuang: string): string {
            //API不显示头像框
            if (WebConfig.enterGameLocked) {
                return "";
            } else {
                headKuang = headKuang ? headKuang : '0';
                return PathGameTongyong.ui_tongyong_touxiang + "tu_txk" + headKuang + ".png";
            }
        }

        public static getVipUrl(vip: number): string {
            //API不显示VIP
            if (WebConfig.enterGameLocked) {
                return "";
            } else {
                return PathGameTongyong.ui_tongyong_touxiang + "tu_j" + vip + ".png";
            }
        }

        public static getQFTypeImg(qf_id): string {
            //API不显示祈福
            if (WebConfig.enterGameLocked) {
                return "";
            } else {
                return StringU.substitute(PathGameTongyong.ui_tongyong_touxiang + "f_{0}2.png", this._qifuNameStr[qf_id - 1]);
            }
        }

        public static getIsHaveQiFu(player, serverTimeBys): boolean {
            //API默认非祈福状态
            if (WebConfig.enterGameLocked) {
                return false;
            }
            if (player instanceof PlayerData) {
                for (let i = 0; i < 6; i++) {
                    let qfEndTime = player.GetQiFuEndTime(i);
                    if (qfEndTime && qfEndTime > serverTimeBys) {
                        return true;
                    }
                }
            } else if (player instanceof Unit || player instanceof UnitOffline) {
                for (let i = 0; i < 6; i++) {
                    let qfEndTime = player.GetQFEndTime(i);
                    if (qfEndTime && qfEndTime > serverTimeBys) {
                        return true;
                    }
                }
            }
            return false;
        }

        //适应服务端元改分机制
        public static getMoneyChange(money: number): number {
            return money / 100;
        }
    }
}