demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#336699';
        console.log('state1');
        addChnageStateEventListeners();    
    },
    update:function(){}
};