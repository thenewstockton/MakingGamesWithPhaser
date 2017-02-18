demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#330000'; 
        addChnageStateEventListeners();
    },
    update:function(){}
};