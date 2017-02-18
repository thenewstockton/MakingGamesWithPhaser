var demo = {};
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#80ff80';
        console.log('state0'); 
        addChnageStateEventListeners();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    },
    update:function(){}
};

