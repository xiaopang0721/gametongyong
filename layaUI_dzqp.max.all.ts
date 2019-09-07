
module ui.dzqp.game_ui.tongyong {
    export class BaiRenJSUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720}};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.BaiRenJSUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class BaoBiaoTUI extends View {
		public img_bg:Laya.Image;
		public txt_id:Laya.Label;
		public txt_time:Laya.Label;
		public txt_type:Laya.Label;
		public txt_earn:Laya.Label;
		public txt_index:Laya.Label;
		public btn_xq:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":976,"height":42},"child":[{"type":"Box","props":{"y":0,"x":0,"width":976,"height":42},"child":[{"type":"Image","props":{"var":"img_bg","skin":"tongyong_ui/game_ui/tongyong/general/tu_bb2.png","sizeGrid":"0,7,0,6","right":0,"left":0,"height":42}},{"type":"Label","props":{"y":10,"x":105,"width":232,"var":"txt_id","height":22,"fontSize":20,"color":"#696291","align":"center"}},{"type":"Label","props":{"y":10,"x":351,"width":231,"var":"txt_time","height":22,"fontSize":20,"color":"#008aff","align":"center"}},{"type":"Label","props":{"y":10,"x":612,"width":185,"var":"txt_type","height":22,"fontSize":20,"color":"#696291","align":"center"}},{"type":"Label","props":{"y":10,"x":808,"width":99,"var":"txt_earn","height":22,"fontSize":20,"color":"#069e00","align":"center"}},{"type":"Label","props":{"y":10,"x":19,"width":66,"var":"txt_index","height":22,"fontSize":20,"color":"#696291","align":"center"}},{"type":"Label","props":{"y":10,"x":909,"width":54,"var":"btn_xq","underline":true,"text":"详情","height":22,"fontSize":20,"color":"#070a58","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.BaoBiaoTUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class ChuangJianUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"width":793,"skin":"tongyong_ui/game_ui/tongyong/hud/game_popout_bg.png","height":531,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":35,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":8,"x":297,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_cjfj.png","centerX":0}},{"type":"Button","props":{"y":37,"x":737,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Text","props":{"y":190,"x":291,"wordWrap":true,"width":103,"text":"玩法：","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#9794c1","align":"left"}},{"type":"Box","props":{"y":190,"x":378},"child":[{"type":"CheckBox","props":{"skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"x":40,"wordWrap":true,"width":111,"text":"经典经典","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":191,"x":576,"width":216,"height":28},"child":[{"type":"Text","props":{"y":0,"x":0,"wordWrap":true,"width":58,"text":"底分","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}},{"type":"Button","props":{"y":0,"x":60,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_j.png"}},{"type":"Button","props":{"y":0,"x":185,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_j1.png"}},{"type":"Image","props":{"y":0,"x":94,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_kk1.png"}},{"type":"Text","props":{"y":2,"x":95,"width":83,"text":"00000","height":25,"fontSize":22,"color":"#c6c6c6","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.ChuangJianUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class DaoJiShiUI extends View {
		public ani1:Laya.FrameAnimation;
		public txt_time:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":70,"height":70},"child":[{"type":"Box","props":{"y":58,"x":36,"width":64,"rotation":0,"height":66,"anchorY":0.8,"anchorX":0.5},"compId":2,"child":[{"type":"Image","props":{"y":-6,"x":0,"width":80,"skin":"tongyong_ui/game_ui/tongyong/general/daojishi.png","scaleY":0.8,"scaleX":0.8,"height":90}},{"type":"Image","props":{"y":30,"x":32,"width":80,"visible":false,"skin":"tongyong_ui/game_ui/tongyong/general/daojishi.png","scaleY":0.8,"scaleX":0.8,"height":90,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":6},{"type":"Image","props":{"y":32,"x":32,"visible":false,"skin":"tongyong_ui/game_ui/tongyong/general/daojishi1.png","scaleY":0.5,"scaleX":0.5,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":5},{"type":"Text","props":{"y":19,"x":11,"wordWrap":true,"width":43,"var":"txt_time","text":"00","strokeColor":"#ffffff","stroke":2,"leading":6,"height":26,"fontSize":24,"color":"#8e0200","bold":true,"align":"center"}}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":58,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":58,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":8}],"x":[{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":2},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":4},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":6},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":10},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":12},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":14},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":16},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":18},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":20},{"value":36,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":22}],"rotation":[{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":2},{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":4},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":6},{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":8},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":10},{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":12},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":14},{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":16},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":18},{"value":4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":20},{"value":-4,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"rotation","index":22},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":24}]}},{"target":5,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":5,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":5,"key":"visible","index":1}],"scaleY":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":24}],"scaleX":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":24}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"rotation","index":24}],"blendMode":[{"value":"lighter","tweenMethod":"linearNone","tween":false,"target":5,"key":"blendMode","index":0},{"value":"lighter","tweenMethod":"linearNone","tween":false,"target":5,"key":"blendMode","index":1}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":1},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":24}]}},{"target":6,"keyframes":{"y":[{"value":30,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":0},{"value":30,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"y","index":1}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":1}],"scaleY":[{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":1},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":24}],"scaleX":[{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":1},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":24}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":1},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":24}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.DaoJiShiUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong.effect {
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
            this.createView(ui.dzqp.game_ui.tongyong.effect.QiFuUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong.effect {
    export class ShaiZiUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_dice1:Laya.Image;
		public img_dice2:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":240,"height":320},"child":[{"type":"Box","props":{"y":222,"x":124,"width":239,"rotation":0,"height":312,"anchorY":0.7,"anchorX":0.5},"compId":9,"child":[{"type":"Image","props":{"y":212,"x":115.5,"skin":"tongyong_ui/game_ui/tongyong/general/effect/hulu/tu_hulu2.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":203,"x":73.5,"var":"img_dice1","skin":"tongyong_ui/game_ui/tongyong/general/effect/shaizi/shaizi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":203,"x":151.5,"var":"img_dice2","skin":"tongyong_ui/game_ui/tongyong/general/effect/shaizi/shaizi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-179,"x":521,"skin":"tongyong_ui/game_ui/tongyong/general/effect/hulu/tu_hulu1.png","scaleY":0.8,"scaleX":0.8,"rotation":45,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":7}]}],"animations":[{"nodes":[{"target":9,"keyframes":{"y":[{"value":222,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":0},{"value":222,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"y","index":60},{"value":182,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":65},{"value":222,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":70}],"x":[{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"key":"x","index":0},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"key":"x","index":5},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":10},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"x","index":15},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":20},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"x","index":25},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":30},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"x","index":35},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":40},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"x","index":45},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":50},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"x","index":55},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":60},{"value":124,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"x","index":65},{"value":124,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":70}],"rotation":[{"value":10,"tweenMethod":"bounceInOut","tween":true,"target":9,"key":"rotation","index":0},{"value":-10,"tweenMethod":"bounceInOut","tween":true,"target":9,"key":"rotation","index":5},{"value":15,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":10},{"value":-15,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":15},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":20},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":25},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":30},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":35},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":40},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":45},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":50},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":55},{"value":15,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":60},{"value":0,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":65},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":70}]}},{"target":7,"keyframes":{"y":[{"value":154,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":0},{"value":154,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"y","index":80},{"value":-179,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":91}],"x":[{"value":115.5,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":0},{"value":115.5,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"x","index":80},{"value":521,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":91}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"rotation","index":80},{"value":46,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":85},{"value":45,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":91}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":80},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":85},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":91}]}}],"name":"ani1","id":1,"frameRate":30,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.effect.ShaiZiUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong.effect {
    export class ShaiZiThreeUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_dice0:Laya.Image;
		public img_dice1:Laya.Image;
		public img_dice2:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":240,"height":320},"child":[{"type":"Box","props":{"y":222,"x":124,"width":239,"rotation":0,"height":312,"anchorY":0.7,"anchorX":0.5},"compId":9,"child":[{"type":"Image","props":{"y":212,"x":115.5,"skin":"tongyong_ui/game_ui/tongyong/general/effect/hulu1/tu_hulu2.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":160,"x":62,"var":"img_dice0","skin":"tongyong_ui/game_ui/tongyong/general/effect/shaizi/shaizi1.png"}},{"type":"Image","props":{"y":189,"x":154.5,"var":"img_dice1","skin":"tongyong_ui/game_ui/tongyong/general/effect/shaizi/shaizi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":229,"x":113,"var":"img_dice2","skin":"tongyong_ui/game_ui/tongyong/general/effect/shaizi/shaizi1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":125,"x":115,"skin":"tongyong_ui/game_ui/tongyong/general/effect/hulu1/tu_hulu1.png","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":7}]}],"animations":[{"nodes":[{"target":9,"keyframes":{"rotation":[{"value":10,"tweenMethod":"bounceInOut","tween":true,"target":9,"key":"rotation","index":0},{"value":-10,"tweenMethod":"bounceInOut","tween":true,"target":9,"key":"rotation","index":5},{"value":15,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":10},{"value":-15,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":15},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":20},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":25},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":30},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":35},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":40},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":45},{"value":20,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":50},{"value":-20,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":55},{"value":15,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":60},{"value":0,"tweenMethod":"bounceInOut","tween":true,"target":9,"label":null,"key":"rotation","index":65},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":70}]}},{"target":7,"keyframes":{"y":[{"value":122,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":0},{"value":122,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"y","index":80},{"value":-179,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":91}],"x":[{"value":115.5,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":0},{"value":115.5,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"x","index":80},{"value":521,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":91}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"rotation","index":80},{"value":46,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":85},{"value":45,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":91}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":80},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":85},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":91}]}}],"name":"ani1","id":1,"frameRate":30,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.effect.ShaiZiThreeUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong.effect {
    export class SuiJiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":153,"height":184},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10000.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10000.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":1},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":2},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":5},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":7},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":8},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":9},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10010.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":10},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10011.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":11},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10012.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":12},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10013.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":13},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10014.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":14},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10015.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":15},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10016.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":16},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10017.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":17},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10018.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":18},{"value":"tongyong_ui/game_ui/tongyong/general/effect/suiji/10019.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":19}]}}],"name":"ani1","id":1,"frameRate":15,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.effect.SuiJiUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong.effect {
    export class TongPeiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":309.5,"x":617.5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tong.png","anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":322.5,"x":609.5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tong2.png","anchorY":0.5,"anchorX":0.5},"compId":3}]}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":48}],"scaleX":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":48}]}},{"target":2,"keyframes":{"scaleY":[{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":48}],"scaleX":[{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":48}],"alpha":[{"value":0,"tweenMethod":"backInOut","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"alpha","index":48}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.effect.TongPeiUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong.effect {
    export class TongPei1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":193,"x":303,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tong.png","anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":206,"x":295,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tong3.png","anchorY":0.5,"anchorX":0.5},"compId":3}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":48}],"scaleX":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":48}]}},{"target":2,"keyframes":{"scaleY":[{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":48}],"scaleX":[{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":48}],"alpha":[{"value":0,"tweenMethod":"backInOut","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"alpha","index":48}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.effect.TongPei1UI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong.effect {
    export class TongShaUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":309.5,"x":617.5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tong.png","scaleY":1,"scaleX":1,"gray":true,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":2},{"type":"Image","props":{"y":322.5,"x":609.5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tong1.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":3}]}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":48}],"scaleX":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":48}]}},{"target":2,"keyframes":{"scaleY":[{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":48}],"scaleX":[{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":48}],"alpha":[{"value":0,"tweenMethod":"backInOut","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"alpha","index":48}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.effect.TongShaUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong.effect {
    export class TongSha1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":400},"child":[{"type":"Image","props":{"y":193,"x":303,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tong.png","scaleY":0.4905973856296296,"scaleX":0.4905973856296296,"gray":true,"anchorY":0.5,"anchorX":0.5,"alpha":-0.01880522874074074},"compId":2},{"type":"Image","props":{"y":206,"x":295,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tong4.png","scaleY":2.0188052287407405,"scaleX":2.0188052287407405,"anchorY":0.5,"anchorX":0.5},"compId":3}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":48}],"scaleX":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":48}]}},{"target":2,"keyframes":{"scaleY":[{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":48}],"scaleX":[{"value":0.5,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":48}],"alpha":[{"value":0,"tweenMethod":"backInOut","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"alpha","index":48}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.effect.TongSha1UI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong.effect {
    export class XiPaiUI extends View {
		public ani_xipai:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":320,"height":186},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10009.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":1},{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":2},{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":5},{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":7},{"value":"tongyong_ui/game_ui/tongyong/general/effect/xipai/10009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":8}]}}],"name":"ani_xipai","id":1,"frameRate":12,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.effect.XiPaiUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong.effect {
    export class YingUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":185,"height":230},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/effect/ying/10000.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10000.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":1},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":2},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":5},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":7},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":8},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":9},{"value":"tongyong_ui/game_ui/tongyong/general/effect/ying/10010.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":10}]}}],"name":"ani1","id":1,"frameRate":15,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.effect.YingUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong.effect {
    export class ZhuangLUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_banker:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":106,"height":144},"child":[{"type":"Image","props":{"y":72,"x":53,"visible":true,"skin":"tongyong_ui/game_ui/tongyong/general/tu_zhuangk.png","anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":6,"x":101,"visible":true,"var":"img_banker","skin":"tongyong_ui/game_ui/tongyong/general/tu_zhuang.png","anchorY":0.5,"anchorX":0.5},"compId":3}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":1.5,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":10}],"scaleX":[{"value":1.5,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":10}]}},{"target":3,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":11}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":0.2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleY","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":15}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":0.2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleX","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":15}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.effect.ZhuangLUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong.effect {
    export class ZhuangRUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_banker:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":106,"height":144},"child":[{"type":"Image","props":{"y":72,"x":53,"visible":true,"skin":"tongyong_ui/game_ui/tongyong/general/tu_zhuangk.png","anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":6,"x":4,"visible":true,"var":"img_banker","skin":"tongyong_ui/game_ui/tongyong/general/tu_zhuang.png","anchorY":0.5,"anchorX":0.5},"compId":3}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":1.5,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":10}],"scaleX":[{"value":1.5,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":10}]}},{"target":3,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":3,"key":"visible","index":11}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":0.2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleY","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":15}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":0.2,"tweenMethod":"backInOut","tween":true,"target":3,"key":"scaleX","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":15}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.effect.ZhuangRUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class FangKaUI extends View {
		public tab:Laya.Tab;
		public btn_close:Laya.Button;
		public box_creat:Laya.Box;
		public list_game:Laya.List;
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
		public txt_money:laya.display.Text;
		public btn_create:Laya.Button;
		public box_join:Laya.Box;
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

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":787,"height":531,"centerY":20,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":1,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk1.png"}},{"type":"Image","props":{"y":0,"x":785,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk1.png","scaleX":-1}},{"type":"Tab","props":{"y":49,"x":394,"width":222,"var":"tab","height":20,"direction":"horizontal","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":0,"x":110,"stateNum":3,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_cjfj.png","name":"item0","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":0,"x":330,"stateNum":3,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_jrfj.png","name":"item1","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":38,"x":743,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":64,"x":14,"width":759,"var":"box_creat","height":418},"child":[{"type":"Image","props":{"y":-64,"x":-13,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk3.png"}},{"type":"List","props":{"y":8,"x":0,"width":175,"var":"list_game","spaceY":10,"height":467},"child":[{"type":"TabItemRender","props":{"renderType":"render","name":"render","runtime":"ui.dzqp.game_ui.tongyong.TabItemRenderUI"}}]},{"type":"Box","props":{"y":17,"x":178,"width":566,"height":395},"child":[{"type":"Text","props":{"y":9,"x":9,"wordWrap":true,"width":139,"text":"选择局数：","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#9794c1","align":"left"}},{"type":"Box","props":{"y":58,"x":17,"var":"box_round0"},"child":[{"type":"CheckBox","props":{"var":"cb_round0","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"wordWrap":true,"width":49,"var":"txt_round0","text":"5局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":58,"x":147,"var":"box_round1"},"child":[{"type":"CheckBox","props":{"var":"cb_round1","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"wordWrap":true,"width":67,"var":"txt_round1","text":"10局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":58,"x":282,"var":"box_round2"},"child":[{"type":"CheckBox","props":{"var":"cb_round2","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"wordWrap":true,"width":67,"var":"txt_round2","text":"15局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":58,"x":416,"var":"box_round3"},"child":[{"type":"CheckBox","props":{"var":"cb_round3","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"wordWrap":true,"width":67,"var":"txt_round3","text":"20局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Text","props":{"y":123,"x":9,"wordWrap":true,"width":139,"text":"支付方式：","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#9794c1","align":"left"},"child":[{"type":"Radio","props":{"visible":false,"label":"label"}}]},{"type":"Box","props":{"y":162,"x":17,"var":"box_pay0"},"child":[{"type":"CheckBox","props":{"var":"cb_pay0","stateNum":3,"skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"wordWrap":true,"width":84,"var":"txt_pay0","text":"房主付","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":162,"x":147,"visible":false,"var":"box_pay1"},"child":[{"type":"CheckBox","props":{"var":"cb_pay1","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"wordWrap":true,"width":84,"var":"txt_pay1","text":"AA付","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Text","props":{"y":265,"x":199,"wordWrap":true,"width":80,"text":"消耗：","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#9794c1","align":"left"}},{"type":"Text","props":{"y":266,"x":316,"wordWrap":true,"width":80,"var":"txt_money","text":"0","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":279,"x":293,"skin":"tongyong_ui/game_ui/tongyong/general/icon_money.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":312,"x":158,"var":"btn_create","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_cj.png"},"child":[{"type":"Image","props":{"y":22,"x":71,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cj1.png"}}]}]}]},{"type":"Box","props":{"y":64,"x":14,"width":759,"var":"box_join","height":426},"child":[{"type":"Button","props":{"y":93,"x":23,"var":"btn_1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/1.png"}},{"type":"Button","props":{"y":93,"x":272,"var":"btn_2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/2.png"}},{"type":"Button","props":{"y":94,"x":523,"var":"btn_3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/3.png"}},{"type":"Button","props":{"y":174,"x":23,"var":"btn_4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/4.png"}},{"type":"Button","props":{"y":174,"x":272,"var":"btn_5","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/5.png"}},{"type":"Button","props":{"y":174,"x":521,"var":"btn_6","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/6.png"}},{"type":"Button","props":{"y":255,"x":23,"var":"btn_7","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/7.png"}},{"type":"Button","props":{"y":255,"x":272,"var":"btn_8","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/8.png"}},{"type":"Button","props":{"y":255,"x":521,"var":"btn_9","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/9.png"}},{"type":"Button","props":{"y":337,"x":23,"var":"btn_re","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/cs.png"}},{"type":"Button","props":{"y":337,"x":272,"var":"btn_0","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/0.png"}},{"type":"Button","props":{"y":337,"x":521,"var":"btn_del","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/sc.png"}},{"type":"Clip","props":{"y":23,"x":61,"var":"clip_1","skin":"tongyong_ui/game_ui/tongyong/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":23,"x":182,"visible":false,"var":"clip_2","skin":"tongyong_ui/game_ui/tongyong/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":23,"x":303,"visible":false,"var":"clip_3","skin":"tongyong_ui/game_ui/tongyong/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":23,"x":423,"visible":false,"var":"clip_4","skin":"tongyong_ui/game_ui/tongyong/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":23,"x":543,"visible":false,"var":"clip_5","skin":"tongyong_ui/game_ui/tongyong/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":23,"x":664,"visible":false,"var":"clip_6","skin":"tongyong_ui/game_ui/tongyong/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Box","props":{"y":76,"x":28},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/jiaru/srd.png"}},{"type":"Image","props":{"y":1,"x":125,"skin":"tongyong_ui/game_ui/tongyong/jiaru/srd.png"}},{"type":"Image","props":{"y":3,"x":244,"skin":"tongyong_ui/game_ui/tongyong/jiaru/srd.png"}},{"type":"Image","props":{"y":4,"x":364,"skin":"tongyong_ui/game_ui/tongyong/jiaru/srd.png"}},{"type":"Image","props":{"y":4,"x":483,"skin":"tongyong_ui/game_ui/tongyong/jiaru/srd.png"}},{"type":"Image","props":{"y":5,"x":602,"skin":"tongyong_ui/game_ui/tongyong/jiaru/srd.png"}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.dzqp.game_ui.tongyong.TabItemRenderUI",ui.dzqp.game_ui.tongyong.TabItemRenderUI);
			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.FangKaUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
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

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"scaleY":1.25,"scaleX":1.25,"centerY":0,"centerX":0},"child":[{"type":"Box","props":{"width":789,"height":511},"child":[{"type":"Image","props":{"width":393,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk0.png","sizeGrid":"109,72,214,72","height":531}},{"type":"Image","props":{"y":0,"x":785,"width":393,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk0.png","sizeGrid":"109,72,214,72","scaleX":-1,"height":531}},{"type":"Button","props":{"y":37,"x":738,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":8,"x":298,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_cjfj.png","centerX":0}},{"type":"Image","props":{"y":35,"x":398,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Text","props":{"y":110,"x":41,"wordWrap":true,"width":139,"text":"选择局数：","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#9794c1","align":"left"}},{"type":"Box","props":{"y":159,"x":49,"var":"box_round0"},"child":[{"type":"CheckBox","props":{"var":"cb_round0","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"wordWrap":true,"width":49,"var":"txt_round0","text":"5局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":159,"x":179,"var":"box_round1"},"child":[{"type":"CheckBox","props":{"var":"cb_round1","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"wordWrap":true,"width":67,"var":"txt_round1","text":"10局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":159,"x":314,"var":"box_round2"},"child":[{"type":"CheckBox","props":{"var":"cb_round2","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"wordWrap":true,"width":67,"var":"txt_round2","text":"15局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":159,"x":448,"var":"box_round3"},"child":[{"type":"CheckBox","props":{"var":"cb_round3","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"wordWrap":true,"width":67,"var":"txt_round3","text":"20局","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Text","props":{"y":224,"x":41,"wordWrap":true,"width":139,"text":"支付方式：","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#9794c1","align":"left"},"child":[{"type":"Radio","props":{"visible":false,"label":"label"}}]},{"type":"Box","props":{"y":263,"x":49,"var":"box_pay0"},"child":[{"type":"CheckBox","props":{"var":"cb_pay0","stateNum":3,"skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"wordWrap":true,"width":84,"var":"txt_pay0","text":"房主付","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":263,"x":179,"visible":false,"var":"box_pay1"},"child":[{"type":"CheckBox","props":{"var":"cb_pay1","skin":"tongyong_ui/game_ui/tongyong/hud/checkbox_1.png"}},{"type":"Text","props":{"y":0,"x":40,"wordWrap":true,"width":84,"var":"txt_pay1","text":"AA付","leading":6,"height":28,"fontSize":26,"font":"SimHei","color":"#c6c6c6","align":"left"}}]},{"type":"Box","props":{"y":332,"x":290,"var":"box_create"},"child":[{"type":"Button","props":{"y":82,"x":0,"var":"btn_create","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_cj.png"}},{"type":"Image","props":{"y":104,"x":71,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cj1.png"}}]},{"type":"Text","props":{"y":347,"x":281,"wordWrap":true,"width":80,"text":"消耗：","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#9794c1","align":"left"}},{"type":"Text","props":{"y":348,"x":398,"wordWrap":true,"width":80,"var":"txt_money","text":"0","leading":6,"height":26,"fontSize":26,"font":"SimHei","color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":361,"x":375,"skin":"tongyong_ui/game_ui/tongyong/general/icon_money.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.FangKa_ChuangJianUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class FangKa_GoUI extends View {
		public btn_start:Laya.Button;
		public btn_invite:Laya.Button;
		public btn_dismiss:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Button","props":{"y":360,"x":640,"width":200,"var":"btn_start","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"开始游戏","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":360,"x":420,"width":200,"var":"btn_invite","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_2.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d4725","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"邀请好友","centerY":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":360,"x":860,"width":200,"var":"btn_dismiss","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_3.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#397119","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"解散房间","centerY":0,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.FangKa_GoUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class FangKa_TipsUI extends View {
		public txt_label:laya.display.Text;
		public btn_enter:Laya.Button;
		public btn_cancle:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":608,"scaleY":1.25,"scaleX":1.25,"height":358,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":604,"width":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk.png","sizeGrid":"100,0,150,0","scaleX":-1,"height":380}},{"type":"Image","props":{"y":0,"x":0,"width":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk.png","sizeGrid":"100,0,150,0","height":380}},{"type":"Image","props":{"y":37,"x":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":35,"x":304,"skin":"tongyong_ui/game_ui/tongyong/general/tit_jiesan.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":71,"x":38,"wordWrap":true,"width":530,"var":"txt_label","valign":"middle","leading":8,"height":182,"fontSize":24,"color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":303,"var":"btn_enter","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qd.png","right":30,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":303,"var":"btn_cancle","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qx.png","left":30,"anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.FangKa_TipsUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class FaPaiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":60,"height":80},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"tongyong_ui/game_ui/tongyong/general/effect/fapai_1/10000.png"},"compId":3}],"animations":[{"nodes":[{"target":3,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_1/10000.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_1/10001.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":1},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_1/10002.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":2},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_1/10003.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":3},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_1/10004.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_1/10005.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":5},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_1/10006.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_1/10007.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":7},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_1/10008.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":8},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_1/10009.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":9}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.FaPaiUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class FaPai1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":150,"height":80},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"tongyong_ui/game_ui/tongyong/general/effect/fapai_2/10000.png"},"compId":3}],"animations":[{"nodes":[{"target":3,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_2/10000.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_2/10001.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":1},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_2/10002.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":2},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_2/10003.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":3},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_2/10004.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_2/10005.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":5},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_2/10006.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_2/10007.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":7},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_2/10008.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":8},{"value":"tongyong_ui/game_ui/tongyong/general/effect/fapai_2/10009.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":9}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.FaPai1UI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class FenXiangUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"width":793,"skin":"tongyong_ui/game_ui/tongyong/hud/game_popout_bg.png","height":531,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"x":397,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":8,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_fx.png","centerX":0}},{"type":"Image","props":{"y":116,"x":519,"skin":"tongyong_ui/game_ui/tongyong/hud/fx_szs.png"}},{"type":"Button","props":{"y":37,"x":732,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":237,"x":245,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/fx_wx.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":134,"x":1,"wordWrap":true,"width":119,"text":"好友/群","leading":6,"height":36,"fontSize":28,"font":"SimHei","color":"#9794c1","align":"center"}}]},{"type":"Button","props":{"y":237,"x":499,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/fx_pyq.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":134,"x":3,"wordWrap":true,"width":119,"text":"好友/群","leading":6,"height":36,"fontSize":28,"font":"SimHei","color":"#9794c1","align":"center"}}]}]},{"type":"Text","props":{"y":526,"x":277,"wordWrap":true,"width":719,"text":"每日分享朋友圈，可获得1-3张房卡","leading":6,"height":36,"fontSize":28,"font":"SimHei","color":"#ffee7d","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.FenXiangUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class GuangUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":600},"child":[{"type":"Image","props":{"y":298,"x":303,"skin":"tongyong_ui/game_ui/tongyong/general/tu_gs1.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":9}],"animations":[{"nodes":[{"target":9,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":100}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.GuangUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class HudUI extends View {
		public ani1:Laya.FrameAnimation;
		public box_left:Laya.Box;
		public btn_help:Laya.Button;
		public btn_record:Laya.Button;
		public btn_back:Laya.Box;
		public clip_money:Laya.Clip;
		public btn_gren:Laya.Image;
		public btn_fresh:Laya.Button;
		public txt_name:Laya.Label;
		public clip_id:Laya.Label;
		public img_txk:Laya.Image;
		public btn_chongzhi:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Image","props":{"y":721,"x":1,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_hs.png","right":0,"left":0,"height":80,"bottom":0,"anchorY":1,"alpha":0.2}},{"type":"Image","props":{"top":-1,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_d1.png","sizeGrid":"0,770,0,503","right":0,"pivotX":0,"left":-1}},{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/dating/tu_d2.png","sizeGrid":"0,400,0,50","right":0,"left":0,"bottom":0,"anchorY":1}},{"type":"Box","props":{"width":458,"var":"box_left","top":12,"right":0,"height":81,"anchorX":1},"child":[{"type":"Button","props":{"y":40,"x":277,"var":"btn_help","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_bangzhu.png","name":"item1","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":40,"x":105,"var":"btn_record","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_zhanji.png","name":"item0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"width":103,"var":"btn_back","top":0,"right":0,"height":92,"anchorY":0,"anchorX":1},"child":[{"type":"Button","props":{"y":52,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_fanhui.png","right":16,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"width":537,"top":0,"left":0,"height":83},"child":[{"type":"Image","props":{"y":55,"x":57,"skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":26,"x":312,"width":153,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_k1ss.png","sizeGrid":"0,17,0,14","scaleY":1.4,"scaleX":1.4,"height":29,"alpha":0.5}},{"type":"Clip","props":{"y":35,"x":346,"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/dating/clip_money1.png","clipX":11}},{"type":"Image","props":{"y":55,"x":57,"var":"btn_gren","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_5.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":44,"x":318,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":45,"x":507,"visible":false,"var":"btn_fresh","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_sx.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":30,"x":200,"width":192,"var":"txt_name","text":"玩家玩家","overflow":"hidden","leading":8,"height":29,"fontSize":26,"color":"#e2c3ff","anchorY":0.5,"anchorX":0.5,"align":"left"}},{"type":"Label","props":{"y":60,"x":200,"width":192,"var":"clip_id","text":"ID:123456789","leading":8,"height":23,"fontSize":22,"color":"#f5fbb1","anchorY":0.5,"anchorX":0.5,"align":"left"}},{"type":"Image","props":{"y":6,"x":11,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png","scaleY":0.95,"scaleX":0.95}}]},{"type":"Button","props":{"var":"btn_chongzhi","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_chongzhi.png","right":10,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-42,"x":-12,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_guang.png","blendMode":"lighter","alpha":0.44000000000000006},"compId":116},{"type":"Image","props":{"y":0,"x":0,"skin":"tongyong_ui/game_ui/tongyong/dating/cz_00002.png","blendMode":"lighter","alpha":1},"compId":117}]}]}],"animations":[{"nodes":[{"target":116,"keyframes":{"y":[{"value":-42,"tweenMethod":"linearNone","tween":true,"target":116,"key":"y","index":0}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":116,"label":null,"key":"alpha","index":0},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":116,"label":null,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":116,"label":null,"key":"alpha","index":10},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":116,"label":null,"key":"alpha","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":116,"label":null,"key":"alpha","index":20},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":116,"label":null,"key":"alpha","index":25},{"value":1,"tweenMethod":"linearNone","tween":true,"target":116,"label":null,"key":"alpha","index":30}]}},{"target":117,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/dating/cz_00002.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/dating/cz_00003.png","tweenMethod":"linearNone","tween":false,"target":117,"label":null,"key":"skin","index":1},{"value":"tongyong_ui/game_ui/tongyong/dating/cz_00003.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":2},{"value":"tongyong_ui/game_ui/tongyong/dating/cz_00004.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":3},{"value":"tongyong_ui/game_ui/tongyong/dating/cz_00005.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/dating/cz_00006.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":5},{"value":"tongyong_ui/game_ui/tongyong/dating/cz_00007.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/dating/cz_00008.png","tweenMethod":"linearNone","tween":false,"target":117,"key":"skin","index":7},{"value":"tongyong_ui/game_ui/tongyong/dating/cz_00008.png","tweenMethod":"linearNone","tween":false,"target":117,"label":null,"key":"skin","index":8}],"alpha":[{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":117,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":117,"key":"alpha","index":1},{"value":1,"tweenMethod":"linearNone","tween":true,"target":117,"key":"alpha","index":2},{"value":1,"tweenMethod":"linearNone","tween":true,"target":117,"key":"alpha","index":7},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":117,"key":"alpha","index":8},{"value":0,"tweenMethod":"linearNone","tween":true,"target":117,"key":"alpha","index":9},{"value":0,"tweenMethod":"linearNone","tween":true,"target":117,"key":"alpha","index":30}]}}],"name":"ani1","id":1,"frameRate":15,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.HudUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class jiangtouUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":40,"height":30},"child":[{"type":"Image","props":{"y":0,"x":30,"skin":"tongyong_ui/game_ui/tongyong/general/tu_jiantou.png","rotation":90},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":30,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":40,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":5},{"value":30,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.jiangtouUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
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

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"scaleY":1.25,"scaleX":1.25,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":793,"skin":"tongyong_ui/game_ui/tongyong/hud/game_popout_bg.png","height":531},"child":[{"type":"Image","props":{"y":144,"x":45,"skin":"tongyong_ui/game_ui/tongyong/jiaru/srd.png"}},{"type":"Image","props":{"y":145,"x":170,"skin":"tongyong_ui/game_ui/tongyong/jiaru/srd.png"}},{"type":"Image","props":{"y":147,"x":289,"skin":"tongyong_ui/game_ui/tongyong/jiaru/srd.png"}},{"type":"Image","props":{"y":148,"x":409,"skin":"tongyong_ui/game_ui/tongyong/jiaru/srd.png"}},{"type":"Image","props":{"y":148,"x":528,"skin":"tongyong_ui/game_ui/tongyong/jiaru/srd.png"}},{"type":"Image","props":{"y":149,"x":647,"skin":"tongyong_ui/game_ui/tongyong/jiaru/srd.png"}},{"type":"Image","props":{"y":15,"x":308,"skin":"tongyong_ui/game_ui/tongyong/general/tu_jr.png"}},{"type":"Image","props":{"y":29,"x":393,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":159,"x":41,"var":"btn_1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/1.png"}},{"type":"Button","props":{"y":159,"x":290,"var":"btn_2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/2.png"}},{"type":"Button","props":{"y":160,"x":540,"var":"btn_3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/3.png"}},{"type":"Button","props":{"y":240,"x":41,"var":"btn_4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/4.png"}},{"type":"Button","props":{"y":240,"x":290,"var":"btn_5","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/5.png"}},{"type":"Button","props":{"y":240,"x":539,"var":"btn_6","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/6.png"}},{"type":"Button","props":{"y":321,"x":41,"var":"btn_7","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/7.png"}},{"type":"Button","props":{"y":321,"x":290,"var":"btn_8","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/8.png"}},{"type":"Button","props":{"y":321,"x":539,"var":"btn_9","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/9.png"}},{"type":"Button","props":{"y":403,"x":41,"var":"btn_re","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/cs.png"}},{"type":"Button","props":{"y":403,"x":290,"var":"btn_0","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/0.png"}},{"type":"Button","props":{"y":403,"x":539,"var":"btn_del","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/jiaru/sc.png"}},{"type":"Clip","props":{"y":89,"x":79,"var":"clip_1","skin":"tongyong_ui/game_ui/tongyong/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":89,"x":200,"visible":false,"var":"clip_2","skin":"tongyong_ui/game_ui/tongyong/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":89,"x":320,"visible":false,"var":"clip_3","skin":"tongyong_ui/game_ui/tongyong/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":89,"x":441,"visible":false,"var":"clip_4","skin":"tongyong_ui/game_ui/tongyong/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":89,"x":561,"visible":false,"var":"clip_5","skin":"tongyong_ui/game_ui/tongyong/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Clip","props":{"y":89,"x":682,"visible":false,"var":"clip_6","skin":"tongyong_ui/game_ui/tongyong/jiaru/clip_num.png","index":0,"clipX":10}},{"type":"Button","props":{"y":36,"x":739,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.JiaRuUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class JieSanUI extends View {
		public btn_enter:Laya.Button;
		public btn_cancle:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":608,"height":358,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":604,"width":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk.png","sizeGrid":"100,0,150,0","scaleX":-1,"height":380}},{"type":"Image","props":{"y":0,"x":0,"width":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk.png","sizeGrid":"100,0,150,0","height":380}},{"type":"Image","props":{"y":37,"x":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":35,"x":304,"skin":"tongyong_ui/game_ui/tongyong/general/tit_jiesan.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":303,"var":"btn_enter","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_jj.png","right":30,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":303,"var":"btn_cancle","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_tx.png","left":30,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":149,"x":303,"width":526,"height":32,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"y":15,"x":49.5,"skin":"tongyong_ui/game_ui/tongyong/general/clip_jiesan.png","clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":15,"x":156.5,"skin":"tongyong_ui/game_ui/tongyong/general/clip_jiesan.png","clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":15,"x":262.5,"skin":"tongyong_ui/game_ui/tongyong/general/clip_jiesan.png","clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":15,"x":369.5,"skin":"tongyong_ui/game_ui/tongyong/general/clip_jiesan.png","clipY":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":15,"x":475.5,"skin":"tongyong_ui/game_ui/tongyong/general/clip_jiesan.png","clipY":3,"anchorY":0.5,"anchorX":0.5}}]},{"type":"ProgressBar","props":{"y":169,"x":40,"width":524,"skin":"tongyong_ui/game_ui/tongyong/general/progress.png","sizeGrid":"0,30,0,30","height":11}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.JieSanUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
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

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":250,"x":636,"var":"img_0","skin":"tongyong_ui/game_ui/tongyong/general/tu_gs.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":44},{"type":"Image","props":{"width":620,"skin":"tongyong_ui/game_ui/tongyong/hud/game_popout_bg.png","sizeGrid":"89,49,71,39","height":350,"centerY":30,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_1","skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_sl2.png","centerY":-190,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_2","skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_js.png","centerY":-180,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":208,"x":626,"var":"img_3","skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":404,"x":493,"width":284,"height":229,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":106,"x":49,"wordWrap":true,"width":150,"var":"txt_name","text":"玩家名字六字","leading":6,"height":20,"fontSize":20,"color":"#b18dff","align":"center"}},{"type":"Image","props":{"y":57,"x":121,"skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":57,"x":121,"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":66,"x":353,"width":167,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Text","props":{"y":71,"x":255,"wordWrap":true,"width":102,"text":"我的输赢：","leading":6,"height":20,"fontSize":20,"color":"#fffbb5","align":"center"}},{"type":"Text","props":{"y":72,"x":363,"wordWrap":true,"width":145,"var":"txt_benefit","text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":22,"x":353,"width":167,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Text","props":{"y":27,"x":255,"wordWrap":true,"width":102,"text":"我的下注：","leading":6,"height":20,"fontSize":20,"color":"#fffbb5","align":"center"}},{"type":"Text","props":{"y":28,"x":363,"wordWrap":true,"width":145,"var":"txt_bet","text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":145,"x":2,"skin":"tongyong_ui/game_ui/tongyong/general/tu_d5.png"}},{"type":"Text","props":{"y":176,"x":10,"width":552,"var":"txt_result","text":"000000.00","leading":6,"height":20,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":7,"x":74,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png","scaleY":0.95,"scaleX":0.95}}]}]}],"animations":[{"nodes":[{"target":44,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":44,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":44,"key":"rotation","index":100}]}}],"name":"ani2","id":2,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.JieSuanUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
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
            this.createView(ui.dzqp.game_ui.tongyong.JieSuanRenderUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
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
            this.createView(ui.dzqp.game_ui.tongyong.JieSuanRender1UI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class JieSuanRender2UI extends View {
		public img_bg:Laya.Image;
		public lab_name:Laya.Label;
		public lab_chip:Laya.Label;
		public lab_multiple:Laya.Label;
		public lab_point:Laya.Label;
		public img_banker:Laya.Image;
		public lbl_totalpoint:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":680,"height":38},"child":[{"type":"Box","props":{"y":0,"x":0,"width":680,"renderType":"render","height":38},"child":[{"type":"Image","props":{"y":0,"x":1,"width":680,"var":"img_bg","skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_zj.png","height":38}},{"type":"Label","props":{"y":20,"x":122,"width":140,"var":"lab_name","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":20,"x":234,"width":63,"var":"lab_chip","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":20,"x":347,"width":92,"var":"lab_multiple","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":20,"x":475,"width":100,"var":"lab_point","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":19,"x":30,"var":"img_banker","skin":"tongyong_ui/game_ui/tongyong/general/tu_zhuang.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":20,"x":593,"width":100,"var":"lbl_totalpoint","leading":6,"height":23,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.JieSuanRender2UI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
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
            this.createView(ui.dzqp.game_ui.tongyong.JieSuanRender3UI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class JieSuan_FangKaUI extends View {
		public ani2:Laya.FrameAnimation;
		public lab_xinxi:Laya.Label;
		public list_settle:Laya.List;
		public btn_create_room:Laya.Button;
		public btn_back_hud:Laya.Button;

        public static  uiView:any ={"type":"View","props":{},"child":[{"type":"Box","props":{"width":726,"height":527,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":154,"x":359,"skin":"tongyong_ui/game_ui/tongyong/general/tu_gs.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":44},{"type":"Image","props":{"y":294,"x":363,"width":700,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk1.png","sizeGrid":"89,49,71,39","height":350,"centerY":30,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":74,"x":363,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_sl2.png","centerY":-190,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":84,"x":363,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_js.png","centerY":-180,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":112,"x":349,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":423,"x":367,"wordWrap":true,"width":495,"var":"lab_xinxi","text":"5S后开始第1局，本轮共5局","leading":6,"height":23,"fontSize":20,"color":"#ffff96","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":183,"x":20,"width":681,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_d1.png","sizeGrid":"0,176,0,164","height":38}},{"type":"Label","props":{"y":204,"x":138,"wordWrap":true,"width":63,"text":"昵称","leading":6,"height":23,"fontSize":18,"color":"#1f2530","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":204,"x":254,"wordWrap":true,"width":63,"text":"底分","leading":6,"height":23,"fontSize":18,"color":"#1f2530","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":204,"x":370,"wordWrap":true,"width":63,"text":"倍数","leading":6,"height":23,"fontSize":18,"color":"#1f2530","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":204,"x":493,"wordWrap":true,"width":63,"text":"积分","leading":6,"height":23,"fontSize":18,"color":"#1f2530","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"List","props":{"y":227,"x":18,"width":683,"var":"list_settle","spaceY":8,"repeatY":4,"height":180},"child":[{"type":"JieSuanRender2","props":{"name":"render","runtime":"ui.dzqp.game_ui.tongyong.JieSuanRender2UI"}}]},{"type":"Label","props":{"y":204,"x":611,"wordWrap":true,"width":84,"text":"累计积分","leading":6,"height":23,"fontSize":18,"color":"#1f2530","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Button","props":{"y":494,"x":218,"width":200,"visible":false,"var":"btn_create_room","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_2.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d4725","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"创建房间","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":494,"x":508,"width":200,"visible":false,"var":"btn_back_hud","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_3.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#397119","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"返回大厅","anchorY":0.5,"anchorX":0.5}}]}],"animations":[{"nodes":[{"target":44,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":44,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":44,"key":"rotation","index":100}]}}],"name":"ani2","id":2,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.dzqp.game_ui.tongyong.JieSuanRender2UI",ui.dzqp.game_ui.tongyong.JieSuanRender2UI);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.JieSuan_FangKaUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class Loading1UI extends View {
		public ani1:Laya.FrameAnimation;
		public ani:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":80,"height":80},"child":[{"type":"Box","props":{"width":80,"var":"ani","height":80,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/logo/load0000.png","rotation":75.78947368421052,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":3},{"type":"Image","props":{"width":101,"skin":"tongyong_ui/game_ui/tongyong/logo/load0001.png","height":108,"centerY":3,"centerX":3,"anchorY":0.5,"anchorX":0.5},"compId":2}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/logo/load0001.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/logo/load0002.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":1},{"value":"tongyong_ui/game_ui/tongyong/logo/load0003.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":2},{"value":"tongyong_ui/game_ui/tongyong/logo/load0004.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":3},{"value":"tongyong_ui/game_ui/tongyong/logo/load0005.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/logo/load0006.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":5},{"value":"tongyong_ui/game_ui/tongyong/logo/load0007.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/logo/load0008.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":7},{"value":"tongyong_ui/game_ui/tongyong/logo/load0009.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":8},{"value":"tongyong_ui/game_ui/tongyong/logo/load0010.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":9},{"value":"tongyong_ui/game_ui/tongyong/logo/load0011.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":10},{"value":"tongyong_ui/game_ui/tongyong/logo/load0012.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":11},{"value":"tongyong_ui/game_ui/tongyong/logo/load0013.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":12},{"value":"tongyong_ui/game_ui/tongyong/logo/load0014.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":13},{"value":"tongyong_ui/game_ui/tongyong/logo/load0015.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":14},{"value":"tongyong_ui/game_ui/tongyong/logo/load0016.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":15},{"value":"tongyong_ui/game_ui/tongyong/logo/load0017.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":16},{"value":"tongyong_ui/game_ui/tongyong/logo/load0018.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":17},{"value":"tongyong_ui/game_ui/tongyong/logo/load0019.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":18},{"value":"tongyong_ui/game_ui/tongyong/logo/load0020.png","tweenMethod":"linearNone","tween":false,"target":2,"key":"skin","index":19}]}},{"target":3,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":19}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.Loading1UI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class PaiJu_xqUI extends View {
		public btn_close:Laya.Button;
		public panel_xq:Laya.Panel;
		public txt_info:Laya.Label;
		public list_info:Laya.List;
		public txt_request:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":787,"height":531,"centerY":20,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":0,"width":395,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk2.png","height":531}},{"type":"Image","props":{"y":0,"x":786,"width":395,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk2.png","scaleX":-1,"height":531}},{"type":"Image","props":{"y":37,"width":476,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","height":70,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":37,"x":394,"skin":"tongyong_ui/game_ui/tongyong/hud/paiju.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":39,"x":744,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Panel","props":{"y":77,"x":23,"width":739,"var":"panel_xq","height":404},"child":[{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":736,"var":"txt_info","overflow":"scroll","height":18,"align":"left"}}]},{"type":"List","props":{"y":77,"x":25,"width":731,"var":"list_info","spaceY":8,"repeatY":13,"height":411},"child":[{"type":"PaiJu_xqT","props":{"name":"render","runtime":"ui.dzqp.game_ui.tongyong.PaiJu_xqTUI"}}]},{"type":"Label","props":{"y":242,"x":331,"var":"txt_request","text":"请求数据中","leading":20,"fontSize":22,"color":"#ffffff","align":"left"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.dzqp.game_ui.tongyong.PaiJu_xqTUI",ui.dzqp.game_ui.tongyong.PaiJu_xqTUI);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.PaiJu_xqUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class PaiJu_xqTUI extends View {
		public txt_title:Laya.Label;
		public txt_info:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":731,"height":27},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":115,"var":"txt_title","leading":20,"height":27,"fontSize":22,"color":"#696291","align":"left"}},{"type":"Label","props":{"y":0,"x":111,"wordWrap":true,"width":620,"var":"txt_info","leading":20,"fontSize":22,"color":"#ffffff","align":"left"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.PaiJu_xqTUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class PaiXeiUI extends View {
		public ani_chupai:Laya.FrameAnimation;
		public cards:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":110,"height":120},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/tu_paixei.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":53,"x":12,"width":47,"var":"cards","height":52},"compId":5,"child":[{"type":"Image","props":{"y":13,"x":32,"skin":"tongyong_ui/game_ui/tongyong/general/tu_paixeip.png","renderType":"render","anchorY":0.5,"anchorX":0.5},"compId":3},{"type":"Image","props":{"y":18,"x":29,"skin":"tongyong_ui/game_ui/tongyong/general/tu_paixeip.png","renderType":"render","anchorY":0.5,"anchorX":0.5},"compId":7},{"type":"Image","props":{"y":24,"x":25,"skin":"tongyong_ui/game_ui/tongyong/general/tu_paixeip.png","renderType":"render","anchorY":0.5,"anchorX":0.5},"compId":6},{"type":"Image","props":{"y":8,"x":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_paixeid.png","renderType":"mask"}}]}],"animations":[{"nodes":[{"target":3,"keyframes":{"y":[{"value":-14,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":0},{"value":13,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"y","index":5}],"x":[{"value":46,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":32,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"x","index":5}]}},{"target":6,"keyframes":{"y":[{"value":-14,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":0},{"value":-14,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"y","index":6},{"value":24,"tweenMethod":"linearNone","tween":true,"target":6,"key":"y","index":12}],"x":[{"value":45,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":0},{"value":45,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"x","index":6},{"value":25,"tweenMethod":"linearNone","tween":true,"target":6,"key":"x","index":12}]}},{"target":7,"keyframes":{"y":[{"value":-7,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":0},{"value":-7,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"y","index":3},{"value":18,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":8}],"x":[{"value":43,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":0},{"value":43,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"x","index":3},{"value":29,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":8}]}},{"target":5,"keyframes":{"var":[{"value":"","tweenMethod":"linearNone","tween":false,"target":5,"key":"var","index":12}]}}],"name":"ani_chupai","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.PaiXeiUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class PaiXei1UI extends View {
		public ani1:Laya.FrameAnimation;
		public img_card:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":140,"height":100},"child":[{"type":"Image","props":{"y":0,"x":-1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_paixie0_2.png"}},{"type":"Image","props":{"y":-5,"x":-2,"var":"img_card","skin":"tongyong_ui/game_ui/tongyong/general/tu_paixie0_0.png"},"compId":4},{"type":"Image","props":{"y":-4,"x":-3,"skin":"tongyong_ui/game_ui/tongyong/general/tu_paixie0_1.png"}}],"animations":[{"nodes":[{"target":4,"keyframes":{"y":[{"value":-69,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":0},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":12}],"x":[{"value":11,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":0},{"value":-2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":12}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.PaiXei1UI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class PiPeiUI extends View {
		public box:Laya.Box;
		public img_tips:Laya.Image;
		public btn_cancle:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":340,"var":"box","height":98,"centerY":-40,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Loading1","props":{"y":40,"centerX":-122,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.dzqp.game_ui.tongyong.Loading1UI"}},{"type":"Image","props":{"y":53,"x":209,"var":"img_tips","skin":"tongyong_ui/game_ui/tongyong/general/tu_ppp.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"width":240,"var":"btn_cancle","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_3.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#309d26","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","label":"取消","height":60,"centerY":78,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.dzqp.game_ui.tongyong.Loading1UI",ui.dzqp.game_ui.tongyong.Loading1UI);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.PiPeiUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class QiFuUI extends View {
		public btn_close:Laya.Button;
		public img_name0:Laya.Image;
		public img_type0:Laya.Image;
		public txt_money0:Laya.Label;
		public img_name1:Laya.Image;
		public img_type1:Laya.Image;
		public txt_money1:Laya.Label;
		public img_name2:Laya.Image;
		public img_type2:Laya.Image;
		public txt_money2:Laya.Label;
		public img_name3:Laya.Image;
		public img_type3:Laya.Image;
		public txt_money3:Laya.Label;
		public img_name4:Laya.Image;
		public img_type4:Laya.Image;
		public txt_money4:Laya.Label;
		public img_name5:Laya.Image;
		public img_type5:Laya.Image;
		public txt_money5:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-68,"x":-208,"width":910,"skin":"tongyong_ui/game_ui/tongyong/hud/game_popout_bg.png","sizeGrid":"90,50,70,50","height":641,"centerY":20,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":35,"x":451,"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_qf.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":38,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":99,"x":1045,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":138,"x":210,"width":854,"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_11.png","sizeGrid":"20,20,20,20","height":514}},{"type":"Box","props":{"y":270,"x":355,"width":259,"height":239,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":259,"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_k.png","sizeGrid":"59,0,34,0","height":240}},{"type":"Image","props":{"y":17,"x":88,"var":"img_name0","skin":"tongyong_ui/game_ui/tongyong/qifu/f_xs.png"}},{"type":"Image","props":{"y":32,"x":35,"var":"img_type0","skin":"tongyong_ui/game_ui/tongyong/qifu/f_xs2.png"}},{"type":"Image","props":{"y":201,"x":57,"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_kk.png"}},{"type":"Image","props":{"y":215,"x":58,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":203,"x":83,"width":88,"var":"txt_money0","height":28,"fontSize":24,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":271,"x":637,"width":260,"height":240,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":259,"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_k.png","sizeGrid":"59,0,34,0","height":240}},{"type":"Image","props":{"y":17,"x":90,"var":"img_name1","skin":"tongyong_ui/game_ui/tongyong/qifu/f_px.png"}},{"type":"Image","props":{"y":137,"x":130,"var":"img_type1","skin":"tongyong_ui/game_ui/tongyong/qifu/f_px2.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":201,"x":65,"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_kk.png"}},{"type":"Image","props":{"y":215,"x":66,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":203,"x":87,"width":88,"var":"txt_money1","height":28,"fontSize":24,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":270,"x":917,"width":259,"height":239,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":259,"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_k.png","sizeGrid":"59,0,34,0","height":240}},{"type":"Image","props":{"y":17,"x":91,"var":"img_name2","skin":"tongyong_ui/game_ui/tongyong/qifu/f_gsy.png"}},{"type":"Image","props":{"y":47,"x":41,"var":"img_type2","skin":"tongyong_ui/game_ui/tongyong/qifu/f_gsy2.png"}},{"type":"Image","props":{"y":200,"x":65,"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_kk.png"}},{"type":"Image","props":{"y":214,"x":66,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":202,"x":88,"width":88,"var":"txt_money2","height":28,"fontSize":24,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":524,"x":355,"width":259,"height":237,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-2,"x":0,"width":259,"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_k.png","sizeGrid":"59,0,34,0","height":240}},{"type":"Image","props":{"y":15,"x":85,"var":"img_name3","skin":"tongyong_ui/game_ui/tongyong/qifu/f_gg.png"}},{"type":"Image","props":{"y":-20,"x":37,"var":"img_type3","skin":"tongyong_ui/game_ui/tongyong/qifu/f_gg2.png"}},{"type":"Image","props":{"y":199,"x":57,"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_kk.png"}},{"type":"Image","props":{"y":213,"x":58,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":201,"x":83,"width":88,"var":"txt_money3","height":28,"fontSize":24,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":529,"x":636,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":259,"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_k.png","sizeGrid":"59,0,34,0","height":240}},{"type":"Image","props":{"y":17,"x":89,"var":"img_name4","skin":"tongyong_ui/game_ui/tongyong/qifu/f_cs.png"}},{"type":"Image","props":{"y":48,"x":40,"var":"img_type4","skin":"tongyong_ui/game_ui/tongyong/qifu/f_cs2.png"}},{"type":"Image","props":{"y":202,"x":66,"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_kk.png"}},{"type":"Image","props":{"y":216,"x":67,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":204,"x":87,"width":88,"var":"txt_money4","height":28,"fontSize":24,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":529,"x":918,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":259,"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_k.png","sizeGrid":"59,0,34,0","height":240}},{"type":"Image","props":{"y":17,"x":92,"var":"img_name5","skin":"tongyong_ui/game_ui/tongyong/qifu/f_tdg.png"}},{"type":"Image","props":{"y":51,"x":43,"var":"img_type5","skin":"tongyong_ui/game_ui/tongyong/qifu/f_tdg2.png"}},{"type":"Image","props":{"y":200,"x":65,"skin":"tongyong_ui/game_ui/tongyong/qifu/tu_kk.png"}},{"type":"Image","props":{"y":214,"x":66,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":201,"x":90,"width":88,"var":"txt_money5","height":28,"fontSize":24,"color":"#ffffff","align":"center"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.QiFuUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class ShangZhuangLBUI extends View {
		public btn_close:Laya.Button;
		public btn_shangzhuang:Laya.Button;
		public txt_limit:Laya.Label;
		public list_player:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":341,"scaleY":1.25,"scaleX":1.25,"height":531,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":339,"width":170,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk0.png","sizeGrid":"100,0,145,36","scaleX":-1,"height":531}},{"type":"Image","props":{"width":170,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk0.png","sizeGrid":"100,0,145,36","height":531}},{"type":"Image","props":{"y":7,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_szlb.png","centerX":0}},{"type":"Button","props":{"y":37,"x":299,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":447,"var":"btn_shangzhuang","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_sqsz.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":491,"wordWrap":true,"width":276,"var":"txt_limit","text":"上庄需要 5000","height":22,"fontSize":20,"color":"#999999","centerX":3,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"List","props":{"y":79,"x":25,"width":291,"var":"list_player","spaceY":2,"repeatY":5,"height":302,"cacheAsBitmap":true},"child":[{"type":"WanJia1","props":{"y":0,"x":0,"name":"render","runtime":"ui.dzqp.game_ui.tongyong.WanJia1UI"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.dzqp.game_ui.tongyong.WanJia1UI",ui.dzqp.game_ui.tongyong.WanJia1UI);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.ShangZhuangLBUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class SheZhiUI extends View {
		public hslider0:Laya.HSlider;
		public hslider1:Laya.HSlider;
		public btn_change:Laya.Button;
		public box_vesion:Laya.Box;
		public box_app:Laya.Box;
		public txt_appbbh:Laya.Label;
		public box_v:Laya.Box;
		public txt_bbh:Laya.Label;
		public btn_clear:Laya.Button;
		public btn_check:Laya.Button;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":608,"scaleY":1.25,"scaleX":1.25,"height":402,"centerY":20,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":0,"width":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk.png","sizeGrid":"100,0,150,0","height":420}},{"type":"Image","props":{"x":604,"width":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk.png","sizeGrid":"100,0,150,0","scaleX":-1,"height":420}},{"type":"Image","props":{"y":37,"x":303,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","centerX":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":35,"x":304,"skin":"tongyong_ui/game_ui/tongyong/general/tit_set.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":140,"x":68,"width":84,"text":"音效：","height":24,"fontSize":24,"color":"#fffbb5","align":"right"}},{"type":"Text","props":{"y":219,"x":68,"width":84,"text":"音乐：","height":24,"fontSize":24,"color":"#fffbb5","align":"right"}},{"type":"HSlider","props":{"y":139,"x":148,"width":374,"var":"hslider0","value":0,"tick":1,"skin":"tongyong_ui/game_ui/tongyong/dating/hslider.png","sizeGrid":"0,20,0,21","showLabel":false,"min":0,"max":100,"height":31,"allowClickBack":true}},{"type":"HSlider","props":{"y":217,"x":148,"width":374,"var":"hslider1","value":0,"tick":1,"skin":"tongyong_ui/game_ui/tongyong/dating/hslider.png","sizeGrid":"0,20,0,21","showLabel":false,"min":0,"max":100,"height":31,"allowClickBack":true}},{"type":"Button","props":{"y":341,"x":303,"var":"btn_change","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qd.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":315,"var":"box_vesion","top":81,"right":37,"height":18},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"box_app"},"child":[{"type":"Label","props":{"y":0,"x":120,"width":49,"var":"txt_appbbh","underlineColor":"#00ff00","text":1.4,"height":18,"fontSize":18,"color":"#fff","align":"left"}},{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":120,"underlineColor":"#00ff00","text":"App版本号：","height":18,"fontSize":18,"color":"#fff","align":"right"}}]},{"type":"Box","props":{"y":0,"x":116,"var":"box_v"},"child":[{"type":"Label","props":{"wordWrap":true,"width":120,"underlineColor":"#00ff00","text":"版本号：","height":18,"fontSize":18,"color":"#fff","align":"right"}},{"type":"Label","props":{"x":120,"width":49,"var":"txt_bbh","underlineColor":"#00ff00","text":"1.4.0.000","height":18,"fontSize":18,"color":"#fff","align":"left"}}]}]},{"type":"Button","props":{"y":366,"x":516,"var":"btn_clear","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_ql.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":316,"x":515,"var":"btn_check","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_gx.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":37,"x":561,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.SheZhiUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class TabItemRenderUI extends View {
		public txt_name:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":175,"height":58},"child":[{"type":"Clip","props":{"y":0,"x":0,"skin":"tongyong_ui/game_ui/tongyong/dating/clip_an1.png","name":"selectBox","index":2,"clipY":3}},{"type":"Text","props":{"y":16,"x":6,"wordWrap":false,"width":147,"var":"txt_name","text":"活动内容","height":24,"fontSize":24,"color":"#ffffff","cacheAs":"normal","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.TabItemRenderUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class TimeBtnRenderUI extends View {
		public btn_time:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":179,"height":29},"child":[{"type":"Button","props":{"var":"btn_time","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_rq.png","sizeGrid":"0,21,0,19","labelSize":20}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.TimeBtnRenderUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class TipsUI extends View {
		public txt_label:laya.display.Text;
		public btn_enter:Laya.Button;
		public btn_cancle:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":608,"scaleY":1.25,"scaleX":1.25,"height":358,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":604,"width":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk.png","sizeGrid":"100,0,150,0","scaleX":-1,"height":380}},{"type":"Image","props":{"y":0,"x":0,"width":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk.png","sizeGrid":"100,0,150,0","height":380}},{"type":"Image","props":{"y":37,"x":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":35,"x":304,"skin":"tongyong_ui/game_ui/tongyong/general/tit_tishi.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":71,"x":38,"wordWrap":true,"width":530,"var":"txt_label","valign":"middle","leading":8,"height":182,"fontSize":24,"color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":303,"var":"btn_enter","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qd.png","right":30,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":303,"var":"btn_cancle","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qx.png","left":30,"anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.TipsUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class Tips1UI extends View {
		public txt_label:laya.display.Text;
		public btn_enter:Laya.Button;
		public btn_cancle:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":608,"scaleY":1.25,"scaleX":1.25,"height":358,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":0,"width":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk.png","sizeGrid":"100,0,150,0","height":380}},{"type":"Image","props":{"x":604,"width":304,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk.png","sizeGrid":"100,0,150,0","scaleX":-1,"height":380}},{"type":"Image","props":{"y":37,"x":301,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","centerX":-3,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":35,"x":304,"skin":"tongyong_ui/game_ui/tongyong/general/tit_tishi.png","anchorY":0.5,"anchorX":0.5}},{"type":"Text","props":{"y":73,"x":38,"wordWrap":true,"width":530,"var":"txt_label","valign":"middle","leading":8,"height":181,"fontSize":24,"color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":303,"var":"btn_enter","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qw.png","right":30,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":303,"var":"btn_cancle","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qx.png","left":30,"anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.Tips1UI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class Tips_backUI extends View {
		public img_meinv:Laya.Image;
		public img_guanggao:Laya.Image;
		public btn_enter:Laya.Button;
		public btn_cancle:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":608,"height":358,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/tu_bgTips.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":121,"x":2,"visible":false,"var":"img_meinv","skin":"tongyong_ui/game_ui/tongyong/tuichu/baijiale0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":113,"x":531,"visible":false,"var":"img_guanggao","skin":"tongyong_ui/game_ui/tongyong/tuichu/baijiale1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":363,"x":459,"var":"btn_enter","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qd.png","right":30,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":363,"x":166,"var":"btn_cancle","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qx.png","left":46,"anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.Tips_backUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class WanJiaUI extends View {
		public img_head:Laya.Image;
		public img_txk:Laya.Image;
		public clip_money:Laya.Clip;
		public clip_num:Laya.Clip;
		public txt_name:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":740,"height":66},"child":[{"type":"Image","props":{"y":1,"x":1,"width":736,"skin":"tongyong_ui/game_ui/tongyong/general/tu_toplb4.png","sizeGrid":"11,12,13,11","renderType":"render","height":64},"child":[{"type":"Image","props":{"y":35,"x":171,"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_1.png","scaleY":0.75,"scaleX":0.75,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-5,"x":136,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png","scaleY":0.7,"scaleX":0.7}},{"type":"Image","props":{"y":19,"x":480,"width":179,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k1ss.png","sizeGrid":"0,17,0,14","height":29,"alpha":0.5}},{"type":"Clip","props":{"y":22,"x":511,"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/general/clip_money1.png","clipX":11}},{"type":"Image","props":{"y":32,"x":482,"skin":"tongyong_ui/game_ui/tongyong/general/icon_money.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":19,"x":53,"visible":false,"var":"clip_num","skin":"tongyong_ui/game_ui/tongyong/general/clip_top.png","clipX":10}},{"type":"Label","props":{"y":24,"x":252,"width":155,"var":"txt_name","height":21,"fontSize":20,"font":"SimHei","color":"#020023","align":"left"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.WanJiaUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class WanJia1UI extends View {
		public img_head:Laya.Image;
		public img_txk:Laya.Image;
		public clip_money:Laya.Clip;
		public txt_name:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":290,"height":66},"child":[{"type":"Image","props":{"y":1,"x":1,"width":290,"skin":"tongyong_ui/game_ui/tongyong/general/tu_toplb4.png","sizeGrid":"11,12,13,11","height":64},"child":[{"type":"Image","props":{"y":32,"x":44,"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_1.png","scaleY":0.75,"scaleX":0.75,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-5,"x":9,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png","scaleY":0.7,"scaleX":0.7}},{"type":"Image","props":{"y":29,"x":93,"width":179,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k1ss.png","sizeGrid":"0,17,0,14","height":29,"alpha":0.5}},{"type":"Clip","props":{"y":32,"x":124,"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/general/clip_money1.png","clipX":11}},{"type":"Image","props":{"y":42,"x":95,"skin":"tongyong_ui/game_ui/tongyong/general/icon_money.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":4,"x":105,"width":155,"var":"txt_name","text":"玩家名字六字","height":21,"fontSize":20,"font":"SimHei","color":"#020023","align":"left"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.WanJia1UI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class WanJiaLBUI extends View {
		public btn_close:Laya.Button;
		public list_player:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":10,"x":10,"width":793,"skin":"tongyong_ui/game_ui/tongyong/hud/game_popout_bg.png","scaleY":1.25,"scaleX":1.25,"height":531,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":8,"skin":"tongyong_ui/game_ui/tongyong/general/tit_wanjialb.png","centerX":0}},{"type":"Button","props":{"y":37,"x":737,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":466,"wordWrap":true,"width":276,"text":"仅展示金额最多的前20名玩家","height":22,"fontSize":20,"color":"#00ff0a","centerX":0,"anchorY":0.5,"anchorX":0.5,"align":"left"}},{"type":"List","props":{"x":23,"width":736,"var":"list_player","spaceY":2,"height":358,"centerY":-11,"cacheAsBitmap":true,"anchorY":0,"anchorX":0},"child":[{"type":"WanJia","props":{"y":0,"x":0,"name":"render","runtime":"ui.dzqp.game_ui.tongyong.WanJiaUI"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.dzqp.game_ui.tongyong.WanJiaUI",ui.dzqp.game_ui.tongyong.WanJiaUI);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.WanJiaLBUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class XiaoXiUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"width":793,"skin":"tongyong_ui/game_ui/tongyong/hud/game_popout_bg.png","height":531,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":36,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bkbt.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":7,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png","centerX":0}},{"type":"Button","props":{"y":37,"x":737,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Text","props":{"y":184,"x":277,"wordWrap":true,"width":719,"leading":6,"height":378,"fontSize":28,"font":"SimHei","color":"#9794c1","align":"left"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.XiaoXiUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.tongyong {
    export class ZhanJiUI extends View {
		public btn_close:Laya.Button;
		public img_index:Laya.Image;
		public img_battleid:Laya.Image;
		public img_roomname:Laya.Image;
		public img_endtime:Laya.Image;
		public img_profit:Laya.Image;
		public list_record:Laya.List;
		public txt_noRecord:Laya.Label;
		public txt_total:Laya.Label;
		public list_time:Laya.Box;
		public btn_list0:Laya.Button;
		public btn_list1:Laya.Button;
		public btn_list2:Laya.Button;
		public btn_list3:Laya.Button;
		public btn_list4:Laya.Button;
		public btn_list5:Laya.Button;
		public btn_list6:Laya.Button;
		public btn_list:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-173,"x":-149,"width":1034,"skin":"tongyong_ui/game_ui/tongyong/hud/game_popout_bg.png","sizeGrid":"0,50,0,50","height":573,"centerY":13,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":43,"x":517,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":14,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_zj.png","centerX":0}},{"type":"Button","props":{"y":37,"x":979,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":171,"x":148,"width":976,"height":430},"child":[{"type":"Image","props":{"y":38,"width":976,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bb1.png","sizeGrid":"9,7,12,6","left":0,"height":389}},{"type":"Image","props":{"y":0,"x":0,"skin":"tongyong_ui/game_ui/tongyong/general/tu_dhdt1.png","sizeGrid":"0,12,0,11","right":0,"left":0,"height":39}},{"type":"Image","props":{"y":22,"x":56,"var":"img_index","skin":"tongyong_ui/game_ui/tongyong/general/bb_xh.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":21,"x":218,"width":95,"var":"img_battleid","skin":"tongyong_ui/game_ui/tongyong/general/bb_bh.png","height":29,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":21,"x":708,"var":"img_roomname","skin":"tongyong_ui/game_ui/tongyong/general/bb_wzwc.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":21,"x":463,"var":"img_endtime","skin":"tongyong_ui/game_ui/tongyong/general/bb_wzsj.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":21,"x":856,"var":"img_profit","skin":"tongyong_ui/game_ui/tongyong/general/bb_yl.png","anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"x":0,"width":977,"var":"list_record","spaceY":1,"repeatY":9,"height":341,"disabled":false,"centerY":-5,"cacheAsBitmap":true,"anchorY":0,"anchorX":0},"child":[{"type":"BaoBiaoT","props":{"name":"render","runtime":"ui.dzqp.game_ui.tongyong.BaoBiaoTUI"}}]},{"type":"Label","props":{"y":198,"x":346,"wordWrap":true,"width":232,"var":"txt_noRecord","text":"---暂无数据---","height":22,"fontSize":20,"color":"#696291","align":"center"}},{"type":"Image","props":{"y":434,"width":976,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_dhdt1.png","sizeGrid":"17,12,8,11","scaleY":-1,"right":0,"left":0,"height":39}},{"type":"Label","props":{"y":404,"x":754,"width":215,"var":"txt_total","text":"000000000","height":22,"fontSize":20,"color":"#069e00","align":"right"}}]},{"type":"Box","props":{"y":334,"x":162,"width":176,"var":"list_time","height":267},"child":[{"type":"Button","props":{"var":"btn_list0","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_rq.png","sizeGrid":"0,21,0,19","labelSize":20}},{"type":"Button","props":{"y":33,"var":"btn_list1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_rq.png","sizeGrid":"0,21,0,19","labelSize":20}},{"type":"Button","props":{"y":66,"var":"btn_list2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_rq.png","sizeGrid":"0,21,0,19","labelSize":20}},{"type":"Button","props":{"y":99,"var":"btn_list3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_rq.png","sizeGrid":"0,21,0,19","labelSize":20}},{"type":"Button","props":{"y":132,"var":"btn_list4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_rq.png","sizeGrid":"0,21,0,19","labelSize":20}},{"type":"Button","props":{"y":165,"var":"btn_list5","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_rq.png","sizeGrid":"0,21,0,19","labelSize":20}},{"type":"Button","props":{"y":198,"var":"btn_list6","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_rq.png","sizeGrid":"0,21,0,19","labelSize":20}}]},{"type":"Button","props":{"y":570,"x":161,"width":179,"var":"btn_list","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_rq.png","sizeGrid":"0,21,0,19","labelSize":20,"labelColors":"#fdffd1","height":29},"child":[{"type":"Image","props":{"y":0,"x":150,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_jtt.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.dzqp.game_ui.tongyong.BaoBiaoTUI",ui.dzqp.game_ui.tongyong.BaoBiaoTUI);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.tongyong.ZhanJiUI.uiView);
        }
    }
}
