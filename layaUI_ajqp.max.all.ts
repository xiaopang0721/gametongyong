
module ui.ajqp.game_ui.tongyong {
    export class BaoBiaoTUI extends View {
		public img_bg:Laya.Image;
		public txt_id:Laya.Label;
		public txt_time:Laya.Label;
		public txt_type:Laya.Label;
		public txt_earn:Laya.Label;
		public txt_index:Laya.Label;
		public btn_xq:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":800,"height":42},"child":[{"type":"Box","props":{"y":0,"x":0,"width":976,"height":42},"child":[{"type":"Image","props":{"y":0,"width":803,"var":"img_bg","skin":"tongyong_ui/game_ui/tongyong/general/tu_bb1.png","sizeGrid":"0,7,0,6","left":0,"height":42,"alpha":0.2}},{"type":"Label","props":{"y":10,"x":89,"width":222,"var":"txt_id","text":"jkdlfji8798182828372819","height":22,"fontSize":20,"color":"#cfc9b1","align":"center"}},{"type":"Label","props":{"y":10,"x":333,"width":120,"var":"txt_time","height":22,"fontSize":20,"color":"#cfc9b1","align":"center"}},{"type":"Label","props":{"y":10,"x":478,"wordWrap":false,"width":131,"var":"txt_type","height":22,"fontSize":20,"color":"#cfc9b1","align":"center"}},{"type":"Label","props":{"y":10,"x":629,"width":99,"var":"txt_earn","height":22,"fontSize":20,"color":"#069e00","align":"center"}},{"type":"Label","props":{"y":10,"x":11,"width":66,"var":"txt_index","height":22,"fontSize":20,"color":"#cfc9b1","align":"center"}},{"type":"Label","props":{"y":10,"x":740,"wordWrap":true,"width":54,"var":"btn_xq","underline":true,"text":"详情","height":22,"fontSize":20,"color":"#f4ff00","bold":true,"align":"center"}}]}]};
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
		public txt_id:Laya.Label;
		public txt_time:Laya.Label;
		public txt_type:Laya.Label;
		public txt_earn:Laya.Label;
		public txt_index:Laya.Label;
		public btn_xq:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":800,"height":42},"child":[{"type":"Box","props":{"y":0,"x":0,"width":800,"height":40},"child":[{"type":"Image","props":{"y":38,"width":803,"var":"img_bg","skin":"tongyong_ui/game_ui/tongyong/general/tu_bb1.png","sizeGrid":"0,7,0,6","left":0,"height":3}},{"type":"Label","props":{"y":10,"x":89,"width":222,"var":"txt_id","text":"jkdlfji8798182828372819","height":22,"fontSize":20,"color":"#cfc9b1","align":"center"}},{"type":"Label","props":{"y":10,"x":613,"width":120,"var":"txt_time","height":22,"fontSize":20,"color":"#069e00","align":"center"}},{"type":"Label","props":{"y":10,"x":338,"wordWrap":false,"width":131,"var":"txt_type","height":22,"fontSize":20,"color":"#cfc9b1","align":"center"}},{"type":"Label","props":{"y":10,"x":488,"width":99,"var":"txt_earn","height":22,"fontSize":20,"color":"#cfc9b1","align":"center"}},{"type":"Label","props":{"y":10,"x":11,"width":66,"var":"txt_index","height":22,"fontSize":20,"color":"#cfc9b1","align":"center"}},{"type":"Label","props":{"y":10,"x":740,"wordWrap":true,"width":54,"var":"btn_xq","underline":true,"text":"详情","height":22,"fontSize":20,"color":"#f4ff00","bold":true,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.BaoBiaoT_fkUI.uiView);
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

        public static  uiView:any ={"type":"View","props":{"width":140,"height":140},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/chongzhi/10001.png"},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":8},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":12},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":16},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10011.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":20},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10013.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":24},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10015.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":28},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10017.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":32},{"value":"tongyong_ui/game_ui/tongyong/chongzhi/10019.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":36}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.effect.ChongzhiUI.uiView);
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

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1280,"height":720,"anchorY":0},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":500,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":7,"child":[{"type":"Image","props":{"y":240,"x":643,"skin":"tongyong_ui/game_ui/tongyong/ksyx/tu_di.png","anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":340,"x":524,"skin":"tongyong_ui/game_ui/tongyong/ksyx/tu_guang.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":3},{"type":"Image","props":{"y":161,"x":725,"skin":"tongyong_ui/game_ui/tongyong/ksyx/tu_guang.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":4},{"type":"Image","props":{"y":250,"x":640,"skin":"tongyong_ui/game_ui/tongyong/ksyx/tu_ksyx.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":5},{"type":"Image","props":{"y":250,"x":640,"skin":"tongyong_ui/game_ui/tongyong/ksyx/tu_ksyxmh.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":6},{"type":"Box","props":{"width":417,"height":109,"centerY":0,"centerX":0,"blendMode":"lighter"},"child":[{"type":"Image","props":{"y":54,"x":-63,"skin":"tongyong_ui/game_ui/tongyong/ksyx/tu_sg.png","renderType":"mask","anchorY":0.5,"anchorX":0.5},"compId":9},{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/ksyx/tu_sgks.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":-600,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":643,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":4},{"value":643,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":5}]}},{"target":6,"keyframes":{"x":[{"value":640,"tweenMethod":"linearNone","tween":false,"target":6,"key":"x","index":0},{"value":-500,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"x","index":5},{"value":25,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":6},{"value":475,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":7},{"value":640,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"x","index":8}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":6,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"alpha","index":8},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":13}]}},{"target":5,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":5,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":13}]}},{"target":3,"keyframes":{"x":[{"value":211,"tweenMethod":"linearNone","tween":false,"target":3,"key":"x","index":0},{"value":107,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":6},{"value":524,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":10},{"value":733,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":34}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"alpha","index":18},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":34}]}},{"target":4,"keyframes":{"x":[{"value":1044,"tweenMethod":"linearNone","tween":false,"target":4,"key":"x","index":0},{"value":1130,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":6},{"value":725,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":10},{"value":511,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":34}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":4,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"alpha","index":18},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":34}]}},{"target":7,"keyframes":{"x":[{"value":640,"tweenMethod":"linearNone","tween":false,"target":7,"key":"x","index":0},{"value":640,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"x","index":34},{"value":1900,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":39}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":7,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":34},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":39}]}},{"target":9,"keyframes":{"x":[{"value":-63,"tweenMethod":"linearNone","tween":false,"target":9,"key":"x","index":0},{"value":-63,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":11},{"value":467,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":34}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
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

        public static  uiView:any ={"type":"View","props":{"width":434,"height":400},"child":[{"type":"Image","props":{"y":202,"x":217,"width":434,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_guang.png","scaleY":1,"scaleX":0.9,"rotation":11,"pivotY":186,"pivotX":215,"height":373,"alpha":1},"compId":8},{"type":"Image","props":{"y":237,"x":118,"width":137,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_cb1.png","scaleY":1,"scaleX":1,"height":153,"anchorY":0.8,"anchorX":0.8},"compId":10},{"type":"Image","props":{"y":237,"x":315,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_cb.png","scaleY":1,"scaleX":1,"anchorY":0.8,"anchorX":0.2},"compId":9},{"type":"Image","props":{"y":141,"x":217,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_hg.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":7},{"type":"Image","props":{"y":215,"x":218,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_kuang.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":6},{"type":"Image","props":{"y":213,"x":217,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_nyl.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":5},{"type":"Image","props":{"y":213,"x":217,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_nyl.png","scaleY":1.4,"scaleX":1.4,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":12}],"animations":[{"nodes":[{"target":5,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":0},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":10}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":0},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":10}]}},{"target":12,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":12,"key":"scaleY","index":0},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":12,"key":"scaleY","index":6}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":12,"key":"scaleX","index":0},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":12,"key":"scaleX","index":6}],"alpha":[{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":12,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":12,"key":"alpha","index":7},{"value":0,"tweenMethod":"linearNone","tween":true,"target":12,"key":"alpha","index":8}]}},{"target":8,"keyframes":{"y":[{"value":198,"tweenMethod":"linearNone","tween":false,"target":8,"key":"y","index":0},{"value":202,"tweenMethod":"linearNone","tween":true,"target":8,"key":"y","index":4}],"x":[{"value":206,"tweenMethod":"linearNone","tween":false,"target":8,"key":"x","index":0},{"value":217,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":4}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":8,"key":"scaleY","index":0},{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":4},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":10}],"scaleX":[{"value":0.9,"tweenMethod":"linearNone","tween":false,"target":8,"key":"scaleX","index":0},{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":7},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":10}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"rotation","index":0},{"value":20,"tweenMethod":"linearNone","tween":true,"target":8,"key":"rotation","index":60}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":8,"key":"alpha","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":10}]}},{"target":6,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":5},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":9}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":5},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":9}]}},{"target":7,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":6},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":12}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":6},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":12}]}},{"target":10,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":10,"key":"scaleY","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"scaleY","index":6},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"scaleY","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"scaleY","index":11}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":10,"key":"scaleX","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"scaleX","index":6},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"scaleX","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"scaleX","index":11}]}},{"target":9,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":9,"key":"scaleY","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"scaleY","index":6},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"scaleY","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"scaleY","index":11}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":9,"key":"scaleX","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"scaleX","index":6},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"scaleX","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"scaleX","index":11}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
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

        public static  uiView:any ={"type":"View","props":{"width":106,"height":144},"child":[{"type":"Box","props":{"width":106,"height":144},"child":[{"type":"Image","props":{"y":72,"x":53,"skin":"tongyong_ui/game_ui/tongyong/qz/k.png","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":8},{"type":"Image","props":{"y":0,"x":101,"skin":"tongyong_ui/game_ui/tongyong/qz/qz10000.png","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":6},{"type":"Image","props":{"y":72,"x":53,"skin":"tongyong_ui/game_ui/tongyong/qz/ss10000.png","anchorY":0.5,"anchorX":0.5},"compId":9}]}],"animations":[{"nodes":[{"target":6,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/qz/qz10000.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10000.png","tweenMethod":"linearNone","tween":false,"target":6,"label":null,"key":"skin","index":12},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10001.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":14},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10002.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":16},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10003.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":18},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10004.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":20},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10005.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":22},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10006.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":24},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10007.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":26},{"value":"tongyong_ui/game_ui/tongyong/qz/qz10008.png","tweenMethod":"linearNone","tween":false,"target":6,"key":"skin","index":28}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":6,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":12}]}},{"target":8,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":8,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":13}]}},{"target":9,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/qz/ss10000.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/qz/ss10001.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":2},{"value":"tongyong_ui/game_ui/tongyong/qz/ss10002.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/qz/ss10003.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/qz/ss10004.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":8},{"value":"tongyong_ui/game_ui/tongyong/qz/ss10005.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":10},{"value":"tongyong_ui/game_ui/tongyong/qz/ss10006.png","tweenMethod":"linearNone","tween":false,"target":9,"key":"skin","index":12}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":12},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":13}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
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

        public static  uiView:any ={"type":"View","props":{"width":240,"height":320},"child":[{"type":"Box","props":{"y":222,"x":124,"width":239,"rotation":0,"height":312,"anchorY":0.7,"anchorX":0.5},"compId":9,"child":[{"type":"Image","props":{"y":212,"x":115.5,"skin":"tongyong_ui/game_ui/tongyong/general/effect/hulu/tu_hulu2.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":203,"x":73.5,"var":"img_dice1","skin":"tongyong_ui/game_ui/tongyong/general/effect/shaizi/shaizi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":203,"x":151.5,"var":"img_dice2","skin":"tongyong_ui/game_ui/tongyong/general/effect/shaizi/shaizi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-179,"x":521,"skin":"tongyong_ui/game_ui/tongyong/general/effect/hulu/tu_hulu1.png","scaleY":0.8,"scaleX":0.8,"rotation":45,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":7}]}],"animations":[{"nodes":[{"target":9,"keyframes":{"y":[{"value":222,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":0},{"value":222,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"y","index":60},{"value":182,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":65},{"value":222,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":70}],"x":[{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"key":"x","index":0},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"key":"x","index":5},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":10},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"x","index":15},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":20},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"x","index":25},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":30},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"x","index":35},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":40},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"x","index":45},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":50},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"x","index":55},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":60},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"x","index":65},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":70}],"rotation":[{"value":10,"tweenMethod":"bounceInOut","tween":true,"target":9,"key":"rotation","index":0},{"value":-10,"tweenMethod":"bounceInOut","tween":true,"target":9,"key":"rotation","index":5},{"value":15,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":10},{"value":-15,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":15},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":20},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":25},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":30},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":35},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":40},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":45},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":50},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":55},{"value":15,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":60},{"value":0,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":65},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":70}]}},{"target":7,"keyframes":{"y":[{"value":154,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":0},{"value":154,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"y","index":80},{"value":-179,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":91}],"x":[{"value":115.5,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":0},{"value":115.5,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"x","index":80},{"value":521,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":91}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"rotation","index":80},{"value":46,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":85},{"value":45,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":91}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":80},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":85},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":91}]}}],"name":"ani1","id":1,"frameRate":30,"action":1}]};
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

        public static  uiView:any ={"type":"View","props":{"width":240,"height":320},"child":[{"type":"Box","props":{"y":222,"x":124,"width":239,"rotation":0,"height":312,"anchorY":0.7,"anchorX":0.5},"compId":9,"child":[{"type":"Image","props":{"y":212,"x":115.5,"skin":"tongyong_ui/game_ui/tongyong/general/effect/hulu1/tu_hulu2.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":160,"x":62,"var":"img_dice0","skin":"tongyong_ui/game_ui/tongyong/general/effect/shaizi/shaizi1.png"}},{"type":"Image","props":{"y":189,"x":154.5,"var":"img_dice1","skin":"tongyong_ui/game_ui/tongyong/general/effect/shaizi/shaizi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":229,"x":113,"var":"img_dice2","skin":"tongyong_ui/game_ui/tongyong/general/effect/shaizi/shaizi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":125,"x":115,"skin":"tongyong_ui/game_ui/tongyong/general/effect/hulu1/tu_hulu1.png","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":7}]}],"animations":[{"nodes":[{"target":9,"keyframes":{"rotation":[{"value":10,"tweenMethod":"bounceInOut","tween":true,"target":9,"key":"rotation","index":0},{"value":-10,"tweenMethod":"bounceInOut","tween":true,"target":9,"key":"rotation","index":5},{"value":15,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":10},{"value":-15,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":15},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":20},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":25},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":30},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":35},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":40},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":45},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":50},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":55},{"value":15,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":60},{"value":0,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":65},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":70}]}},{"target":7,"keyframes":{"y":[{"value":122,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":0},{"value":122,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"y","index":80},{"value":-179,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":91}],"x":[{"value":115.5,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":0},{"value":115.5,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"x","index":80},{"value":521,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":91}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"rotation","index":80},{"value":46,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":85},{"value":45,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":91}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":80},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":85},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":91}]}}],"name":"ani1","id":1,"frameRate":30,"action":1}]};
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
    export class ZhuangLUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_banker:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":140},"child":[{"type":"Image","props":{"visible":true,"skin":"tongyong_ui/game_ui/tongyong/general/tu_zhuangk.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":10,"x":97,"visible":true,"var":"img_banker","skin":"tongyong_ui/game_ui/tongyong/general/tu_zhuang.png","anchorY":0.5,"anchorX":0.5},"compId":3}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":1.5,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":10}],"scaleX":[{"value":1.5,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":10}]}},{"target":3,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":11}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":0.2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleY","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":15}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":0.2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleX","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":15}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
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

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Button","props":{"y":656,"width":220,"var":"btn_start","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_2.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"centerX":200,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":11,"x":50,"skin":"tongyong_ui/game_ui/tongyong/fk/tu_ksyx.png"}}]},{"type":"Button","props":{"width":220,"var":"btn_invite","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_3.png","sizeGrid":"20,30,20,30","labelStrokeColor":"#9d4725","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"centerY":297,"centerX":-202,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":11,"x":26,"skin":"tongyong_ui/game_ui/tongyong/fk/tu_wx.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.FangKa_GoUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class FenXiangUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"width":793,"skin":"tongyong_ui/game_ui/tongyong/hud/game_popout_bg.png","height":531,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":5,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_fx.png","centerX":-1}},{"type":"Image","props":{"y":113,"x":530,"skin":"tongyong_ui/game_ui/tongyong/hud/fx_szs.png"}},{"type":"Button","props":{"y":38,"x":744,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":238,"x":271,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/fx_wx.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":134,"x":1,"wordWrap":true,"width":119,"text":"好友/群","leading":6,"height":36,"fontSize":28,"font":"SimHei","color":"#ffee7d","align":"center"}}]},{"type":"Button","props":{"y":238,"x":525,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/fx_pyq.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":134,"x":3,"wordWrap":true,"width":119,"text":"好友/群","leading":6,"height":36,"fontSize":28,"font":"SimHei","color":"#ffee7d","align":"center"}}]},{"type":"Text","props":{"y":425,"x":36,"wordWrap":true,"width":719,"text":"每日分享朋友圈，可获得1-3张房卡","leading":6,"height":36,"fontSize":28,"font":"SimHei","color":"#ac8177","align":"center"}},{"type":"Image","props":{"y":0,"x":145,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.FenXiangUI.uiView);
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

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"top":-1,"right":-1,"left":-1},"compId":133,"child":[{"type":"Image","props":{"top":-1,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_d1.png","sizeGrid":"0,400,0,0","left":0,"height":102}},{"type":"Box","props":{"y":-2,"x":1282,"width":458,"var":"box_left","top":-1,"right":0,"height":81,"anchorX":1},"child":[{"type":"Button","props":{"y":37,"x":275,"var":"btn_help","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_bangzhu.png","name":"item1","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":107,"var":"btn_record","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_zhanji.png","name":"item0","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":103,"var":"btn_back","top":-17,"right":0,"height":92,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":52,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_fanhui.png","right":16,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":-1,"x":0,"width":653,"var":"box_btn_top_left","top":-1,"height":93,"anchorY":0,"anchorX":0},"child":[{"type":"Image","props":{"y":46,"x":47,"width":72,"var":"btn_gren","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","height":72,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":46,"x":47,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":35,"x":211,"width":252,"var":"txt_name","valign":"middle","height":37,"fontSize":30,"color":"#f5fbb1","anchorY":0.5,"anchorX":0.5,"align":"left"}},{"type":"Button","props":{"y":33,"x":373,"var":"btn_vip","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_top.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":1,"x":16,"width":39,"height":36},"child":[{"type":"Clip","props":{"var":"clip_vip","skin":"tongyong_ui/game_ui/tongyong/dating/clip_vip.png","index":1,"clipX":10,"centerY":-6,"centerX":-6}}]}]},{"type":"Box","props":{"y":3,"x":407,"width":332,"var":"btn_fresh","height":62},"child":[{"type":"Image","props":{"y":13.5,"x":41,"width":211,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_k1ss.png","height":37}},{"type":"Clip","props":{"y":19.5,"x":69,"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/dating/clip_money1.png","index":9,"clipX":11}},{"type":"Image","props":{"y":32.5,"x":43,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":31,"x":247,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sx.png","anchorY":0.5,"anchorX":0.5}}]}]}]},{"type":"Box","props":{"right":-1,"left":-1,"bottom":-1},"compId":134,"child":[{"type":"Image","props":{"y":1,"x":-1,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_d2.png","right":-1,"left":-1,"bottom":-1}}]}]}],"animations":[{"nodes":[{"target":133,"keyframes":{"top":[{"value":-85,"tweenMethod":"linearNone","tween":true,"target":133,"key":"top","index":0},{"value":-22,"tweenMethod":"linearNone","tween":true,"target":133,"key":"top","index":4},{"value":-1,"tweenMethod":"linearNone","tween":false,"target":133,"label":null,"key":"top","index":8}]}},{"target":134,"keyframes":{"bottom":[{"value":-67,"tweenMethod":"linearNone","tween":true,"target":134,"key":"bottom","index":0},{"value":-17.5,"tweenMethod":"linearNone","tween":true,"target":134,"key":"bottom","index":4},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":134,"key":"bottom","index":8}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
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
		public btn_enter:Laya.Button;
		public btn_cancle:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":608,"height":358,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":604,"width":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk.png","sizeGrid":"100,0,150,0","scaleX":-1,"height":336}},{"type":"Image","props":{"y":0,"x":0,"width":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk.png","sizeGrid":"100,0,150,0","height":336}},{"type":"Image","props":{"y":37,"x":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":35,"x":304,"skin":"tongyong_ui/game_ui/tongyong/general/tit_jiesan.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":262,"var":"btn_enter","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_jj.png","right":41,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":261,"var":"btn_cancle","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_tx.png","left":45,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":126,"x":303,"width":526,"height":32,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"y":15,"x":49.5,"skin":"tongyong_ui/game_ui/tongyong/general/clip_jiesan.png","clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":15,"x":156.5,"skin":"tongyong_ui/game_ui/tongyong/general/clip_jiesan.png","clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":15,"x":262.5,"skin":"tongyong_ui/game_ui/tongyong/general/clip_jiesan.png","clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":15,"x":369.5,"skin":"tongyong_ui/game_ui/tongyong/general/clip_jiesan.png","clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":15,"x":475.5,"skin":"tongyong_ui/game_ui/tongyong/general/clip_jiesan.png","clipY":3,"anchorY":0.5,"anchorX":0.5}}]},{"type":"ProgressBar","props":{"y":148,"x":40,"width":524,"skin":"tongyong_ui/game_ui/tongyong/general/progress.png","sizeGrid":"0,30,0,30","height":11}},{"type":"Label","props":{"y":250,"x":52,"width":484,"height":30,"fontSize":24,"color":"#d1a87d","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.JieSanUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class JieSuanUI extends View {
		public ani2:Laya.FrameAnimation;
		public img_0:Laya.Image;
		public img_1:Laya.Image;
		public img_2:Laya.Image;
		public img_3:Laya.Image;
		public txt_name:laya.display.Text;
		public img_head:Laya.Image;
		public txt_benefit:laya.display.Text;
		public txt_bet:laya.display.Text;
		public txt_result:laya.display.Text;
		public img_txk:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":250,"x":636,"var":"img_0","skin":"tongyong_ui/game_ui/tongyong/general/tu_gs.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":44},{"type":"Image","props":{"width":620,"skin":"tongyong_ui/game_ui/tongyong/hud/game_popout_bg.png","sizeGrid":"20,20,0,20","height":350,"centerY":17,"centerX":1,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_1","skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_sl2.png","centerY":-190,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_2","skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_js.png","centerY":-180,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":208,"x":626,"var":"img_3","skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":404,"x":623,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":102,"x":67,"wordWrap":true,"width":150,"var":"txt_name","text":"玩家名字六字","leading":6,"height":20,"fontSize":20,"color":"#f8ea5e","align":"center"}},{"type":"Image","props":{"y":53,"x":139,"skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":53,"x":139,"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":62,"x":331,"width":167,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Text","props":{"y":67,"x":233,"wordWrap":true,"width":102,"text":"我的输赢：","leading":6,"height":20,"fontSize":20,"color":"#fffbb5","align":"center"}},{"type":"Text","props":{"y":68,"x":341,"wordWrap":true,"width":145,"var":"txt_benefit","text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffe16b","align":"left"}},{"type":"Image","props":{"y":18,"x":331,"width":167,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Text","props":{"y":23,"x":233,"wordWrap":true,"width":102,"text":"我的下注：","leading":6,"height":20,"fontSize":20,"color":"#fffbb5","align":"center"}},{"type":"Text","props":{"y":24,"x":341,"wordWrap":true,"width":145,"var":"txt_bet","text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffe16b","align":"left"}},{"type":"Image","props":{"y":141,"x":0,"skin":"tongyong_ui/game_ui/tongyong/general/tu_d5.png"}},{"type":"Text","props":{"y":172,"x":8,"width":552,"var":"txt_result","text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":0,"x":90,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png"}}]}]}],"animations":[{"nodes":[{"target":44,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":44,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":44,"key":"rotation","index":100}]}}],"name":"ani2","id":2,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
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

        public static  uiView:any ={"type":"View","props":{"width":599,"height":38},"child":[{"type":"Box","props":{"y":0,"x":0,"width":599,"renderType":"render","height":38},"child":[{"type":"Image","props":{"y":0,"x":1,"width":569,"var":"img_bg","skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_zj.png","scaleX":1.05,"height":38}},{"type":"Label","props":{"y":20,"x":122,"width":140,"var":"lab_name","text":"G_77987987","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":20,"x":234,"width":63,"var":"lab_point","text":"100","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":20,"x":362,"width":63,"var":"lab_multiple","text":"110","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":20,"x":502,"width":100,"var":"lab_money","text":"10830","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":19,"x":30,"var":"img_banker","skin":"tongyong_ui/game_ui/tongyong/general/tu_zhuang.png","anchorY":0.5,"anchorX":0.5}}]}]};
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

        public static  uiView:any ={"type":"View","props":{"width":725,"height":38},"child":[{"type":"Box","props":{"y":0,"x":0,"width":725,"renderType":"render","height":38},"child":[{"type":"Image","props":{"y":0,"x":1,"width":725,"var":"img_bg","skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_zj.png","scaleX":1,"height":38}},{"type":"Label","props":{"y":21,"x":118,"width":141,"var":"lab_name","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":21,"x":327,"width":63,"var":"lab_point","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":21,"x":526,"width":63,"var":"lab_betmultiple","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":21,"x":626,"width":100,"var":"lab_money","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":19,"x":30,"var":"img_banker","skin":"tongyong_ui/game_ui/tongyong/general/tu_zhuang.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":21,"x":240,"width":63,"var":"lab_cardtype","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":21,"x":427,"width":63,"var":"lab_bankermultiple","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]};
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

        public static  uiView:any ={"type":"View","props":{"width":680,"height":38},"child":[{"type":"Box","props":{"y":0,"x":0,"width":680,"renderType":"render","height":38},"child":[{"type":"Image","props":{"y":0,"x":1,"width":680,"var":"img_bg","skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_zj.png","height":38}},{"type":"Label","props":{"y":20,"x":122,"width":140,"var":"lab_name","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":20,"x":234,"width":63,"var":"lab_chip","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":20,"x":350,"width":63,"var":"lab_multiple","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":20,"x":475,"width":100,"var":"lab_point","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":19,"x":30,"var":"img_banker","skin":"tongyong_ui/game_ui/tongyong/general/tu_zhuang.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":20,"x":593,"width":100,"var":"lbl_totalpoint","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]};
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

        public static  uiView:any ={"type":"View","props":{"width":900,"height":68},"child":[{"type":"Box","props":{"y":0,"x":0,"width":900,"renderType":"render","height":68},"child":[{"type":"Image","props":{"y":0,"x":1,"width":900,"var":"img_bg","skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_zj.png","sizeGrid":"5,0,4,0","height":68}},{"type":"Label","props":{"y":33,"x":89,"width":140,"var":"lab_name","leading":6,"height":23,"fontSize":20,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":33,"x":723,"width":79,"var":"lab_point","leading":6,"height":23,"fontSize":20,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":33,"x":831,"width":82,"var":"lbl_totalpoint","leading":6,"height":23,"fontSize":20,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Box","props":{"y":4,"x":189,"width":479,"var":"box_cards","height":61},"child":[{"type":"Image","props":{"y":0,"x":1,"var":"img_card0","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}},{"type":"Image","props":{"y":0,"x":32,"var":"img_card1","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}},{"type":"Image","props":{"y":0,"x":63,"var":"img_card2","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}},{"type":"Image","props":{"y":0,"x":122,"var":"img_card3","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}},{"type":"Image","props":{"y":0,"x":152,"var":"img_card4","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}},{"type":"Image","props":{"y":0,"x":183,"var":"img_card5","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}},{"type":"Image","props":{"y":0,"x":213,"var":"img_card6","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}},{"type":"Image","props":{"y":0,"x":243,"var":"img_card7","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}},{"type":"Image","props":{"y":0,"x":301,"var":"img_card8","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}},{"type":"Image","props":{"y":0,"x":332,"var":"img_card9","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}},{"type":"Image","props":{"y":0,"x":362,"var":"img_card10","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}},{"type":"Image","props":{"y":0,"x":393,"var":"img_card11","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}},{"type":"Image","props":{"y":0,"x":423,"var":"img_card12","skin":"tongyong_ui/game_ui/tongyong/pai/50.png","scaleY":0.4,"scaleX":0.4}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.JieSuanRender3UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class JieSuan_FangKaUI extends View {
		public ani2:Laya.FrameAnimation;
		public lab_xinxi:Laya.Label;
		public list_settle:Laya.List;
		public btn_create_room:Laya.Button;
		public btn_back_hud:Laya.Button;

        public static  uiView:any ={"type":"View","props":{},"child":[{"type":"Box","props":{"width":726,"height":527,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":154,"x":359,"skin":"tongyong_ui/game_ui/tongyong/general/tu_gs.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":44},{"type":"Image","props":{"y":294,"x":363,"width":700,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk1.png","sizeGrid":"89,49,71,39","height":350,"centerY":30,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":74,"x":363,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_sl2.png","centerY":-190,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":84,"x":363,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_js.png","centerY":-180,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":112,"x":349,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":423,"x":367,"wordWrap":true,"width":495,"var":"lab_xinxi","text":"5S后开始第1局，本轮共5局","leading":6,"height":23,"fontSize":20,"color":"#ffff96","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":183,"x":20,"width":681,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_d1.png","sizeGrid":"0,176,0,164","height":38}},{"type":"Label","props":{"y":204,"x":138,"wordWrap":true,"width":63,"text":"昵称","leading":6,"height":23,"fontSize":18,"color":"#1f2530","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":204,"x":254,"wordWrap":true,"width":63,"text":"底分","leading":6,"height":23,"fontSize":18,"color":"#1f2530","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":204,"x":370,"wordWrap":true,"width":63,"text":"倍数","leading":6,"height":23,"fontSize":18,"color":"#1f2530","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":204,"x":493,"wordWrap":true,"width":63,"text":"积分","leading":6,"height":23,"fontSize":18,"color":"#1f2530","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"List","props":{"y":227,"x":18,"width":683,"var":"list_settle","spaceY":8,"repeatY":4,"height":180},"child":[{"type":"JieSuanRender2","props":{"name":"render","runtime":"ui.ajqp.game_ui.tongyong.JieSuanRender2UI"}}]},{"type":"Label","props":{"y":204,"x":611,"wordWrap":true,"width":84,"text":"累计积分","leading":6,"height":23,"fontSize":18,"color":"#1f2530","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Button","props":{"y":494,"x":218,"width":200,"visible":false,"var":"btn_create_room","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_2.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d4725","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"创建房间","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":494,"x":508,"width":200,"visible":false,"var":"btn_back_hud","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_3.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#397119","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"返回大厅","anchorY":0.5,"anchorX":0.5}}]}],"animations":[{"nodes":[{"target":44,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":44,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":44,"key":"rotation","index":100}]}}],"name":"ani2","id":2,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.JieSuanRender2UI",ui.ajqp.game_ui.tongyong.JieSuanRender2UI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.JieSuan_FangKaUI.uiView);
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
    export class PaiJu_xqUI extends View {
		public btn_close:Laya.Button;
		public panel_xq:Laya.Panel;
		public txt_info:Laya.Label;
		public list_info:Laya.List;
		public txt_request:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":787,"height":531,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":1,"x":-1,"width":395,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk2.png","height":531}},{"type":"Image","props":{"y":1,"x":789,"width":395,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk2.png","scaleX":-1,"height":531}},{"type":"Image","props":{"y":0,"x":157,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png"}},{"type":"Button","props":{"y":38,"x":744,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":34,"x":388,"skin":"tongyong_ui/game_ui/tongyong/hud/paiju.png","anchorY":0.5,"anchorX":0.5}},{"type":"Panel","props":{"y":77,"x":23,"width":739,"var":"panel_xq","height":404},"child":[{"type":"Label","props":{"y":3,"x":14,"wordWrap":true,"width":709,"var":"txt_info","overflow":"scroll","height":21,"color":"#ffffff","align":"left"}}]},{"type":"List","props":{"y":77,"x":35,"width":731,"var":"list_info","spaceY":8,"repeatY":13,"height":411},"child":[{"type":"PaiJu_xqT","props":{"name":"render","runtime":"ui.ajqp.game_ui.tongyong.PaiJu_xqTUI"}}]},{"type":"Label","props":{"y":252,"x":336,"var":"txt_request","text":"请求数据中","fontSize":22,"color":"#ffffff"}}]}]};
        constructor(){ super()}
        createChildren():void {
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

        public static  uiView:any ={"type":"View","props":{"width":731,"height":27},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":115,"var":"txt_title","text":"111","leading":20,"height":27,"fontSize":22,"color":"#41fe69","align":"left"}},{"type":"Label","props":{"y":3,"x":128,"wordWrap":true,"width":564,"var":"txt_info","leading":20,"height":21,"fontSize":22,"color":"#ffffff","align":"left"}}]}]};
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
		public paodekuai:Laya.Box;
		public btn_close:Laya.Button;
		public panel_xq:Laya.Panel;
		public yupai:Laya.Box;
		public qiangguan:Laya.Box;
		public guize:Laya.Box;
		public xianshou :Laya.Box;
		public jiesuan:Laya.Box;
		public qiangzhuangniuniu :Laya.Box;
		public niuniujiesuan:Laya.Box;
		public xiazhu:Laya.Box;
		public tanpai:Laya.Box;
		public qiangzhuang:Laya.Box;
		public jusu:Laya.Image;
		public doudizhu:Laya.Box;
		public txt_request:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":795,"var":"paodekuai","height":510,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":4,"x":2,"width":395,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk2.png","height":531}},{"type":"Image","props":{"y":4,"x":792,"width":395,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk2.png","scaleX":-1,"height":531}},{"type":"Button","props":{"y":41,"x":749,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":4,"x":160,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png"}},{"type":"Image","props":{"y":40,"x":388,"skin":"tongyong_ui/game_ui/tongyong/hud/paiju.png","anchorY":0.5,"anchorX":0.5}},{"type":"Panel","props":{"y":72,"x":23,"width":739,"var":"panel_xq","height":422},"child":[{"type":"Box","props":{"y":361,"x":55,"width":617,"var":"yupai","height":309},"child":[{"type":"Label","props":{"y":0,"x":264.0000000535895,"text":"结束余牌","fontSize":22,"color":"#ffffff"}},{"type":"Image","props":{"y":13,"x":355.0000000535895,"width":200,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_hxfg.png"}},{"type":"Image","props":{"y":13,"x":260.0000000535895,"width":200,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_hxfg.png","rotation":180}},{"type":"Box","props":{"y":69,"x":0},"child":[{"type":"Label","props":{"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"x":124,"text":"[10张]","fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":67,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":67,"x":124,"text":"[10张]","fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":137,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":137,"x":124,"text":"[10张]","fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":208,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":208,"x":124,"text":"[10张]","fontSize":22,"color":"#00ff2a"}},{"type":"Box","props":{"y":171,"x":193,"width":213,"height":69},"child":[{"type":"Image","props":{"y":0,"x":0,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/10.png","height":66}},{"type":"Image","props":{"y":0,"x":16,"width":54,"skin":"tongyong_ui/game_ui/tongyong/pai/19.png","height":66}},{"type":"Image","props":{"y":0,"x":33,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/18.png","height":66}},{"type":"Image","props":{"y":0,"x":49,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/11.png","height":66}},{"type":"Image","props":{"y":0,"x":66,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/17.png","height":66}},{"type":"Image","props":{"y":0,"x":82,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/2.png","height":66}},{"type":"Image","props":{"y":0,"x":98,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/12.png","height":66}},{"type":"Image","props":{"y":0,"x":115,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/13.png","height":66}},{"type":"Image","props":{"y":0,"x":131,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/16.png","height":66}},{"type":"Image","props":{"y":0,"x":148,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/15.png","height":66}},{"type":"Image","props":{"y":0,"x":164,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/14.png","height":66}}]}]}]},{"type":"Box","props":{"y":207,"x":51,"width":653,"var":"qiangguan","height":90},"child":[{"type":"Label","props":{"y":30,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":61,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":31,"x":427,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":63,"x":429,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":31,"x":126,"fontSize":22,"color":"#ff2400"}},{"type":"Label","props":{"y":64,"x":126,"fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":34,"x":550,"fontSize":22,"color":"#ff2400"}},{"type":"Label","props":{"y":64,"x":551,"fontSize":22,"color":"#ff2400"}},{"type":"Box","props":{"y":0,"x":61},"child":[{"type":"Label","props":{"x":204.00000005358947,"text":"开始抢关","fontSize":22,"color":"#ffffff"}},{"type":"Image","props":{"y":13,"x":295.0000000535895,"width":200,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_hxfg.png"}},{"type":"Image","props":{"y":13,"x":200.00000005358947,"width":200,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_hxfg.png","rotation":180}}]}]},{"type":"Box","props":{"y":1,"x":4,"width":733,"var":"guize","height":167},"child":[{"type":"Image","props":{"y":32,"x":356,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_sxfg.png"}},{"type":"Image","props":{"y":0,"x":180,"width":358,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bb1.png","height":30},"child":[{"type":"Label","props":{"text":"当前房间规则","fontSize":22,"color":"#ffffff","centerY":-1,"centerX":1}}]},{"type":"Box","props":{"y":43,"x":528},"child":[{"type":"Label","props":{"text":"有牌必打","fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":23,"text":"报单保底","fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":47,"text":"四带三","fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":70,"text":"3A为炸弹","fontSize":22,"color":"#00ff2a"}}]},{"type":"Box","props":{"y":38,"x":49},"child":[{"type":"Label","props":{"text":"人数：3","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":25,"width":78.2353515625,"text":"局数：5","height":22,"fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":50,"text":"玩法：16张","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":75,"text":"先出：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":100,"x":1,"text":"顺子：五张起","fontSize":22,"color":"#ffffff"}}]}]},{"type":"Box","props":{"y":300,"x":52,"width":555,"var":"xianshou ","height":61},"child":[{"type":"Label","props":{"y":1,"x":266.0000000535895,"text":"先手玩家","fontSize":22,"color":"#ffffff"}},{"type":"Image","props":{"y":14,"x":357.0000000535895,"width":200,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_hxfg.png"}},{"type":"Image","props":{"y":14,"x":262.0000000535895,"width":200,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_hxfg.png","rotation":180}},{"type":"Label","props":{"y":29,"x":0,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":31,"x":126,"text":"黑桃三（或者上局玩家）","fontSize":22,"color":"#ffffff"}}]},{"type":"Box","props":{"y":677,"x":57,"width":552,"var":"jiesuan","height":153},"child":[{"type":"Label","props":{"y":37,"width":132,"text":"玩家名五字：","height":22,"fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":37,"x":124,"text":"+4","fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":67,"width":132,"text":"玩家名五字：","height":22,"fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":67,"x":124,"text":"-4","fontSize":22,"color":"#ff2400"}},{"type":"Label","props":{"y":97,"width":132,"text":"玩家名五字：","height":22,"fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":97,"x":124,"text":"+4","fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":127,"width":132,"text":"玩家名五字：","height":22,"fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":127,"x":124,"text":"-4","fontSize":22,"color":"#ff2400"}},{"type":"Box","props":{"y":10,"x":56},"child":[{"type":"Label","props":{"x":224.00000005358947,"text":"结 算","fontSize":22,"color":"#ffffff"}},{"type":"Image","props":{"y":13,"x":295.0000000535895,"width":200,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_hxfg.png"}},{"type":"Image","props":{"y":13,"x":200.00000005358947,"width":200,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_hxfg.png","rotation":180}}]}]}]},{"type":"Image","props":{"y":244,"x":211,"width":358,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bb1.png","height":30},"child":[{"type":"Label","props":{"text":"第一局","fontSize":22,"color":"#ffffff","centerY":1,"centerX":-7}}]}]},{"type":"Box","props":{"y":10,"x":10,"width":787,"var":"qiangzhuangniuniu ","height":531,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":391,"width":395,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk2.png","scaleX":-1,"height":531}},{"type":"Image","props":{"y":0,"x":390,"width":395,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk2.png","height":531}},{"type":"Button","props":{"y":20,"x":766,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":32,"x":388,"skin":"tongyong_ui/game_ui/tongyong/hud/paiju.png","anchorY":0.5,"anchorX":0.5}},{"type":"Panel","props":{"y":72,"x":23,"width":739,"height":422},"child":[{"type":"Box","props":{"y":575,"x":71,"width":538,"var":"niuniujiesuan","height":148},"child":[{"type":"Label","props":{"y":37,"width":132,"text":"玩家名五字：","height":22,"fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":37,"x":124,"text":"+4","fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":67,"width":132,"text":"玩家名五字：","height":22,"fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":67,"x":124,"text":"-4","fontSize":22,"color":"#ff2400"}},{"type":"Label","props":{"y":97,"width":132,"text":"玩家名五字：","height":22,"fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":97,"x":124,"text":"+4","fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":127,"width":132,"text":"玩家名五字：","height":22,"fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":127,"x":124,"text":"-4","fontSize":22,"color":"#ff2400"}},{"type":"Box","props":{"y":0,"x":43},"child":[{"type":"Label","props":{"x":224.00000005358947,"text":"结 算","fontSize":22,"color":"#ffffff"}},{"type":"Image","props":{"y":13,"x":295.0000000535895,"width":200,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_hxfg.png"}},{"type":"Image","props":{"y":13,"x":200.00000005358947,"width":200,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_hxfg.png","rotation":180}}]}]},{"type":"Box","props":{"y":133,"x":72,"width":617,"var":"xiazhu","height":90},"child":[{"type":"Label","props":{"x":246.00000005358947,"text":"开始下注","fontSize":22,"color":"#ffffff"}},{"type":"Image","props":{"y":13,"x":337.0000000535895,"width":200,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_hxfg.png"}},{"type":"Image","props":{"y":13,"x":242.00000005358947,"width":200,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_hxfg.png","rotation":180}},{"type":"Label","props":{"y":29,"x":0,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":29,"x":126,"text":"下注","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":29,"x":174,"text":"50","fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":29,"x":202,"text":"倍","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":61,"x":0,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":61,"x":126,"text":"下注","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":61,"x":174,"text":"50","fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":61,"x":202,"text":"倍","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":29,"x":395,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":29,"x":521,"text":"下注","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":29,"x":569,"text":"50","fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":29,"x":597,"text":"倍","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":61,"x":395,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":61,"x":521,"text":"下注","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":61,"x":569,"text":"50","fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":61,"x":597,"text":"倍","fontSize":22,"color":"#ffffff"}}]},{"type":"Box","props":{"y":224,"x":69,"width":623,"var":"tanpai","height":338},"child":[{"type":"Label","props":{"y":0,"x":266.0000000535895,"text":"摊 牌","fontSize":22,"color":"#ffffff"}},{"type":"Image","props":{"y":13,"x":338.0000000535895,"width":200,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_hxfg.png"}},{"type":"Image","props":{"y":13,"x":243.00000005358947,"width":200,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_hxfg.png","rotation":180}},{"type":"Box","props":{"y":69,"x":0},"child":[{"type":"Label","props":{"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"x":124,"text":"[牛牛]","fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":77,"x":0,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":77,"x":124,"text":"[五小牛]","fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":157,"x":0,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":157,"x":124,"text":"[无牛]","fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":238,"x":0,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":238,"x":124,"text":"[五花牛]","fontSize":22,"color":"#00ff2a"}},{"type":"Box","props":{"y":-38,"x":211,"width":213,"height":69},"child":[{"type":"Image","props":{"y":0,"x":0,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/10.png","height":66}},{"type":"Image","props":{"y":0,"x":16,"width":54,"skin":"tongyong_ui/game_ui/tongyong/pai/19.png","height":66}},{"type":"Image","props":{"y":0,"x":33,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/18.png","height":66}},{"type":"Image","props":{"y":-7,"x":49,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/11.png","height":66}},{"type":"Image","props":{"y":-7,"x":66,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/17.png","height":66}}]},{"type":"Box","props":{"y":41,"x":211,"width":213,"height":69},"child":[{"type":"Image","props":{"y":0,"x":0,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/10.png","height":66}},{"type":"Image","props":{"y":0,"x":16,"width":54,"skin":"tongyong_ui/game_ui/tongyong/pai/19.png","height":66}},{"type":"Image","props":{"y":0,"x":33,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/18.png","height":66}},{"type":"Image","props":{"y":-8,"x":49,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/11.png","height":66}},{"type":"Image","props":{"y":-8,"x":66,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/17.png","height":66}}]},{"type":"Box","props":{"y":121,"x":211,"width":213,"height":69},"child":[{"type":"Image","props":{"y":0,"x":0,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/10.png","height":66}},{"type":"Image","props":{"y":0,"x":16,"width":54,"skin":"tongyong_ui/game_ui/tongyong/pai/19.png","height":66}},{"type":"Image","props":{"y":0,"x":33,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/18.png","height":66}},{"type":"Image","props":{"y":0,"x":49,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/11.png","height":66}},{"type":"Image","props":{"y":0,"x":66,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/17.png","height":66}}]},{"type":"Box","props":{"y":200,"x":211,"width":213,"height":69},"child":[{"type":"Image","props":{"y":0,"x":0,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/10.png","height":66}},{"type":"Image","props":{"y":0,"x":16,"width":54,"skin":"tongyong_ui/game_ui/tongyong/pai/19.png","height":66}},{"type":"Image","props":{"y":0,"x":33,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/18.png","height":66}},{"type":"Image","props":{"y":0,"x":49,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/11.png","height":66}},{"type":"Image","props":{"y":0,"x":66,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/17.png","height":66}},{"type":"Image","props":{"y":0,"x":82,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/2.png","height":66}},{"type":"Image","props":{"y":0,"x":98,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/12.png","height":66}},{"type":"Image","props":{"y":0,"x":115,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/13.png","height":66}},{"type":"Image","props":{"y":0,"x":131,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/16.png","height":66}},{"type":"Image","props":{"y":0,"x":148,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/15.png","height":66}},{"type":"Image","props":{"y":0,"x":164,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/14.png","height":66}}]}]}]},{"type":"Box","props":{"y":35,"x":71,"width":653,"var":"qiangzhuang","height":87},"child":[{"type":"Label","props":{"y":30,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":61,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":31,"x":392,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":63,"x":392,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":31,"x":126,"fontSize":22,"color":"#ff2400"}},{"type":"Label","props":{"y":64,"x":126,"fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":34,"x":515,"fontSize":22,"color":"#ff2400"}},{"type":"Label","props":{"y":64,"x":515,"fontSize":22,"color":"#ff2400"}},{"type":"Box","props":{"y":0,"x":43},"child":[{"type":"Label","props":{"x":204.00000005358947,"text":"开始抢庄","fontSize":22,"color":"#ffffff"}},{"type":"Image","props":{"y":13,"x":295.0000000535895,"width":200,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_hxfg.png"}},{"type":"Image","props":{"y":13,"x":200.00000005358947,"width":200,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_hxfg.png","rotation":180}}]}]}]},{"type":"Image","props":{"y":74,"x":211,"width":358,"var":"jusu","skin":"tongyong_ui/game_ui/tongyong/hud/tu_dizj.png","height":30},"child":[{"type":"Label","props":{"text":"第一局","fontSize":22,"color":"#ffffff","centerY":1,"centerX":-7}}]}]},{"type":"Box","props":{"y":20,"x":20,"width":787,"var":"doudizhu","height":531,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":391,"width":395,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk2.png","scaleX":-1,"height":531}},{"type":"Image","props":{"y":0,"x":390,"width":395,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk2.png","height":531}},{"type":"Button","props":{"y":20,"x":766,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":32,"x":388,"skin":"tongyong_ui/game_ui/tongyong/hud/paiju.png","anchorY":0.5,"anchorX":0.5}},{"type":"Panel","props":{"y":77,"x":23,"width":739,"height":422},"child":[{"type":"Box","props":{"y":30,"x":71,"width":653,"height":92},"child":[{"type":"Label","props":{"y":30,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":61,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":31,"x":392,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":63,"x":392,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":31,"x":126,"fontSize":22,"color":"#ff2400"}},{"type":"Label","props":{"y":64,"x":126,"fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":34,"x":515,"fontSize":22,"color":"#ff2400"}},{"type":"Label","props":{"y":64,"x":515,"fontSize":22,"color":"#ff2400"}},{"type":"Box","props":{"y":0,"x":43},"child":[{"type":"Label","props":{"y":0,"x":197.00000005358947,"text":"开始抢地主","fontSize":22,"color":"#ffffff"}},{"type":"Image","props":{"y":13,"x":310.0000000535895,"width":200,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_hxfg.png"}},{"type":"Image","props":{"y":13,"x":193.00000005358947,"width":200,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_hxfg.png","rotation":180}}]}]},{"type":"Box","props":{"y":196,"x":68,"width":539,"height":259},"child":[{"type":"Label","props":{"y":0,"x":247.00000005358947,"text":"结束余牌","fontSize":22,"color":"#ffffff"}},{"type":"Image","props":{"y":13,"x":338.0000000535895,"width":200,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_hxfg.png"}},{"type":"Image","props":{"y":13,"x":243.00000005358947,"width":200,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_hxfg.png","rotation":180}},{"type":"Box","props":{"y":69,"x":0},"child":[{"type":"Label","props":{"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"x":124,"text":"[16张]","fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":77,"x":0,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":77,"x":124,"text":"[0张]","fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":157,"x":0,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":157,"x":124,"text":"[5张]","fontSize":22,"color":"#00ff2a"}},{"type":"Box","props":{"y":121,"x":211,"width":213,"height":69},"child":[{"type":"Image","props":{"y":0,"x":0,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/10.png","height":66}},{"type":"Image","props":{"y":0,"x":16,"width":54,"skin":"tongyong_ui/game_ui/tongyong/pai/19.png","height":66}},{"type":"Image","props":{"y":0,"x":33,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/18.png","height":66}},{"type":"Image","props":{"y":0,"x":49,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/11.png","height":66}},{"type":"Image","props":{"y":0,"x":66,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/17.png","height":66}}]},{"type":"Box","props":{"y":-38,"x":211,"width":213,"height":69},"child":[{"type":"Image","props":{"y":0,"x":0,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/10.png","height":66}},{"type":"Image","props":{"y":0,"x":16,"width":54,"skin":"tongyong_ui/game_ui/tongyong/pai/19.png","height":66}},{"type":"Image","props":{"y":0,"x":33,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/18.png","height":66}},{"type":"Image","props":{"y":0,"x":49,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/11.png","height":66}},{"type":"Image","props":{"y":0,"x":66,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/17.png","height":66}},{"type":"Image","props":{"y":0,"x":82,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/2.png","height":66}},{"type":"Image","props":{"y":0,"x":98,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/12.png","height":66}},{"type":"Image","props":{"y":0,"x":115,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/13.png","height":66}},{"type":"Image","props":{"y":0,"x":131,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/16.png","height":66}},{"type":"Image","props":{"y":0,"x":148,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/15.png","height":66}},{"type":"Image","props":{"y":0,"x":164,"width":45,"skin":"tongyong_ui/game_ui/tongyong/pai/14.png","height":66}}]}]}]},{"type":"Box","props":{"y":133,"x":70,"width":537,"height":61},"child":[{"type":"Label","props":{"x":246.00000005358947,"text":"先手玩家","fontSize":22,"color":"#ffffff"}},{"type":"Image","props":{"y":13,"x":337.0000000535895,"width":200,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_hxfg.png"}},{"type":"Image","props":{"y":13,"x":242.00000005358947,"width":200,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_hxfg.png","rotation":180}},{"type":"Label","props":{"y":29,"x":0,"text":"玩家名五字：","fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":29,"x":134,"text":"地主","fontSize":22,"color":"#00ff2a"}}]},{"type":"Box","props":{"y":443,"x":71,"width":538,"height":142},"child":[{"type":"Label","props":{"y":37,"width":132,"text":"玩家名五字：","height":22,"fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":37,"x":124,"text":"+4","fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":67,"width":132,"text":"玩家名五字：","height":22,"fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":67,"x":124,"text":"-4","fontSize":22,"color":"#ff2400"}},{"type":"Label","props":{"y":97,"width":132,"text":"玩家名五字：","height":22,"fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":97,"x":124,"text":"+4","fontSize":22,"color":"#00ff2a"}},{"type":"Label","props":{"y":127,"width":132,"text":"玩家名五字：","height":22,"fontSize":22,"color":"#ffffff"}},{"type":"Label","props":{"y":127,"x":124,"text":"-4","fontSize":22,"color":"#ff2400"}},{"type":"Box","props":{"y":0,"x":43},"child":[{"type":"Label","props":{"x":224.00000005358947,"text":"结 算","fontSize":22,"color":"#ffffff"}},{"type":"Image","props":{"y":13,"x":295.0000000535895,"width":200,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_hxfg.png"}},{"type":"Image","props":{"y":13,"x":200.00000005358947,"width":200,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_hxfg.png","rotation":180}}]}]}]},{"type":"Image","props":{"y":74,"x":211,"width":358,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_dizj.png","height":30},"child":[{"type":"Label","props":{"text":"第一局","fontSize":22,"color":"#ffffff","centerY":1,"centerX":-7}}]}]},{"type":"Label","props":{"y":348,"x":584,"var":"txt_request","text":"请求数据中","fontSize":22,"color":"#ffffff"}}]};
        constructor(){ super()}
        createChildren():void {
        
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
		public box:Laya.Box;
		public img_tips:Laya.Image;
		public btn_cancle:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":340,"var":"box","height":98,"centerY":-40,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Loading1","props":{"y":62,"centerX":-174,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.Loading1UI"}},{"type":"Image","props":{"y":376,"x":33,"var":"img_tips","skin":"tongyong_ui/game_ui/tongyong/pp/tu_jjkszdpp.png"},"child":[{"type":"Image","props":{"y":4,"x":261,"skin":"tongyong_ui/game_ui/tongyong/pp/tu_1.png"}}]},{"type":"Image","props":{"y":47,"x":34,"skin":"tongyong_ui/game_ui/tongyong/pp/tu_yxjjksqdd.png"},"child":[{"type":"Image","props":{"y":16,"x":275,"skin":"tongyong_ui/game_ui/tongyong/pp/tu_dian.png"}}]},{"type":"Button","props":{"y":65,"x":354,"var":"btn_cancle","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/pp/btn_czje.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":393,"x":361,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/pp/btn_czje.png","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":634,"x":381,"width":548,"height":78},"child":[{"type":"Button","props":{"y":1,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_1.png","centerX":0},"child":[{"type":"Image","props":{"y":11,"x":25,"skin":"tongyong_ui/game_ui/tongyong/general/tu_jxyx.png"}}]},{"type":"Image","props":{"y":23,"x":407,"skin":"tongyong_ui/game_ui/tongyong/pp/tu_zdjxyx.png"}},{"type":"Image","props":{"y":25,"x":369,"skin":"tongyong_ui/game_ui/tongyong/pp/tu_xk.png"}},{"type":"Image","props":{"y":19,"x":363,"skin":"tongyong_ui/game_ui/tongyong/pp/tu_xz.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.Loading1UI",ui.ajqp.game_ui.tongyong.Loading1UI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.PiPeiUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class ShangZhuangLBUI extends View {
		public btn_close:Laya.Button;
		public btn_shangzhuang:Laya.Button;
		public txt_limit:Laya.Label;
		public list_player:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":341,"height":531,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-1,"x":348,"width":170,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk0.png","sizeGrid":"100,0,145,36","scaleX":-1,"height":531}},{"type":"Image","props":{"y":-1,"x":8,"width":170,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk0.png","sizeGrid":"100,0,145,36","height":531}},{"type":"Image","props":{"y":6,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_szlb.png","centerX":9}},{"type":"Button","props":{"y":35,"x":308,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":443,"var":"btn_shangzhuang","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_sqsz.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":491,"wordWrap":true,"width":276,"var":"txt_limit","text":"上庄需要 5000","height":22,"fontSize":20,"color":"#ac8177","centerX":3,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"List","props":{"y":79,"x":37,"width":291,"var":"list_player","spaceY":2,"repeatY":5,"height":305,"cacheAsBitmap":true},"child":[{"type":"WanJia1","props":{"y":0,"x":0,"name":"render","runtime":"ui.ajqp.game_ui.tongyong.WanJia1UI"}}]}]}]};
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
		public hslider0:Laya.HSlider;
		public hslider1:Laya.HSlider;
		public box_vesion:Laya.Box;
		public box_app:Laya.Box;
		public txt_appbbh:Laya.Label;
		public box_v:Laya.Box;
		public txt_bbh:Laya.Label;
		public btn_close:Laya.Button;
		public btn_sound:Laya.CheckBox;
		public btn_music:Laya.CheckBox;
		public btn_clear:Laya.Label;
		public btn_check:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":608,"height":402,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":304,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk1.png","sizeGrid":"100,0,150,0","height":420,"centerY":13,"centerX":-151}},{"type":"Image","props":{"width":304,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk1.png","sizeGrid":"100,0,150,0","scaleX":-1,"height":420,"centerY":13,"centerX":152}},{"type":"Image","props":{"y":41,"x":303,"skin":"tongyong_ui/game_ui/tongyong/general/tit_set.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":185,"x":23,"width":84,"text":"音效：","height":24,"fontSize":24,"color":"#c8bc9f","align":"right"}},{"type":"Text","props":{"y":264,"x":23,"width":84,"text":"音乐：","height":24,"fontSize":24,"color":"#c8bc9f","align":"right"}},{"type":"HSlider","props":{"y":184,"x":103,"width":374,"var":"hslider0","value":50,"tick":1,"skin":"tongyong_ui/game_ui/tongyong/dating/hslider.png","sizeGrid":"0,20,0,21","showLabel":false,"min":0,"max":100,"height":31,"allowClickBack":true}},{"type":"HSlider","props":{"y":262,"x":103,"width":374,"var":"hslider1","value":10,"tick":1,"skin":"tongyong_ui/game_ui/tongyong/dating/hslider.png","sizeGrid":"0,20,0,21","showLabel":false,"min":0,"max":100,"height":31,"allowClickBack":true}},{"type":"Box","props":{"width":320,"var":"box_vesion","top":91,"right":272,"height":18},"child":[{"type":"Box","props":{"y":1,"x":0,"var":"box_app"},"child":[{"type":"Label","props":{"y":0,"x":120,"width":49,"var":"txt_appbbh","underlineColor":"#00ff00","text":1.4,"height":18,"fontSize":18,"color":"#efda8b","align":"left"}},{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":120,"underlineColor":"#00ff00","text":"App版本号：","height":18,"fontSize":18,"color":"#efda8b","align":"right"}}]},{"type":"Box","props":{"y":0,"x":116,"width":201,"var":"box_v","height":18},"child":[{"type":"Label","props":{"wordWrap":true,"width":120,"underlineColor":"#00ff00","text":"版本号：","height":18,"fontSize":18,"color":"#efda8b","align":"right"}},{"type":"Label","props":{"x":120,"width":49,"var":"txt_bbh","underlineColor":"#00ff00","text":"1.4.0.000","height":18,"fontSize":18,"color":"#efda8b","align":"left"}}]}]},{"type":"Button","props":{"y":37,"x":566,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"CheckBox","props":{"y":176,"x":481,"width":87,"var":"btn_sound","skin":"tongyong_ui/game_ui/tongyong/hud/btn_guan.png","selected":true,"height":46}},{"type":"CheckBox","props":{"y":255,"x":482,"width":87,"var":"btn_music","skin":"tongyong_ui/game_ui/tongyong/hud/btn_guan.png","selected":true,"height":46}},{"type":"Label","props":{"y":88,"x":485,"width":103,"var":"btn_clear","underline":true,"text":"清除缓存","height":32,"fontSize":20,"color":"#2aff01","bold":true,"align":"left"}},{"type":"Label","props":{"y":87,"x":381,"width":103,"var":"btn_check","underline":true,"text":"检查更新","height":32,"fontSize":20,"color":"#2aff01","bold":true,"align":"left"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.SheZhiUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class TabItemRenderUI extends View {
		public txt_name:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":175,"height":58},"child":[{"type":"Clip","props":{"y":0,"x":0,"skin":"tongyong_ui/game_ui/tongyong/dating/clip_an1.png","name":"selectBox","index":2,"clipY":3}},{"type":"Text","props":{"y":16,"x":6,"wordWrap":false,"width":147,"var":"txt_name","text":"活动内容","height":24,"fontSize":24,"color":"#f7e9c1","cacheAs":"normal","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.TabItemRenderUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class TimeBtnRenderUI extends View {
		public btn_time:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":179,"height":29},"child":[{"type":"Button","props":{"var":"btn_time","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_rq.png","sizeGrid":"0,21,0,19","labelSize":20,"labelColors":"#fffa9a"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.TimeBtnRenderUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class TipsUI extends View {
		public btn_enter:Laya.Button;
		public img_enter:Laya.Image;
		public btn_cancle:Laya.Button;
		public img_cancle:Laya.Image;
		public btn_close:Laya.Button;
		public img_title:Laya.Image;
		public txt_label:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":675,"height":422,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":13,"x":21,"width":320,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk.png","sizeGrid":"100,0,150,0","height":420}},{"type":"Image","props":{"y":13,"x":658,"width":320,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk.png","sizeGrid":"100,0,150,0","scaleX":-1,"height":420}},{"type":"Image","props":{"y":14,"x":93,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png"}},{"type":"Button","props":{"y":355,"x":489,"var":"btn_enter","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_1danh.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":14,"x":55,"var":"img_enter","skin":"tongyong_ui/game_ui/tongyong/dating/tu_qd.png"}}]},{"type":"Button","props":{"y":355,"var":"btn_cancle","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_1danh.png","centerX":-136,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":13,"x":61,"var":"img_cancle","skin":"tongyong_ui/game_ui/tongyong/dating/tu_qx.png"}}]},{"type":"Button","props":{"y":11,"x":581,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_gb.png"}},{"type":"Box","props":{"y":22,"x":235,"width":220,"height":47},"child":[{"type":"Image","props":{"var":"img_title","skin":"tongyong_ui/game_ui/tongyong/dating/tu_jbbz.png","centerY":0,"centerX":0}}]},{"type":"Box","props":{"y":88,"x":46,"width":582,"height":219},"child":[{"type":"Label","props":{"wordWrap":true,"width":578,"var":"txt_label","valign":"middle","text":"asdfasdfasdf","leading":8,"height":72,"fontSize":28,"color":"#c8bc9f","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.TipsUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class Tips_backUI extends View {
		public img_bg:Laya.Image;
		public img_meinv:Laya.Image;
		public img_guanggao:Laya.Image;
		public btn_cancle:Laya.Button;
		public btn_enter:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":608,"height":358,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-87.5,"x":-261,"var":"img_bg","skin":"tongyong_ui/game_ui/tongyong/general/tu_bgTips.png"}},{"type":"Image","props":{"y":120.5,"x":2,"visible":false,"var":"img_meinv","skin":"tongyong_ui/game_ui/tongyong/tuichu/baijiale0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":112.5,"x":531,"visible":false,"var":"img_guanggao","skin":"tongyong_ui/game_ui/tongyong/tuichu/baijiale1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":-1,"x":722,"var":"btn_cancle","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_gb1.png"}},{"type":"Button","props":{"y":328,"x":157,"var":"btn_enter","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_kban1.png"},"child":[{"type":"Image","props":{"y":9,"x":67,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_tuichu.png"}}]}]}]};
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

        public static  uiView:any ={"type":"View","props":{"width":100,"height":140},"child":[{"type":"Box","props":{"y":0,"x":0,"width":100,"height":140},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png","centerY":0,"centerX":0}},{"type":"Image","props":{"var":"img_icon","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_0.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk0.png","scaleY":0.95,"scaleX":0.95,"centerY":0,"centerX":0}},{"type":"Text","props":{"y":8,"x":0,"width":100,"var":"txt_name","text":"玩家名字六字","leading":6,"height":23,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":113,"x":0,"wordWrap":true,"width":101,"var":"txt_money","text":"0","leading":6,"height":24,"fontSize":18,"color":"#f8ea5e","align":"center"}},{"type":"Clip","props":{"y":1,"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/general/clip_num1.png","clipX":11,"centerX":0}},{"type":"Image","props":{"y":34,"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/touxiang/f_cs2.png","scaleY":0.5,"scaleX":0.5,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Effect_qifubs","props":{"y":21,"x":69,"var":"img_qifu","runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_qifubsUI"}},{"type":"Image","props":{"y":29,"x":5,"var":"img_vip","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_j1.png"}}]}]};
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

        public static  uiView:any ={"type":"View","props":{"width":100,"height":140},"child":[{"type":"Box","props":{"y":0,"x":0,"width":101,"height":141},"child":[{"type":"Image","props":{"width":106,"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png","height":144,"centerY":0,"centerX":0}},{"type":"Image","props":{"var":"img_icon","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_0.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png","centerY":0,"centerX":0}},{"type":"Text","props":{"y":8,"x":0,"wordWrap":true,"width":102,"var":"txt_name","text":"玩家名字","leading":6,"height":18,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":116,"x":0,"wordWrap":true,"width":101,"var":"txt_money","text":"0","leading":6,"height":22,"fontSize":17,"color":"#f8ea5e","align":"center"}},{"type":"Image","props":{"y":0,"x":0,"width":101,"var":"img_frame","skin":"tongyong_ui/game_ui/tongyong/general/tu_djs.png","height":141},"child":[{"type":"Image","props":{"y":0,"x":0,"width":101,"var":"img_mask","renderType":"mask","height":141}}]},{"type":"Image","props":{"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/touxiang/f_cs2.png","scaleY":0.5,"scaleX":0.5,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Effect_qifubs","props":{"y":20,"x":69,"var":"img_qifu","runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_qifubsUI"}}]}]};
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

        public static  uiView:any ={"type":"View","props":{"width":100,"height":140},"child":[{"type":"Box","props":{"y":0,"x":0,"width":100,"height":140},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png","centerY":0,"centerX":0}},{"type":"Image","props":{"var":"img_icon","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk0.png","centerY":0,"centerX":0}},{"type":"Text","props":{"y":8,"x":0,"width":100,"var":"txt_name","text":"玩家名字六字","leading":6,"height":23,"fontSize":16,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":113,"x":0,"wordWrap":true,"width":101,"var":"txt_money","text":"0","leading":6,"height":24,"fontSize":18,"color":"#f8ea5e","align":"center"}},{"type":"Clip","props":{"y":1,"visible":false,"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/general/clip_num1.png","clipX":11,"centerX":0}},{"type":"Image","props":{"y":34,"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/touxiang/f_cs2.png","scaleY":0.5,"scaleX":0.5,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Effect_qzcg","props":{"y":-2,"x":-3,"var":"img_banker","runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_qzcgUI"}},{"type":"Effect_qifubs","props":{"y":21,"x":69,"var":"img_qifu","runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_qifubsUI"}},{"type":"Image","props":{"y":90,"x":6,"visible":false,"var":"img_vip","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_j1.png"}}]}]};
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

        public static  uiView:any ={"type":"View","props":{"width":100,"height":137},"child":[{"type":"Box","props":{"y":1,"x":1,"width":99,"height":136},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png","centerY":0,"centerX":0}},{"type":"Image","props":{"var":"img_icon","skin":"tongyong_ui/game_ui/tongyong/general/tu_weizi.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk0.png","scaleY":0.95,"scaleX":0.95,"centerY":0,"centerX":0}},{"type":"Text","props":{"y":110,"x":0,"wordWrap":true,"width":99,"var":"txt_money","text":"点击入座","leading":6,"height":21,"fontSize":18,"color":"#fbe85a","align":"center"}},{"type":"Text","props":{"y":5,"x":0,"wordWrap":true,"width":100,"var":"txt_name","text":"玩家名字","leading":6,"height":17,"fontSize":17,"color":"#ffffff","align":"center"}},{"type":"Clip","props":{"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/general/clip_num1.png","clipX":11,"centerX":0}},{"type":"Image","props":{"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/touxiang/f_cs2.png","scaleY":0.5,"scaleX":0.5,"centerY":0,"centerX":0,"anchorY":1,"anchorX":0.5}},{"type":"Effect_qifubs","props":{"var":"img_qifu","centerY":9,"centerX":64,"runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_qifubsUI"}},{"type":"Image","props":{"y":29,"x":5,"var":"img_vip","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_j1.png"}}]}]};
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
		public img_head:Laya.Image;
		public img_txk:Laya.Image;
		public clip_money:Laya.Clip;
		public clip_num:Laya.Clip;
		public txt_name:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":740,"height":66},"child":[{"type":"Image","props":{"y":1,"x":1,"width":736,"skin":"tongyong_ui/game_ui/tongyong/general/tu_toplb4.png","sizeGrid":"11,12,13,11","renderType":"render","height":64},"child":[{"type":"Image","props":{"y":32,"x":166,"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_1.png","scaleY":0.75,"scaleX":0.75,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-4,"x":131,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png","scaleY":0.7,"scaleX":0.7}},{"type":"Image","props":{"y":19,"x":485,"width":179,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,17,0,14","height":29,"alpha":0.5}},{"type":"Clip","props":{"y":22,"x":516,"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/general/clip_money1.png","clipX":11}},{"type":"Image","props":{"y":33,"x":490,"width":39,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","scaleY":0.8,"scaleX":0.8,"height":41,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":19,"x":53,"visible":false,"var":"clip_num","skin":"tongyong_ui/game_ui/tongyong/general/clip_top.png","clipX":10}},{"type":"Label","props":{"y":24,"x":257,"width":155,"var":"txt_name","height":21,"fontSize":20,"font":"SimHei","color":"#efda8b","align":"left"}}]}]};
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
		public clip_money:Laya.Clip;
		public txt_name:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":290,"height":66},"child":[{"type":"Image","props":{"y":1,"x":1,"width":290,"skin":"tongyong_ui/game_ui/tongyong/general/tu_toplb4.png","sizeGrid":"11,12,13,11","height":64},"child":[{"type":"Image","props":{"y":32,"x":44,"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_1.png","scaleY":0.75,"scaleX":0.75,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-4,"x":8,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png","scaleY":0.7,"scaleX":0.7}},{"type":"Image","props":{"y":29,"x":93,"width":179,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,17,0,14","height":29,"alpha":0.5}},{"type":"Clip","props":{"y":32,"x":124,"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/general/clip_money1.png","clipX":11}},{"type":"Image","props":{"y":42,"x":95,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":4,"x":105,"width":155,"var":"txt_name","height":21,"fontSize":20,"font":"SimHei","color":"#ffffff","align":"left"}}]}]};
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

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"width":793,"skin":"tongyong_ui/game_ui/tongyong/hud/game_popout_bg.png","height":531,"centerY":-18,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":5,"skin":"tongyong_ui/game_ui/tongyong/general/tit_wanjialb.png","centerX":2}},{"type":"Image","props":{"y":0,"x":158,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png"}},{"type":"Button","props":{"y":38,"x":741,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":473,"wordWrap":true,"width":276,"text":"仅展示金额最多的前20名玩家","height":22,"fontSize":20,"color":"#ac8177","centerX":-16,"anchorY":0.5,"anchorX":0.5,"align":"left"}},{"type":"List","props":{"x":23,"width":736,"var":"list_player","spaceY":2,"height":358,"centerY":-9,"cacheAsBitmap":true,"anchorY":0,"anchorX":0},"child":[{"type":"WanJia","props":{"y":0,"x":0,"name":"render","runtime":"ui.ajqp.game_ui.tongyong.WanJiaUI"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.WanJiaUI",ui.ajqp.game_ui.tongyong.WanJiaUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.WanJiaLBUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.tongyong {
    export class ZhanJiUI extends View {
		public btn_close:Laya.Button;
		public img_index:Laya.Image;
		public img_battleid:Laya.Image;
		public img_roomname:Laya.Image;
		public img_endtime:Laya.Image;
		public img_profit:Laya.Image;
		public txt_noRecord:Laya.Label;
		public txt_total:Laya.Label;
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

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":850,"skin":"tongyong_ui/game_ui/tongyong/hud/game_popout_bg.png","scaleX":-1,"centerY":7,"centerX":0}},{"type":"Image","props":{"y":107,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_zj.png","centerX":0}},{"type":"Button","props":{"y":102,"x":979,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_gb.png"}},{"type":"Image","props":{"y":102,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","centerX":0}},{"type":"Box","props":{"y":182,"x":164,"width":959,"height":374},"child":[{"type":"Image","props":{"y":32,"x":91,"width":782,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_dhdt4.png","height":4}},{"type":"Image","props":{"y":13,"x":129,"var":"img_index","skin":"tongyong_ui/game_ui/tongyong/general/bb_xh.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":13,"x":281,"var":"img_battleid","skin":"tongyong_ui/game_ui/tongyong/general/bb_bh.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":13,"x":626,"var":"img_roomname","skin":"tongyong_ui/game_ui/tongyong/general/bb_wzwc.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":13,"x":476,"var":"img_endtime","skin":"tongyong_ui/game_ui/tongyong/general/bb_wzsj.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":13,"x":763,"var":"img_profit","skin":"tongyong_ui/game_ui/tongyong/general/bb_yl.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":188,"x":373,"wordWrap":true,"width":232,"var":"txt_noRecord","text":"---暂无数据---","height":22,"fontSize":20,"color":"#efda8b","align":"center"}},{"type":"Label","props":{"y":379,"x":650,"width":215,"var":"txt_total","text":"000000000","height":22,"fontSize":20,"color":"#08bbcc","align":"right"}},{"type":"Image","props":{"y":368,"x":93,"width":782,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_dhdt4.png","height":4}}]},{"type":"List","props":{"y":215,"x":247,"width":808,"var":"list_record","spaceY":1,"repeatY":9,"height":319,"disabled":false,"cacheAsBitmap":true,"anchorY":0,"anchorX":0},"child":[{"type":"BaoBiaoT","props":{"name":"render","runtime":"ui.ajqp.game_ui.tongyong.BaoBiaoTUI"}}]},{"type":"Box","props":{"y":270,"x":249,"width":189,"var":"list_time","height":280},"child":[{"type":"Image","props":{"y":2,"x":-8,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_sj.png"}},{"type":"Box","props":{"y":10,"x":-2,"var":"btn_list0"},"child":[{"type":"Button","props":{"var":"img_data0","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected0","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":2,"x":35,"width":134,"var":"lab_btn0","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}}]},{"type":"Box","props":{"y":49,"x":-2,"var":"btn_list1"},"child":[{"type":"Button","props":{"var":"img_data1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected1","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":2,"x":35,"width":134,"var":"lab_btn1","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}}]},{"type":"Box","props":{"y":87,"x":-2,"var":"btn_list2"},"child":[{"type":"Button","props":{"var":"img_data2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected2","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":3,"x":35,"width":134,"var":"lab_btn2","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}}]},{"type":"Box","props":{"y":126,"x":-2,"var":"btn_list3"},"child":[{"type":"Button","props":{"var":"img_data3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected3","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":3,"x":35,"width":134,"var":"lab_btn3","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}}]},{"type":"Box","props":{"y":163,"x":-2,"var":"btn_list4"},"child":[{"type":"Button","props":{"var":"img_data4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected4","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":2,"x":35,"width":134,"var":"lab_btn4","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}}]},{"type":"Box","props":{"y":202,"x":-2,"var":"btn_list5"},"child":[{"type":"Button","props":{"var":"img_data5","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected5","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":3,"x":35,"width":134,"var":"lab_btn5","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}}]},{"type":"Box","props":{"y":240,"x":-2,"var":"btn_list6"},"child":[{"type":"Button","props":{"var":"img_data6","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected6","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":3,"x":35,"width":134,"var":"lab_btn6","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}}]}]},{"type":"Box","props":{"y":547,"x":242,"var":"btn_list"},"child":[{"type":"Image","props":{"y":1,"x":-1,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_di2.png"}},{"type":"Button","props":{"y":4,"x":3,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj2.png"}},{"type":"Label","props":{"y":8,"x":40,"width":134,"var":"lb_time","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}},{"type":"Image","props":{"y":8,"x":164,"var":"jiantou_down","skin":"tongyong_ui/game_ui/tongyong/dating/btn_jt.png"}},{"type":"Image","props":{"y":30,"x":164,"var":"jiantou_up","skin":"tongyong_ui/game_ui/tongyong/dating/btn_jt.png","scaleY":-1}}]}]}]};
        constructor(){ super()}
        createChildren():void {
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
		public txt_noRecord:Laya.Label;
		public txt_total:Laya.Label;
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

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":850,"skin":"tongyong_ui/game_ui/tongyong/hud/game_popout_bg.png","centerY":10,"centerX":0}},{"type":"Image","props":{"y":112,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_zj.png","centerX":14}},{"type":"Button","props":{"y":102,"x":975,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_gb.png"}},{"type":"Image","props":{"y":106,"x":389,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png"}},{"type":"Box","props":{"y":185,"x":164,"width":976,"height":422},"child":[{"type":"Image","props":{"y":32,"x":91,"width":782,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_dhdt4.png","height":4}},{"type":"Image","props":{"y":13,"x":129,"var":"img_index","skin":"tongyong_ui/game_ui/tongyong/general/bb_xh.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":13,"x":281,"var":"img_battleid","skin":"tongyong_ui/game_ui/tongyong/general/bb_bh.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":13,"x":485,"var":"img_roomname","skin":"tongyong_ui/game_ui/tongyong/general/bb_wzwc.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":13,"x":758,"var":"img_endtime","skin":"tongyong_ui/game_ui/tongyong/general/bb_wzsj.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":13,"x":619,"var":"img_profit","skin":"tongyong_ui/game_ui/tongyong/general/bb_yl.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":188,"x":373,"wordWrap":true,"width":232,"var":"txt_noRecord","text":"---暂无数据---","height":22,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":382,"x":95,"width":215,"var":"txt_total","text":"000000000","height":22,"fontSize":20,"color":"#08bbcc","align":"left"}},{"type":"Image","props":{"y":373,"x":93,"width":782,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_dhdt4.png","height":4}}]},{"type":"List","props":{"y":218,"x":247,"width":795,"var":"list_record","spaceY":1,"repeatY":9,"height":335,"disabled":false,"cacheAsBitmap":true,"anchorY":0,"anchorX":0},"child":[{"type":"BaoBiaoT_fk","props":{"y":0,"x":0,"name":"render","runtime":"ui.ajqp.game_ui.tongyong.BaoBiaoT_fkUI"}}]},{"type":"Box","props":{"y":279,"x":839,"width":189,"var":"list_time","height":280},"child":[{"type":"Image","props":{"y":0,"x":-7,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_sj.png"}},{"type":"Box","props":{"y":10,"x":-2,"var":"btn_list0"},"child":[{"type":"Button","props":{"var":"img_data0","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected0","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":2,"x":35,"width":134,"var":"lab_btn0","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}}]},{"type":"Box","props":{"y":49,"x":-2,"var":"btn_list1"},"child":[{"type":"Button","props":{"var":"img_data1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected1","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":2,"x":35,"width":134,"var":"lab_btn1","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}}]},{"type":"Box","props":{"y":87,"x":-2,"var":"btn_list2"},"child":[{"type":"Button","props":{"var":"img_data2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected2","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":3,"x":35,"width":134,"var":"lab_btn2","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}}]},{"type":"Box","props":{"y":126,"x":-2,"var":"btn_list3"},"child":[{"type":"Button","props":{"var":"img_data3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected3","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":3,"x":35,"width":134,"var":"lab_btn3","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}}]},{"type":"Box","props":{"y":163,"x":-2,"var":"btn_list4"},"child":[{"type":"Button","props":{"var":"img_data4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected4","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":2,"x":35,"width":134,"var":"lab_btn4","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}}]},{"type":"Box","props":{"y":202,"x":-2,"var":"btn_list5"},"child":[{"type":"Button","props":{"var":"img_data5","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected5","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":3,"x":35,"width":134,"var":"lab_btn5","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}}]},{"type":"Box","props":{"y":240,"x":-2,"var":"btn_list6"},"child":[{"type":"Button","props":{"var":"img_data6","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected6","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":3,"x":35,"width":134,"var":"lab_btn6","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}}]}]},{"type":"Box","props":{"y":554,"x":833,"var":"btn_list"},"child":[{"type":"Image","props":{"y":1,"x":-1,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_di2.png"}},{"type":"Button","props":{"y":4,"x":3,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj2.png"}},{"type":"Label","props":{"y":8,"x":40,"width":134,"var":"lb_time","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}},{"type":"Image","props":{"y":8,"x":164,"var":"jiantou_down","skin":"tongyong_ui/game_ui/tongyong/dating/btn_jt.png"}},{"type":"Image","props":{"y":30,"x":164,"var":"jiantou_up","skin":"tongyong_ui/game_ui/tongyong/dating/btn_jt.png","scaleY":-1}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.BaoBiaoT_fkUI",ui.ajqp.game_ui.tongyong.BaoBiaoT_fkUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.tongyong.ZhanJi_fkUI.uiView);
        }
    }
}