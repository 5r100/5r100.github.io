var leftgear = document.getElementById("leftgear"),
rightgear = document.getElementById("rightgear");
    
window.addEventListener("scroll", function() {
    leftgear.style.transform = "rotate("+window.pageYOffset+"deg)";
    rightgear.style.transform = "rotate(-"+window.pageYOffset+"deg)";
});


      
$(document).ready(function(){ 
            $(window).scroll(function(){ 
                $('.runner').css("opacity",  $(window).scrollTop() / 200) 
            }) 
        }) 
