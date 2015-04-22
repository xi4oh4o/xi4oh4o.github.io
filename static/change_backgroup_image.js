<!-- jQuery Function -->
//Link click effects
$("div.column").click(function() {
    var nav = $(this).find("ul.nav");
    if(nav.css("display") == "none") {
        nav.slideToggle("normal");
    }else{
        nav.slideToggle("normal");
    }
})

// Random change the background
$(document).ready(function() {
    var randomNumber = Math.floor((Math.random() * 24) + 1);
    $('body').css('background', 'url(bg/'+ randomNumber +'.jpg) whiteSmoke repeat fixed');
});
