

const gameStart = { //遊戲開始的場景
  key:'gameStart',
  preload: function(){
    //載入資源
    this.load.image('bg0','../img/Backgroundlayers/Layer_0011_0.png')
    this.load.image('bg1','../img/Backgroundlayers/Layer_0010_1.png')
    this.load.image('bg2','../img/Backgroundlayers/Layer_0009_2.png')
    this.load.image('bg3','../img/Backgroundlayers/Layer_0008_3.png')
    this.load.image('bg4','../img/Backgroundlayers/Layer_0006_4.png')
    this.load.image('bg5','../img/Backgroundlayers/Layer_0005_5.png')
    this.load.image('bg6','../img/Backgroundlayers/Layer_0003_6.png')
    this.load.image('bg7','../img/Backgroundlayers/Layer_0002_7.png')
    this.load.image('bg8','../img/Backgroundlayers/Layer_0001_8.png')
    this.load.image('bg9','../img/Backgroundlayers/Layer_0000_9.png')
  },
  create: function(){
    //資源載入後，加入遊戲物件及相關設定
    //將剛剛的圖片變成遊戲物件然後丟到畫面上去照著順序一個個丟上去!
    //遊戲中常見的物件容器有兩種
    // sprite：把一般圖片包成遊戲物件的容器。
    // tileSprite：把一般圖片包成遊戲物件，而且是具有重複特性的容器。
    // 如果你要做一個重複且前後無縫接上的背景的話，就用 tileSprite 做為你的遊戲物件容器。
    // 用tileSprite所創造的遊戲物件的中心點卻是從中間開始的
    //tileSprite( x, y, width, height, textureKey)；textureKey：物件的素材識別 id。
    this.add.image(400.300,'bg0')
    this.bg0 = this.add.tileSprite(400,300,800,600,'bg0')
    this.bg1 = this.add.tileSprite(400,300,800,600,'bg1')
    this.bg2 = this.add.tileSprite(400,300,800,600,'bg2')
    this.bg3 = this.add.tileSprite(400,300,800,600,'bg3')
    this.bg4 = this.add.tileSprite(400,300,800,600,'bg4')
    this.bg5 = this.add.tileSprite(400,300,800,600,'bg5')
    this.bg6 = this.add.tileSprite(400,300,800,600,'bg6')
    this.bg7 = this.add.tileSprite(400,300,800,600,'bg7')
    this.bg8 = this.add.tileSprite(400,300,800,600,'bg8')
    this.bg9 = this.add.tileSprite(400,300,800,600,'bg9')

  },
  update: function(){
    //遊戲狀態更新
      // 使用 tilePositionX 來改變背景圖片的位置
      // tilePositionX 是改變圖片在 tileSprite 容器裡面的位置，而不是容器在遊戲世界的座標
      // `this.bg${i}`.tiilePositionX += 4
    this.bg0.tilePositionX +=4
    this.bg1.tilePositionX +=4
    this.bg2.tilePositionX +=4
    this.bg3.tilePositionX +=4
    this.bg4.tilePositionX +=4
    this.bg5.tilePositionX +=4
    this.bg6.tilePositionX +=4
    this.bg7.tilePositionX +=4
    this.bg8.tilePositionX +=4
    this.bg9.tilePositionX +=4
  }
}


var config = {  //遊戲機本設置
  type:Phaser.Auto, //自動判斷瀏覽器是否支援webgl渲染，不支援自動切換canvas渲染
  width:800,
  height:600,
  parent:'app',  //進入點
  scene: [gameStart] //掛上場景
}
var game = new Phaser.Game(config)

