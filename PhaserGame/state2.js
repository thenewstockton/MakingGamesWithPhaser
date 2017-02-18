demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#330000';
        console.log('state2');
        addChnageStateEventListeners();
    },
    update:function(){}
};