$(document).ready(function(){
    $("#sliderWrap").children('img').eq(0).show();
});

var children = $("#sliderWrap").children('img');

var i = 0;
var effectTime = 2000;
var timeInterval = 7000;

function slider(){
    $(document).ready(function(){
        var children = $("#sliderWrap").children('img');
            images = children.length;
                if(i >= children.length-1){        
                    children.eq(i).fadeOut(effectTime);
                    children.eq(0).fadeIn(effectTime);
//                    children.eq(i).slideUp(effectTime);
//                    children.eq(0).slideDown(effectTime);
                    i=0;
                }
                else{
                    children.eq(i).fadeOut(effectTime);
                    children.eq(i+1).fadeIn(effectTime);
//                    children.eq(i).slideUp(effectTime);
//                    children.eq(i+1).slideDown(effectTime);
                    i++;
                }
    });
}

setInterval(slider,timeInterval);