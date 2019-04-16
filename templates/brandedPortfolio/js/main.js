$(document).ready(function(){
  $("#shell").css({height:$(window).innerHeight()})
  $(window).resize(function(){
    $("#shell").css({height:$(window).innerHeight()})
  });


  var menuCounter = 1;

  var siblings = $(this).siblings(),
      brandItem = $(".brandItem"),
      logo = $('.logoName'),
      menu = $('.menu'),
      line1 = $(".line1"),
      line2 = $(".line2"),
      line3 = $(".line3"),
      matharu = $(".matharu");


  var startup = new TimelineMax()


TweenMax.set(brandItem, {autoAlpha:0, y:30})

/*
  startup
    //.staggerFrom(brandItem, 0.8,{scale:0, autoAlpha:0, ease: Elastic.easeOut.config(1.75, 0.4)}, 0.07 )

    //fadein up from top
    //.staggerFrom(brandItem, 0.8,{y:30, autoAlpha:0, ease: Circ.easeOut}, 0.09 )

    .staggerTo(brandItem, 0.8,{y:0, autoAlpha:1, ease: Circ.easeOut}, 0.05 )

    //fadein up from bottom
    //.staggerFrom(brandItem, 0.8,{y:30, autoAlpha:0, ease: Circ.easeOut}, -0.12 )

    //.staggerFromTo(brandItem, 0.8,{y:30, ease: Circ.easeOut},{opacity:1} -0.09 )

*/

startup
  //change this 0.1 to 1
  .fromTo(logo, 1, {opacity:0, y:-50}, {opacity:1, y:0, delay:0.5})
  .staggerTo(brandItem, 0.8,{y:0, autoAlpha:1, ease: Circ.easeOut}, 0.05 , '-=1')
  .fromTo(menu, 2, {x:300, y:-300}, { x:0, y:0}, '-=1.5')
  .to(matharu, 2, {opacity:1}, 2.2)




menu.on("click", function(){
  //console.log("clicked")

  menuCounter++;
    if(menuCounter%2=== 0){
      menuOpen();
     }else if(menuCounter%2===1){
      menuClose();
    }

})






function menuOpen(){
  TweenMax.to(line1, 0.3, {transformOrigin:"left 50%", y:3, rotation:45})
  TweenMax.to(line2, 0.3, {scale:0, x:-7})
  TweenMax.to(line3, 0.3, {transformOrigin:"left 50%", y:-3, rotation:-45})

}//end menuOpen

function menuClose(){
  TweenMax.to(line1, 0.3, {transformOrigin:"left 50%", y:0, rotation:0})
  TweenMax.to(line2, 0.3, {scale:1, x:0})
  TweenMax.to(line3, 0.3, {transformOrigin:"left 50%", y:0, rotation:0})

}//end menuClose





var image = $('.image');

  TweenMax.set(image, {opacity:0, display:'none'})


$(".brandItem").mouseenter(function(){
  //TweenMax.to($(this), 1, {color: "black"})
  TweenMax.to($(this), 0.2, {css:{backgroundColor: "rgba(0,0,0,1)"}})
  TweenMax.to($(this).children("a"), 0.2, {css:{color: "rgba(255,255,255,1)"}})
  //console.log("entering the brand item");

  var siblings = $(this).siblings();
  TweenMax.to(siblings, 0.2, {opacity:0})


  //for background image
  var connectImg = $(this).data('number');
  TweenMax.to($('.item' + connectImg  ), 0.1, {opacity:1, display:'block'})



})

$(".brandItem").mouseleave(function(){
  //console.log("exiting the brand item");
  TweenMax.to($(this), 0.7, {css:{backgroundColor: "rgba(0,0,0,0)"}})
TweenMax.to($(this).children("a"), 0.2, {css:{color: "rgba(0,0,0,1)"}})
  var siblings = $(this).siblings();
  TweenMax.to(siblings, 0.7, {opacity:1})


//for background image
  var connectImg = $(this).data('number');
  TweenMax.to($('.item' + connectImg  ), 0.1, {opacity:0, display:'none'})



})


/*
$('.brandItem').on('mouseenter', function(){
    var connectImg = $(this).data('number');
    TweenMax.to($('.item' + connectImg  ), 0.1, {opacity:1, display:'block'})

  })


  $('.brandItem').on('mouseleave', function(){
    var connectImg = $(this).data('number');
    TweenMax.to($('.item' + connectImg  ), 0.1, {opacity:0, display:'none'})
  })
*/

})
