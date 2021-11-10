$(function(){
    $('.bars-icon').click(function () {
        $('.sidebar').toggleClass('minsidebar');        
    });
    $('.bars-icon').click(function () {
        $('.main-panel').css('flexBasis', '95%');        
    });
    $('.right-icon').click(function () {
        $('.sidebar').toggle();        
    });
    // menu profile
    $('.div-ellipsis').click(function () {
        $('.profile-menu').toggle();        
    });
});