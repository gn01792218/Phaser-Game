

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
    //載入雪碧圖
    this.load.spritesheet('user','../img/SingleAnimation/Ranger Run.png',{frameWidth:48,frameHeight:48})
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
    this.bg0 = this.add.tileSprite(464,396,928,793,'bg0')
    this.bg1 = this.add.tileSprite(464,396,928,793,'bg1')
    this.bg2 = this.add.tileSprite(464,396,928,793,'bg2')
    this.bg3 = this.add.tileSprite(464,396,928,793,'bg3')
    this.bg4 = this.add.tileSprite(464,396,928,793,'bg4')
    this.bg5 = this.add.tileSprite(464,396,928,793,'bg5')
    this.bg6 = this.add.tileSprite(464,396,928,793,'bg6')
    this.bg7 = this.add.tileSprite(464,396,928,793,'bg7')
    this.bg8 = this.add.tileSprite(464,396,928,793,'bg8')
    this.bg9 = this.add.tileSprite(464,396,928,793,'bg9')

    //給地板加入物理效果
    this.physics.add.existing(this.bg9)  //只有這樣的話地板會掉下去!!!
    this.bg9.body.immovable = true //讓地板靜止不動
    this.bg9.body.moves = false //使地板的位置和旋轉不受加速度和重力影響
    this.bg9.setSize(928,-793,0)

    //放入角色圖片
    // this.player = this.add.sprite(100,650,'user')   //直接把人物放在指定位置的方式
    this.player = this.physics.add.sprite(100,650,'user') //給人物物理，再放到指定位置上
    this.player.setScale(4) //縮放到適合的大小
    this.player.setBounce(1) //角色彈跳值
    this.player.setSize(24,59,0) //角色的碰撞邊界
    
    //設定角色動畫
    this.anims.create({
      key:'run', //動畫名稱
      frames:this.anims.generateFrameNumbers('user',{start:0,end:7}), //設定spritesheet範圍，從零開始。(本圖有八張所以從0~7)
      frameRate:10, //設定影格速率
      repeat:-1   //無限重複
    })

    //將需要檢測碰撞的物件綁再一起
    this.physics.add.collider(this.player,this.bg9) 
    //播放動畫
    this.player.anims.play('run',true)
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
  width:928,
  height:793,
  parent:'app',  //進入點
  //加入物理特性
  physics:{
    default: 'arcade',
    arcade:{  //arcade設定物理世界
      gravity:{ //重力數值設定
        y:500  //重力越強掉落越快
      },
      debug:false, //打開可以看見框線
    }
  },
  scene: [gameStart] //掛上場景
}
var game = new Phaser.Game(config)

