// boyuyen-xeberler

var button = document.getElementById("button");
var card = document.getElementById("card");
var text = document.getElementById("button-text")


button.onclick = function(){
    if(card.className == "row"){
        
        card.className = "close";
        text.innerHTML = "Show more"
    }else{
        card.className = "row";
        text.innerHTML = "Show less"  
    }
}

// responsiv menu
var menu = document.getElementById("menu");
var menubtn = document.getElementById("icon");
var icon = document.getElementById("menu-icon");

menubtn.onclick = function(){
if(menu.className == "menu-res"){
    menu.className = "menu-open";
    icon.className = "fas fa-times";
}
    else{
        menu.className ="menu-res";
        icon.className = "fas fa-bars";
    }
}


//owl-carousel

$(document).ready(function(){
    var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:50,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
  });


// menu-input

var search = document.getElementById("search");
var input = document.getElementById("input");

search.onclick = function(){
    if(input.className == "li-input"){
        input.className = "input-open";
    }else{
        input.className = "li-input";
    }
}

// sticky menu

var menu1 = document.getElementById("menu1");
var menutop = menu1.offsetTop;
 window.onscroll = function() {menuScroll()};



 function menuScroll() {
     if(window.pageYOffset >= menutop*2.5){
        menu1.classList.add("sticky");
        document.getElementById("row").style.marginBottom = "0px";
        document.getElementById("row").style.marginTop = "0px";
     }else{
         menu1.classList.remove("sticky");
         document.getElementById("row").style.marginBottom = "20px";
        document.getElementById("row").style.marginTop = "20px";
     }
 }