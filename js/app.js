`use strict`;
$(document).ready(function(){
let widthScreen;
widthScreen = $(window).width();
if ( 767 > widthScreen && widthScreen >= 480 ){
    $('div').css({'background-color':'#f39189'});
}else if( 960 >= widthScreen && widthScreen >= 767){
    $('div').css({'background-color':'#6e7582'});
} else if(widthScreen > 960) {
    $('div').css({'background-color': '#bb8082'})
    }
else{
    $('div').css({'background-color':'#fff'});
}
$(window).resize(() => {
    widthScreen = $(window).width();
    if ( 767 > widthScreen && widthScreen >= 480 ){
        $('div').css({'background-color':'#f39189'});
    }else if( 960 >= widthScreen && widthScreen >= 767){
        $('div').css({'background-color':'#6e7582'});}

    else if(widthScreen > 960) {
        $('div').css({'background-color': '#bb8082'})
        }
     else{
        $('div').css({'background-color':'#fff'});
    }}
     );



});