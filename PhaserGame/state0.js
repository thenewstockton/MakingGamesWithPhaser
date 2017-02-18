var demo = {};
var centerX = 1500 /2 ;
var centerY = 1000 /2 ;
var speed = 4;
var adam;

demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        game.load.image('adam', './assets/sprites/adam.png');
    },
    create: function(){
        game.stage.backgroundColor = '#000000';
        console.log('state0'); 
        addChnageStateEventListeners();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        adam = game.add.sprite(centerX, centerY , 'adam');
        // adam.anchor.x = 0.5;
        // adam.anchor.y = 0.5;
        adam.anchor.setTo(0.5,0.5);
    },
    update:function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            adam.x += speed;
        } else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            adam.x -= speed;
        }else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            adam.y -= speed;
        }else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            adam.y += speed;
        }
    }
};

