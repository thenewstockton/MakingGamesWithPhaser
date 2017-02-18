demo.state9 = function(){};
demo.state9.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#878787';
        console.log('state9');
        addChnageStateEventListeners();
    },
    update:function(){}
};