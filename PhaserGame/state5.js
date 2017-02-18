demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#12FFAA';
        console.log('state5');
        addChnageStateEventListeners();
    },
    update:function(){}
};