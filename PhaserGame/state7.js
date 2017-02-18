demo.state7 = function(){};
demo.state7.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#3399BB';
        console.log('state7');
        addChnageStateEventListeners();
    },
    update:function(){}
};