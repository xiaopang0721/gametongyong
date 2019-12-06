
module ui.ajqp.game_ui.tongyong {
    export class BaoBiaoTUI extends View {
		public img_bg:Laya.Image;
		public txt_index:Laya.Label;
		public txt_id:Laya.Label;
		public txt_time:Laya.Label;
		public txt_type:Laya.Label;
		public txt_earn:Laya.Label;
		public btn_xq:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":818,"height":40},"child":[{"type":"Box","props":{"y":0,"x":0,"width":818,"height":40},"child":[{"type":"Image","props":{"y":38,"var":"img_bg","skin":"tongyong_ui/game_ui/tongyong/general/tu_bb1.png","sizeGrid":"0,7,0,6","right":0,"left":0,"alpha":0.2}},{"type":"Label","props":{"y":9,"width":65,"var":"txt_index","left":20,"height":22,"fontSize":20,"color":"#cfc9b1","align":"center"}},{"type":"Label","props":{"y":9,"width":222,"var":"txt_id","text":"jkdlfji8798182828372819","left":105,"height":22,"fontSize":20,"color":"#cfc9b1","align":"center"}},{"type":"Label","props":{"y":9,"width":120,"var":"txt_time","left":347,"height":22,"fontSize":20,"color":"#cfc9b1","align":"center"}},{"type":"Label","props":{"y":9,"wordWrap":false,"width":99,"var":"txt_type","left":487,"height":22,"fontSize":20,"color":"#cfc9b1","align":"center"}},{"type":"Label","props":{"y":9,"width":120,"var":"txt_earn","right":81,"height":22,"fontSize":20,"color":"#069e00","align":"center"}},{"type":"Label","props":{"y":10,"wordWrap":true,"width":41,"var":"btn_xq","underline":true,"text":"详情","right":20,"height":22,"fontSize":20,"color":"#f6d9a6","bold":true,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.BaoBiaoTUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class BaoBiaoT_fkUI extends View {
		public img_bg:Laya.Image;
		public txt_index:Laya.Label;
		public txt_id:Laya.Label;
		public txt_type:Laya.Label;
		public txt_earn:Laya.Label;
		public txt_time:Laya.Label;
		public btn_xq:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":818,"height":40},"child":[{"type":"Box","props":{"y":0,"x":0,"width":818,"height":40},"child":[{"type":"Image","props":{"y":38,"var":"img_bg","skin":"tongyong_ui/game_ui/tongyong/general/tu_bb1.png","sizeGrid":"0,7,0,6","right":0,"left":0}},{"type":"Label","props":{"y":9,"width":65,"var":"txt_index","left":20,"height":22,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":9,"width":222,"var":"txt_id","text":"jkdlfji8798182828372819","left":105,"height":22,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":9,"wordWrap":false,"width":130,"var":"txt_type","left":347,"height":22,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":9,"width":99,"var":"txt_earn","left":497,"height":22,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":9,"width":120,"var":"txt_time","right":81,"height":22,"fontSize":20,"color":"#41fe69","align":"center"}},{"type":"Label","props":{"y":9,"wordWrap":true,"width":41,"var":"btn_xq","underline":true,"text":"详情","right":20,"height":22,"fontSize":20,"color":"#f6d9a6","bold":true,"align":"left"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.BaoBiaoT_fkUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class ChangCi1UI extends View {
		public txt_status0:Laya.Label;
		public txt_max0:Laya.Label;
		public btn_xinshou:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":852,"height":112},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Image","props":{"width":852,"skin":"tongyong_ui/game_ui/tongyong/hud/difen_2_1.png","sizeGrid":"0,34,0,160","height":112}},{"type":"Image","props":{"y":5,"x":157,"width":573,"skin":"tongyong_ui/game_ui/tongyong/hud/zj_k.png","sizeGrid":"10,10,10,10","height":100,"alpha":0.25}},{"type":"Label","props":{"y":23,"x":83,"width":71,"var":"txt_status0","text":"发牌中","height":16,"fontSize":15,"color":"#4eff55","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":49,"x":82,"width":119,"var":"txt_max0","text":"投注限额：200","height":16,"fontSize":17,"color":"#063800","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Button","props":{"y":4,"x":737,"var":"btn_xinshou","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_jr.png"}},{"type":"Box","props":{"y":5,"x":157,"width":573,"height":96},"child":[{"type":"Image","props":{"y":82,"width":569,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_h.png","height":1,"alpha":0.1}},{"type":"Image","props":{"y":16,"x":2,"width":569,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_h.png","height":1,"alpha":0.1}},{"type":"Image","props":{"y":49,"x":2,"width":569,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_h.png","height":1,"alpha":0.1}},{"type":"Image","props":{"y":32,"x":2,"width":569,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_h.png","height":1,"alpha":0.1}},{"type":"Image","props":{"y":65,"x":2,"width":569,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_h.png","height":1,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":2,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":21,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":40,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":59,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":78,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":97,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":116,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":135,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":154,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":173,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":192,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":211,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":230,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":249,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":268,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":287,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":306,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":325,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":344,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":363,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":382,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":401,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":420,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":439,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":458,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":477,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":496,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":515,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":534,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}},{"type":"Image","props":{"y":0,"x":553,"width":18,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bai.png","height":98,"alpha":0.1}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.ChangCi1UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class DaoJiShiUI extends View {
		public ani1:Laya.FrameAnimation;
		public txt_time:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":70,"height":70},"child":[{"type":"Box","props":{"y":58,"x":36,"width":64,"rotation":0,"height":66,"anchorY":0.8,"anchorX":0.5},"compId":2,"child":[{"type":"Image","props":{"y":-6,"x":0,"width":80,"skin":"tongyong_ui/game_ui/tongyong/general/daojishi.png","scaleY":0.8,"scaleX":0.8,"height":90}},{"type":"Image","props":{"y":30,"x":32,"width":80,"visible":false,"skin":"tongyong_ui/game_ui/tongyong/general/daojishi.png","scaleY":0.8,"scaleX":0.8,"height":90,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":6},{"type":"Image","props":{"y":32,"x":32,"visible":false,"skin":"tongyong_ui/game_ui/tongyong/general/daojishi1.png","scaleY":0.5,"scaleX":0.5,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":5},{"type":"Text","props":{"y":19,"x":11,"wordWrap":true,"width":43,"var":"txt_time","text":"00","strokeColor":"#ffffff","stroke":2,"leading":6,"height":26,"fontSize":24,"color":"#8e0200","bold":true,"align":"center"}}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":58,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":58,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":8}],"x":[{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":2},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":4},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":6},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":10},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":12},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":14},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":16},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":18},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":20},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":22}],"rotation":[{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":2},{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":4},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":6},{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":8},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":10},{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":12},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":14},{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":16},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":18},{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":20},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":24}]}},{"target":5,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":5,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":5,"key":"visible","index":1}],"scaleY":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":24}],"scaleX":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":24}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"rotation","index":24}],"blendMode":[{"value":"lighter","tweenMethod":"linearNone","tween":false,"target":5,"key":"blendMode","index":0},{"value":"lighter","tweenMethod":"linearNone","tween":false,"target":5,"key":"blendMode","index":1}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":1},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":24}]}},{"target":6,"keyframes":{"y":[{"value":30,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":0},{"value":30,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"y","index":1}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":1}],"scaleY":[{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":1},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":24}],"scaleX":[{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":1},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":24}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":1},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":24}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.DaoJiShiUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong.effect {
    export class ChongzhiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":121,"height":125},"child":[{"type":"Box","props":{"y":63,"x":61,"width":121,"height":125,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-1,"x":0,"skin":"tongyong_ui/game_ui/tongyong/chongzhi/tu_x.png"}},{"type":"Image","props":{"y":52,"x":51,"skin":"tongyong_ui/game_ui/tongyong/chongzhi/10000.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":15},{"type":"Box","props":{"y":63,"x":61,"width":300,"height":300,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":140,"x":141,"skin":"tongyong_ui/game_ui/tongyong/chongzhi/tu_p.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":194,"x":94,"skin":"tongyong_ui/game_ui/tongyong/chongzhi/tu_sg.png","rotation":-45,"renderType":"mask","anchorY":0.5,"anchorX":0.5},"compId":13}]},{"type":"Image","props":{"y":102,"x":58,"skin":"tongyong_ui/game_ui/tongyong/chongzhi/tu_z.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":31,"x":77,"skin":"tongyong_ui/game_ui/tongyong/chongzhi/tu_liangdian.png","anchorY":0.5,"anchorX":0.5},"compId":14}]}],"animations":[{"nodes":[{"target":13,"keyframes":{"y":[{"value":194,"tweenMethod":"linearNone","tween":true,"target":13,"key":"y","index":0},{"value":86,"tweenMethod":"linearNone","tween":true,"target":13,"key":"y","index":78}],"x":[{"value":94,"tweenMethod":"linearNone","tween":true,"target":13,"key":"x","index":0},{"value":190,"tweenMethod":"linearNone","tween":true,"target":13,"key":"x","index":78}]}},{"target":14,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":14,"key":"rotation","index":0},{"value":94,"tweenMethod":"linearNone","tween":true,"target":14,"key":"rotation","index":78}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":14,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":14,"key":"alpha","index":53},{"value":1,"tweenMethod":"linearNone","tween":true,"target":14,"key":"alpha","index":61},{"value":0,"tweenMethod":"linearNone","tween":true,"target":14,"key":"alpha","index":78}]}},{"target":15,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10000.png","tweenMethod":"linearNone","tween":false,"target":15,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10001.png","tweenMethod":"linearNone","tween":false,"target":15,"key":"skin","index":2},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10002.png","tweenMethod":"linearNone","tween":false,"target":15,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10003.png","tweenMethod":"linearNone","tween":false,"target":15,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10004.png","tweenMethod":"linearNone","tween":false,"target":15,"key":"skin","index":8},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10005.png","tweenMethod":"linearNone","tween":false,"target":15,"key":"skin","index":10},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10006.png","tweenMethod":"linearNone","tween":false,"target":15,"key":"skin","index":12},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10007.png","tweenMethod":"linearNone","tween":false,"target":15,"key":"skin","index":14},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10008.png","tweenMethod":"linearNone","tween":false,"target":15,"key":"skin","index":16},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10009.png","tweenMethod":"linearNone","tween":false,"target":15,"key":"skin","index":18},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10010.png","tweenMethod":"linearNone","tween":false,"target":15,"key":"skin","index":20},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10011.png","tweenMethod":"linearNone","tween":false,"target":15,"key":"skin","index":22},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10012.png","tweenMethod":"linearNone","tween":false,"target":15,"key":"skin","index":24},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10013.png","tweenMethod":"linearNone","tween":false,"target":15,"key":"skin","index":26},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10014.png","tweenMethod":"linearNone","tween":false,"target":15,"key":"skin","index":28},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10015.png","tweenMethod":"linearNone","tween":false,"target":15,"key":"skin","index":30},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10016.png","tweenMethod":"linearNone","tween":false,"target":15,"key":"skin","index":32},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10017.png","tweenMethod":"linearNone","tween":false,"target":15,"key":"skin","index":34},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10018.png","tweenMethod":"linearNone","tween":false,"target":15,"key":"skin","index":36},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10019.png","tweenMethod":"linearNone","tween":false,"target":15,"key":"skin","index":38},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10000.png","tweenMethod":"linearNone","tween":false,"target":15,"label":null,"key":"skin","index":40},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10001.png","tweenMethod":"linearNone","tween":false,"target":15,"label":null,"key":"skin","index":42},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10002.png","tweenMethod":"linearNone","tween":false,"target":15,"label":null,"key":"skin","index":44},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10003.png","tweenMethod":"linearNone","tween":false,"target":15,"label":null,"key":"skin","index":46},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10004.png","tweenMethod":"linearNone","tween":false,"target":15,"label":null,"key":"skin","index":48},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10005.png","tweenMethod":"linearNone","tween":false,"target":15,"label":null,"key":"skin","index":50},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10006.png","tweenMethod":"linearNone","tween":false,"target":15,"label":null,"key":"skin","index":52},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10007.png","tweenMethod":"linearNone","tween":false,"target":15,"label":null,"key":"skin","index":54},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10008.png","tweenMethod":"linearNone","tween":false,"target":15,"label":null,"key":"skin","index":56},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10009.png","tweenMethod":"linearNone","tween":false,"target":15,"label":null,"key":"skin","index":58},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10010.png","tweenMethod":"linearNone","tween":false,"target":15,"label":null,"key":"skin","index":60},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10011.png","tweenMethod":"linearNone","tween":false,"target":15,"label":null,"key":"skin","index":62},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10012.png","tweenMethod":"linearNone","tween":false,"target":15,"label":null,"key":"skin","index":64},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10013.png","tweenMethod":"linearNone","tween":false,"target":15,"label":null,"key":"skin","index":66},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10014.png","tweenMethod":"linearNone","tween":false,"target":15,"label":null,"key":"skin","index":68},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10015.png","tweenMethod":"linearNone","tween":false,"target":15,"label":null,"key":"skin","index":70},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10016.png","tweenMethod":"linearNone","tween":false,"target":15,"label":null,"key":"skin","index":72},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10017.png","tweenMethod":"linearNone","tween":false,"target":15,"label":null,"key":"skin","index":74},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10018.png","tweenMethod":"linearNone","tween":false,"target":15,"label":null,"key":"skin","index":76},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10019.png","tweenMethod":"linearNone","tween":false,"target":15,"label":null,"key":"skin","index":78}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.ChongzhiUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong.effect {
    export class Effect_cmUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":111,"height":109},"child":[{"type":"Button","props":{"y":55,"x":56,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm0.png","labelStrokeColor":"#000000","labelStroke":3,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"50","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":51,"x":56,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm.png","scaleY":0.98,"scaleX":0.98,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":49,"x":56,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cmhr.png","scaleY":0.98,"scaleX":0.98,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":4}],"animations":[{"nodes":[{"target":4,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"rotation","index":0},{"value":-360,"tweenMethod":"linearNone","tween":true,"target":4,"key":"rotation","index":100}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.Effect_cmUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong.effect {
    export class Effect_dddUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":201,"height":31},"child":[{"type":"Box","props":{"width":201,"height":31},"child":[{"type":"Label","props":{"y":0,"x":0,"width":201,"text":"等待房主开始游戏","height":31,"fontSize":23,"font":"Microsoft YaHei","color":"#ffffff"}},{"type":"Label","props":{"y":15,"x":187,"width":6,"text":".","height":31,"fontSize":23,"font":"Microsoft YaHei","color":"#ffffff","anchorY":0.5,"anchorX":0.5},"compId":10},{"type":"Label","props":{"y":15,"x":192.5,"width":6,"text":".","height":31,"fontSize":23,"font":"Microsoft YaHei","color":"#ffffff","anchorY":0.5,"anchorX":0.5},"compId":11},{"type":"Label","props":{"y":15,"x":198,"width":6,"text":".","height":31,"fontSize":23,"font":"Microsoft YaHei","color":"#ffffff","anchorY":0.5,"anchorX":0.5},"compId":12}]}],"animations":[{"nodes":[{"target":10,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":10,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":5}]}},{"target":11,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":11,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":11,"key":"alpha","index":10}]}},{"target":12,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":12,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":12,"key":"alpha","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":12,"label":null,"key":"alpha","index":20}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.Effect_dddUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong.effect {
    export class Effect_kaishiyouxiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1280,"height":720,"anchorY":0},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":500,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":7,"child":[{"type":"Image","props":{"y":250,"x":643,"skin":"tongyong_ui/game_ui/tongyong/ksyx/tu_di.png","anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":346,"x":626.9583333333334,"skin":"tongyong_ui/game_ui/tongyong/ksyx/tu_guang.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":3},{"type":"Image","props":{"y":174,"x":639.8333333333334,"skin":"tongyong_ui/game_ui/tongyong/ksyx/tu_guang.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":4},{"type":"Image","props":{"y":260,"x":640,"skin":"tongyong_ui/game_ui/tongyong/ksyx/tu_ksyx.png","centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":5},{"type":"Image","props":{"y":261,"x":640,"skin":"tongyong_ui/game_ui/tongyong/ksyx/tu_ksyxmh.png","centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":6},{"type":"Box","props":{"y":201,"width":498,"height":119,"centerX":0,"blendMode":"lighter","alpha":0.7},"child":[{"type":"Image","props":{"y":54,"x":75.2608695652174,"skin":"tongyong_ui/game_ui/tongyong/ksyx/tu_sg.png","renderType":"mask","anchorY":0.5,"anchorX":0.5},"compId":9},{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/ksyx/tu_ksyx.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":-600,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":643,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":4},{"value":643,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":5}]}},{"target":6,"keyframes":{"x":[{"value":640,"tweenMethod":"linearNone","tween":false,"target":6,"key":"x","index":0},{"value":-500,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"x","index":5},{"value":25,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":6},{"value":475,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":7},{"value":640,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"x","index":8}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":6,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"alpha","index":8},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":13}]}},{"target":5,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":5,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":13}]}},{"target":3,"keyframes":{"x":[{"value":211,"tweenMethod":"linearNone","tween":false,"target":3,"key":"x","index":0},{"value":107,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":6},{"value":524,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":10},{"value":877,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":34}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"alpha","index":18},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":34}]}},{"target":4,"keyframes":{"x":[{"value":1044,"tweenMethod":"linearNone","tween":false,"target":4,"key":"x","index":0},{"value":1130,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":6},{"value":725,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":10},{"value":433,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":34}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":4,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"alpha","index":18},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":34}]}},{"target":7,"keyframes":{"x":[{"value":640,"tweenMethod":"linearNone","tween":false,"target":7,"key":"x","index":0},{"value":640,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"x","index":34},{"value":1900,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":39}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":7,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":34},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":39}]}},{"target":9,"keyframes":{"x":[{"value":-63,"tweenMethod":"linearNone","tween":false,"target":9,"key":"x","index":0},{"value":-63,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":11},{"value":467,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":34}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.Effect_kaishiyouxiUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong.effect {
    export class Effect_nylUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":434,"height":400},"child":[{"type":"Image","props":{"y":198,"x":206,"width":434,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_guang.png","scaleY":1,"scaleX":0.9,"rotation":0,"pivotY":186,"pivotX":215,"height":373,"alpha":1},"compId":8},{"type":"Image","props":{"y":179,"x":213,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_hg.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":7},{"type":"Image","props":{"y":215,"x":218,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_kuang.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":6},{"type":"Image","props":{"y":190,"x":214,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_nyl.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":5},{"type":"Image","props":{"y":180,"x":214,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_nylh.png","scaleY":0,"scaleX":0,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":13}],"animations":[{"nodes":[{"target":5,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":0},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":10}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":0},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":10}]}},{"target":8,"keyframes":{"y":[{"value":198,"tweenMethod":"linearNone","tween":false,"target":8,"key":"y","index":0},{"value":202,"tweenMethod":"linearNone","tween":true,"target":8,"key":"y","index":4}],"x":[{"value":206,"tweenMethod":"linearNone","tween":false,"target":8,"key":"x","index":0},{"value":217,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":4}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":8,"key":"scaleY","index":0},{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":4},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":10}],"scaleX":[{"value":0.9,"tweenMethod":"linearNone","tween":false,"target":8,"key":"scaleX","index":0},{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":7},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":10}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"rotation","index":0},{"value":20,"tweenMethod":"linearNone","tween":true,"target":8,"key":"rotation","index":60}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":8,"key":"alpha","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":10}]}},{"target":6,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":6},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":16}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":6},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":16}]}},{"target":7,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":12}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":12}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":6}]}},{"target":13,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":13,"key":"scaleY","index":0},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":13,"key":"scaleY","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":13,"key":"scaleY","index":10},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":13,"key":"scaleY","index":28}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":13,"key":"scaleX","index":0},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":13,"key":"scaleX","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":13,"key":"scaleX","index":10},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":13,"key":"scaleX","index":28}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":13,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":13,"key":"alpha","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":13,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":13,"key":"alpha","index":28}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.Effect_nylUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong.effect {
    export class Effect_qifubsUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":73,"height":83},"child":[{"type":"Box","props":{"y":0,"x":15,"width":73,"rotation":0.6000000000000001,"height":83,"anchorY":0,"anchorX":0.2},"compId":4,"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"tongyong_ui/game_ui/tongyong/general/tu_qifu.png"}},{"type":"Image","props":{"y":38,"x":27,"skin":"tongyong_ui/game_ui/tongyong/general/tu_pd.png","rotation":0.8999999999999999,"anchorY":0.1,"anchorX":0.1},"compId":3}]}],"animations":[{"nodes":[{"target":3,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":0},{"value":3,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":30},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"rotation","index":60}]}},{"target":4,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"rotation","index":0},{"value":2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"rotation","index":30},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"rotation","index":60}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.Effect_qifubsUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong.effect {
    export class Effect_qzcgUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":106,"height":144},"child":[{"type":"Box","props":{"width":106,"height":144},"child":[{"type":"Image","props":{"y":72,"x":53,"skin":"tongyong_ui/game_ui/tongyong/qz/k.png","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":8},{"type":"Image","props":{"y":0,"x":101,"skin":"tongyong_ui/game_ui/tongyong/qz/qz10000.png","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":6},{"type":"Image","props":{"y":72,"x":53,"skin":"tongyong_ui/game_ui/tongyong/qz/ss10000.png","anchorY":0.5,"anchorX":0.5},"compId":9}]}],"animations":[{"nodes":[{"target":6,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/qz/qz10000.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10000.png","tweenMethod":"linearNone","tween":false,"target":6,"label":null,"key":"skin","index":12},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10001.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":14},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10002.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":16},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10003.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":18},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10004.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":20},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10005.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":22},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10006.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":24},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10007.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":26},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10008.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":28},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10009.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":30}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":6,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":12}]}},{"target":8,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":8,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":13}]}},{"target":9,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/qz/ss10000.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/qz/ss10001.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":2},{"value":"tongyong_ui/game_ui/tongyong/qz/ss10002.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/qz/ss10003.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/qz/ss10004.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":8},{"value":"tongyong_ui/game_ui/tongyong/qz/ss10005.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":10},{"value":"tongyong_ui/game_ui/tongyong/qz/ss10006.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":12}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":12},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":13}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.Effect_qzcgUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong.effect {
    export class Effect_yqUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":106,"height":144},"child":[{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":4},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":5},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1.1199999999999999,"scaleX":1.1199999999999999,"anchorY":0.5,"anchorX":0.5,"alpha":0.5714285714285714},"compId":6},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5,"alpha":0.6666666666666666},"compId":7},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":8},{"type":"Image","props":{"y":73,"x":52,"skin":"tongyong_ui/game_ui/tongyong/yq/xx10013.png","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":24}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":5},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":14}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":5},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":14}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":6},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":14}]}},{"target":4,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":10},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":10},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":20}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":4,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":12},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":20}]}},{"target":5,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":5,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":16},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":27}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":5,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":16},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":27}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":5,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":12},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":18},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":26}]}},{"target":6,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":6,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":22},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":32}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":6,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":22},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":32}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":6,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":19},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":25},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":32}]}},{"target":7,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":7,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":28},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":38}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":7,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":28},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":38}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":7,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":24},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":30},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":38}]}},{"target":8,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":8,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":34},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":44}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":8,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":34},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":44}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":8,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":30},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":36},{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":44}]}},{"target":24,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/yq/xx10000.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10001.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10002.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10003.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":8},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10004.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":10},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10005.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":12},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10006.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":14},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10007.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":16},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10008.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":18},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10009.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":20},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10010.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":22},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10011.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":24},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10012.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":26},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10013.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":28},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10014.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":30},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10015.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":32},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10016.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":34},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10017.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":36},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10018.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":38},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10019.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":40}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":24,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":24,"key":"alpha","index":2},{"value":0,"tweenMethod":"linearNone","tween":true,"target":24,"key":"alpha","index":41}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.Effect_yqUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong.effect {
    export class Effect_zjtpUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":339,"x":640,"width":618,"height":249,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":6,"child":[{"type":"Image","props":{"y":110,"x":306,"skin":"tongyong_ui/game_ui/tongyong/zjtp/tu_di.png","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":2},{"type":"Box","props":{"y":109,"x":325,"width":600,"height":200,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":5,"child":[{"type":"Image","props":{"y":84,"x":59,"skin":"tongyong_ui/game_ui/tongyong/zjtp/tu_zx.png"},"compId":4},{"type":"Image","props":{"y":6,"x":81,"skin":"tongyong_ui/game_ui/tongyong/zjtp/tu_zs.png"},"compId":3}]},{"type":"Image","props":{"y":113,"x":326,"skin":"tongyong_ui/game_ui/tongyong/zjtp/tu_zt.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":7},{"type":"Image","props":{"y":-63,"x":1577,"skin":"tongyong_ui/game_ui/tongyong/zjtp/tu_xian.png","rotation":83,"blendMode":"lighter","alpha":0},"compId":8}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":-700,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":306,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":5}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":5}]}},{"target":7,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":7,"key":"scaleY","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":11}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":7,"key":"scaleX","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":11}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":7,"key":"alpha","index":0},{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":11}]}},{"target":5,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":5,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":10}]}},{"target":8,"keyframes":{"y":[{"value":-63,"tweenMethod":"linearNone","tween":false,"target":8,"key":"y","index":0},{"value":187,"tweenMethod":"linearNone","tween":true,"target":8,"key":"y","index":10},{"value":30.75,"tweenMethod":"linearNone","tween":true,"target":8,"key":"y","index":13},{"value":-63,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"y","index":25}],"x":[{"value":1577,"tweenMethod":"linearNone","tween":false,"target":8,"key":"x","index":0},{"value":-358,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":10},{"value":851.375,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":13},{"value":1577,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"x","index":25}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":8,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":8,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":25}]}},{"target":3,"keyframes":{"y":[{"value":6,"tweenMethod":"linearNone","tween":false,"target":3,"key":"y","index":0},{"value":6,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"y","index":15},{"value":-9,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":19},{"value":-12,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":25}],"x":[{"value":81,"tweenMethod":"linearNone","tween":false,"target":3,"key":"x","index":0},{"value":81,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"x","index":15},{"value":110,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":19},{"value":113,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":25}]}},{"target":4,"keyframes":{"y":[{"value":84,"tweenMethod":"linearNone","tween":false,"target":4,"key":"y","index":0},{"value":84,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":15},{"value":90,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":19},{"value":92,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":25}],"x":[{"value":59,"tweenMethod":"linearNone","tween":false,"target":4,"key":"x","index":0},{"value":59,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"x","index":15},{"value":53,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":19},{"value":51,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":25}]}},{"target":6,"keyframes":{"y":[{"value":339,"tweenMethod":"linearNone","tween":false,"target":6,"key":"y","index":0},{"value":339,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"y","index":25},{"value":282,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":31}],"x":[{"value":640,"tweenMethod":"linearNone","tween":false,"target":6,"key":"x","index":0},{"value":640,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"x","index":25},{"value":1600,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":31}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":6,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":25},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":31}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.Effect_zjtpUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong.effect {
    export class Effect_zjtsUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":325,"x":674,"width":654,"height":213,"anchorY":0.5,"anchorX":0.5},"compId":6,"child":[{"type":"Image","props":{"y":107,"x":300,"skin":"tongyong_ui/game_ui/tongyong/zjts/tu_di.png","anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":101,"x":300,"skin":"tongyong_ui/game_ui/tongyong/zjts/tu_zjts.png","anchorY":0.5,"anchorX":0.5},"compId":3},{"type":"Image","props":{"y":101,"x":300,"skin":"tongyong_ui/game_ui/tongyong/zjts/tu_zjtsmh.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":4},{"type":"Image","props":{"y":-453,"x":406,"skin":"tongyong_ui/game_ui/tongyong/zjts/tu_xian.png","scaleY":0.8,"scaleX":0.8,"rotation":12,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":5}]}],"animations":[{"nodes":[{"target":4,"keyframes":{"x":[{"value":275,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":0}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleY","index":0},{"value":1.7,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"scaleY","index":15},{"value":1.625,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":18},{"value":2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":23}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleX","index":0},{"value":1.7,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"scaleX","index":15},{"value":1.3125,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":18},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":23}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":4,"key":"alpha","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":6},{"value":0,"tweenMethod":"linearNone","tween":false,"target":4,"key":"alpha","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":15},{"value":0.375,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":18},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":23}]}},{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":6}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":6}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":false,"target":3,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":10}]}},{"target":5,"keyframes":{"y":[{"value":-258,"tweenMethod":"linearNone","tween":false,"target":5,"key":"y","index":0},{"value":-299,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"y","index":11},{"value":246,"tweenMethod":"linearNone","tween":true,"target":5,"key":"y","index":16},{"value":594,"tweenMethod":"linearNone","tween":true,"target":5,"key":"y","index":25}],"x":[{"value":753,"tweenMethod":"linearNone","tween":false,"target":5,"key":"x","index":0},{"value":375,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"x","index":11},{"value":261,"tweenMethod":"linearNone","tween":true,"target":5,"key":"x","index":16},{"value":199,"tweenMethod":"linearNone","tween":true,"target":5,"key":"x","index":25}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":5,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"alpha","index":16},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":25}]}},{"target":2,"keyframes":{"x":[{"value":-700,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":300,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":5}]}},{"target":6,"keyframes":{"y":[{"value":325,"tweenMethod":"linearNone","tween":false,"target":6,"key":"y","index":0},{"value":325,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"y","index":25},{"value":273,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":31}],"x":[{"value":674,"tweenMethod":"linearNone","tween":false,"target":6,"key":"x","index":0},{"value":674,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"x","index":25},{"value":1634,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":31}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":6,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"alpha","index":25},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":31}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.Effect_zjtsUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong.effect {
    export class Loading1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":132,"height":142},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/logo/tu_di.png"}},{"type":"Image","props":{"y":124,"x":88,"skin":"tongyong_ui/game_ui/tongyong/logo/tu_dian.png"},"compId":18},{"type":"Image","props":{"y":107,"x":17,"skin":"tongyong_ui/game_ui/tongyong/logo/tu_gxz.png"}},{"type":"Image","props":{"y":54,"width":88,"skin":"tongyong_ui/game_ui/tongyong/logo/tu_qq.png","pivotY":41,"pivotX":42,"height":86,"centerX":1},"compId":20},{"type":"Image","props":{"y":124,"x":100,"skin":"tongyong_ui/game_ui/tongyong/logo/tu_dian.png"},"compId":21},{"type":"Image","props":{"y":124,"x":112,"skin":"tongyong_ui/game_ui/tongyong/logo/tu_dian.png"},"compId":22}],"animations":[{"nodes":[{"target":20,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":20,"key":"rotation","index":0},{"value":720,"tweenMethod":"linearNone","tween":true,"target":20,"key":"rotation","index":80}]}},{"target":21,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":21,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":21,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":false,"target":21,"key":"alpha","index":20},{"value":1,"tweenMethod":"linearNone","tween":false,"target":21,"label":null,"key":"alpha","index":30},{"value":0,"tweenMethod":"linearNone","tween":false,"target":21,"label":null,"key":"alpha","index":40},{"value":1,"tweenMethod":"linearNone","tween":false,"target":21,"label":null,"key":"alpha","index":50},{"value":0,"tweenMethod":"linearNone","tween":false,"target":21,"label":null,"key":"alpha","index":60},{"value":1,"tweenMethod":"linearNone","tween":false,"target":21,"label":null,"key":"alpha","index":70},{"value":0,"tweenMethod":"linearNone","tween":true,"target":21,"label":null,"key":"alpha","index":80}]}},{"target":22,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":22,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":22,"key":"alpha","index":15},{"value":0,"tweenMethod":"linearNone","tween":false,"target":22,"key":"alpha","index":20},{"value":1,"tweenMethod":"linearNone","tween":false,"target":22,"label":null,"key":"alpha","index":35},{"value":0,"tweenMethod":"linearNone","tween":false,"target":22,"label":null,"key":"alpha","index":40},{"value":1,"tweenMethod":"linearNone","tween":false,"target":22,"label":null,"key":"alpha","index":55},{"value":0,"tweenMethod":"linearNone","tween":false,"target":22,"label":null,"key":"alpha","index":60},{"value":1,"tweenMethod":"linearNone","tween":false,"target":22,"label":null,"key":"alpha","index":75},{"value":0,"tweenMethod":"linearNone","tween":true,"target":22,"label":null,"key":"alpha","index":80}]}},{"target":18,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":18,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":18,"key":"alpha","index":5},{"value":0,"tweenMethod":"linearNone","tween":false,"target":18,"key":"alpha","index":20},{"value":1,"tweenMethod":"linearNone","tween":false,"target":18,"label":null,"key":"alpha","index":25},{"value":0,"tweenMethod":"linearNone","tween":false,"target":18,"label":null,"key":"alpha","index":40},{"value":1,"tweenMethod":"linearNone","tween":false,"target":18,"label":null,"key":"alpha","index":45},{"value":0,"tweenMethod":"linearNone","tween":false,"target":18,"label":null,"key":"alpha","index":60},{"value":1,"tweenMethod":"linearNone","tween":false,"target":18,"label":null,"key":"alpha","index":65},{"value":0,"tweenMethod":"linearNone","tween":true,"target":18,"label":null,"key":"alpha","index":80}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.Loading1UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong.effect {
    export class ShaiZiUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_dice1:Laya.Image;
		public img_dice2:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":240,"height":320},"child":[{"type":"Box","props":{"y":222,"x":124,"width":239,"rotation":0,"height":312,"anchorY":0.7,"anchorX":0.5},"compId":9,"child":[{"type":"Image","props":{"y":212,"x":115.5,"skin":"tongyong_ui/game_ui/tongyong/general/effect/hulu/tu_hulu2.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":203,"x":73.5,"var":"img_dice1","skin":"tongyong_ui/game_ui/tongyong/general/effect/shaizi/shaizi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":203,"x":151.5,"var":"img_dice2","skin":"tongyong_ui/game_ui/tongyong/general/effect/shaizi/shaizi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-179,"x":521,"skin":"tongyong_ui/game_ui/tongyong/general/effect/hulu/tu_hulu1.png","scaleY":0.8,"scaleX":0.8,"rotation":45,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":7}]}],"animations":[{"nodes":[{"target":9,"keyframes":{"y":[{"value":222,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":0},{"value":222,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"y","index":48},{"value":182,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":52},{"value":222,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":56}],"x":[{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"key":"x","index":0},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"key":"x","index":4},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":8},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"x","index":12},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":16},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"x","index":20},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":24},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"x","index":28},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":32},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"x","index":36},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":40},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"x","index":44},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":48},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"x","index":52},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":56}],"rotation":[{"value":10,"tweenMethod":"bounceInOut","tween":true,"target":9,"key":"rotation","index":0},{"value":-10,"tweenMethod":"bounceInOut","tween":true,"target":9,"key":"rotation","index":4},{"value":15,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":8},{"value":-15,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":12},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":16},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":20},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":24},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":28},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":32},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":36},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":40},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":44},{"value":15,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":48},{"value":0,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":52},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":56}]}},{"target":7,"keyframes":{"y":[{"value":154,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":0},{"value":154,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"y","index":60},{"value":-179,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":68}],"x":[{"value":115.5,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":0},{"value":115.5,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"x","index":60},{"value":521,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":68}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"rotation","index":60},{"value":46,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":63},{"value":45,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":68}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":60},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":63},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":68}]}}],"name":"ani1","id":1,"frameRate":30,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.ShaiZiUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong.effect {
    export class ShaiZiThreeUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_dice0:Laya.Image;
		public img_dice1:Laya.Image;
		public img_dice2:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":240,"height":320},"child":[{"type":"Box","props":{"y":222,"x":124,"width":239,"rotation":0,"height":312,"anchorY":0.7,"anchorX":0.5},"compId":9,"child":[{"type":"Image","props":{"y":212,"x":115.5,"skin":"tongyong_ui/game_ui/tongyong/general/effect/hulu1/tu_hulu2.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":160,"x":62,"var":"img_dice0","skin":"tongyong_ui/game_ui/tongyong/general/effect/shaizi/shaizi1.png"}},{"type":"Image","props":{"y":189,"x":154.5,"var":"img_dice1","skin":"tongyong_ui/game_ui/tongyong/general/effect/shaizi/shaizi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":229,"x":113,"var":"img_dice2","skin":"tongyong_ui/game_ui/tongyong/general/effect/shaizi/shaizi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":125,"x":115,"skin":"tongyong_ui/game_ui/tongyong/general/effect/hulu1/tu_hulu1.png","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":7}]}],"animations":[{"nodes":[{"target":9,"keyframes":{"rotation":[{"value":10,"tweenMethod":"bounceInOut","tween":true,"target":9,"key":"rotation","index":0},{"value":-10,"tweenMethod":"bounceInOut","tween":true,"target":9,"key":"rotation","index":4},{"value":15,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":8},{"value":-15,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":12},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":16},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":20},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":24},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":28},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":32},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":36},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":40},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":44},{"value":15,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":48},{"value":0,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":52},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":56}]}},{"target":7,"keyframes":{"y":[{"value":122,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":0},{"value":122,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"y","index":62},{"value":-179,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":73}],"x":[{"value":115.5,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":0},{"value":115.5,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"x","index":62},{"value":521,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":73}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"rotation","index":62},{"value":46,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":67},{"value":45,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":73}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":62},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":67},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":73}]}}],"name":"ani1","id":1,"frameRate":30,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.ShaiZiThreeUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong.effect {
    export class SuiJiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":153,"height":184},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10000.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10000.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":1},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":2},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":5},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":7},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":8},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":9},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10010.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":10},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10011.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":11},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10012.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":12},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10013.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":13},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10014.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":14},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10015.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":15},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10016.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":16},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10017.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":17},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10018.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":18},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10019.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":19}]}}],"name":"ani1","id":1,"frameRate":15,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.SuiJiUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong.effect {
    export class TongPeiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":309.5,"x":617.5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tong.png","anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":322.5,"x":609.5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tong2.png","anchorY":0.5,"anchorX":0.5},"compId":3}]}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":48}],"scaleX":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":48}]}},{"target":2,"keyframes":{"scaleY":[{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":48}],"scaleX":[{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":48}],"alpha":[{"value":0,"tweenMethod":"backInOut","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"alpha","index":48}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.TongPeiUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong.effect {
    export class TongPei1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":193,"x":303,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tong.png","anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":206,"x":295,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tong3.png","anchorY":0.5,"anchorX":0.5},"compId":3}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":48}],"scaleX":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":48}]}},{"target":2,"keyframes":{"scaleY":[{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":48}],"scaleX":[{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":48}],"alpha":[{"value":0,"tweenMethod":"backInOut","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"alpha","index":48}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.TongPei1UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong.effect {
    export class TongShaUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":309.5,"x":617.5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tong.png","scaleY":1,"scaleX":1,"gray":true,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":2},{"type":"Image","props":{"y":322.5,"x":609.5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tong1.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":3}]}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":48}],"scaleX":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":48}]}},{"target":2,"keyframes":{"scaleY":[{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":48}],"scaleX":[{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":48}],"alpha":[{"value":0,"tweenMethod":"backInOut","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"alpha","index":48}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.TongShaUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong.effect {
    export class TongSha1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":193,"x":303,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tong.png","scaleY":0.4905973856296296,"scaleX":0.4905973856296296,"gray":true,"anchorY":0.5,"anchorX":0.5,"alpha":-0.01880522874074074},"compId":2},{"type":"Image","props":{"y":206,"x":295,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tong4.png","scaleY":2.0188052287407405,"scaleX":2.0188052287407405,"anchorY":0.5,"anchorX":0.5},"compId":3}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":48}],"scaleX":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":48}]}},{"target":2,"keyframes":{"scaleY":[{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":48}],"scaleX":[{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":48}],"alpha":[{"value":0,"tweenMethod":"backInOut","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"alpha","index":48}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.TongSha1UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong.effect {
    export class XiaoKuangUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":647,"height":451,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"width":647,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_kuang.png","sizeGrid":"157,28,34,28","height":451},"child":[{"type":"Image","props":{"y":14,"x":9,"width":314,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_wzd2.png","height":62}},{"type":"Image","props":{"y":14,"x":637,"width":314,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_wzd2.png","scaleX":-1,"height":62}}]},{"type":"Image","props":{"y":11,"x":239,"width":363,"top":11,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_wzd.png","sizeGrid":"0,152,0,174","height":59,"centerX":1}},{"type":"Image","props":{"y":-2,"x":150,"top":-2,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_zs.png","centerX":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.XiaoKuangUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong.effect {
    export class XiPaiUI extends View {
		public ani_xipai:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":320,"height":186},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10009.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":1},{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":2},{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":5},{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":7},{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":8}]}}],"name":"ani_xipai","id":1,"frameRate":12,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.XiPaiUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong.effect {
    export class YingUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":185,"height":230},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/effect/ying/10000.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10000.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":1},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":2},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":5},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":7},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":8},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":9},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10010.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":10}]}}],"name":"ani1","id":1,"frameRate":15,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.YingUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong.effect {
    export class ZhongKuangUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":842,"height":533,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"width":842,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_kuang.png","sizeGrid":"157,28,34,28","height":533},"child":[{"type":"Image","props":{"y":70,"x":12,"width":172,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_and.png","sizeGrid":"0,0,20,0","height":450}},{"type":"Image","props":{"y":14,"x":9,"width":412,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_wzd2.png","height":62}},{"type":"Image","props":{"y":14,"x":833,"width":412,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_wzd2.png","scaleX":-1,"height":62}}]},{"type":"Image","props":{"width":411,"top":11,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_wzd.png","sizeGrid":"0,152,0,174","height":57,"centerX":0}},{"type":"Image","props":{"top":-2,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_zs.png","centerX":0}},{"type":"Image","props":{"y":259,"x":182,"width":650,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_kuangdi.png","height":262}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.ZhongKuangUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong.effect {
    export class ZhongKuang0UI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":10,"x":10,"width":842,"height":533,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"width":842,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_kuang.png","sizeGrid":"157,28,34,28","height":533},"child":[{"type":"Image","props":{"y":14,"x":9,"width":412,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_wzd2.png","height":62}},{"type":"Image","props":{"y":14,"x":833,"width":412,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_wzd2.png","scaleX":-1,"height":62}}]},{"type":"Image","props":{"width":411,"top":11,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_wzd.png","sizeGrid":"0,152,0,174","height":57,"centerX":0}},{"type":"Image","props":{"top":-2,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_zs.png","centerX":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.ZhongKuang0UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong.effect {
    export class ZhuangLUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_banker:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":106,"height":144},"child":[{"type":"Image","props":{"y":72,"x":53,"visible":true,"skin":"tongyong_ui/game_ui/tongyong/general/tu_zhuangk.png","anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":10,"x":97,"visible":true,"var":"img_banker","skin":"tongyong_ui/game_ui/tongyong/general/tu_zhuang.png","anchorY":0.5,"anchorX":0.5},"compId":3}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":1.5,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":10}],"scaleX":[{"value":1.5,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":10}]}},{"target":3,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":11}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":0.2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleY","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":15}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":0.2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleX","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":15}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.ZhuangLUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong.effect {
    export class ZhuangRUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_banker:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":106,"height":144},"child":[{"type":"Image","props":{"y":72,"x":53,"visible":true,"skin":"tongyong_ui/game_ui/tongyong/general/tu_zhuangk.png","anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":10,"x":97,"visible":true,"var":"img_banker","skin":"tongyong_ui/game_ui/tongyong/general/tu_zhuang.png","anchorY":0.5,"anchorX":0.5},"compId":3}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":1.5,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":10}],"scaleX":[{"value":1.5,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":10}]}},{"target":3,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":11}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":0.2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleY","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":15}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":0.2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleX","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":15}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.ZhuangRUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class FangKa_GoUI extends View {
		public btn_start:Laya.Button;
		public btn_invite:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Button","props":{"y":657,"width":220,"var":"btn_start","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_2.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"centerX":200,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":18,"skin":"tongyong_ui/game_ui/tongyong/fk/tu_ksyx.png","centerX":0}}]},{"type":"Button","props":{"width":220,"var":"btn_invite","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_3.png","sizeGrid":"20,30,20,30","labelStrokeColor":"#9d4725","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"centerY":297,"centerX":-202,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":18,"skin":"tongyong_ui/game_ui/tongyong/fk/tu_wx.png","centerX":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.FangKa_GoUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class GuangUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":600},"child":[{"type":"Image","props":{"y":298,"x":303,"skin":"tongyong_ui/game_ui/tongyong/general/tu_gs1.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":9}],"animations":[{"nodes":[{"target":9,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":100}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.GuangUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class HudUI extends View {
		public ani1:Laya.FrameAnimation;
		public box_left:Laya.Box;
		public btn_help:Laya.Button;
		public btn_record:Laya.Button;
		public btn_back:Laya.Box;
		public box_btn_top_left:Laya.Box;
		public btn_gren:Laya.Image;
		public img_txk:Laya.Image;
		public txt_name:Laya.Label;
		public btn_vip:Laya.Button;
		public clip_vip:Laya.Clip;
		public btn_fresh:Laya.Box;
		public clip_money:Laya.Clip;
		public btn_add:Laya.Button;
		public btn_ksks:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":-1,"right":-1,"left":-1},"compId":133,"child":[{"type":"Image","props":{"top":-1,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_d1.png","sizeGrid":"0,400,0,0","right":0,"left":-1}},{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/dating/tu_1_1.png","left":0}},{"type":"Box","props":{"width":468,"var":"box_left","top":0,"right":1,"height":78,"anchorX":1},"child":[{"type":"Button","props":{"y":39,"x":318,"var":"btn_help","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_bangzhu.png","name":"item1","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":40,"x":232,"var":"btn_record","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_zhanji.png","name":"item0","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":39,"width":103,"var":"btn_back","right":15,"height":92,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":46,"x":52,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_fanhui.png","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"x":0,"width":714,"var":"box_btn_top_left","top":-1,"height":93,"anchorY":0,"anchorX":0},"child":[{"type":"Image","props":{"y":29,"x":92,"width":252,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_k1ss.png","height":37}},{"type":"Image","props":{"y":46,"width":72,"var":"btn_gren","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","left":35,"height":72,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":46,"x":70,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk11.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":47,"x":225,"width":230,"var":"txt_name","valign":"middle","height":35,"fontSize":30,"color":"#f5fbb1","anchorY":0.5,"anchorX":0.5,"align":"left"}},{"type":"Button","props":{"y":49,"x":338,"var":"btn_vip","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_top.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":0,"x":12,"width":39,"height":36},"child":[{"type":"Clip","props":{"y":18,"x":20,"var":"clip_vip","skin":"tongyong_ui/game_ui/tongyong/dating/clip_vip.png","index":0,"clipX":10,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":16,"x":418,"width":350,"var":"btn_fresh","height":62},"child":[{"type":"Image","props":{"y":12.5,"x":28,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_k1ss.png"}},{"type":"Clip","props":{"y":19.5,"x":69,"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/dating/clip_money1.png","index":9,"clipX":11}},{"type":"Image","props":{"y":25.5,"x":43,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":30,"x":250,"var":"btn_add","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sx.png","anchorY":0.5,"anchorX":0.5}}]}]}]},{"type":"Box","props":{"right":0,"left":-1,"bottom":-1},"compId":134,"child":[{"type":"Image","props":{"x":3,"width":640,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_d2.png","bottom":0}},{"type":"Image","props":{"x":1283,"width":641,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_d2.png","scaleX":-1,"bottom":0}}]},{"type":"Button","props":{"width":279,"var":"btn_ksks","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_an.png","height":92,"centerY":303,"centerX":0},"child":[{"type":"Image","props":{"y":20,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_ksks.png","centerX":0}}]}]}],"animations":[{"nodes":[{"target":133,"keyframes":{"top":[{"value":-85,"tweenMethod":"linearNone","tween":true,"target":133,"key":"top","index":0},{"value":-22,"tweenMethod":"linearNone","tween":true,"target":133,"key":"top","index":4},{"value":-1,"tweenMethod":"linearNone","tween":false,"target":133,"label":null,"key":"top","index":8}]}},{"target":134,"keyframes":{"bottom":[{"value":-67,"tweenMethod":"linearNone","tween":true,"target":134,"key":"bottom","index":0},{"value":-17.5,"tweenMethod":"linearNone","tween":true,"target":134,"key":"bottom","index":4},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":134,"key":"bottom","index":8}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.HudUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class jiangtouUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":40,"height":30},"child":[{"type":"Image","props":{"y":0,"x":30,"skin":"tongyong_ui/game_ui/tongyong/general/tu_jiantou.png","rotation":90},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":30,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":40,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":5},{"value":30,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.jiangtouUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class JieSanUI extends View {
		public img_bg:Laya.Image;
		public btn_refuse:Laya.Button;
		public btn_ok:Laya.Button;
		public clip_1:Laya.Clip;
		public clip_2:Laya.Clip;
		public clip_3:Laya.Clip;
		public clip_4:Laya.Clip;
		public clip_5:Laya.Clip;
		public pro_time:Laya.ProgressBar;

        public static  uiView:any ={"type":"View","props":{"width":320,"height":150},"child":[{"type":"Box","props":{"width":322,"height":145,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":3,"width":317,"var":"img_bg","skin":"tongyong_ui/game_ui/tongyong/dating/tu_sj.png","sizeGrid":"10,10,13,12","height":142}},{"type":"Image","props":{"y":39,"x":45,"skin":"tongyong_ui/game_ui/tongyong/fk/tu_yi.png"}},{"type":"Image","props":{"y":3,"x":103,"width":117,"skin":"tongyong_ui/game_ui/tongyong/fk/tu_fq.png","height":34}},{"type":"Button","props":{"y":110,"var":"btn_refuse","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/fk/btn_jj.png","right":11,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":110,"var":"btn_ok","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/fk/btn_ty.png","left":18,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":56,"x":168,"width":526,"height":32,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"y":15,"x":139,"var":"clip_1","skin":"tongyong_ui/game_ui/tongyong/fk/clip_jiesan.png","index":2,"clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":15,"x":199,"var":"clip_2","skin":"tongyong_ui/game_ui/tongyong/fk/clip_jiesan.png","index":2,"clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":15,"x":260,"var":"clip_3","skin":"tongyong_ui/game_ui/tongyong/fk/clip_jiesan.png","index":2,"clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":15,"x":320,"var":"clip_4","skin":"tongyong_ui/game_ui/tongyong/fk/clip_jiesan.png","index":2,"clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":15,"x":380,"var":"clip_5","skin":"tongyong_ui/game_ui/tongyong/fk/clip_jiesan.png","index":2,"clipY":3,"anchorY":0.5,"anchorX":0.5}}]},{"type":"ProgressBar","props":{"y":69,"x":18,"var":"pro_time","skin":"tongyong_ui/game_ui/tongyong/fk/progress.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.JieSanUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class JieSuanUI extends View {
		public txt_name:laya.display.Text;
		public img_head:Laya.Image;
		public txt_benefit:laya.display.Text;
		public txt_bet:laya.display.Text;
		public txt_result:laya.display.Text;
		public img_txk:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"JieSuan_gr","props":{"centerY":0,"centerX":0,"runtime":"ui.ajqp.game_ui.tongyong.JieSuan_grUI"}},{"type":"Box","props":{"y":404,"x":623,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":102,"x":67,"wordWrap":true,"width":150,"var":"txt_name","text":"玩家名字六字","leading":6,"height":28,"fontSize":22,"color":"#f6f6fd","bold":true,"align":"center"}},{"type":"Image","props":{"y":53,"x":139,"skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":53,"x":139,"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":62,"x":331,"width":167,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Text","props":{"y":67,"x":233,"wordWrap":true,"width":102,"text":"我的输赢：","leading":6,"height":20,"fontSize":20,"color":"#fffbb5","bold":true,"align":"center"}},{"type":"Text","props":{"y":68,"x":341,"wordWrap":true,"width":145,"var":"txt_benefit","text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#d4d2ff","align":"left"}},{"type":"Image","props":{"y":18,"x":331,"width":167,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Text","props":{"y":23,"x":233,"wordWrap":true,"width":102,"text":"我的下注：","leading":6,"height":20,"fontSize":20,"color":"#fffbb5","bold":true,"align":"center"}},{"type":"Text","props":{"y":24,"x":341,"wordWrap":true,"width":145,"var":"txt_bet","text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#d4d2ff","align":"left"}},{"type":"Text","props":{"y":172,"x":8,"width":552,"var":"txt_result","text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#f6925a","align":"center"}},{"type":"Image","props":{"y":53,"x":139,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk0.png","anchorY":0.5,"anchorX":0.5}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.JieSuan_grUI",ui.ajqp.game_ui.tongyong.JieSuan_grUI);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.JieSuanUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class JieSuanRenderUI extends View {
		public img_bg:Laya.Image;
		public lab_name:Laya.Label;
		public lab_point:Laya.Label;
		public lab_multiple:Laya.Label;
		public lab_money:Laya.Label;
		public img_banker:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":599,"height":38},"child":[{"type":"Box","props":{"y":0,"x":0,"width":599,"renderType":"render","height":38},"child":[{"type":"Image","props":{"y":0,"x":1,"width":569,"var":"img_bg","skin":"tongyong_ui/game_ui/tongyong/general/anniu/tu_6.png","scaleX":1.05,"height":38}},{"type":"Label","props":{"y":20,"x":122,"width":140,"var":"lab_name","text":"G_77987987","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":20,"x":234,"width":63,"var":"lab_point","text":"100","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":20,"x":362,"width":63,"var":"lab_multiple","text":"110","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":20,"x":502,"width":100,"var":"lab_money","text":"10830","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":19,"x":30,"var":"img_banker","skin":"tongyong_ui/game_ui/tongyong/general/tu_zhuang.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.JieSuanRenderUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class JieSuanRender1UI extends View {
		public img_bg:Laya.Image;
		public lab_name:Laya.Label;
		public lab_point:Laya.Label;
		public lab_betmultiple:Laya.Label;
		public lab_money:Laya.Label;
		public img_banker:Laya.Image;
		public lab_cardtype:Laya.Label;
		public lab_bankermultiple:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":725,"height":38},"child":[{"type":"Box","props":{"y":0,"x":0,"width":725,"renderType":"render","height":38},"child":[{"type":"Image","props":{"y":0,"x":1,"width":725,"var":"img_bg","skin":"tongyong_ui/game_ui/tongyong/general/anniu/tu_6.png","scaleX":1,"height":38}},{"type":"Label","props":{"y":21,"x":118,"width":141,"var":"lab_name","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":21,"x":327,"width":63,"var":"lab_point","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":21,"x":526,"width":63,"var":"lab_betmultiple","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":21,"x":626,"width":100,"var":"lab_money","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":19,"x":30,"var":"img_banker","skin":"tongyong_ui/game_ui/tongyong/general/tu_zhuang.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":21,"x":240,"width":63,"var":"lab_cardtype","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":21,"x":427,"width":63,"var":"lab_bankermultiple","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.JieSuanRender1UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class JieSuanRender2UI extends View {
		public img_bg:Laya.Image;
		public lab_name:Laya.Label;
		public lab_chip:Laya.Label;
		public lab_multiple:Laya.Label;
		public lab_point:Laya.Label;
		public img_banker:Laya.Image;
		public lbl_totalpoint:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1200,"height":38},"child":[{"type":"Box","props":{"y":0,"x":0,"width":1200,"renderType":"render","height":38},"child":[{"type":"Image","props":{"y":34,"x":-1,"var":"img_bg","skin":"tongyong_ui/game_ui/tongyong/hud/tu_di.png"}},{"type":"Label","props":{"y":18,"x":248,"width":140,"var":"lab_name","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":18,"x":444,"width":127,"var":"lab_chip","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":18,"x":626,"width":112,"var":"lab_multiple","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":18,"x":794,"width":122,"var":"lab_point","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":20,"x":134,"var":"img_banker","skin":"tongyong_ui/game_ui/tongyong/general/tu_zhuang.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":18,"x":971,"width":127,"var":"lbl_totalpoint","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.JieSuanRender2UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class JieSuanRender3UI extends View {
		public img_bg:Laya.Image;
		public lab_name:Laya.Label;
		public lab_point:Laya.Label;
		public lbl_totalpoint:Laya.Label;
		public box_cards:Laya.Box;
		public img_card0:Laya.Image;
		public img_card1:Laya.Image;
		public img_card2:Laya.Image;
		public img_card3:Laya.Image;
		public img_card4:Laya.Image;
		public img_card5:Laya.Image;
		public img_card6:Laya.Image;
		public img_card7:Laya.Image;
		public img_card8:Laya.Image;
		public img_card9:Laya.Image;
		public img_card10:Laya.Image;
		public img_card11:Laya.Image;
		public img_card12:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":900,"height":68},"child":[{"type":"Box","props":{"y":0,"x":0,"width":900,"renderType":"render","height":68},"child":[{"type":"Image","props":{"y":0,"x":1,"width":900,"var":"img_bg","skin":"tongyong_ui/game_ui/tongyong/general/anniu/tu_6.png","sizeGrid":"5,0,4,0","height":68}},{"type":"Label","props":{"y":33,"x":89,"width":140,"var":"lab_name","leading":6,"height":23,"fontSize":20,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":33,"x":723,"width":79,"var":"lab_point","leading":6,"height":23,"fontSize":20,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":33,"x":831,"width":82,"var":"lbl_totalpoint","leading":6,"height":23,"fontSize":20,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Box","props":{"y":4,"x":189,"width":479,"var":"box_cards","height":61},"child":[{"type":"Image","props":{"y":0,"x":1,"var":"img_card0","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}},{"type":"Image","props":{"y":0,"x":32,"var":"img_card1","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}},{"type":"Image","props":{"y":0,"x":63,"var":"img_card2","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}},{"type":"Image","props":{"y":0,"x":122,"var":"img_card3","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}},{"type":"Image","props":{"y":0,"x":152,"var":"img_card4","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}},{"type":"Image","props":{"y":0,"x":183,"var":"img_card5","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}},{"type":"Image","props":{"y":0,"x":213,"var":"img_card6","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}},{"type":"Image","props":{"y":0,"x":243,"var":"img_card7","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}},{"type":"Image","props":{"y":0,"x":301,"var":"img_card8","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}},{"type":"Image","props":{"y":0,"x":332,"var":"img_card9","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}},{"type":"Image","props":{"y":0,"x":362,"var":"img_card10","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}},{"type":"Image","props":{"y":0,"x":393,"var":"img_card11","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}},{"type":"Image","props":{"y":0,"x":423,"var":"img_card12","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.JieSuanRender3UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class JieSuan_1UI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":0,"x":0,"width":1280,"height":720},"child":[{"type":"Image","props":{"width":1280,"skin":"tongyong_ui/game_ui/tongyong/js/game_popout_bg.png","sizeGrid":"89,49,72,39","height":438,"centerY":0,"centerX":0}},{"type":"Image","props":{"width":624,"skin":"tongyong_ui/game_ui/tongyong/js/jiesuan_js.png","height":280,"centerY":-264,"centerX":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.JieSuan_1UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class JieSuan_FangKaUI extends View {
		public btn_create_room:Laya.Button;
		public btn_back_hud:Laya.Button;
		public lab_xinxi:Laya.Label;
		public list_settle:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"JieSuan_1","props":{"runtime":"ui.ajqp.game_ui.tongyong.JieSuan_1UI"}},{"type":"Button","props":{"y":547,"x":434,"width":200,"visible":false,"var":"btn_create_room","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_2.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9c231e","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#9c231e","labelBold":false,"label":"创建房间","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":547,"x":891,"width":200,"visible":false,"var":"btn_back_hud","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_3.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#24510c","labelStroke":2,"labelSize":26,"labelPadding":"-5","labelColors":"#27530e","labelBold":false,"label":"返回大厅","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"centerY":3,"centerX":0},"child":[{"type":"Label","props":{"y":278,"x":619,"wordWrap":true,"width":495,"var":"lab_xinxi","text":"5S后开始第1局，本轮共5局","leading":6,"height":23,"fontSize":20,"color":"#eceaff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":14,"x":251,"wordWrap":true,"width":63,"text":"昵称","leading":6,"height":28,"fontSize":24,"color":"#f1cd82","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":14,"x":443,"wordWrap":true,"width":63,"text":"底分","leading":6,"height":28,"fontSize":24,"color":"#f1cd82","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":14,"x":626,"wordWrap":true,"width":63,"text":"倍数","leading":6,"height":28,"fontSize":24,"color":"#f1cd82","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":14,"x":791,"wordWrap":true,"width":63,"text":"积分","leading":6,"height":28,"fontSize":24,"color":"#f1cd82","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":14,"x":968,"wordWrap":true,"width":132,"text":"累计积分","leading":6,"height":28,"fontSize":24,"color":"#f1cd82","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"List","props":{"y":34,"x":0,"width":1221,"var":"list_settle","spaceY":8,"repeatY":5,"height":213},"child":[{"type":"JieSuanRender2","props":{"name":"render","runtime":"ui.ajqp.game_ui.tongyong.JieSuanRender2UI"}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.JieSuan_1UI",ui.ajqp.game_ui.tongyong.JieSuan_1UI);
			View.regComponent("ui.ajqp.game_ui.tongyong.JieSuanRender2UI",ui.ajqp.game_ui.tongyong.JieSuanRender2UI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.JieSuan_FangKaUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class JieSuan_grUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":0,"x":0,"width":1280,"height":720},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/js/game_popout_bg.png","centerY":0,"centerX":0}},{"type":"Image","props":{"y":46,"x":415,"skin":"tongyong_ui/game_ui/tongyong/js/jiesuan_js.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.JieSuan_grUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class Loading1UI extends View {
		public ani1:Laya.FrameAnimation;
		public ani:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":80,"height":80},"child":[{"type":"Box","props":{"width":80,"var":"ani","height":80,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/logo/load0000.png","rotation":75.78947368421052,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":3},{"type":"Image","props":{"width":101,"skin":"tongyong_ui/game_ui/tongyong/logo/load0001.png","height":108,"centerY":3,"centerX":3,"anchorY":0.5,"anchorX":0.5},"compId":2}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/logo/load0001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/logo/load0002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":1},{"value":"tongyong_ui/game_ui/tongyong/logo/load0003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":2},{"value":"tongyong_ui/game_ui/tongyong/logo/load0004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"tongyong_ui/game_ui/tongyong/logo/load0005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/logo/load0006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":5},{"value":"tongyong_ui/game_ui/tongyong/logo/load0007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/logo/load0008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":7},{"value":"tongyong_ui/game_ui/tongyong/logo/load0009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":8},{"value":"tongyong_ui/game_ui/tongyong/logo/load0010.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":9},{"value":"tongyong_ui/game_ui/tongyong/logo/load0011.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":10},{"value":"tongyong_ui/game_ui/tongyong/logo/load0012.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":11},{"value":"tongyong_ui/game_ui/tongyong/logo/load0013.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":12},{"value":"tongyong_ui/game_ui/tongyong/logo/load0014.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":13},{"value":"tongyong_ui/game_ui/tongyong/logo/load0015.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":14},{"value":"tongyong_ui/game_ui/tongyong/logo/load0016.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":15},{"value":"tongyong_ui/game_ui/tongyong/logo/load0017.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":16},{"value":"tongyong_ui/game_ui/tongyong/logo/load0018.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":17},{"value":"tongyong_ui/game_ui/tongyong/logo/load0019.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":18},{"value":"tongyong_ui/game_ui/tongyong/logo/load0020.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":19}]}},{"target":3,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":19}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.Loading1UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class PaiJuFangKaT1UI extends View {
		public txt_title:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":710,"height":32},"child":[{"type":"Box","props":{"y":0,"x":0,"width":710,"height":32},"child":[{"type":"Image","props":{"y":0,"x":0,"width":358,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_dizj.png","height":32,"centerX":-172}},{"type":"Label","props":{"y":2,"x":26,"var":"txt_title","text":"第一局","fontSize":25,"color":"#ffffff","align":"left"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.PaiJuFangKaT1UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class PaiJuFangKaT2UI extends View {
		public txt_title:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":710,"height":30},"child":[{"type":"Box","props":{"y":0,"x":0,"width":710,"height":30,"centerX":0},"child":[{"type":"Label","props":{"y":3,"width":110,"var":"txt_title","text":"开始抢地主","left":10,"fontSize":22,"color":"#ffffff","bold":true,"align":"left"}},{"type":"Image","props":{"width":341,"top":16,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_hxfg.png","left":129,"alpha":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.PaiJuFangKaT2UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class PaiJuFangKaT3UI extends View {
		public txt_name:Laya.Label;
		public txt_num:Laya.Label;
		public box_cards:Laya.Box;
		public card0:Laya.Image;
		public card1:Laya.Image;
		public card2:Laya.Image;
		public card3:Laya.Image;
		public card4:Laya.Image;
		public card5:Laya.Image;
		public card6:Laya.Image;
		public card7:Laya.Image;
		public card8:Laya.Image;
		public card9:Laya.Image;
		public card10:Laya.Image;
		public card11:Laya.Image;
		public card12:Laya.Image;
		public card13:Laya.Image;
		public card14:Laya.Image;
		public card15:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":700,"height":80},"child":[{"type":"Box","props":{"width":700,"height":80},"child":[{"type":"Label","props":{"y":29,"x":50,"width":150,"var":"txt_name","text":"玩家名字六字：","fontSize":22,"color":"#ffffff","align":"right"}},{"type":"Label","props":{"y":29,"x":210,"width":68,"var":"txt_num","text":"[16张]","height":22,"fontSize":22,"color":"#00ff2a","align":"left"}},{"type":"Box","props":{"y":7,"x":281,"var":"box_cards"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":45,"var":"card0","skin":"tongyong_ui/game_ui/tongyong/pai/10.png","height":66}},{"type":"Image","props":{"y":0,"x":20,"width":45,"var":"card1","skin":"tongyong_ui/game_ui/tongyong/pai/19.png","height":66}},{"type":"Image","props":{"y":0,"x":40,"width":45,"var":"card2","skin":"tongyong_ui/game_ui/tongyong/pai/18.png","height":66}},{"type":"Image","props":{"y":0,"x":60,"width":45,"var":"card3","skin":"tongyong_ui/game_ui/tongyong/pai/11.png","height":66}},{"type":"Image","props":{"y":0,"x":80,"width":45,"var":"card4","skin":"tongyong_ui/game_ui/tongyong/pai/17.png","height":66}},{"type":"Image","props":{"y":0,"x":100,"width":45,"var":"card5","skin":"tongyong_ui/game_ui/tongyong/pai/2.png","height":66}},{"type":"Image","props":{"y":0,"x":120,"width":45,"var":"card6","skin":"tongyong_ui/game_ui/tongyong/pai/12.png","height":66}},{"type":"Image","props":{"y":0,"x":140,"width":45,"var":"card7","skin":"tongyong_ui/game_ui/tongyong/pai/13.png","height":66}},{"type":"Image","props":{"y":0,"x":160,"width":45,"var":"card8","skin":"tongyong_ui/game_ui/tongyong/pai/16.png","height":66}},{"type":"Image","props":{"y":0,"x":180,"width":45,"var":"card9","skin":"tongyong_ui/game_ui/tongyong/pai/15.png","height":66}},{"type":"Image","props":{"y":0,"x":200,"width":45,"var":"card10","skin":"tongyong_ui/game_ui/tongyong/pai/14.png","height":66}},{"type":"Image","props":{"y":0,"x":220,"width":45,"var":"card11","skin":"tongyong_ui/game_ui/tongyong/pai/14.png","height":66}},{"type":"Image","props":{"y":0,"x":240,"width":45,"var":"card12","skin":"tongyong_ui/game_ui/tongyong/pai/14.png","height":66}},{"type":"Image","props":{"y":0,"x":260,"width":45,"var":"card13","skin":"tongyong_ui/game_ui/tongyong/pai/14.png","height":66}},{"type":"Image","props":{"y":0,"x":280,"width":45,"var":"card14","skin":"tongyong_ui/game_ui/tongyong/pai/14.png","height":66}},{"type":"Image","props":{"y":0,"x":300,"width":45,"var":"card15","skin":"tongyong_ui/game_ui/tongyong/pai/14.png","height":66}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.PaiJuFangKaT3UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class PaiJuFangKaT4UI extends View {
		public txt_name:Laya.Label;
		public txt_desc:Laya.Label;
		public box_cards:Laya.Box;
		public card0:Laya.Image;
		public card1:Laya.Image;
		public card2:Laya.Image;
		public card3:Laya.Image;
		public card4:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":700,"height":85},"child":[{"type":"Box","props":{"width":700,"height":85},"child":[{"type":"Label","props":{"y":50,"x":50,"width":150,"var":"txt_name","text":"玩家名字六字：","height":22,"fontSize":22,"color":"#ffffff","align":"right"}},{"type":"Label","props":{"y":50,"x":214,"var":"txt_desc","text":"[五小牛]","fontSize":22,"color":"#00ff2a"}},{"type":"Box","props":{"y":12,"x":311,"var":"box_cards"},"child":[{"type":"Image","props":{"width":45,"var":"card0","skin":"tongyong_ui/game_ui/tongyong/pai/10.png","height":66}},{"type":"Image","props":{"x":20,"width":45,"var":"card1","skin":"tongyong_ui/game_ui/tongyong/pai/19.png","height":66}},{"type":"Image","props":{"x":40,"width":45,"var":"card2","skin":"tongyong_ui/game_ui/tongyong/pai/18.png","height":66}},{"type":"Image","props":{"x":60,"width":45,"var":"card3","skin":"tongyong_ui/game_ui/tongyong/pai/11.png","height":66}},{"type":"Image","props":{"x":80,"width":45,"var":"card4","skin":"tongyong_ui/game_ui/tongyong/pai/17.png","height":66}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.PaiJuFangKaT4UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class PaiJuFangKaT5UI extends View {
		public rule0:Laya.Label;
		public rule1:Laya.Label;
		public rule2:Laya.Label;
		public rule3:Laya.Label;
		public rule4:Laya.Label;
		public rule5:Laya.Label;
		public rule6:Laya.Label;
		public rule7:Laya.Label;
		public rule8:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":700,"height":170},"child":[{"type":"Box","props":{"width":700,"height":170,"centerX":0},"child":[{"type":"Image","props":{"y":32,"x":276,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_sxfg.png"}},{"type":"Image","props":{"y":0,"width":358,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_dizj.png","height":30}},{"type":"Label","props":{"text":"当前房间规则","fontSize":22,"color":"#ffffff","centerY":-71,"centerX":-259}},{"type":"Box","props":{"y":38,"x":49},"child":[{"type":"Label","props":{"var":"rule0","text":"人数：3","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":25,"width":78.2353515625,"var":"rule1","text":"局数：5","height":22,"fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":50,"var":"rule2","text":"玩法：16张","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":75,"var":"rule3","text":"先出：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":100,"x":1,"var":"rule4","text":"顺子：五张起","fontSize":22,"color":"#ffffff"}}]},{"type":"Box","props":{"y":43,"x":408},"child":[{"type":"Label","props":{"var":"rule5","text":"有牌必打","fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":23,"var":"rule6","text":"报单保底","fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":47,"var":"rule7","text":"四带三","fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":70,"var":"rule8","text":"3A为炸弹","fontSize":22,"color":"#00ff2a"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.PaiJuFangKaT5UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class PaiJuFangKaT6UI extends View {
		public txt_desc:Laya.Label;
		public box_boom:Laya.Box;
		public img_boom:Laya.Image;
		public txt_boom:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":700,"height":30},"child":[{"type":"Box","props":{"y":0,"x":0,"width":700,"height":30},"child":[{"type":"Label","props":{"y":3,"x":70,"width":578,"var":"txt_desc","text":"玩家名字六字：积分+99","height":22,"fontSize":22,"color":"#ffffff","align":"left"}},{"type":"Box","props":{"y":-3,"x":316,"var":"box_boom"},"child":[{"type":"Image","props":{"var":"img_boom","skin":"tongyong_ui/game_ui/tongyong/general/zhadan.png"}},{"type":"Label","props":{"y":6,"x":32,"width":50,"var":"txt_boom","text":"x2","height":22,"fontSize":22,"color":"#41fe69","align":"left"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.PaiJuFangKaT6UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class PaiJu_WXUI extends View {
		public btn_close:Laya.Button;
		public panel_xq:Laya.Panel;
		public txt_request:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":818,"height":505,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ZhongKuang0","props":{"y":0,"x":0,"centerY":0,"centerX":0,"runtime":"ui.ajqp.game_ui.tongyong.effect.ZhongKuang0UI"}},{"type":"Image","props":{"y":27,"skin":"tongyong_ui/game_ui/tongyong/hud/paiju.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":25,"x":818,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Panel","props":{"y":63,"x":10,"width":798,"var":"panel_xq","height":437}},{"type":"Label","props":{"y":267,"x":354,"var":"txt_request","text":"请求数据中","fontSize":22,"color":"#ffffff"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.effect.ZhongKuang0UI",ui.ajqp.game_ui.tongyong.effect.ZhongKuang0UI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.PaiJu_WXUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class PaiJu_xqUI extends View {
		public panel_xq:Laya.Panel;
		public txt_info:Laya.Label;
		public list_info:Laya.List;
		public txt_request:Laya.Label;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"x":10,"width":818,"height":505,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ZhongKuang0","props":{"x":-231,"centerY":0,"centerX":0,"runtime":"ui.ajqp.game_ui.tongyong.effect.ZhongKuang0UI"}},{"type":"Image","props":{"y":27,"x":409,"skin":"tongyong_ui/game_ui/tongyong/hud/paiju.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Panel","props":{"y":68,"width":818,"var":"panel_xq","height":427,"centerX":0},"child":[{"type":"Label","props":{"y":3,"x":14,"width":791,"var":"txt_info","overflow":"scroll","height":21,"color":"#ffffff","align":"left"}}]},{"type":"List","props":{"y":68,"x":0,"width":818,"var":"list_info","spaceY":8,"repeatY":13,"height":453},"child":[{"type":"PaiJu_xqT","props":{"name":"render","runtime":"ui.ajqp.game_ui.tongyong.PaiJu_xqTUI"}}]},{"type":"Label","props":{"y":267,"var":"txt_request","text":"请求数据中","fontSize":22,"color":"#ffffff","centerX":0}},{"type":"Button","props":{"y":25,"x":814,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.effect.ZhongKuang0UI",ui.ajqp.game_ui.tongyong.effect.ZhongKuang0UI);
			View.regComponent("ui.ajqp.game_ui.tongyong.PaiJu_xqTUI",ui.ajqp.game_ui.tongyong.PaiJu_xqTUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.PaiJu_xqUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class PaiJu_xqTUI extends View {
		public txt_title:Laya.Label;
		public txt_info:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":818,"height":30},"child":[{"type":"Box","props":{"y":0,"x":0,"width":818,"height":30},"child":[{"type":"Label","props":{"y":1,"x":16,"wordWrap":true,"width":115,"var":"txt_title","text":"111","leading":20,"height":28,"fontSize":22,"color":"#41fe69","align":"left"}},{"type":"Label","props":{"y":1,"x":135,"wordWrap":true,"width":683,"var":"txt_info","leading":20,"height":28,"fontSize":22,"color":"#ffffff","align":"left"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.PaiJu_xqTUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class PaiJu_xqT_fkUI extends View {
		public txt_title:Laya.Label;
		public txt_info:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":731,"height":27},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":115,"var":"txt_title","text":"111","leading":20,"height":27,"fontSize":22,"color":"#41fe69","align":"left"}},{"type":"Label","props":{"y":3,"x":128,"wordWrap":true,"width":564,"var":"txt_info","leading":20,"height":21,"fontSize":22,"color":"#ffffff","align":"left"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.PaiJu_xqT_fkUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class PaiJu_xq_fkUI extends View {
		public btn_close:Laya.Button;
		public panel_xq:Laya.Panel;
		public txt_request:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"ZhongKuang0","props":{"centerX":0,"runtime":"ui.ajqp.game_ui.tongyong.effect.ZhongKuang0UI"}},{"type":"Button","props":{"y":122,"x":1035,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":362,"width":818,"height":505,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":6,"skin":"tongyong_ui/game_ui/tongyong/hud/paiju.png","centerX":0}},{"type":"Panel","props":{"y":52,"x":0,"width":818,"var":"panel_xq","height":453}}]},{"type":"Label","props":{"y":349,"x":585,"var":"txt_request","text":"请求数据中","fontSize":22,"color":"#ffffff"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.effect.ZhongKuang0UI",ui.ajqp.game_ui.tongyong.effect.ZhongKuang0UI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.PaiJu_xq_fkUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class PaiXeiUI extends View {
		public ani_chupai:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public cards:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":110,"height":120},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/tu_paixei.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":53,"x":12,"width":47,"var":"cards","height":52},"compId":5,"child":[{"type":"Image","props":{"y":2.1999999999999993,"x":37.6,"skin":"tongyong_ui/game_ui/tongyong/general/tu_paixeip.png","renderType":"render","anchorY":0.5,"anchorX":0.5},"compId":3},{"type":"Image","props":{"y":-7,"x":43,"skin":"tongyong_ui/game_ui/tongyong/general/tu_paixeip.png","renderType":"render","anchorY":0.5,"anchorX":0.5},"compId":7},{"type":"Image","props":{"y":-14,"x":45,"skin":"tongyong_ui/game_ui/tongyong/general/tu_paixeip.png","renderType":"render","anchorY":0.5,"anchorX":0.5},"compId":6},{"type":"Image","props":{"y":8,"x":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_paixeid.png","renderType":"mask"}}]},{"type":"Image","props":{"y":45,"x":-12,"skin":"tongyong_ui/game_ui/tongyong/general/effect/fapai_1/10002.png","alpha":0},"compId":8}],"animations":[{"nodes":[{"target":3,"keyframes":{"y":[{"value":-14,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":0},{"value":13,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"y","index":5}],"x":[{"value":46,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":32,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"x","index":5}]}},{"target":6,"keyframes":{"y":[{"value":-14,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":0},{"value":-14,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"y","index":6},{"value":24,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":12}],"x":[{"value":45,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":0},{"value":45,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"x","index":6},{"value":25,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":12}]}},{"target":7,"keyframes":{"y":[{"value":-7,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":0},{"value":-7,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"y","index":3},{"value":18,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":8}],"x":[{"value":43,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":0},{"value":43,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"x","index":3},{"value":29,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":8}]}},{"target":5,"keyframes":{"var":[{"value":"cards","tweenMethod":"linearNone","tween":false,"target":5,"key":"var","index":0},{"value":"","tweenMethod":"linearNone","tween":false,"target":5,"key":"var","index":12}]}}],"name":"ani_chupai","id":1,"frameRate":24,"action":0},{"nodes":[{"target":8,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_1/10000.png","tweenMethod":"linearNone","tween":false,"target":8,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_1/10000.png","tweenMethod":"linearNone","tween":false,"target":8,"label":null,"key":"skin","index":1},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_1/10001.png","tweenMethod":"linearNone","tween":false,"target":8,"key":"skin","index":3},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_1/10002.png","tweenMethod":"linearNone","tween":false,"target":8,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_1/10000.png","tweenMethod":"linearNone","tween":false,"target":8,"key":"skin","index":5}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":1}]}}],"name":"ani2","id":2,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.PaiXeiUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class PaiXei1UI extends View {
		public ani1:Laya.FrameAnimation;
		public img_card:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":140,"height":100},"child":[{"type":"Image","props":{"y":0,"x":-1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_paixie0_2.png"}},{"type":"Image","props":{"y":-5,"x":-2,"var":"img_card","skin":"tongyong_ui/game_ui/tongyong/general/tu_paixie0_0.png"},"compId":4},{"type":"Image","props":{"y":-4,"x":-3,"skin":"tongyong_ui/game_ui/tongyong/general/tu_paixie0_1.png"}}],"animations":[{"nodes":[{"target":4,"keyframes":{"y":[{"value":-69,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":0},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":12}],"x":[{"value":11,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":0},{"value":-2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":12}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.PaiXei1UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class PiPeiUI extends View {
		public ani1:Laya.FrameAnimation;
		public box:Laya.Box;
		public img_tips:Laya.Image;
		public btn_cancle:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":340,"var":"box","height":98,"centerY":-40,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Loading1","props":{"y":40,"centerX":-122,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.Loading1UI"}},{"type":"Image","props":{"y":53,"x":209,"var":"img_tips","skin":"tongyong_ui/game_ui/tongyong/general/tu_ppp.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"width":230,"var":"btn_cancle","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_3.png","sizeGrid":"17,20,28,22","centerY":82,"centerX":5,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":33,"x":116,"skin":"tongyong_ui/game_ui/tongyong/general/tu_qx.png","anchorY":0.5,"anchorX":0.5},"compId":21}]}]}]}],"animations":[{"nodes":[{"target":21,"keyframes":{"y":[{"value":32,"tweenMethod":"linearNone","tween":true,"target":21,"key":"y","index":0}],"x":[{"value":86,"tweenMethod":"linearNone","tween":true,"target":21,"key":"x","index":0}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.Loading1UI",ui.ajqp.game_ui.tongyong.Loading1UI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.PiPeiUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class SaoLei_1UI extends View {
		public type_name:Laya.Label;
		public bao_num:Laya.Label;
		public lb_money:Laya.Label;
		public lb_ld:Laya.Label;
		public lb_name:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":798,"height":30},"child":[{"type":"Box","props":{"y":15,"x":399,"width":798,"height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":15,"x":362,"width":450,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_dizj1.png","sizeGrid":"0,40,0,40","left":0,"height":30,"centerY":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"var":"type_name","text":"单雷","left":330,"fontSize":24,"color":"#20548d","centerY":-1,"bold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"text":"/","left":379,"fontSize":24,"color":"#20548d","centerY":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"text":"包数:","left":387,"fontSize":24,"color":"#20548d","centerY":-1,"bold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"var":"bao_num","text":"7","left":446,"fontSize":24,"color":"#20548d","centerY":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"text":"发红包:","left":154,"fontSize":24,"color":"#20548d","centerY":-1,"bold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"var":"lb_money","text":"1000，","left":263,"fontSize":24,"color":"#20548d","centerY":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"text":"雷号：","left":472,"fontSize":24,"color":"#20548d","centerY":-1,"bold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"var":"lb_ld","text":"1,2,3,4,5,6,7,8,9","left":531,"fontSize":24,"color":"#20548d","centerY":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"text":"，","left":461,"fontSize":24,"color":"#20548d","centerY":-1,"bold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","scaleY":0.6,"scaleX":0.6,"left":236,"bottom":1,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"var":"lb_name","text":"玩家名五字","left":13,"fontSize":24,"color":"#20548d","centerY":-1,"bold":true,"anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.SaoLei_1UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class SaoLei_2UI extends View {
		public lb_name:Laya.Label;
		public lb_money:Laya.Label;
		public lb_special:Laya.Label;
		public lb_status:Laya.Label;
		public img_icon:Laya.Image;
		public img_max:Laya.Image;
		public box_pf:Laya.Box;
		public lb_pf:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":798,"height":30},"child":[{"type":"Box","props":{"y":0,"width":798,"height":30},"child":[{"type":"Label","props":{"var":"lb_name","text":"玩家名字五字：","left":32,"fontSize":22,"color":"#ffffff","bottom":5,"align":"left"}},{"type":"Label","props":{"var":"lb_money","text":"+140.00","left":254,"height":22,"fontSize":22,"color":"#2aff01","bottom":5,"align":"left"}},{"type":"Label","props":{"x":590,"var":"lb_special","text":"[特殊奖励:888.00]","height":22,"fontSize":22,"color":"#ff9c00","centerY":0,"align":"left"}},{"type":"Label","props":{"var":"lb_status","text":"[避雷]","left":347,"height":22,"fontSize":22,"color":"#2aff01","bottom":7,"align":"left"}},{"type":"Image","props":{"var":"img_icon","skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","scaleY":0.6,"scaleX":0.6,"left":222,"bottom":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"x":590,"var":"img_max","skin":"tongyong_ui/game_ui/tongyong/dating/tu_sqzj.png","centerY":0}},{"type":"Label","props":{"text":",","left":336,"height":22,"fontSize":22,"color":"#2aff01","bottom":6,"align":"left"}},{"type":"Label","props":{"text":"抢得","left":176,"height":22,"fontSize":22,"color":"#ffffff","bottom":5,"align":"left"}},{"type":"Box","props":{"var":"box_pf","left":405,"height":30,"bottom":0},"child":[{"type":"Label","props":{"y":4,"text":",赔付","height":22,"fontSize":22,"color":"#ff2400","align":"left"}},{"type":"Image","props":{"y":15,"x":66,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","scaleY":0.6,"scaleX":0.6,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":4,"x":82,"var":"lb_pf","text":"-4000.00","height":22,"fontSize":22,"color":"#ff2400","align":"left"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.SaoLei_2UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class SaoLei_3UI extends View {
		public lb_name:Laya.Label;
		public lb_money:Laya.Label;
		public img_icon:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":798,"height":30},"child":[{"type":"Box","props":{"y":0,"width":798,"height":30},"child":[{"type":"Label","props":{"var":"lb_name","text":"玩家名字五字：","left":32,"height":22,"fontSize":22,"color":"#ffffff","bottom":4,"align":"left"}},{"type":"Label","props":{"var":"lb_money","text":"+40.00","left":218,"height":22,"fontSize":22,"color":"#2aff01","bottom":4,"align":"left"}},{"type":"Image","props":{"var":"img_icon","skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","scaleY":0.6,"scaleX":0.6,"left":184,"bottom":0,"anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.SaoLei_3UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class SaoLei_4UI extends View {
		public lb_name:Laya.Label;
		public lb_money:Laya.Label;
		public lb_special:Laya.Label;
		public lb_status:Laya.Label;
		public img_icon:Laya.Image;
		public img_max:Laya.Image;
		public box_pf:Laya.Box;
		public lb_pf:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":798,"height":60},"child":[{"type":"Box","props":{"y":0,"width":798,"height":60},"child":[{"type":"Label","props":{"var":"lb_name","text":"玩家名字五字：","left":32,"height":22,"fontSize":22,"color":"#ffffff","bottom":31,"align":"left"}},{"type":"Label","props":{"var":"lb_money","text":"+140.00","left":254,"height":22,"fontSize":22,"color":"#2aff01","bottom":31,"align":"left"}},{"type":"Label","props":{"var":"lb_special","text":"[特殊奖励:888.00]","left":591,"height":22,"fontSize":22,"color":"#ff9c00","bottom":30,"align":"left"}},{"type":"Label","props":{"var":"lb_status","text":"[避雷]","left":347,"height":22,"fontSize":22,"color":"#2aff01","bottom":31,"align":"left"}},{"type":"Image","props":{"var":"img_icon","skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","scaleY":0.6,"scaleX":0.6,"left":222,"bottom":27,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_max","top":36,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_sqzj.png","left":177}},{"type":"Label","props":{"text":",","left":336,"height":22,"fontSize":22,"color":"#2aff01","bottom":32,"align":"left"}},{"type":"Label","props":{"text":"抢得","left":176,"height":22,"fontSize":22,"color":"#ffffff","bottom":31,"align":"left"}},{"type":"Box","props":{"width":172,"var":"box_pf","left":408,"height":30,"bottom":25},"child":[{"type":"Label","props":{"y":4,"text":",赔付","height":22,"fontSize":22,"color":"#ff2400","align":"left"}},{"type":"Image","props":{"y":15,"x":66,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","scaleY":0.6,"scaleX":0.6,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":4,"x":82,"var":"lb_pf","text":"-4000.00","height":22,"fontSize":22,"color":"#ff2400","align":"left"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.SaoLei_4UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class ShangZhuangLBUI extends View {
		public btn_close:Laya.Button;
		public btn_shangzhuang:Laya.Button;
		public txt_limit:Laya.Label;
		public list_player:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":355,"height":517,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-1,"x":348,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk0.png","scaleX":-1}},{"type":"Image","props":{"y":-1,"x":6,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk0.png"}},{"type":"Image","props":{"y":20,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_szlb.png","centerX":0}},{"type":"Button","props":{"y":34,"x":314,"width":70,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_gb.png","height":70,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":454,"var":"btn_shangzhuang","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_sqsz.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":491,"wordWrap":true,"width":276,"var":"txt_limit","text":"上庄需要 5000","height":22,"fontSize":20,"color":"#8d93dd","centerX":3,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"List","props":{"width":291,"var":"list_player","spaceY":0,"repeatY":5,"height":328,"centerY":-24,"centerX":0,"cacheAsBitmap":true},"child":[{"type":"WanJia1","props":{"y":0,"x":0,"name":"render","runtime":"ui.ajqp.game_ui.tongyong.WanJia1UI"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.WanJia1UI",ui.ajqp.game_ui.tongyong.WanJia1UI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.ShangZhuangLBUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class SheZhiUI extends View {
		public btn_close:Laya.Button;
		public box_vesion:Laya.Box;
		public box_app:Laya.Box;
		public txt_appbbh:Laya.Label;
		public box_v:Laya.Box;
		public txt_bbh:Laya.Label;
		public btn_clear:Laya.Label;
		public btn_check:Laya.Label;
		public hslider0:Laya.HSlider;
		public hslider1:Laya.HSlider;
		public btn_sound:Laya.CheckBox;
		public btn_music:Laya.CheckBox;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"XiaoKuang","props":{"centerX":0,"runtime":"ui.ajqp.game_ui.tongyong.effect.XiaoKuangUI"}},{"type":"Button","props":{"y":164,"x":937,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":674,"height":447,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":20,"skin":"tongyong_ui/game_ui/tongyong/general/tit_set.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":103,"x":40,"width":320,"var":"box_vesion","height":20},"child":[{"type":"Box","props":{"y":1,"x":0,"width":145,"var":"box_app","height":20},"child":[{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":120,"underlineColor":"#00ff00","text":"App版本号：","height":18,"fontSize":18,"color":"#fff9bb","align":"right"}},{"type":"Label","props":{"y":0,"x":115,"width":25,"var":"txt_appbbh","underlineColor":"#00ff00","text":1.4,"height":18,"fontSize":18,"color":"#fff9bb","align":"left"}}]},{"type":"Box","props":{"y":0,"x":147,"width":150,"var":"box_v","height":20},"child":[{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":80,"underlineColor":"#00ff00","text":"版本号：","height":18,"fontSize":18,"color":"#fff9bb","align":"right"}},{"type":"Label","props":{"y":0,"x":75,"width":75,"var":"txt_bbh","underlineColor":"#00ff00","text":"1.4.0.000","height":18,"fontSize":18,"color":"#fff9bb","align":"left"}}]}]},{"type":"Label","props":{"y":103,"x":543,"width":84,"var":"btn_clear","underline":true,"text":"清除缓存","height":24,"fontSize":20,"color":"#cfbf9b","align":"left"}},{"type":"Label","props":{"y":103,"x":429,"width":84,"var":"btn_check","underline":true,"text":"检查更新","height":24,"fontSize":20,"color":"#cfbf9b","align":"left"}},{"type":"Text","props":{"y":212,"x":46,"text":"音效：","fontSize":24,"color":"#cfbf9b","align":"right"}},{"type":"Text","props":{"y":313,"x":46,"text":"音乐：","fontSize":24,"color":"#cfbf9b","align":"right"}},{"type":"HSlider","props":{"y":208,"x":128,"width":380,"var":"hslider0","value":50,"tick":1,"skin":"tongyong_ui/game_ui/tongyong/dating/hslider.png","sizeGrid":"0,20,0,21","showLabel":false,"min":0,"max":100,"allowClickBack":true}},{"type":"HSlider","props":{"y":311,"x":128,"width":380,"var":"hslider1","value":10,"tick":1,"skin":"tongyong_ui/game_ui/tongyong/dating/hslider.png","sizeGrid":"0,20,0,21","showLabel":false,"min":0,"max":100,"allowClickBack":true}},{"type":"CheckBox","props":{"y":199,"x":522,"var":"btn_sound","skin":"tongyong_ui/game_ui/tongyong/hud/btn_guan.png","selected":true}},{"type":"CheckBox","props":{"y":304,"x":522,"var":"btn_music","skin":"tongyong_ui/game_ui/tongyong/hud/btn_guan.png","selected":true}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.effect.XiaoKuangUI",ui.ajqp.game_ui.tongyong.effect.XiaoKuangUI);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.SheZhiUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class TipsUI extends View {
		public btn_close:Laya.Button;
		public btn_enter:Laya.Button;
		public img_enter:Laya.Image;
		public btn_cancle:Laya.Button;
		public img_cancle:Laya.Image;
		public img_title:Laya.Image;
		public txt_label:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"XiaoKuang","props":{"centerX":0,"runtime":"ui.ajqp.game_ui.tongyong.effect.XiaoKuangUI"}},{"type":"Box","props":{"width":667,"height":437,"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":25,"x":630,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":311,"x":16,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/tu_di.png"}},{"type":"Box","props":{"y":-123.5,"x":-320,"width":674,"height":447,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"var":"btn_enter","top":350,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_hsan.png","centerX":162,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":18,"x":76,"var":"img_enter","skin":"tongyong_ui/game_ui/tongyong/dating/tu_qd.png"}}]},{"type":"Button","props":{"var":"btn_cancle","top":350,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_lsan.png","centerX":-156,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":17,"x":76,"var":"img_cancle","skin":"tongyong_ui/game_ui/tongyong/dating/tu_qx.png"}}]},{"type":"Image","props":{"var":"img_title","top":20,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_ts.png","centerX":0}},{"type":"Box","props":{"y":203,"x":334,"width":582,"height":240,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":120,"x":291,"wordWrap":true,"width":598,"var":"txt_label","valign":"middle","text":"asdfasdfasdf","leading":8,"height":72,"fontSize":28,"color":"#c8bc9f","anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.effect.XiaoKuangUI",ui.ajqp.game_ui.tongyong.effect.XiaoKuangUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.TipsUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class Tips1UI extends View {
		public box:Laya.Box;
		public btn_close:Laya.Button;
		public txt_label:Laya.Label;
		public img_title:Laya.Image;
		public btn_enter:Laya.Button;
		public img_enter:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"box"},"child":[{"type":"XiaoKuang","props":{"runtime":"ui.ajqp.game_ui.tongyong.effect.XiaoKuangUI"}},{"type":"Box","props":{"width":667,"height":437,"centerY":0,"centerX":0},"child":[{"type":"Button","props":{"y":25,"x":630,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":-123.5,"width":674,"height":447,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":203,"x":334,"width":582,"var":"txt_label","height":240,"fontSize":22,"color":"#c8bc9f","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_title","top":20,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_jbbz.png","centerX":0}},{"type":"Button","props":{"var":"btn_enter","top":350,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_hsan.png","centerX":0},"child":[{"type":"Image","props":{"var":"img_enter","skin":"tongyong_ui/game_ui/tongyong/dating/tu_qd.png","centerY":-3,"centerX":0}}]}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.effect.XiaoKuangUI",ui.ajqp.game_ui.tongyong.effect.XiaoKuangUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.Tips1UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class Tips_backUI extends View {
		public img_bg:Laya.Image;
		public btn_cancle:Laya.Button;
		public btn_enter:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":358,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"var":"img_bg","skin":"tongyong_ui/game_ui/tongyong/general/tu_bgTips.png","centerY":0,"centerX":0}},{"type":"Button","props":{"y":13,"x":1184,"var":"btn_cancle","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_gb1.png"}},{"type":"Button","props":{"y":308,"width":244,"var":"btn_enter","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_hsan.png","height":76,"centerX":0},"child":[{"type":"Image","props":{"y":17,"x":81,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_tuichu.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.Tips_backUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class TouXiangUI extends View {
		public img_icon:Laya.Image;
		public img_txk:Laya.Image;
		public txt_name:laya.display.Text;
		public txt_money:laya.display.Text;
		public clip_money:Laya.Clip;
		public qifu_type:Laya.Image;
		public img_qifu:ui.ajqp.game_ui.tongyong.effect.Effect_qifubsUI;
		public img_vip:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":141},"child":[{"type":"Box","props":{"y":0,"x":0,"width":100,"height":141},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png","centerY":0,"centerX":0}},{"type":"Image","props":{"var":"img_icon","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_0.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk0.png","scaleY":0.95,"scaleX":0.95,"centerY":0,"centerX":0}},{"type":"Text","props":{"y":8,"x":0,"width":100,"var":"txt_name","text":"玩家名字六字","leading":6,"height":23,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":113,"x":0,"wordWrap":true,"width":101,"var":"txt_money","text":"0","leading":6,"height":24,"fontSize":18,"color":"#f3ebb3","align":"center"}},{"type":"Clip","props":{"y":1,"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/general/clip_num1.png","clipX":11,"centerX":0}},{"type":"Image","props":{"y":34,"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/touxiang/f_cs2.png","scaleY":0.5,"scaleX":0.5,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Effect_qifubs","props":{"y":21,"x":69,"var":"img_qifu","runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_qifubsUI"}},{"type":"Image","props":{"y":29,"x":5,"var":"img_vip","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_j1.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.Effect_qifubsUI",ui.ajqp.game_ui.tongyong.effect.Effect_qifubsUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.TouXiangUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class TouXiangdutiaoUI extends View {
		public img_icon:Laya.Image;
		public img_txk:Laya.Image;
		public txt_name:laya.display.Text;
		public txt_money:laya.display.Text;
		public img_frame:Laya.Image;
		public img_mask:Laya.Image;
		public qifu_type:Laya.Image;
		public img_qifu:ui.ajqp.game_ui.tongyong.effect.Effect_qifubsUI;
		public img_vip:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":140},"child":[{"type":"Box","props":{"y":0,"x":0,"width":101,"height":141},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png","sizeGrid":"26,14,55,16","centerY":0,"centerX":0}},{"type":"Image","props":{"var":"img_icon","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_0.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk0.png","centerY":0,"centerX":0}},{"type":"Text","props":{"y":8,"x":0,"wordWrap":true,"width":102,"var":"txt_name","text":"玩家名字","leading":6,"height":18,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":116,"x":0,"wordWrap":true,"width":101,"var":"txt_money","text":"0","leading":6,"height":22,"fontSize":17,"color":"#f3ebb3","align":"center"}},{"type":"Image","props":{"y":-3,"x":-1,"var":"img_frame","skin":"tongyong_ui/game_ui/tongyong/general/tu_djs.png"},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"img_mask","renderType":"mask"}}]},{"type":"Image","props":{"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/touxiang/f_cs2.png","scaleY":0.5,"scaleX":0.5,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Effect_qifubs","props":{"y":20,"x":69,"var":"img_qifu","runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_qifubsUI"}},{"type":"Image","props":{"y":29,"x":5,"var":"img_vip","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_j1.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.Effect_qifubsUI",ui.ajqp.game_ui.tongyong.effect.Effect_qifubsUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.TouXiangdutiaoUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class TouXiangqzUI extends View {
		public img_icon:Laya.Image;
		public img_txk:Laya.Image;
		public txt_name:laya.display.Text;
		public txt_money:laya.display.Text;
		public clip_money:Laya.Clip;
		public qifu_type:Laya.Image;
		public img_banker:ui.ajqp.game_ui.tongyong.effect.Effect_qzcgUI;
		public img_qifu:ui.ajqp.game_ui.tongyong.effect.Effect_qifubsUI;
		public img_vip:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":101,"height":141},"child":[{"type":"Box","props":{"y":0,"x":0,"width":101,"height":141},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png","centerY":0,"centerX":0}},{"type":"Image","props":{"var":"img_icon","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk0.png","centerY":0,"centerX":0}},{"type":"Text","props":{"y":8,"x":0,"width":100,"var":"txt_name","text":"玩家名字六字","leading":6,"height":23,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":113,"x":0,"wordWrap":true,"width":101,"var":"txt_money","text":"0","leading":6,"height":24,"fontSize":18,"color":"#f3ebb3","align":"center"}},{"type":"Clip","props":{"y":1,"visible":false,"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/general/clip_num1.png","clipX":11,"centerX":0}},{"type":"Image","props":{"y":34,"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/touxiang/f_cs2.png","scaleY":0.5,"scaleX":0.5,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Effect_qzcg","props":{"y":-4,"x":-3,"var":"img_banker","runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_qzcgUI"}},{"type":"Effect_qifubs","props":{"y":21,"x":69,"var":"img_qifu","runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_qifubsUI"}},{"type":"Image","props":{"y":29,"x":5,"visible":false,"var":"img_vip","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_j1.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.Effect_qzcgUI",ui.ajqp.game_ui.tongyong.effect.Effect_qzcgUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.Effect_qifubsUI",ui.ajqp.game_ui.tongyong.effect.Effect_qifubsUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.TouXiangqzUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class TouXiangWzUI extends View {
		public img_icon:Laya.Image;
		public img_txk:Laya.Image;
		public txt_money:laya.display.Text;
		public txt_name:laya.display.Text;
		public clip_money:Laya.Clip;
		public qifu_type:Laya.Image;
		public img_qifu:ui.ajqp.game_ui.tongyong.effect.Effect_qifubsUI;
		public img_vip:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":141},"child":[{"type":"Box","props":{"y":1,"x":1,"width":99,"height":141},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png","centerY":0,"centerX":0}},{"type":"Image","props":{"var":"img_icon","skin":"tongyong_ui/game_ui/tongyong/general/tu_weizi.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk0.png","scaleY":0.95,"scaleX":0.95,"centerY":0,"centerX":0}},{"type":"Text","props":{"y":110,"x":0,"wordWrap":true,"width":99,"var":"txt_money","text":"点击入座","leading":6,"height":21,"fontSize":18,"color":"#f3ebb3","align":"center"}},{"type":"Text","props":{"y":5,"x":0,"wordWrap":true,"width":100,"var":"txt_name","text":"玩家名字","leading":6,"height":17,"fontSize":17,"color":"#ffffff","align":"center"}},{"type":"Clip","props":{"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/general/clip_num1.png","clipX":11,"centerX":0}},{"type":"Image","props":{"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/touxiang/f_cs2.png","scaleY":0.5,"scaleX":0.5,"centerY":0,"centerX":0,"anchorY":1,"anchorX":0.5}},{"type":"Effect_qifubs","props":{"var":"img_qifu","centerY":9,"centerX":64,"runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_qifubsUI"}},{"type":"Image","props":{"y":29,"x":5,"var":"img_vip","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_j1.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.Effect_qifubsUI",ui.ajqp.game_ui.tongyong.effect.Effect_qifubsUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.TouXiangWzUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class WanJiaUI extends View {
		public clip_num:Laya.Clip;
		public img_head:Laya.Image;
		public img_txk:Laya.Image;
		public txt_name:Laya.Label;
		public clip_money:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":820,"height":67},"child":[{"type":"Image","props":{"y":0,"x":0,"width":820,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_sj.png","sizeGrid":"12,12,12,12","renderType":"render","height":67}},{"type":"Clip","props":{"y":8,"visible":false,"var":"clip_num","skin":"tongyong_ui/game_ui/tongyong/general/clip_top.png","left":50,"clipX":10}},{"type":"Image","props":{"y":33,"x":161,"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_1.png","scaleY":0.75,"scaleX":0.75,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":33,"x":161,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk0.png","scaleY":0.75,"scaleX":0.75,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":16,"x":590,"width":180,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/tu_k3.png","sizeGrid":"15,15,15,15","right":50,"height":35,"alpha":0.5}},{"type":"Image","props":{"y":27,"x":600,"width":39,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","scaleY":1.2,"scaleX":1.2,"height":41,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":21,"x":239,"width":144,"var":"txt_name","text":"这里有六个字","height":24,"fontSize":24,"font":"SimHei","color":"#cfbf9b","align":"left"}},{"type":"Label","props":{"y":19,"x":622,"width":94,"var":"clip_money","text":"5000000","height":24,"fontSize":24,"color":"#ffffff"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.WanJiaUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class WanJia1UI extends View {
		public img_head:Laya.Image;
		public img_txk:Laya.Image;
		public txt_name:Laya.Label;
		public clip_money:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":290,"height":80},"child":[{"type":"Image","props":{"y":1,"x":1,"width":288,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_sj.png","sizeGrid":"11,12,13,11","height":80},"child":[{"type":"Image","props":{"y":39,"x":44,"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_1.png","scaleY":0.75,"scaleX":0.75,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":39,"x":44,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk0.png","scaleY":0.75,"scaleX":0.75,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":36,"x":98,"width":179,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"0,17,0,14","height":29,"alpha":0.5}},{"type":"Image","props":{"y":46,"x":113,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":10,"x":108,"width":155,"var":"txt_name","text":"昵称","height":21,"fontSize":20,"font":"SimHei","color":"#e3d393","align":"left"}},{"type":"Label","props":{"y":40,"x":128,"width":142,"var":"clip_money","text":"0000","height":21,"fontSize":20,"font":"SimHei","color":"#f3f3ff","align":"left"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.WanJia1UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class WanJiaLBUI extends View {
		public btn_close:Laya.Button;
		public list_player:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"ZhongKuang0","props":{"runtime":"ui.ajqp.game_ui.tongyong.effect.ZhongKuang0UI"}},{"type":"Image","props":{"y":534,"x":230,"width":820,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_di.png"}},{"type":"Button","props":{"y":122,"x":1035,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":362,"width":818,"height":505,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":6,"skin":"tongyong_ui/game_ui/tongyong/general/tit_wanjialb.png","centerX":0}},{"type":"List","props":{"y":54,"x":0,"width":818,"var":"list_player","spaceY":0,"height":368,"cacheAsBitmap":true,"anchorY":0,"anchorX":0},"child":[{"type":"WanJia","props":{"y":2,"x":-1,"name":"render","runtime":"ui.ajqp.game_ui.tongyong.WanJiaUI"}}]},{"type":"Label","props":{"y":465,"wordWrap":true,"width":276,"text":"仅展示金额最多的前20名玩家","height":22,"fontSize":20,"color":"#cfbf9b","centerX":-16,"anchorY":0.5,"anchorX":0.5,"align":"left"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.effect.ZhongKuang0UI",ui.ajqp.game_ui.tongyong.effect.ZhongKuang0UI);
			View.regComponent("ui.ajqp.game_ui.tongyong.WanJiaUI",ui.ajqp.game_ui.tongyong.WanJiaUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.WanJiaLBUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class ZhanJiUI extends View {
		public img_index:Laya.Image;
		public img_battleid:Laya.Image;
		public img_roomname:Laya.Image;
		public img_endtime:Laya.Image;
		public img_profit:Laya.Image;
		public txt_total:Laya.Label;
		public txt_noRecord:Laya.Image;
		public list_record:Laya.List;
		public list_time:Laya.Box;
		public btn_list0:Laya.Box;
		public img_data0:Laya.Button;
		public btn_selected0:Laya.Button;
		public lab_btn0:Laya.Label;
		public btn_list1:Laya.Box;
		public img_data1:Laya.Button;
		public btn_selected1:Laya.Button;
		public lab_btn1:Laya.Label;
		public btn_list2:Laya.Box;
		public img_data2:Laya.Button;
		public btn_selected2:Laya.Button;
		public lab_btn2:Laya.Label;
		public btn_list3:Laya.Box;
		public img_data3:Laya.Button;
		public btn_selected3:Laya.Button;
		public lab_btn3:Laya.Label;
		public btn_list4:Laya.Box;
		public img_data4:Laya.Button;
		public btn_selected4:Laya.Button;
		public lab_btn4:Laya.Label;
		public btn_list5:Laya.Box;
		public img_data5:Laya.Button;
		public btn_selected5:Laya.Button;
		public lab_btn5:Laya.Label;
		public btn_list6:Laya.Box;
		public img_data6:Laya.Button;
		public btn_selected6:Laya.Button;
		public lab_btn6:Laya.Label;
		public btn_list:Laya.Box;
		public lb_time:Laya.Label;
		public jiantou_down:Laya.Image;
		public jiantou_up:Laya.Image;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":365,"width":818,"height":505,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"ZhongKuang0","props":{"y":-112,"x":-231,"centerX":0,"runtime":"ui.ajqp.game_ui.tongyong.effect.ZhongKuang0UI"}},{"type":"Image","props":{"y":6,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_zj.png","centerX":0}},{"type":"Box","props":{"y":54,"x":0,"width":818,"height":448},"child":[{"type":"Image","props":{"y":-8,"x":0,"width":818,"skin":"tongyong_ui/game_ui/tongyong/general/tu_ditu.png"}},{"type":"Image","props":{"y":13,"x":52,"var":"img_index","skin":"tongyong_ui/game_ui/tongyong/general/bb_xh.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":14,"x":215,"var":"img_battleid","skin":"tongyong_ui/game_ui/tongyong/general/bb_bh.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":13,"x":538,"var":"img_roomname","skin":"tongyong_ui/game_ui/tongyong/general/bb_wzwc.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":13,"x":406,"var":"img_endtime","skin":"tongyong_ui/game_ui/tongyong/general/bb_wzsj.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":13,"x":676,"var":"img_profit","skin":"tongyong_ui/game_ui/tongyong/general/bb_yl.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"width":409,"skin":"tongyong_ui/game_ui/tongyong/general/tu_liebiao1.png","sizeGrid":"0,25,0,0","right":0,"bottom":0}},{"type":"Image","props":{"width":409,"skin":"tongyong_ui/game_ui/tongyong/general/tu_liebiao1.png","sizeGrid":"0,25,0,0","scaleX":-1,"left":409,"bottom":0}},{"type":"Label","props":{"y":414,"x":578,"width":215,"var":"txt_total","text":"000000000","height":22,"fontSize":20,"color":"#efda8b","align":"left"}},{"type":"Image","props":{"y":148,"x":349,"var":"txt_noRecord","skin":"tongyong_ui/game_ui/tongyong/general/anniu/tu_4.png"}},{"type":"List","props":{"y":30,"x":0,"width":818,"var":"list_record","spaceY":1,"repeatY":9,"height":372,"disabled":false,"cacheAsBitmap":true,"anchorY":0,"anchorX":0},"child":[{"type":"BaoBiaoT","props":{"name":"render","runtime":"ui.ajqp.game_ui.tongyong.BaoBiaoTUI"}}]},{"type":"Box","props":{"y":134,"x":23,"width":200,"var":"list_time","height":271},"child":[{"type":"Image","props":{"y":-6,"x":-3,"width":206,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_sj.png","sizeGrid":"15,15,15,15","height":280}},{"type":"Box","props":{"y":0,"x":0,"width":200,"var":"btn_list0","height":40},"child":[{"type":"Button","props":{"var":"img_data0","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected0","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":2,"x":35,"width":134,"var":"lab_btn0","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}},{"type":"Image","props":{"y":37,"x":14,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_10.png","bottom":0}}]},{"type":"Box","props":{"y":39,"x":0,"width":200,"var":"btn_list1","height":40},"child":[{"type":"Button","props":{"var":"img_data1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected1","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":2,"x":35,"width":134,"var":"lab_btn1","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}},{"type":"Image","props":{"y":37,"x":14,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_10.png","bottom":0}}]},{"type":"Box","props":{"y":77,"x":0,"width":200,"var":"btn_list2","height":40},"child":[{"type":"Button","props":{"var":"img_data2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected2","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":3,"x":35,"width":134,"var":"lab_btn2","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}},{"type":"Image","props":{"x":14,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_10.png","bottom":0}}]},{"type":"Box","props":{"y":116,"x":0,"width":200,"var":"btn_list3","height":40},"child":[{"type":"Button","props":{"var":"img_data3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected3","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":3,"x":35,"width":134,"var":"lab_btn3","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}},{"type":"Image","props":{"y":37,"x":14,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_10.png","bottom":0}}]},{"type":"Box","props":{"y":154,"x":0,"width":200,"var":"btn_list4","height":40},"child":[{"type":"Button","props":{"var":"img_data4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected4","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":2,"x":35,"width":134,"var":"lab_btn4","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}},{"type":"Image","props":{"x":14,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_10.png","bottom":0}}]},{"type":"Box","props":{"y":193,"x":0,"width":200,"var":"btn_list5","height":40},"child":[{"type":"Button","props":{"var":"img_data5","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected5","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":3,"x":35,"width":134,"var":"lab_btn5","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}},{"type":"Image","props":{"y":37,"x":14,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_10.png","bottom":0}}]},{"type":"Box","props":{"y":231,"x":0,"width":200,"var":"btn_list6","height":40},"child":[{"type":"Button","props":{"var":"img_data6","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected6","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":3,"x":35,"width":134,"var":"lab_btn6","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}},{"type":"Image","props":{"y":37,"x":14,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_10.png","bottom":0}}]}]},{"type":"Box","props":{"y":405,"x":11,"width":225,"var":"btn_list","height":35},"child":[{"type":"Image","props":{"y":1,"x":-1,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_di2.png"}},{"type":"Button","props":{"y":-1,"x":3,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj2.png"}},{"type":"Label","props":{"y":6,"x":40,"width":134,"var":"lb_time","text":"2018-09-15","height":22,"fontSize":22,"color":"#bfbfbf","align":"center"}},{"type":"Image","props":{"y":10,"x":174,"var":"jiantou_down","skin":"tongyong_ui/game_ui/tongyong/dating/btn_jt.png"}},{"type":"Image","props":{"y":24,"x":174,"var":"jiantou_up","skin":"tongyong_ui/game_ui/tongyong/dating/btn_jt.png","scaleY":-1}}]}]},{"type":"Button","props":{"y":10,"x":804,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.effect.ZhongKuang0UI",ui.ajqp.game_ui.tongyong.effect.ZhongKuang0UI);
			View.regComponent("ui.ajqp.game_ui.tongyong.BaoBiaoTUI",ui.ajqp.game_ui.tongyong.BaoBiaoTUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.ZhanJiUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class ZhanJi_fkUI extends View {
		public btn_close:Laya.Button;
		public img_index:Laya.Image;
		public img_battleid:Laya.Image;
		public img_roomname:Laya.Image;
		public img_endtime:Laya.Image;
		public img_profit:Laya.Image;
		public txt_total:Laya.Label;
		public txt_noRecord:Laya.Image;
		public list_record:Laya.List;
		public list_time:Laya.Box;
		public btn_list0:Laya.Box;
		public img_data0:Laya.Button;
		public btn_selected0:Laya.Button;
		public lab_btn0:Laya.Label;
		public btn_list1:Laya.Box;
		public img_data1:Laya.Button;
		public btn_selected1:Laya.Button;
		public lab_btn1:Laya.Label;
		public btn_list2:Laya.Box;
		public img_data2:Laya.Button;
		public btn_selected2:Laya.Button;
		public lab_btn2:Laya.Label;
		public btn_list3:Laya.Box;
		public img_data3:Laya.Button;
		public btn_selected3:Laya.Button;
		public lab_btn3:Laya.Label;
		public btn_list4:Laya.Box;
		public img_data4:Laya.Button;
		public btn_selected4:Laya.Button;
		public lab_btn4:Laya.Label;
		public btn_list5:Laya.Box;
		public img_data5:Laya.Button;
		public btn_selected5:Laya.Button;
		public lab_btn5:Laya.Label;
		public btn_list6:Laya.Box;
		public img_data6:Laya.Button;
		public btn_selected6:Laya.Button;
		public lab_btn6:Laya.Label;
		public btn_list:Laya.Box;
		public lb_time:Laya.Label;
		public jiantou_down:Laya.Image;
		public jiantou_up:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"ZhongKuang0","props":{"centerX":0,"runtime":"ui.ajqp.game_ui.tongyong.effect.ZhongKuang0UI"}},{"type":"Button","props":{"y":122,"x":1035,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":362,"width":818,"height":505,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":6,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_zj.png","centerX":0}},{"type":"Box","props":{"y":54,"x":0,"width":818,"height":448},"child":[{"type":"Image","props":{"y":-5,"x":0,"width":818,"skin":"tongyong_ui/game_ui/tongyong/general/tu_ditu.png"}},{"type":"Image","props":{"y":16,"x":52,"var":"img_index","skin":"tongyong_ui/game_ui/tongyong/general/bb_xh.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":17,"x":215,"var":"img_battleid","skin":"tongyong_ui/game_ui/tongyong/general/bb_bh.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":16,"x":412,"var":"img_roomname","skin":"tongyong_ui/game_ui/tongyong/general/bb_wzwc.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":16,"x":676,"var":"img_endtime","skin":"tongyong_ui/game_ui/tongyong/general/bb_wzsj.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":16,"x":547,"var":"img_profit","skin":"tongyong_ui/game_ui/tongyong/general/bb_yl.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"width":409,"skin":"tongyong_ui/game_ui/tongyong/general/tu_liebiao1.png","sizeGrid":"0,25,0,0","right":0,"bottom":-3}},{"type":"Image","props":{"width":409,"skin":"tongyong_ui/game_ui/tongyong/general/tu_liebiao1.png","sizeGrid":"0,25,0,0","scaleX":-1,"left":409,"bottom":-3}},{"type":"Label","props":{"y":417,"x":108,"width":215,"var":"txt_total","text":"000000000","height":22,"fontSize":20,"color":"#f6d9a6","align":"left"}},{"type":"Image","props":{"y":148,"x":349,"var":"txt_noRecord","skin":"tongyong_ui/game_ui/tongyong/general/anniu/tu_4.png"}},{"type":"List","props":{"y":33,"x":0,"width":818,"var":"list_record","spaceY":1,"repeatY":9,"height":372,"disabled":false,"cacheAsBitmap":true,"anchorY":0,"anchorX":0},"child":[{"type":"BaoBiaoT_fk","props":{"y":0,"x":0,"name":"render","runtime":"ui.ajqp.game_ui.tongyong.BaoBiaoT_fkUI"}}]},{"type":"Box","props":{"y":137,"x":595,"width":200,"var":"list_time","height":271},"child":[{"type":"Image","props":{"y":-6,"x":-3,"width":206,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_sj.png","sizeGrid":"15,15,15,15","height":280}},{"type":"Box","props":{"y":0,"x":0,"width":200,"var":"btn_list0","height":40},"child":[{"type":"Button","props":{"var":"img_data0","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected0","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":2,"x":35,"width":134,"var":"lab_btn0","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}},{"type":"Image","props":{"y":37,"x":14,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_10.png","bottom":0}}]},{"type":"Box","props":{"y":39,"x":0,"width":200,"var":"btn_list1","height":40},"child":[{"type":"Button","props":{"var":"img_data1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected1","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":2,"x":35,"width":134,"var":"lab_btn1","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}},{"type":"Image","props":{"y":37,"x":14,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_10.png","bottom":0}}]},{"type":"Box","props":{"y":77,"x":0,"width":200,"var":"btn_list2","height":40},"child":[{"type":"Button","props":{"var":"img_data2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected2","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":3,"x":35,"width":134,"var":"lab_btn2","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}},{"type":"Image","props":{"x":14,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_10.png","bottom":0}}]},{"type":"Box","props":{"y":116,"x":0,"width":200,"var":"btn_list3","height":40},"child":[{"type":"Button","props":{"var":"img_data3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected3","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":3,"x":35,"width":134,"var":"lab_btn3","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}},{"type":"Image","props":{"y":37,"x":14,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_10.png","bottom":0}}]},{"type":"Box","props":{"y":154,"x":0,"width":200,"var":"btn_list4","height":40},"child":[{"type":"Button","props":{"var":"img_data4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected4","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":2,"x":35,"width":134,"var":"lab_btn4","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}},{"type":"Image","props":{"x":14,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_10.png","bottom":0}}]},{"type":"Box","props":{"y":193,"x":0,"width":200,"var":"btn_list5","height":40},"child":[{"type":"Button","props":{"var":"img_data5","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected5","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":3,"x":35,"width":134,"var":"lab_btn5","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}},{"type":"Image","props":{"y":37,"x":14,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_10.png","bottom":0}}]},{"type":"Box","props":{"y":231,"x":0,"width":200,"var":"btn_list6","height":40},"child":[{"type":"Button","props":{"var":"img_data6","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected6","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":3,"x":35,"width":134,"var":"lab_btn6","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}},{"type":"Image","props":{"y":37,"x":14,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_10.png","bottom":0}}]}]},{"type":"Box","props":{"y":408,"x":583,"width":225,"var":"btn_list","height":35},"child":[{"type":"Image","props":{"y":1,"x":-1,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_di2.png"}},{"type":"Button","props":{"y":-1,"x":3,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj2.png"}},{"type":"Label","props":{"y":6,"x":40,"width":134,"var":"lb_time","text":"2018-09-15","height":22,"fontSize":22,"color":"#bfbfbf","align":"center"}},{"type":"Image","props":{"y":10,"x":174,"var":"jiantou_down","skin":"tongyong_ui/game_ui/tongyong/dating/btn_jt.png"}},{"type":"Image","props":{"y":24,"x":174,"var":"jiantou_up","skin":"tongyong_ui/game_ui/tongyong/dating/btn_jt.png","scaleY":-1}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.effect.ZhongKuang0UI",ui.ajqp.game_ui.tongyong.effect.ZhongKuang0UI);
			View.regComponent("ui.ajqp.game_ui.tongyong.BaoBiaoT_fkUI",ui.ajqp.game_ui.tongyong.BaoBiaoT_fkUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.ZhanJi_fkUI.uiView);
        }
    }
}
