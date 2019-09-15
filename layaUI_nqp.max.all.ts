
module ui.nqp.game_ui.tongyong {
    export class BaoBiaoTUI extends View {
		public img_bg:Laya.Image;
		public txt_id:Laya.Label;
		public txt_time:Laya.Label;
		public txt_type:Laya.Label;
		public txt_earn:Laya.Label;
		public txt_index:Laya.Label;
		public btn_xq:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":800,"height":42},"child":[{"type":"Box","props":{"y":0,"x":0,"width":976,"height":42},"child":[{"type":"Image","props":{"y":1,"x":-2,"width":814,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_dizj.png","height":42}},{"type":"Image","props":{"y":1,"x":3,"width":797,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_di2.png","height":40}},{"type":"Image","props":{"var":"img_bg","skin":"tongyong_ui/game_ui/tongyong/general/tu_bb1.png","sizeGrid":"0,7,0,6","right":0,"left":0,"height":42,"alpha":0.2}},{"type":"Label","props":{"y":10,"x":89,"width":222,"var":"txt_id","text":"jkdlfji8798182828372819","height":22,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":10,"x":333,"width":120,"var":"txt_time","height":22,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":10,"x":478,"wordWrap":false,"width":131,"var":"txt_type","height":22,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":10,"x":629,"width":99,"var":"txt_earn","height":22,"fontSize":20,"color":"#41fe69","align":"center"}},{"type":"Label","props":{"y":10,"x":11,"width":66,"var":"txt_index","height":22,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":10,"x":740,"wordWrap":true,"width":54,"var":"btn_xq","underline":true,"text":"详情","height":22,"fontSize":20,"color":"#f4ff00","bold":true,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.BaoBiaoTUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class ChuangJianUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"width":793,"skin":"tongyong_ui/game_ui/tongyong/dating/game_popout_bg.png","height":531,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":32,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_cjfj.png","centerX":2}},{"type":"Button","props":{"y":38,"x":762,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Text","props":{"y":195,"x":318,"wordWrap":true,"width":103,"text":"玩法：","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#ffffff","align":"left"}},{"type":"Box","props":{"y":195,"x":396},"child":[{"type":"CheckBox","props":{"skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"x":40,"wordWrap":true,"width":111,"text":"经典经典","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#ffffff","align":"left"}}]},{"type":"Box","props":{"y":196,"x":594,"width":216,"height":28},"child":[{"type":"Text","props":{"y":0,"x":0,"wordWrap":true,"width":58,"text":"底分","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#ffffff","align":"left"}},{"type":"Button","props":{"y":0,"x":60,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_j.png"}},{"type":"Button","props":{"y":0,"x":185,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_j1.png"}},{"type":"Image","props":{"y":0,"x":94,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_kk1.png"}},{"type":"Text","props":{"y":2,"x":95,"width":83,"text":"00000","height":25,"fontSize":22,"color":"#ffffff","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.ChuangJianUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class DaoJiShiUI extends View {
		public ani1:Laya.FrameAnimation;
		public txt_time:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":70,"height":70},"child":[{"type":"Box","props":{"y":58,"x":36,"width":64,"rotation":0,"height":66,"anchorY":0.8,"anchorX":0.5},"compId":2,"child":[{"type":"Image","props":{"y":-6,"x":0,"width":80,"skin":"tongyong_ui/game_ui/tongyong/general/daojishi.png","scaleY":0.8,"scaleX":0.8,"height":90}},{"type":"Image","props":{"y":30,"x":32,"width":80,"visible":false,"skin":"tongyong_ui/game_ui/tongyong/general/daojishi.png","scaleY":0.8,"scaleX":0.8,"height":90,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":6},{"type":"Image","props":{"y":32,"x":32,"visible":false,"skin":"tongyong_ui/game_ui/tongyong/general/daojishi1.png","scaleY":0.5,"scaleX":0.5,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":5},{"type":"Text","props":{"y":19,"x":11,"wordWrap":true,"width":43,"var":"txt_time","text":"00","strokeColor":"#ffffff","stroke":2,"leading":6,"height":26,"fontSize":24,"color":"#8e0200","bold":true,"align":"center"}}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":58,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":58,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":8}],"x":[{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":2},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":4},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":6},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":10},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":12},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":14},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":16},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":18},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":20},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":22}],"rotation":[{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":2},{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":4},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":6},{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":8},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":10},{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":12},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":14},{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":16},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":18},{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":20},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":24}]}},{"target":5,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":5,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":5,"key":"visible","index":1}],"scaleY":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":24}],"scaleX":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":24}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"rotation","index":24}],"blendMode":[{"value":"lighter","tweenMethod":"linearNone","tween":false,"target":5,"key":"blendMode","index":0},{"value":"lighter","tweenMethod":"linearNone","tween":false,"target":5,"key":"blendMode","index":1}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":1},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":24}]}},{"target":6,"keyframes":{"y":[{"value":30,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":0},{"value":30,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"y","index":1}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":1}],"scaleY":[{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":1},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":24}],"scaleX":[{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":1},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":24}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":1},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":24}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.DaoJiShiUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong.effect {
    export class QiFuUI extends View {
		public ani2:Laya.FrameAnimation;
		public ani3:Laya.FrameAnimation;
		public ani4:Laya.FrameAnimation;
		public ani5:Laya.FrameAnimation;
		public img0:Laya.Image;
		public img1:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":611,"height":620,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":65,"x":300,"width":599,"pivotY":65,"pivotX":300,"height":265},"compId":8,"child":[{"type":"Image","props":{"y":60.5,"x":302.5,"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_cd.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":97.5,"x":76.5,"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_bp.png","anchorX":0.5}},{"type":"Image","props":{"y":93.5,"x":519.5,"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_bp.png","anchorX":0.5}}]},{"type":"Image","props":{"y":370,"x":301,"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_g.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":60,"x":308,"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_cg.png","anchorY":0.5,"anchorX":0.5},"compId":5},{"type":"Image","props":{"y":301,"x":306,"var":"img0","skin":"tongyong_ui/game_ui/tongyong/qifu/f_gg1.png","anchorY":0.5,"anchorX":0.5},"compId":3,"child":[{"type":"Image","props":{"y":240,"x":140,"var":"img1","skin":"tongyong_ui/game_ui/tongyong/qifu/f_gg1.png","anchorY":0.5,"anchorX":0.5},"compId":9}]}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":45,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":10}]}}],"name":"ani2","id":2,"frameRate":24,"action":2},{"nodes":[{"target":9,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":9,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":9,"key":"scaleX","index":20}],"blendMode":[{"value":"lighter","tweenMethod":"linearNone","tween":false,"target":9,"key":"blendMode","index":0}],"alpha":[{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":20}]}}],"name":"ani3","id":3,"frameRate":24,"action":2},{"nodes":[{"target":8,"keyframes":{"scaleY":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":10}],"scaleX":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":10}]}},{"target":5,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"backOut","tween":true,"target":5,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":10}],"scaleX":[{"value":2,"tweenMethod":"backOut","tween":true,"target":5,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":10}]}}],"name":"ani4","id":4,"frameRate":24,"action":1},{"nodes":[{"target":3,"keyframes":{"y":[{"value":301,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":0}],"x":[{"value":306,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0}],"scaleY":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":10}],"scaleX":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":10}]}}],"name":"ani5","id":5,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.effect.QiFuUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong.effect {
    export class ShaiZiUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_dice1:Laya.Image;
		public img_dice2:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":240,"height":320},"child":[{"type":"Box","props":{"y":222,"x":124,"width":239,"rotation":0,"height":312,"anchorY":0.7,"anchorX":0.5},"compId":9,"child":[{"type":"Image","props":{"y":212,"x":115.5,"skin":"tongyong_ui/game_ui/tongyong/general/effect/hulu/tu_hulu2.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":203,"x":73.5,"var":"img_dice1","skin":"tongyong_ui/game_ui/tongyong/general/effect/shaizi/shaizi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":203,"x":151.5,"var":"img_dice2","skin":"tongyong_ui/game_ui/tongyong/general/effect/shaizi/shaizi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-179,"x":521,"skin":"tongyong_ui/game_ui/tongyong/general/effect/hulu/tu_hulu1.png","scaleY":0.8,"scaleX":0.8,"rotation":45,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":7}]}],"animations":[{"nodes":[{"target":9,"keyframes":{"y":[{"value":222,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":0},{"value":222,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"y","index":60},{"value":182,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":65},{"value":222,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":70}],"x":[{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"key":"x","index":0},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"key":"x","index":5},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":10},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"x","index":15},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":20},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"x","index":25},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":30},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"x","index":35},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":40},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"x","index":45},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":50},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"x","index":55},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":60},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"x","index":65},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":70}],"rotation":[{"value":10,"tweenMethod":"bounceInOut","tween":true,"target":9,"key":"rotation","index":0},{"value":-10,"tweenMethod":"bounceInOut","tween":true,"target":9,"key":"rotation","index":5},{"value":15,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":10},{"value":-15,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":15},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":20},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":25},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":30},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":35},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":40},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":45},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":50},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":55},{"value":15,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":60},{"value":0,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":65},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":70}]}},{"target":7,"keyframes":{"y":[{"value":154,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":0},{"value":154,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"y","index":80},{"value":-179,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":91}],"x":[{"value":115.5,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":0},{"value":115.5,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"x","index":80},{"value":521,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":91}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"rotation","index":80},{"value":46,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":85},{"value":45,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":91}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":80},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":85},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":91}]}}],"name":"ani1","id":1,"frameRate":30,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.effect.ShaiZiUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong.effect {
    export class ShaiZiThreeUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_dice0:Laya.Image;
		public img_dice1:Laya.Image;
		public img_dice2:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":240,"height":320},"child":[{"type":"Box","props":{"y":222,"x":124,"width":239,"rotation":0,"height":312,"anchorY":0.7,"anchorX":0.5},"compId":9,"child":[{"type":"Image","props":{"y":212,"x":115.5,"skin":"tongyong_ui/game_ui/tongyong/general/effect/hulu1/tu_hulu2.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":160,"x":62,"var":"img_dice0","skin":"tongyong_ui/game_ui/tongyong/general/effect/shaizi/shaizi1.png"}},{"type":"Image","props":{"y":189,"x":154.5,"var":"img_dice1","skin":"tongyong_ui/game_ui/tongyong/general/effect/shaizi/shaizi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":229,"x":113,"var":"img_dice2","skin":"tongyong_ui/game_ui/tongyong/general/effect/shaizi/shaizi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":125,"x":115,"skin":"tongyong_ui/game_ui/tongyong/general/effect/hulu1/tu_hulu1.png","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":7}]}],"animations":[{"nodes":[{"target":9,"keyframes":{"rotation":[{"value":10,"tweenMethod":"bounceInOut","tween":true,"target":9,"key":"rotation","index":0},{"value":-10,"tweenMethod":"bounceInOut","tween":true,"target":9,"key":"rotation","index":5},{"value":15,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":10},{"value":-15,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":15},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":20},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":25},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":30},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":35},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":40},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":45},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":50},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":55},{"value":15,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":60},{"value":0,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":65},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":70}]}},{"target":7,"keyframes":{"y":[{"value":122,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":0},{"value":122,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"y","index":80},{"value":-179,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":91}],"x":[{"value":115.5,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":0},{"value":115.5,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"x","index":80},{"value":521,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":91}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"rotation","index":80},{"value":46,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":85},{"value":45,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":91}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":80},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":85},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":91}]}}],"name":"ani1","id":1,"frameRate":30,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.effect.ShaiZiThreeUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong.effect {
    export class SuiJiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":153,"height":184},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10000.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10000.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":1},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":2},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":5},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":7},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":8},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":9},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10010.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":10},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10011.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":11},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10012.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":12},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10013.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":13},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10014.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":14},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10015.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":15},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10016.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":16},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10017.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":17},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10018.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":18},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10019.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":19}]}}],"name":"ani1","id":1,"frameRate":15,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.effect.SuiJiUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong.effect {
    export class TongPeiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":309.5,"x":617.5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tong.png","anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":322.5,"x":609.5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tong2.png","anchorY":0.5,"anchorX":0.5},"compId":3}]}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":48}],"scaleX":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":48}]}},{"target":2,"keyframes":{"scaleY":[{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":48}],"scaleX":[{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":48}],"alpha":[{"value":0,"tweenMethod":"backInOut","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"alpha","index":48}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.effect.TongPeiUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong.effect {
    export class TongPei1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":193,"x":303,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tong.png","anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":206,"x":295,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tong3.png","anchorY":0.5,"anchorX":0.5},"compId":3}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":48}],"scaleX":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":48}]}},{"target":2,"keyframes":{"scaleY":[{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":48}],"scaleX":[{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":48}],"alpha":[{"value":0,"tweenMethod":"backInOut","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"alpha","index":48}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.effect.TongPei1UI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong.effect {
    export class TongShaUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":309.5,"x":617.5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tong.png","scaleY":1,"scaleX":1,"gray":true,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":2},{"type":"Image","props":{"y":322.5,"x":609.5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tong1.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":3}]}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":48}],"scaleX":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":48}]}},{"target":2,"keyframes":{"scaleY":[{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":48}],"scaleX":[{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":48}],"alpha":[{"value":0,"tweenMethod":"backInOut","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"alpha","index":48}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.effect.TongShaUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong.effect {
    export class TongSha1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":193,"x":303,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tong.png","scaleY":0.4905973856296296,"scaleX":0.4905973856296296,"gray":true,"anchorY":0.5,"anchorX":0.5,"alpha":-0.01880522874074074},"compId":2},{"type":"Image","props":{"y":206,"x":295,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tong4.png","scaleY":2.0188052287407405,"scaleX":2.0188052287407405,"anchorY":0.5,"anchorX":0.5},"compId":3}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":48}],"scaleX":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":48}]}},{"target":2,"keyframes":{"scaleY":[{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":48}],"scaleX":[{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":48}],"alpha":[{"value":0,"tweenMethod":"backInOut","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"alpha","index":48}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.effect.TongSha1UI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong.effect {
    export class XiPaiUI extends View {
		public ani_xipai:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":320,"height":186},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10009.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":1},{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":2},{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":5},{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":7},{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":8}]}}],"name":"ani_xipai","id":1,"frameRate":12,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.effect.XiPaiUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong.effect {
    export class YingUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":185,"height":230},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/effect/ying/10000.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10000.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":1},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":2},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":5},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":7},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":8},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":9},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10010.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":10}]}}],"name":"ani1","id":1,"frameRate":15,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.effect.YingUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong.effect {
    export class ZhuangLUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_banker:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":140},"child":[{"type":"Image","props":{"visible":true,"skin":"tongyong_ui/game_ui/tongyong/general/tu_zhuangk.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":10,"x":97,"visible":true,"var":"img_banker","skin":"tongyong_ui/game_ui/tongyong/general/tu_zhuang.png","anchorY":0.5,"anchorX":0.5},"compId":3}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":1.5,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":10}],"scaleX":[{"value":1.5,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":10}]}},{"target":3,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":11}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":0.2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleY","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":15}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":0.2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleX","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":15}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.effect.ZhuangLUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong.effect {
    export class ZhuangRUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_banker:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":106,"height":144},"child":[{"type":"Image","props":{"y":72,"x":53,"visible":true,"skin":"tongyong_ui/game_ui/tongyong/general/tu_zhuangk.png","anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":10,"x":97,"visible":true,"var":"img_banker","skin":"tongyong_ui/game_ui/tongyong/general/tu_zhuang.png","anchorY":0.5,"anchorX":0.5},"compId":3}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":1.5,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":10}],"scaleX":[{"value":1.5,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":10}]}},{"target":3,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":11}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":0.2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleY","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":15}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":0.2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleX","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":15}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.effect.ZhuangRUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class FangKaUI extends View {
		public btn_close:Laya.Button;
		public list:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":787,"height":531,"centerY":20,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk1.png"}},{"type":"Image","props":{"y":0,"x":785,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk1.png","scaleX":-1}},{"type":"Button","props":{"y":28,"x":783,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Tab","props":{"y":47,"x":386,"width":222,"height":20,"direction":"horizontal","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":-3,"x":0,"stateNum":3,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_n.png","name":"item0","labelStrokeColor":"#32291f","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelFont":"SimHei","labelColors":"#9a8c70,#fdf5dc,#fdf5dc","label":"创建房间","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":-3,"x":221,"stateNum":3,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_l.png","name":"item1","labelStrokeColor":"32291f","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelFont":"SimHei","labelColors":"#9a8c70,#fdf5dc,#fdf5dc","label":"加入房间","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":64,"x":14,"width":759,"height":418},"child":[{"type":"List","props":{"y":8,"x":0,"width":175,"var":"list","spaceY":10,"height":467},"child":[{"type":"TabItemRender","props":{"renderType":"render","runtime":"ui.nqp.game_ui.tongyong.TabItemRenderUI"}}]},{"type":"Box","props":{"y":17,"x":178,"width":566,"height":395},"child":[{"type":"Text","props":{"y":9,"x":9,"wordWrap":true,"width":139,"text":"选择局数：","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#c8bc9f","align":"left"}},{"type":"Box","props":{"y":58,"x":17},"child":[{"type":"CheckBox","props":{"skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"wordWrap":true,"width":49,"text":"5局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":58,"x":147},"child":[{"type":"CheckBox","props":{"skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"wordWrap":true,"width":67,"text":"10局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":58,"x":282},"child":[{"type":"CheckBox","props":{"skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"wordWrap":true,"width":67,"text":"15局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":58,"x":416},"child":[{"type":"CheckBox","props":{"skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"wordWrap":true,"width":67,"text":"20局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Text","props":{"y":123,"x":9,"wordWrap":true,"width":139,"text":"支付方式：","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#c8bc9f","align":"left"},"child":[{"type":"Radio","props":{"visible":false,"label":"label"}}]},{"type":"Box","props":{"y":162,"x":17},"child":[{"type":"CheckBox","props":{"stateNum":3,"skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"wordWrap":true,"width":84,"text":"房主付","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":162,"x":147,"visible":false},"child":[{"type":"CheckBox","props":{"skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"wordWrap":true,"width":84,"text":"AA付","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":231,"x":158},"child":[{"type":"Button","props":{"y":86,"x":-4,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_cj0.png"}}]},{"type":"Text","props":{"y":270,"x":176,"wordWrap":true,"width":80,"text":"消耗：","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#c8bc9f","align":"left"}},{"type":"Text","props":{"y":271,"x":293,"wordWrap":true,"width":80,"text":"0","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":284,"x":270,"skin":"tongyong_ui/game_ui/tongyong/general/icon_money.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":64,"x":14,"width":759,"height":426},"child":[{"type":"Button","props":{"y":93,"x":23,"stateNum":1,"skin":"ui/game_ui/jiaru/1.png"}},{"type":"Button","props":{"y":93,"x":272,"stateNum":1,"skin":"ui/game_ui/jiaru/2.png"}},{"type":"Button","props":{"y":94,"x":523,"stateNum":1,"skin":"ui/game_ui/jiaru/3.png"}},{"type":"Button","props":{"y":174,"x":23,"stateNum":1,"skin":"ui/game_ui/jiaru/4.png"}},{"type":"Button","props":{"y":174,"x":272,"stateNum":1,"skin":"ui/game_ui/jiaru/5.png"}},{"type":"Button","props":{"y":174,"x":521,"stateNum":1,"skin":"ui/game_ui/jiaru/6.png"}},{"type":"Button","props":{"y":255,"x":23,"stateNum":1,"skin":"ui/game_ui/jiaru/7.png"}},{"type":"Button","props":{"y":255,"x":272,"stateNum":1,"skin":"ui/game_ui/jiaru/8.png"}},{"type":"Button","props":{"y":255,"x":521,"stateNum":1,"skin":"ui/game_ui/jiaru/9.png"}},{"type":"Button","props":{"y":337,"x":23,"stateNum":1,"skin":"ui/game_ui/jiaru/cs.png"}},{"type":"Button","props":{"y":337,"x":272,"stateNum":1,"skin":"ui/game_ui/jiaru/0.png"}},{"type":"Button","props":{"y":337,"x":521,"stateNum":1,"skin":"ui/game_ui/jiaru/sc.png"}},{"type":"Clip","props":{"y":23,"x":61,"skin":"ui/game_ui/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":23,"x":182,"visible":false,"skin":"ui/game_ui/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":23,"x":303,"visible":false,"skin":"ui/game_ui/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":23,"x":423,"visible":false,"skin":"ui/game_ui/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":23,"x":543,"visible":false,"skin":"ui/game_ui/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":23,"x":664,"visible":false,"skin":"ui/game_ui/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Box","props":{"y":76,"x":28},"child":[{"type":"Image","props":{"skin":"ui/game_ui/jiaru/srd.png"}},{"type":"Image","props":{"y":1,"x":125,"skin":"ui/game_ui/jiaru/srd.png"}},{"type":"Image","props":{"y":3,"x":244,"skin":"ui/game_ui/jiaru/srd.png"}},{"type":"Image","props":{"y":4,"x":364,"skin":"ui/game_ui/jiaru/srd.png"}},{"type":"Image","props":{"y":4,"x":483,"skin":"ui/game_ui/jiaru/srd.png"}},{"type":"Image","props":{"y":5,"x":602,"skin":"ui/game_ui/jiaru/srd.png"}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.tongyong.TabItemRenderUI",ui.nqp.game_ui.tongyong.TabItemRenderUI);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.FangKaUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class FangKa_ChuangJianUI extends View {
		public btn_close:Laya.Button;
		public box_round0:Laya.Box;
		public cb_round0:Laya.CheckBox;
		public txt_round0:laya.display.Text;
		public box_round1:Laya.Box;
		public cb_round1:Laya.CheckBox;
		public txt_round1:laya.display.Text;
		public box_round2:Laya.Box;
		public cb_round2:Laya.CheckBox;
		public txt_round2:laya.display.Text;
		public box_round3:Laya.Box;
		public cb_round3:Laya.CheckBox;
		public txt_round3:laya.display.Text;
		public box_pay0:Laya.Box;
		public cb_pay0:Laya.CheckBox;
		public txt_pay0:laya.display.Text;
		public box_pay1:Laya.Box;
		public cb_pay1:Laya.CheckBox;
		public txt_pay1:laya.display.Text;
		public box_create:Laya.Box;
		public btn_create:Laya.Button;
		public txt_money:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"scaleY":1.25,"scaleX":1.25,"centerY":0,"centerX":0},"child":[{"type":"Box","props":{"width":789,"height":511},"child":[{"type":"Image","props":{"y":0,"x":2,"width":393,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk0.png","sizeGrid":"109,72,214,72","height":531}},{"type":"Image","props":{"y":0,"x":784,"width":393,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk0.png","sizeGrid":"109,72,214,72","scaleX":-1,"height":531}},{"type":"Button","props":{"y":31,"x":781,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":8,"x":298,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_cjfj.png","centerX":0}},{"type":"Image","props":{"y":35,"x":398,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Text","props":{"y":110,"x":41,"width":139,"text":"选择局数：","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#c8bc9f","align":"left"}},{"type":"Box","props":{"y":159,"x":49,"var":"box_round0"},"child":[{"type":"CheckBox","props":{"var":"cb_round0","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"width":49,"var":"txt_round0","text":"5局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":159,"x":179,"var":"box_round1"},"child":[{"type":"CheckBox","props":{"var":"cb_round1","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"width":67,"var":"txt_round1","text":"10局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":159,"x":314,"var":"box_round2"},"child":[{"type":"CheckBox","props":{"var":"cb_round2","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"width":67,"var":"txt_round2","text":"15局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":159,"x":448,"var":"box_round3"},"child":[{"type":"CheckBox","props":{"var":"cb_round3","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"width":67,"var":"txt_round3","text":"20局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Text","props":{"y":224,"x":41,"width":139,"text":"支付方式：","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#c8bc9f","align":"left"},"child":[{"type":"Radio","props":{"visible":false,"label":"label"}}]},{"type":"Box","props":{"y":263,"x":49,"var":"box_pay0"},"child":[{"type":"CheckBox","props":{"var":"cb_pay0","stateNum":3,"skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"width":84,"var":"txt_pay0","text":"房主付","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":263,"x":179,"visible":false,"var":"box_pay1"},"child":[{"type":"CheckBox","props":{"var":"cb_pay1","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"width":84,"var":"txt_pay1","text":"AA付","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":332,"x":290,"var":"box_create"},"child":[{"type":"Button","props":{"y":87,"x":0,"var":"btn_create","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_cj0.png"}}]},{"type":"Text","props":{"y":347,"x":281,"width":80,"text":"消耗：","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#c8bc9f","align":"left"}},{"type":"Text","props":{"y":348,"x":398,"width":80,"var":"txt_money","text":"0","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":361,"x":375,"skin":"tongyong_ui/game_ui/tongyong/general/icon_money.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.FangKa_ChuangJianUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class FangKa_GoUI extends View {
		public btn_start:Laya.Button;
		public btn_invite:Laya.Button;
		public btn_dismiss:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Button","props":{"y":360,"x":640,"width":200,"var":"btn_start","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_2.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":13,"x":35,"skin":"niuniu_ui/game_ui/niuniu/tu_ksyx.png"}}]},{"type":"Button","props":{"y":360,"x":420,"width":200,"var":"btn_invite","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d4725","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"centerY":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":13,"x":40,"skin":"niuniu_ui/game_ui/niuniu/tu_yqhy.png"}}]},{"type":"Button","props":{"y":360,"x":860,"width":200,"var":"btn_dismiss","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_3.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#397119","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"centerY":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":10,"x":35,"skin":"niuniu_ui/game_ui/niuniu/tu_jsfj.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.FangKa_GoUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class FangKa_TipsUI extends View {
		public txt_label:laya.display.Text;
		public btn_enter:Laya.Button;
		public btn_cancle:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":608,"scaleY":1.25,"scaleX":1.25,"height":358,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":604,"width":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk.png","sizeGrid":"100,0,150,0","scaleX":-1,"height":380}},{"type":"Image","props":{"y":0,"x":0,"width":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk.png","sizeGrid":"100,0,150,0","height":380}},{"type":"Image","props":{"y":37,"x":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":35,"x":304,"skin":"tongyong_ui/game_ui/tongyong/general/tit_jiesan.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":71,"x":38,"wordWrap":true,"width":530,"var":"txt_label","valign":"middle","leading":8,"height":182,"fontSize":24,"color":"#c8bc9f","align":"center"}},{"type":"Button","props":{"y":303,"var":"btn_enter","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qd.png","right":30,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":303,"var":"btn_cancle","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qx.png","left":30,"anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.FangKa_TipsUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class FaPaiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":80,"height":80},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"tongyong_ui/game_ui/tongyong/general/effect/fapai_1/10001.png"},"compId":3}],"animations":[{"nodes":[{"target":3,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_1/10000.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_1/10001.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_1/10002.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":6}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.FaPaiUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class FenXiangUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"width":793,"skin":"tongyong_ui/game_ui/tongyong/dating/game_popout_bg.png","height":531,"centerY":-17,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":33,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_fx.png","centerX":-1}},{"type":"Image","props":{"y":139,"x":530,"skin":"tongyong_ui/game_ui/tongyong/hud/fx_szs.png"}},{"type":"Button","props":{"y":41,"x":762,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":263,"x":271,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/fx_wx.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":134,"x":1,"wordWrap":true,"width":119,"text":"好友/群","leading":6,"height":36,"fontSize":28,"font":"SimHei","color":"#ffee7d","align":"center"}}]},{"type":"Button","props":{"y":263,"x":525,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/fx_pyq.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":134,"x":3,"wordWrap":true,"width":119,"text":"好友/群","leading":6,"height":36,"fontSize":28,"font":"SimHei","color":"#ffee7d","align":"center"}}]},{"type":"Text","props":{"y":429,"x":36,"wordWrap":true,"width":719,"text":"每日分享朋友圈，可获得1-3张房卡","leading":6,"height":36,"fontSize":28,"font":"SimHei","color":"#ffffff","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.FenXiangUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class GuangUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":600},"child":[{"type":"Image","props":{"y":298,"x":303,"skin":"tongyong_ui/game_ui/tongyong/general/tu_gs1.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":9}],"animations":[{"nodes":[{"target":9,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":100}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.GuangUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class HudUI extends View {
		public ani1:Laya.FrameAnimation;
		public box_left:Laya.Box;
		public btn_help:Laya.Button;
		public btn_record:Laya.Button;
		public btn_back:Laya.Box;
		public box_btn_top_left:Laya.Box;
		public btn_gren:Laya.Image;
		public txt_name:Laya.Label;
		public img_txk:Laya.Image;
		public btn_vip:Laya.Button;
		public clip_vip:Laya.Clip;
		public btn_fresh:Laya.Box;
		public clip_money:Laya.Clip;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"top":-1,"right":-1,"left":-1},"compId":133,"child":[{"type":"Image","props":{"y":-2,"x":-1,"top":-1,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_d1.png","sizeGrid":"0,400,0,0","left":-1,"height":102}},{"type":"Box","props":{"y":-2,"x":1282,"width":458,"var":"box_left","top":-1,"right":0,"height":81,"anchorX":1},"child":[{"type":"Button","props":{"y":43,"x":312,"var":"btn_help","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_bangzhu.png","name":"item1","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":43,"x":213,"var":"btn_record","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_zhanji.png","name":"item0","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":103,"var":"btn_back","top":-9,"right":0,"height":92,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":52,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_fanhui.png","right":16,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"y":-1,"x":0,"width":653,"var":"box_btn_top_left","top":-1,"height":93,"anchorY":0,"anchorX":0},"child":[{"type":"Image","props":{"y":46,"x":47,"width":72,"var":"btn_gren","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","height":72,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":45,"x":182,"width":169,"var":"txt_name","leading":8,"height":35,"fontSize":30,"color":"#f5fbb1","anchorY":0.5,"anchorX":0.5,"align":"left"}},{"type":"Image","props":{"y":7,"x":8,"width":78,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk0.png","height":78}},{"type":"Button","props":{"y":52,"x":336,"var":"btn_vip","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_top.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":10,"x":66,"width":41,"height":27},"child":[{"type":"Clip","props":{"var":"clip_vip","skin":"tongyong_ui/game_ui/tongyong/dating/clip_vip.png","clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Box","props":{"y":12,"x":418,"width":332,"var":"btn_fresh","height":62},"child":[{"type":"Image","props":{"y":13.5,"x":41,"width":211,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_k1ss.png","height":37}},{"type":"Clip","props":{"y":19.5,"x":69,"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/dating/clip_money1.png","index":9,"clipX":11}},{"type":"Image","props":{"y":32.5,"x":43,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":37.5,"x":264,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sx.png","anchorY":0.5,"anchorX":0.5}}]}]}]},{"type":"Box","props":{"right":-1,"left":-1,"bottom":-1},"compId":134,"child":[{"type":"Image","props":{"y":1,"x":-1,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_d2.png","right":-1,"left":-1,"bottom":-1}}]}]}],"animations":[{"nodes":[{"target":133,"keyframes":{"top":[{"value":-85,"tweenMethod":"linearNone","tween":true,"target":133,"key":"top","index":0},{"value":-22,"tweenMethod":"linearNone","tween":true,"target":133,"key":"top","index":4},{"value":-1,"tweenMethod":"linearNone","tween":false,"target":133,"label":null,"key":"top","index":8}]}},{"target":134,"keyframes":{"bottom":[{"value":-67,"tweenMethod":"linearNone","tween":true,"target":134,"key":"bottom","index":0},{"value":-17.5,"tweenMethod":"linearNone","tween":true,"target":134,"key":"bottom","index":4},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":134,"key":"bottom","index":8}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.HudUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class jiangtouUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":40,"height":30},"child":[{"type":"Image","props":{"y":0,"x":30,"skin":"tongyong_ui/game_ui/tongyong/general/tu_jiantou.png","rotation":90},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":30,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":40,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":5},{"value":30,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.jiangtouUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class JiaRuUI extends View {
		public btn_1:Laya.Button;
		public btn_2:Laya.Button;
		public btn_3:Laya.Button;
		public btn_4:Laya.Button;
		public btn_5:Laya.Button;
		public btn_6:Laya.Button;
		public btn_7:Laya.Button;
		public btn_8:Laya.Button;
		public btn_9:Laya.Button;
		public btn_re:Laya.Button;
		public btn_0:Laya.Button;
		public btn_del:Laya.Button;
		public clip_1:Laya.Clip;
		public clip_2:Laya.Clip;
		public clip_3:Laya.Clip;
		public clip_4:Laya.Clip;
		public clip_5:Laya.Clip;
		public clip_6:Laya.Clip;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"y":360,"x":640,"width":1280,"height":720,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":793,"height":520,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":900,"skin":"tongyong_ui/game_ui/tongyong/dating/game_popout_bg.png","height":590,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":182,"x":103,"skin":"tongyong_ui/game_ui/tongyong/jiaru/srd.png"}},{"type":"Image","props":{"y":183,"x":228,"skin":"tongyong_ui/game_ui/tongyong/jiaru/srd.png"}},{"type":"Image","props":{"y":185,"x":347,"skin":"tongyong_ui/game_ui/tongyong/jiaru/srd.png"}},{"type":"Image","props":{"y":186,"x":467,"skin":"tongyong_ui/game_ui/tongyong/jiaru/srd.png"}},{"type":"Image","props":{"y":186,"x":586,"skin":"tongyong_ui/game_ui/tongyong/jiaru/srd.png"}},{"type":"Image","props":{"y":187,"x":705,"skin":"tongyong_ui/game_ui/tongyong/jiaru/srd.png"}},{"type":"Image","props":{"y":31,"skin":"tongyong_ui/game_ui/tongyong/general/tu_jr.png","centerX":2}}]},{"type":"Button","props":{"y":164,"x":42,"var":"btn_1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/1.png"}},{"type":"Button","props":{"y":164,"x":291,"var":"btn_2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/2.png"}},{"type":"Button","props":{"y":165,"x":541,"var":"btn_3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/3.png"}},{"type":"Button","props":{"y":245,"x":42,"var":"btn_4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/4.png"}},{"type":"Button","props":{"y":245,"x":291,"var":"btn_5","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/5.png"}},{"type":"Button","props":{"y":245,"x":540,"var":"btn_6","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/6.png"}},{"type":"Button","props":{"y":326,"x":42,"var":"btn_7","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/7.png"}},{"type":"Button","props":{"y":326,"x":291,"var":"btn_8","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/8.png"}},{"type":"Button","props":{"y":326,"x":540,"var":"btn_9","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/9.png"}},{"type":"Button","props":{"y":408,"x":42,"var":"btn_re","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/cs.png"}},{"type":"Button","props":{"y":408,"x":291,"var":"btn_0","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/0.png"}},{"type":"Button","props":{"y":408,"x":540,"var":"btn_del","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/sc.png"}},{"type":"Clip","props":{"y":94,"x":80,"var":"clip_1","skin":"tongyong_ui/game_ui/tongyong/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":94,"x":201,"visible":false,"var":"clip_2","skin":"tongyong_ui/game_ui/tongyong/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":94,"x":321,"visible":false,"var":"clip_3","skin":"tongyong_ui/game_ui/tongyong/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":94,"x":442,"visible":false,"var":"clip_4","skin":"tongyong_ui/game_ui/tongyong/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":94,"x":562,"visible":false,"var":"clip_5","skin":"tongyong_ui/game_ui/tongyong/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":94,"x":683,"visible":false,"var":"clip_6","skin":"tongyong_ui/game_ui/tongyong/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Button","props":{"y":10,"x":807,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.JiaRuUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class JieSanUI extends View {
		public btn_enter:Laya.Button;
		public btn_cancle:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":608,"height":358,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":604,"width":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk.png","sizeGrid":"100,0,150,0","scaleX":-1,"height":380}},{"type":"Image","props":{"y":0,"x":0,"width":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk.png","sizeGrid":"100,0,150,0","height":380}},{"type":"Image","props":{"y":37,"x":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":35,"x":304,"skin":"tongyong_ui/game_ui/tongyong/general/tit_jiesan.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":303,"var":"btn_enter","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_jj.png","right":30,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":303,"var":"btn_cancle","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_tx.png","left":30,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":149,"x":303,"width":526,"height":32,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"y":15,"x":49.5,"skin":"tongyong_ui/game_ui/tongyong/general/clip_jiesan.png","clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":15,"x":156.5,"skin":"tongyong_ui/game_ui/tongyong/general/clip_jiesan.png","clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":15,"x":262.5,"skin":"tongyong_ui/game_ui/tongyong/general/clip_jiesan.png","clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":15,"x":369.5,"skin":"tongyong_ui/game_ui/tongyong/general/clip_jiesan.png","clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":15,"x":475.5,"skin":"tongyong_ui/game_ui/tongyong/general/clip_jiesan.png","clipY":3,"anchorY":0.5,"anchorX":0.5}}]},{"type":"ProgressBar","props":{"y":169,"x":40,"width":524,"skin":"tongyong_ui/game_ui/tongyong/general/progress.png","sizeGrid":"0,30,0,30","height":11}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.JieSanUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
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

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":250,"x":636,"var":"img_0","skin":"tongyong_ui/game_ui/tongyong/general/tu_gs.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":44},{"type":"Image","props":{"width":660,"skin":"tongyong_ui/game_ui/tongyong/dating/game_popout_bg.png","sizeGrid":"20,20,0,20","height":380,"centerY":2,"centerX":-4,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_1","skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_sl2.png","centerY":-190,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_2","skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_js.png","centerY":-180,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":208,"x":626,"var":"img_3","skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":404,"x":493,"width":284,"height":229,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":106,"x":49,"wordWrap":true,"width":150,"var":"txt_name","text":"玩家名字六字","leading":6,"height":20,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":57,"x":121,"skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":57,"x":121,"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":66,"x":353,"width":167,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Text","props":{"y":71,"x":255,"wordWrap":true,"width":102,"text":"我的输赢：","leading":6,"height":20,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":72,"x":363,"wordWrap":true,"width":145,"var":"txt_benefit","text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffe16b","align":"left"}},{"type":"Image","props":{"y":22,"x":353,"width":167,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Text","props":{"y":27,"x":255,"wordWrap":true,"width":102,"text":"我的下注：","leading":6,"height":20,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":28,"x":363,"wordWrap":true,"width":145,"var":"txt_bet","text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffe16b","align":"left"}},{"type":"Image","props":{"y":145,"x":2,"skin":"tongyong_ui/game_ui/tongyong/general/tu_d5.png"}},{"type":"Text","props":{"y":176,"x":10,"width":552,"var":"txt_result","text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":4,"x":72,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png"}}]}]}],"animations":[{"nodes":[{"target":44,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":44,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":44,"key":"rotation","index":100}]}}],"name":"ani2","id":2,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.JieSuanUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class JieSuanRenderUI extends View {
		public img_bg:Laya.Image;
		public lab_name:Laya.Label;
		public lab_point:Laya.Label;
		public lab_multiple:Laya.Label;
		public lab_money:Laya.Label;
		public img_banker:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":599,"height":38},"child":[{"type":"Box","props":{"y":0,"x":0,"width":599,"renderType":"render","height":38},"child":[{"type":"Image","props":{"y":0,"x":1,"width":569,"var":"img_bg","skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_zj.png","scaleX":1.05,"height":38}},{"type":"Label","props":{"y":20,"x":122,"width":140,"var":"lab_name","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":20,"x":244,"width":63,"var":"lab_point","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":20,"x":370,"width":63,"var":"lab_multiple","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":20,"x":505,"width":100,"var":"lab_money","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":19,"x":30,"var":"img_banker","skin":"tongyong_ui/game_ui/tongyong/general/tu_zhuang.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.JieSuanRenderUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class JieSuanRender1UI extends View {
		public img_bg:Laya.Image;
		public lab_name:Laya.Label;
		public lab_point:Laya.Label;
		public lab_betmultiple:Laya.Label;
		public lab_money:Laya.Label;
		public img_banker:Laya.Image;
		public lab_cardtype:Laya.Label;
		public lab_bankermultiple:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":725,"height":38},"child":[{"type":"Box","props":{"y":0,"x":0,"width":725,"renderType":"render","height":38},"child":[{"type":"Image","props":{"y":0,"x":1,"width":725,"var":"img_bg","skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_zj.png","scaleX":1,"height":38}},{"type":"Label","props":{"y":21,"x":118,"width":141,"var":"lab_name","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":21,"x":327,"width":63,"var":"lab_point","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":21,"x":526,"width":63,"var":"lab_betmultiple","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":21,"x":626,"width":100,"var":"lab_money","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":19,"x":30,"var":"img_banker","skin":"tongyong_ui/game_ui/tongyong/general/tu_zhuang.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":21,"x":227,"width":63,"var":"lab_cardtype","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":21,"x":427,"width":63,"var":"lab_bankermultiple","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.JieSuanRender1UI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
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
            this.createView(ui.nqp.game_ui.tongyong.JieSuanRender2UI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
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
            this.createView(ui.nqp.game_ui.tongyong.JieSuanRender3UI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class JieSuan_FangKaUI extends View {
		public ani2:Laya.FrameAnimation;
		public lab_xinxi:Laya.Label;
		public list_settle:Laya.List;
		public btn_create_room:Laya.Button;
		public btn_back_hud:Laya.Button;

        public static  uiView:any ={"type":"View","props":{},"child":[{"type":"Box","props":{"width":726,"height":527,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":154,"x":359,"skin":"tongyong_ui/game_ui/tongyong/general/tu_gs.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":44},{"type":"Image","props":{"y":294,"x":363,"width":800,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk1.png","sizeGrid":"10,10,0,10","height":460,"centerY":30,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":74,"x":363,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_sl2.png","centerY":-190,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":84,"x":363,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_js.png","centerY":-180,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":112,"x":349,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":418,"x":367,"wordWrap":true,"width":495,"var":"lab_xinxi","text":"5S后开始第1局，本轮共5局","leading":6,"height":23,"fontSize":20,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":180,"x":20,"width":681,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_d1.png","sizeGrid":"0,176,0,164","height":38,"alpha":0.6}},{"type":"Label","props":{"y":204,"x":138,"wordWrap":true,"width":63,"text":"昵称","leading":6,"height":23,"fontSize":20,"color":"#2d5fc8","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":204,"x":254,"wordWrap":true,"width":63,"text":"底分","leading":6,"height":23,"fontSize":20,"color":"#2d5fc8","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":204,"x":370,"wordWrap":true,"width":63,"text":"倍数","leading":6,"height":23,"fontSize":20,"color":"#2d5fc8","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":204,"x":493,"wordWrap":true,"width":63,"text":"积分","leading":6,"height":23,"fontSize":20,"color":"#2d5fc8","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"List","props":{"y":227,"x":18,"width":683,"var":"list_settle","spaceY":8,"repeatY":4,"height":180},"child":[{"type":"JieSuanRender2","props":{"name":"render","runtime":"ui.nqp.game_ui.tongyong.JieSuanRender2UI"}}]},{"type":"Label","props":{"y":204,"x":611,"wordWrap":true,"width":84,"text":"累计积分","leading":6,"height":23,"fontSize":20,"color":"#2d5fc8","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Button","props":{"y":467,"x":218,"width":200,"visible":false,"var":"btn_create_room","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_2.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d4725","labelStroke":2,"labelSize":26,"labelPadding":"-6","labelColors":"#ffffff","labelBold":true,"label":"创建房间","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":467,"x":508,"width":200,"visible":false,"var":"btn_back_hud","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_3.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#397119","labelStroke":2,"labelSize":26,"labelPadding":"-6","labelColors":"#ffffff","labelBold":true,"label":"返回大厅","anchorY":0.5,"anchorX":0.5}}]}],"animations":[{"nodes":[{"target":44,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":44,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":44,"key":"rotation","index":100}]}}],"name":"ani2","id":2,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.tongyong.JieSuanRender2UI",ui.nqp.game_ui.tongyong.JieSuanRender2UI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.JieSuan_FangKaUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class Loading1UI extends View {
		public ani1:Laya.FrameAnimation;
		public ani:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":80,"height":80},"child":[{"type":"Box","props":{"width":80,"var":"ani","height":80,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/logo/load0000.png","rotation":75.78947368421052,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":3},{"type":"Image","props":{"width":101,"skin":"tongyong_ui/game_ui/tongyong/logo/load0001.png","height":108,"centerY":3,"centerX":3,"anchorY":0.5,"anchorX":0.5},"compId":2}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/logo/load0001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/logo/load0002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":1},{"value":"tongyong_ui/game_ui/tongyong/logo/load0003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":2},{"value":"tongyong_ui/game_ui/tongyong/logo/load0004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"tongyong_ui/game_ui/tongyong/logo/load0005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/logo/load0006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":5},{"value":"tongyong_ui/game_ui/tongyong/logo/load0007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/logo/load0008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":7},{"value":"tongyong_ui/game_ui/tongyong/logo/load0009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":8},{"value":"tongyong_ui/game_ui/tongyong/logo/load0010.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":9},{"value":"tongyong_ui/game_ui/tongyong/logo/load0011.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":10},{"value":"tongyong_ui/game_ui/tongyong/logo/load0012.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":11},{"value":"tongyong_ui/game_ui/tongyong/logo/load0013.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":12},{"value":"tongyong_ui/game_ui/tongyong/logo/load0014.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":13},{"value":"tongyong_ui/game_ui/tongyong/logo/load0015.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":14},{"value":"tongyong_ui/game_ui/tongyong/logo/load0016.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":15},{"value":"tongyong_ui/game_ui/tongyong/logo/load0017.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":16},{"value":"tongyong_ui/game_ui/tongyong/logo/load0018.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":17},{"value":"tongyong_ui/game_ui/tongyong/logo/load0019.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":18},{"value":"tongyong_ui/game_ui/tongyong/logo/load0020.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":19}]}},{"target":3,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":19}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.Loading1UI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class PaiJu_xqUI extends View {
		public btn_close:Laya.Button;
		public panel_xq:Laya.Panel;
		public txt_info:Laya.Label;
		public list_info:Laya.List;
		public txt_request:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":787,"height":531,"centerY":20,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":391,"width":395,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk2.png","scaleX":-1,"height":531}},{"type":"Image","props":{"y":0,"x":390,"width":395,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk2.png","height":531}},{"type":"Image","props":{"y":32,"x":388,"skin":"tongyong_ui/game_ui/tongyong/hud/paiju.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":20,"x":766,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Panel","props":{"y":77,"x":23,"width":739,"var":"panel_xq","height":404},"child":[{"type":"Label","props":{"y":0,"x":13,"wordWrap":true,"width":709,"var":"txt_info","overflow":"scroll","height":18,"align":"left"}}]},{"type":"List","props":{"y":77,"x":35,"width":731,"var":"list_info","spaceY":8,"repeatY":13,"height":411},"child":[{"type":"PaiJu_xqT","props":{"name":"render","runtime":"ui.nqp.game_ui.tongyong.PaiJu_xqTUI"}}]},{"type":"Label","props":{"y":252,"x":336,"var":"txt_request","text":"请求数据中","fontSize":22,"color":"#ffffff"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.tongyong.PaiJu_xqTUI",ui.nqp.game_ui.tongyong.PaiJu_xqTUI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.PaiJu_xqUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class PaiJu_xqTUI extends View {
		public txt_title:Laya.Label;
		public txt_info:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":731,"height":27},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":115,"var":"txt_title","leading":20,"height":27,"fontSize":22,"color":"#c8bc9f","align":"left"}},{"type":"Label","props":{"y":0,"x":111,"wordWrap":true,"width":600,"var":"txt_info","leading":20,"height":21,"fontSize":22,"color":"#efda8b","align":"left"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.PaiJu_xqTUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class PaiXeiUI extends View {
		public ani_chupai:Laya.FrameAnimation;
		public cards:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":110,"height":120},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/tu_paixei.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":53,"x":12,"width":47,"var":"cards","height":52},"compId":5,"child":[{"type":"Image","props":{"y":13,"x":32,"skin":"tongyong_ui/game_ui/tongyong/general/tu_paixeip.png","renderType":"render","anchorY":0.5,"anchorX":0.5},"compId":3},{"type":"Image","props":{"y":18,"x":29,"skin":"tongyong_ui/game_ui/tongyong/general/tu_paixeip.png","renderType":"render","anchorY":0.5,"anchorX":0.5},"compId":7},{"type":"Image","props":{"y":24,"x":25,"skin":"tongyong_ui/game_ui/tongyong/general/tu_paixeip.png","renderType":"render","anchorY":0.5,"anchorX":0.5},"compId":6},{"type":"Image","props":{"y":8,"x":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_paixeid.png","renderType":"mask"}}]}],"animations":[{"nodes":[{"target":3,"keyframes":{"y":[{"value":-14,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":0},{"value":13,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"y","index":5}],"x":[{"value":46,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":32,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"x","index":5}]}},{"target":6,"keyframes":{"y":[{"value":-14,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":0},{"value":-14,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"y","index":6},{"value":24,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":12}],"x":[{"value":45,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":0},{"value":45,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"x","index":6},{"value":25,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":12}]}},{"target":7,"keyframes":{"y":[{"value":-7,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":0},{"value":-7,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"y","index":3},{"value":18,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":8}],"x":[{"value":43,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":0},{"value":43,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"x","index":3},{"value":29,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":8}]}},{"target":5,"keyframes":{"var":[{"value":"","tweenMethod":"linearNone","tween":false,"target":5,"key":"var","index":12}]}}],"name":"ani_chupai","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.PaiXeiUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class PaiXei1UI extends View {
		public ani1:Laya.FrameAnimation;
		public img_card:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":140,"height":100},"child":[{"type":"Image","props":{"y":0,"x":-1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_paixie0_2.png"}},{"type":"Image","props":{"y":-5,"x":-2,"var":"img_card","skin":"tongyong_ui/game_ui/tongyong/general/tu_paixie0_0.png"},"compId":4},{"type":"Image","props":{"y":-4,"x":-3,"skin":"tongyong_ui/game_ui/tongyong/general/tu_paixie0_1.png"}}],"animations":[{"nodes":[{"target":4,"keyframes":{"y":[{"value":-69,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":0},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":12}],"x":[{"value":11,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":0},{"value":-2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":12}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.PaiXei1UI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class PiPeiUI extends View {
		public box:Laya.Box;
		public img_tips:Laya.Image;
		public btn_cancle:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":340,"var":"box","height":98,"centerY":-40,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Loading1","props":{"y":40,"centerX":-122,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.game_ui.tongyong.Loading1UI"}},{"type":"Image","props":{"y":53,"x":209,"var":"img_tips","skin":"tongyong_ui/game_ui/tongyong/general/tu_ppp.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"width":230,"var":"btn_cancle","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_3.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#309d26","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","labelBold":true,"height":70,"centerY":78,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":11,"skin":"tongyong_ui/game_ui/tongyong/general/tu_qx.png","centerX":0}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.tongyong.Loading1UI",ui.nqp.game_ui.tongyong.Loading1UI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.PiPeiUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class QiFuUI extends View {
		public btn_close:Laya.Button;
		public box_qifu0:Laya.Box;
		public img_type0:Laya.Image;
		public txt_money0:Laya.Label;
		public txt_name0:Laya.Label;
		public box_qifu1:Laya.Box;
		public img_type1:Laya.Image;
		public txt_money1:Laya.Label;
		public txt_name1:Laya.Label;
		public box_qifu2:Laya.Box;
		public img_type2:Laya.Image;
		public txt_money2:Laya.Label;
		public txt_name2:Laya.Label;
		public box_qifu3:Laya.Box;
		public img_type3:Laya.Image;
		public txt_money3:Laya.Label;
		public txt_name3:Laya.Label;
		public box_qifu4:Laya.Box;
		public img_type4:Laya.Image;
		public txt_name4:Laya.Label;
		public txt_money4:Laya.Label;
		public box_qifu5:Laya.Box;
		public img_type5:Laya.Image;
		public txt_name5:Laya.Label;
		public txt_money5:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"x":-208,"skin":"tongyong_ui/game_ui/tongyong/qifu/game_popout_qfbg.png","sizeGrid":"0,0,0,0","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":35,"x":432,"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_qf.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":98,"x":1047,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":273,"x":392,"width":227,"var":"box_qifu0","height":215,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_k.png","sizeGrid":"59,0,34,0"}},{"type":"Image","props":{"y":-23,"x":35,"var":"img_type0","skin":"tongyong_ui/game_ui/tongyong/qifu/f_xs2.png"}},{"type":"Image","props":{"y":160,"x":48,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","anchorY":0,"anchorX":0}},{"type":"Label","props":{"y":178,"x":87,"width":88,"var":"txt_money0","text":"1/次","height":28,"fontSize":24,"font":"Microsoft YaHei","color":"#005095","bold":true,"align":"center"}},{"type":"Label","props":{"y":132,"x":88,"width":50,"var":"txt_name0","text":"洗手","height":30,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff","bold":false}}]},{"type":"Box","props":{"y":273,"x":640,"width":226,"var":"box_qifu1","height":215,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_k.png","sizeGrid":"59,0,34,0"}},{"type":"Image","props":{"y":80,"x":113,"var":"img_type1","skin":"tongyong_ui/game_ui/tongyong/qifu/f_px2.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":160,"x":48,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","anchorY":0,"anchorX":0}},{"type":"Label","props":{"y":178,"x":87,"width":88,"var":"txt_money1","text":"10/天","height":28,"fontSize":24,"font":"Microsoft YaHei","color":"#005095","bold":true,"align":"center"}},{"type":"Label","props":{"y":132,"x":88,"width":50,"var":"txt_name1","text":"貔貅","height":30,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff","bold":false}}]},{"type":"Box","props":{"y":273,"x":887,"width":227,"var":"box_qifu2","height":215,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_k.png","sizeGrid":"59,0,34,0"}},{"type":"Image","props":{"y":31,"x":81,"var":"img_type2","skin":"tongyong_ui/game_ui/tongyong/qifu/f_gsy2.png"}},{"type":"Image","props":{"y":160,"x":48,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png"}},{"type":"Label","props":{"y":178,"x":87,"width":88,"var":"txt_money2","text":"10/天","height":28,"fontSize":24,"font":"Microsoft YaHei","color":"#005095","bold":true,"align":"center"}},{"type":"Label","props":{"y":132,"x":77,"width":73,"var":"txt_name2","text":"观世音","height":30,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff","bold":false}}]},{"type":"Box","props":{"y":495,"x":392,"var":"box_qifu3","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-2,"x":0,"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_k.png","sizeGrid":"59,0,34,0"}},{"type":"Image","props":{"y":11,"var":"img_type3","skin":"tongyong_ui/game_ui/tongyong/qifu/f_gg2.png","centerX":0}},{"type":"Image","props":{"y":160,"x":48,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png"}},{"type":"Label","props":{"y":178,"x":87,"width":88,"var":"txt_money3","text":"10/天","height":28,"fontSize":24,"font":"Microsoft YaHei","color":"#005095","bold":true,"align":"center"}},{"type":"Label","props":{"y":132,"x":89,"width":50,"var":"txt_name3","text":"关公","height":30,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff","bold":false}}]},{"type":"Box","props":{"y":495,"x":640,"var":"box_qifu4","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_k.png","sizeGrid":"59,0,34,0"}},{"type":"Image","props":{"y":14,"x":71,"var":"img_type4","skin":"tongyong_ui/game_ui/tongyong/qifu/f_cs2.png"}},{"type":"Label","props":{"y":132,"x":89,"width":50,"var":"txt_name4","text":"财神","height":30,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff","bold":false}},{"type":"Label","props":{"y":178,"x":87,"width":88,"var":"txt_money4","text":"10/天","height":28,"fontSize":24,"font":"Microsoft YaHei","color":"#005095","bold":true,"align":"center"}},{"type":"Image","props":{"y":160,"x":48,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","anchorY":0,"anchorX":0}}]},{"type":"Box","props":{"y":495,"x":887,"var":"box_qifu5","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_k.png"}},{"type":"Image","props":{"y":25,"x":69,"var":"img_type5","skin":"tongyong_ui/game_ui/tongyong/qifu/f_tdg2.png"}},{"type":"Label","props":{"y":132,"x":77,"width":73,"var":"txt_name5","text":"土地公","height":33,"fontSize":24,"font":"Microsoft YaHei","color":"#ffffff","bold":false}},{"type":"Label","props":{"y":178,"x":87,"width":88,"var":"txt_money5","text":"10/天","height":28,"fontSize":24,"font":"Microsoft YaHei","color":"#005095","bold":true,"align":"center"}},{"type":"Image","props":{"y":160,"x":48,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","anchorY":0,"anchorX":0}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.QiFuUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class ShangZhuangLBUI extends View {
		public btn_close:Laya.Button;
		public btn_shangzhuang:Laya.Button;
		public txt_limit:Laya.Label;
		public list_player:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":341,"height":531,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-1,"x":367,"width":200,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk3.png","sizeGrid":"100,100,10,100","scaleX":-1,"height":531}},{"type":"Image","props":{"y":-1,"x":-32,"width":200,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk3.png","sizeGrid":"100,100,10,100","height":531}},{"type":"Image","props":{"y":44,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_szlb.png","centerX":7}},{"type":"Button","props":{"y":46,"x":333,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":443,"var":"btn_shangzhuang","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_sqsz.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":491,"wordWrap":true,"width":276,"var":"txt_limit","text":"上庄需要 5000","height":22,"fontSize":20,"color":"#ffffff","centerX":3,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"List","props":{"y":114,"x":22,"width":291,"var":"list_player","spaceY":2,"repeatY":5,"height":271,"cacheAsBitmap":true},"child":[{"type":"WanJia1","props":{"y":0,"x":0,"name":"render","runtime":"ui.nqp.game_ui.tongyong.WanJia1UI"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.tongyong.WanJia1UI",ui.nqp.game_ui.tongyong.WanJia1UI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.ShangZhuangLBUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class SheZhiUI extends View {
		public hslider0:Laya.HSlider;
		public hslider1:Laya.HSlider;
		public btn_change:Laya.Button;
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

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":608,"scaleY":1.25,"scaleX":1.25,"height":402,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-14,"x":-16,"width":320,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk.png","sizeGrid":"10,10,0,10","height":440}},{"type":"Image","props":{"y":-14,"x":623,"width":320,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk.png","sizeGrid":"10,10,0,10","scaleX":-1,"height":440}},{"type":"Image","props":{"y":31,"x":305,"skin":"tongyong_ui/game_ui/tongyong/general/tit_set.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":120,"x":30,"width":84,"text":"音效：","height":24,"fontSize":24,"color":"#ffffff","align":"right"}},{"type":"Text","props":{"y":199,"x":30,"width":84,"text":"音乐：","height":24,"fontSize":24,"color":"#ffffff","align":"right"}},{"type":"HSlider","props":{"y":119,"x":110,"width":374,"var":"hslider0","value":50,"tick":1,"skin":"tongyong_ui/game_ui/tongyong/dating/hslider.png","sizeGrid":"0,20,0,21","showLabel":false,"min":0,"max":100,"height":31,"allowClickBack":true}},{"type":"HSlider","props":{"y":197,"x":110,"width":374,"var":"hslider1","value":10,"tick":1,"skin":"tongyong_ui/game_ui/tongyong/dating/hslider.png","sizeGrid":"0,20,0,21","showLabel":false,"min":0,"max":100,"height":31,"allowClickBack":true}},{"type":"Button","props":{"y":355,"x":303,"var":"btn_change","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_1danh.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":9,"x":28,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_qd.png"}}]},{"type":"Box","props":{"width":320,"var":"box_vesion","top":272,"right":273,"height":18},"child":[{"type":"Box","props":{"y":1,"x":0,"var":"box_app"},"child":[{"type":"Label","props":{"y":0,"x":120,"width":49,"var":"txt_appbbh","underlineColor":"#00ff00","text":1.4,"height":18,"fontSize":18,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":120,"underlineColor":"#00ff00","text":"App版本号：","height":18,"fontSize":18,"color":"#ffffff","align":"right"}}]},{"type":"Box","props":{"y":0,"x":116,"width":201,"var":"box_v","height":18},"child":[{"type":"Label","props":{"wordWrap":true,"width":120,"underlineColor":"#00ff00","text":"版本号：","height":18,"fontSize":18,"color":"#ffffff","align":"right"}},{"type":"Label","props":{"x":120,"width":49,"var":"txt_bbh","underlineColor":"#00ff00","text":"1.4.0.000","height":18,"fontSize":18,"color":"#ffffff","align":"left"}}]}]},{"type":"Button","props":{"y":12,"x":601,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"CheckBox","props":{"y":111,"x":492,"width":87,"var":"btn_sound","skin":"tongyong_ui/game_ui/tongyong/hud/btn_guan.png","selected":true,"height":46}},{"type":"CheckBox","props":{"y":190,"x":493,"width":87,"var":"btn_music","skin":"tongyong_ui/game_ui/tongyong/hud/btn_guan.png","selected":true,"height":46}},{"type":"Label","props":{"y":270,"x":493,"width":103,"var":"btn_clear","underline":true,"text":"清除缓存","height":32,"fontSize":20,"color":"#2aff01","bold":true,"align":"left"}},{"type":"Label","props":{"y":269,"x":389,"width":103,"var":"btn_check","underline":true,"text":"检查更新","height":32,"fontSize":20,"color":"#2aff01","bold":true,"align":"left"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.SheZhiUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class TabItemRenderUI extends View {
		public txt_name:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":175,"height":58},"child":[{"type":"Clip","props":{"y":0,"x":0,"skin":"tongyong_ui/game_ui/tongyong/dating/clip_an1.png","name":"selectBox","index":2,"clipY":3}},{"type":"Text","props":{"y":16,"x":6,"wordWrap":false,"width":147,"var":"txt_name","text":"活动内容","height":24,"fontSize":24,"color":"#f7e9c1","cacheAs":"normal","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.TabItemRenderUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class TimeBtnRenderUI extends View {
		public btn_time:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":179,"height":29},"child":[{"type":"Button","props":{"var":"btn_time","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_rq.png","sizeGrid":"0,21,0,19","labelSize":20,"labelColors":"#fffa9a"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.TimeBtnRenderUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class TipsUI extends View {
		public btn_enter:Laya.Button;
		public img_enter:Laya.Image;
		public btn_cancle:Laya.Button;
		public img_cancle:Laya.Image;
		public txt_label:Laya.Label;
		public btn_close:Laya.Button;
		public img_title:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":675,"height":477,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk.png"}},{"type":"Image","props":{"x":673,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk.png","scaleX":-1}},{"type":"Button","props":{"y":396,"var":"btn_enter","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_kban1.png","centerX":140,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":9,"x":47,"var":"img_enter","skin":"tongyong_ui/game_ui/tongyong/dating/tu_qd.png"}}]},{"type":"Button","props":{"y":396,"var":"btn_cancle","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_kban1.png","centerX":-140,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":12,"x":26,"var":"img_cancle","skin":"tongyong_ui/game_ui/tongyong/dating/tu_qx.png"}}]},{"type":"Label","props":{"y":102,"x":58,"wordWrap":true,"width":558,"var":"txt_label","valign":"middle","leading":8,"height":228,"fontSize":28,"color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":-19,"x":602,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_tuichu.png"}},{"type":"Box","props":{"y":16,"x":235,"width":220,"height":58},"child":[{"type":"Image","props":{"var":"img_title","skin":"tongyong_ui/game_ui/tongyong/dating/tu_jbbz.png","centerY":0,"centerX":0}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.TipsUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class Tips1UI extends View {
		public txt_label:Laya.Label;
		public btn_enter:Laya.Button;
		public btn_cancle:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":122,"x":294,"width":675,"height":477},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk.png"}},{"type":"Image","props":{"x":673,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk.png","scaleX":-1}},{"type":"Image","props":{"y":15,"x":236,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_jbbz.png"}},{"type":"Button","props":{"y":396,"x":338,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_kban1.png","centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":9,"x":47,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_qd.png"}}]},{"type":"Button","props":{"y":-19,"x":602,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_tuichu.png"}},{"type":"Label","props":{"y":102,"x":58,"width":558,"var":"txt_label","height":228,"fontSize":22,"color":"#ffffff"}}]},{"type":"Box","props":{"width":608,"scaleY":1.25,"scaleX":1.25,"height":358,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":0,"width":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk.png","sizeGrid":"100,0,150,0","height":380}},{"type":"Image","props":{"x":604,"width":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk.png","sizeGrid":"100,0,150,0","scaleX":-1,"height":380}},{"type":"Image","props":{"y":37,"x":301,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","centerX":-3,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":35,"x":304,"skin":"tongyong_ui/game_ui/tongyong/general/tit_tishi.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":73,"x":38,"wordWrap":true,"width":530,"valign":"middle","leading":8,"height":181,"fontSize":24,"color":"#c8bc9f","align":"center"}},{"type":"Button","props":{"y":303,"var":"btn_enter","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qw.png","right":30,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":303,"var":"btn_cancle","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qx.png","left":30,"anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.Tips1UI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
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
            this.createView(ui.nqp.game_ui.tongyong.Tips_backUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class WanJiaUI extends View {
		public img_head:Laya.Image;
		public img_txk:Laya.Image;
		public clip_money:Laya.Clip;
		public clip_num:Laya.Clip;
		public txt_name:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":660,"height":66},"child":[{"type":"Image","props":{"y":1,"x":1,"width":661,"skin":"tongyong_ui/game_ui/tongyong/general/tu_toplb4.png","sizeGrid":"11,12,13,11","renderType":"render","height":64},"child":[{"type":"Image","props":{"y":32,"x":155,"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_1.png","scaleY":0.75,"scaleX":0.75,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-4,"x":120,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png","scaleY":0.7,"scaleX":0.7}},{"type":"Image","props":{"y":19,"x":455,"width":179,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,17,0,14","height":29,"alpha":0.5}},{"type":"Clip","props":{"y":22,"x":486,"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/general/clip_money1.png","clipX":11}},{"type":"Image","props":{"y":33,"x":460,"width":39,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","scaleY":0.8,"scaleX":0.8,"height":41,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":19,"x":53,"visible":false,"var":"clip_num","skin":"tongyong_ui/game_ui/tongyong/general/clip_top.png","clipX":10}},{"type":"Label","props":{"y":24,"x":236,"width":155,"var":"txt_name","height":21,"fontSize":20,"font":"SimHei","color":"#efda8b","align":"left"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.WanJiaUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class WanJia1UI extends View {
		public img_head:Laya.Image;
		public img_txk:Laya.Image;
		public clip_money:Laya.Clip;
		public txt_name:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":290,"height":66},"child":[{"type":"Image","props":{"y":1,"x":1,"width":290,"skin":"tongyong_ui/game_ui/tongyong/general/tu_toplb4.png","sizeGrid":"11,12,13,11","height":64},"child":[{"type":"Image","props":{"y":32,"x":44,"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_1.png","scaleY":0.75,"scaleX":0.75,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-4,"x":8,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png","scaleY":0.7,"scaleX":0.7}},{"type":"Image","props":{"y":29,"x":93,"width":179,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","sizeGrid":"0,17,0,14","height":29,"alpha":0.5}},{"type":"Clip","props":{"y":32,"x":124,"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/general/clip_money1.png","clipX":11}},{"type":"Image","props":{"y":42,"x":95,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":4,"x":105,"width":155,"var":"txt_name","height":21,"fontSize":20,"font":"SimHei","color":"#ffffff","align":"left"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.WanJia1UI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
    export class WanJiaLBUI extends View {
		public btn_close:Laya.Button;
		public list_player:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"width":793,"skin":"tongyong_ui/game_ui/tongyong/dating/game_popout_bg.png","height":531,"centerY":-18,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":30,"skin":"tongyong_ui/game_ui/tongyong/general/tit_wanjialb.png","centerX":2}},{"type":"Button","props":{"y":40,"x":761,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":490,"wordWrap":true,"width":276,"text":"仅展示金额最多的前20名玩家","height":22,"fontSize":20,"color":"#ffffff","centerX":0,"anchorY":0.5,"anchorX":0.5,"align":"left"}},{"type":"List","props":{"x":65,"width":680,"var":"list_player","spaceY":2,"height":358,"centerY":16,"cacheAsBitmap":true,"anchorY":0,"anchorX":0},"child":[{"type":"WanJia","props":{"y":0,"x":0,"name":"render","runtime":"ui.nqp.game_ui.tongyong.WanJiaUI"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.tongyong.WanJiaUI",ui.nqp.game_ui.tongyong.WanJiaUI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.WanJiaLBUI.uiView);
        }
    }
}

module ui.nqp.game_ui.tongyong {
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

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":52,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk4.png","scaleX":-1,"centerX":-190}},{"type":"Image","props":{"y":52,"x":675,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk4.png"}},{"type":"Image","props":{"y":83,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_zj.png","centerX":44}},{"type":"Button","props":{"y":50,"x":1043,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_tuichu.png"}},{"type":"Box","props":{"y":167,"x":194,"width":976,"height":770},"child":[{"type":"Image","props":{"y":32,"x":91,"width":782,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_di.png","height":4}},{"type":"Image","props":{"y":13,"x":129,"var":"img_index","skin":"tongyong_ui/game_ui/tongyong/general/bb_xh.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":13,"x":281,"var":"img_battleid","skin":"tongyong_ui/game_ui/tongyong/general/bb_bh.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":13,"x":626,"var":"img_roomname","skin":"tongyong_ui/game_ui/tongyong/general/bb_wzwc.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":13,"x":476,"var":"img_endtime","skin":"tongyong_ui/game_ui/tongyong/general/bb_wzsj.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":13,"x":763,"var":"img_profit","skin":"tongyong_ui/game_ui/tongyong/general/bb_yl.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":188,"x":373,"wordWrap":true,"width":232,"var":"txt_noRecord","text":"---暂无数据---","height":22,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":392,"x":638,"width":215,"var":"txt_total","text":"000000000","height":22,"fontSize":20,"color":"#08bbcc","align":"right"}},{"type":"Image","props":{"y":375,"x":93,"width":782,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_di.png","height":4}}]},{"type":"List","props":{"y":200,"x":277,"width":808,"var":"list_record","spaceY":1,"repeatY":9,"height":340,"disabled":false,"cacheAsBitmap":true,"anchorY":0,"anchorX":0},"child":[{"type":"BaoBiaoT","props":{"name":"render","runtime":"ui.nqp.game_ui.tongyong.BaoBiaoTUI"}}]},{"type":"Box","props":{"y":269,"x":289,"width":189,"var":"list_time","height":280},"child":[{"type":"Image","props":{"y":0,"x":-7,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_sj.png"}},{"type":"Box","props":{"y":10,"x":-2,"var":"btn_list0"},"child":[{"type":"Button","props":{"var":"img_data0","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected0","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":2,"x":35,"width":134,"var":"lab_btn0","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}}]},{"type":"Box","props":{"y":49,"x":-2,"var":"btn_list1"},"child":[{"type":"Button","props":{"var":"img_data1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected1","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":2,"x":35,"width":134,"var":"lab_btn1","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}}]},{"type":"Box","props":{"y":87,"x":-2,"var":"btn_list2"},"child":[{"type":"Button","props":{"var":"img_data2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected2","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":3,"x":35,"width":134,"var":"lab_btn2","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}}]},{"type":"Box","props":{"y":126,"x":-2,"var":"btn_list3"},"child":[{"type":"Button","props":{"var":"img_data3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected3","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":3,"x":35,"width":134,"var":"lab_btn3","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}}]},{"type":"Box","props":{"y":163,"x":-2,"var":"btn_list4"},"child":[{"type":"Button","props":{"var":"img_data4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected4","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":2,"x":35,"width":134,"var":"lab_btn4","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}}]},{"type":"Box","props":{"y":202,"x":-2,"var":"btn_list5"},"child":[{"type":"Button","props":{"var":"img_data5","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected5","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":3,"x":35,"width":134,"var":"lab_btn5","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}}]},{"type":"Box","props":{"y":240,"x":-2,"var":"btn_list6"},"child":[{"type":"Button","props":{"var":"img_data6","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj.png"}},{"type":"Button","props":{"y":3,"x":164,"var":"btn_selected6","stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_dj.png"}},{"type":"Label","props":{"y":3,"x":35,"width":134,"var":"lab_btn6","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}}]}]},{"type":"Box","props":{"y":546,"x":282,"var":"btn_list"},"child":[{"type":"Image","props":{"y":1,"x":-1,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_di2.png"}},{"type":"Button","props":{"y":4,"x":3,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sj2.png"}},{"type":"Label","props":{"y":8,"x":40,"width":134,"var":"lb_time","height":22,"fontSize":22,"color":"#89d4ff","align":"center"}},{"type":"Image","props":{"y":8,"x":164,"var":"jiantou_down","skin":"tongyong_ui/game_ui/tongyong/dating/btn_jt.png"}},{"type":"Image","props":{"y":30,"x":164,"var":"jiantou_up","skin":"tongyong_ui/game_ui/tongyong/dating/btn_jt.png","scaleY":-1}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.tongyong.BaoBiaoTUI",ui.nqp.game_ui.tongyong.BaoBiaoTUI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.tongyong.ZhanJiUI.uiView);
        }
    }
}
