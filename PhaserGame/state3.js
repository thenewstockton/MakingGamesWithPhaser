demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#332211';
        console.log('state3');
        addChnageStateEventListeners();
    },
    update:function(){}
};