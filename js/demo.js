$(document).ready(function(){
  $("body").css({height:$(window).innerHeight()})
  $(window).resize(function(){
    $("body").css({height:$(window).innerHeight()})
  });


var desktop = $('.desktop'),
    tablet = $('.tablet'),
    mobile = $('.mobile'),
    container = $('.container')

    active = $('.active'),
    rotateTablet = $('.rotateTablet'),
    rotateMobile = $('.rotateMobile'),
    rotate = $('.rotate');


    TweenMax.set(rotateTablet, {autoAlpha:0})
    TweenMax.set(rotateMobile, {autoAlpha:0})

    var tabletCounter = 1;
    var mobileCounter = 1;



    desktop.on("click", function(){
      TweenMax.to(container, 1, {height:'100%', width: '100%', border:'20px solid #25344a', borderRadius:'0'})
      TweenMax.to(rotate, 0.5, {autoAlpha:0})

      $(this).addClass('active')
      $(this).siblings().removeClass('active')
    })

    tablet.on("click", function(){

      //TweenMax.to(container, 1, {height:'70%', width: '60%'})
      TweenMax.to(container, 1, {height:900, width: 700, border: '40px solid #25344a', borderRadius:'20px'})
      TweenMax.to(rotateTablet, 1, {autoAlpha:1})
      TweenMax.to(rotateMobile, 1, {autoAlpha:0})

      $(this).addClass('active')
      $(this).siblings().removeClass('active')

    })




    rotateTablet.on("click", function(){

      //TweenMax.to(container, 1, {height:800, width: 550})

      tabletCounter++;
      if(tabletCounter%2=== 0){
        TweenMax.to(container, 1, {height:700, width: 900})
       }else if(tabletCounter%2===1){
        TweenMax.to(container, 1, {height:900, width: 700})
      }

    })


    mobile.on("click", function(){
      TweenMax.to(container, 1, {height:650, width: 350, border: '20px solid #25344a', borderRadius:'20px'})
      TweenMax.to(rotateMobile, 1, {autoAlpha:1})
      TweenMax.to(rotateTablet, 1, {autoAlpha:0})
      $(this).addClass('active')
      $(this).siblings().removeClass('active')
    })

    rotateMobile.on("click", function(){
      mobileCounter++;
      if(mobileCounter%2=== 0){
        TweenMax.to(container, 1, {height:350, width: 650})
       }else if(mobileCounter%2===1){
        TweenMax.to(container, 1, {height:650, width: 350})
      }

      console.log(mobileCounter);




    })



})//end js
