demo.state8 = function(){};
demo.state8.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#8877FF';
        console.log('state8');
        addChnageStateEventListeners();
    },
    update:function(){}
};