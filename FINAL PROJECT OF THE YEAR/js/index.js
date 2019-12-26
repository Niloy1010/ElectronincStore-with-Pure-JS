$(document).ready(function ()  {
    
    ////////////////////////VARIABLES////////////////////
     
    var headphone = $(".headphone");
    var headset = $(".headset");
    var console = $(".console");
    var cards = $(".items");
    var radioInput;
    
    
    
    
    ////////////////////////////RANDOMIZE ITEMS//////////////////
    
        for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    
    
    
    
    
    
    ////////////////////RADIO INPUT//////////////////////
    radioInput = $("[name='electronics']").val();
    
    console.log(radioInput);
    
    
    var num  = 1.01;
    num.toString();
    window.console.log(typeof num);
    
    
    
    
})