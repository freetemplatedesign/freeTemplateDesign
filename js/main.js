$(document).ready(function(){
  /*
  $("#shell").css({height:$(window).innerHeight()})
  $(window).resize(function(){
    $("#shell").css({height:$(window).innerHeight()})
  });
*/


var m1 = $('.m1'),
    m2 = $('.m2'),
    m3 = $('.m3'),
    m4 = $('.m4'),
    m5 = $('.m5'),
    m6 = $('.m6'),
    m7 = $('.m7'),
    m8 = $('.m8'),
    m9 = $('.m9'),

    menuShell = $('.menuShell'),
    menuContainer = $('.menuContainer').

    fixedLogo = $('.fixedLogo'),

    website = $('.website'),
    image = $('.image'),
    fixedLogo = $('.fixedLogo'),
    banner = $('.banner'),
    bannerBox = $('.bannerBox'),

    rightItem = $('.rightItem'),
    menuTemplate = $('.menuTemplate li'),
    menuPageLinks = $('.menuPageLinks li');



TweenMax.set([menuShell, rightItem, menuTemplate, menuPageLinks], {autoAlpha:0})
//TweenMax.set('')

/*
menuTemplate,
menuPageLinks,

left,
right,
extraWork,
beer
follow
websiteBy
*/


//TweenMax.staggerFromTo(".box", 1, {opacity:0,x:-100, y:-100},{x:0, y:0, opacity:1, ease: Elastic.easeOut.config(1.5, 0.3)}, 0.1);
//TweenMax.staggerFromTo(".box", 1, {opacity:0,transform:'rotateY(90deg)'},{opacity:1, transform:'rotateY(0deg)'}, 0.1);


    var menuCounter = 1;
    $('.menuDots').on("click", function(){
      menuCounter++;
        if(menuCounter%2=== 0){
          menuOpen();
         }else if(menuCounter%2===1){
          menuClose();
        }
    })



    function menuOpen(){
      TweenMax.to(m2, 0.5, {x:-8, y:8})
      TweenMax.to(m4, 0.5, {x:8, y:8})
      TweenMax.to(m6, 0.5, {x:-8, y:-8})
      TweenMax.to(m8, 0.5, {x:8, y:-8})

      //TweenMax.to(m1, 0.5, {x:33})
      //TweenMax.to(m3, 0.5, {y:33})
      //TweenMax.to(m7, 0.5, {y:-33})
      //TweenMax.to(m9, 0.5, {x:-33})

      $('body').addClass("noScroll");

      TweenMax.fromTo(menuShell, 0.6, {yPercent:-100},{autoAlpha:1, yPercent:0})




      if( $(window).innerWidth() >= 889){
        //TweenMax.to(shell, 0.8, {scale:0.95,transformOrigin:' right center', y:'2.5%',x:'-1.75%',rotationY:-50})
        //TweenMax.staggerFromTo(menuItem, 0.6, {delay:1, x:-50, autoAlpha:0},{x:0, autoAlpha:1},0.09 )


        TweenMax.staggerFromTo(rightItem, 0.5, {x:50, autoAlpha:0}, {x:0, autoAlpha:1, delay:1}, 0.1)

        TweenMax.staggerFromTo(menuTemplate, 0.5, {x:-50, autoAlpha:0}, {x:0, autoAlpha:1, delay:1}, 0.1)
        TweenMax.staggerFromTo(menuPageLinks, 0.5, {x:-50, autoAlpha:0}, {x:0, autoAlpha:1, delay:1}, 0.1)


        TweenMax.fromTo(menuShell, 0.6, {yPercent:-100},{autoAlpha:1, yPercent:0})
        TweenMax.staggerFromTo(rightItem, 0.5, {x:50, autoAlpha:0}, {x:0, autoAlpha:1, delay:1}, 0.1)


      } else if( $(window).innerWidth() <= 888){
        //TweenMax.to(shell, 0.4, {autoAlpha:0})
        //TweenMax.staggerFromTo(menuItem, 0.6, { y:50, autoAlpha:0},{delay:0.4, y:0, autoAlpha:1},0.09 )

/*
        menuTemplate,
        menuPageLinks,
        rightItem,
        */

        //TweenMax.staggerFromTo(rightItem, 0.6, {x:-40, autoAlpha:0}, {x:0, autoAlpha:1, delay:1}, 0.2)
        //TweenMax.staggerFromTo(menuTemplate, 0.6, {x:-40, autoAlpha:0}, {x:0, autoAlpha:1, delay:1}, 0.2)
        //TweenMax.staggerFromTo(menuPageLinks, 0.6, {x:-40, autoAlpha:0}, {x:0, autoAlpha:1, delay:1}, 0.2)

        TweenMax.to(rightItem, 0.6, {autoAlpha:1})
        TweenMax.to(menuTemplate, 0.6, {autoAlpha:1})
        TweenMax.to(menuPageLinks, 0.6, {autoAlpha:1})

      }


    }//end menuOpen
    function menuClose(){
      TweenMax.to(m2, 0.5, {x:0, y:0})
      TweenMax.to(m4, 0.5, {x:0, y:0})
      TweenMax.to(m6, 0.5, {x:0, y:0})
      TweenMax.to(m8, 0.5, {x:0, y:0})

      //TweenMax.to(m1, 0.5, {x:0})
      //TweenMax.to(m3, 0.5, {y:0})
      //TweenMax.to(m7, 0.5, {y:0})
      //TweenMax.to(m9, 0.5, {x:0})

      TweenMax.to(fixedLogo, 0.5, {transform: "rotateY(0deg) rotateX(0deg)"})

$('body').removeClass("noScroll");

      //TweenMax.to([menuShell, rightItem, menuTemplate, menuPageLinks], 0.6, {autoAlpha:0})
      TweenMax.to(menuShell, 0.6, {yPercent:-100})

      if( $(window).innerWidth() >= 889){

        //TweenMax.to(shell, 0.8, { scale:1, transformOrigin:' right center', y:'0%',x:'0%',rotationY:0})
        //TweenMax.to(menuItem, 0.6, {x:-50, autoAlpha:0} )




      } else if( $(window).innerWidth() <= 888){
        //TweenMax.to(shell, 0.8, { autoAlpha:1})
        //TweenMax.to(menuItem, 0.6, {y:-50, autoAlpha:0} )

      }

    }//end menuClose





    //
    //
    //      ScrollAnimation start
    //
    //

    TweenMax.set(fixedLogo, {autoAlpha:0, y:-50})

    var controller = new ScrollMagic.Controller();

    var logoDropDown = new ScrollMagic.Scene({
      triggerElement: '.templates',
      triggerHook: 1

    })
    //.setClassToggle('.mainLogo', 'dropDown')
    .setTween(fixedLogo, 0.5, {y:0, autoAlpha:1})

    .addTo(controller)
    /*
    .addIndicators({
      name:'logoDown ',
      colorTrigger: 'white',
      colorStart: '#8ACB88',
      colorEnd: '#FF8989'
    })
    */



    //
    //
    //      ScrollAnimation end
    //
    //






    banner.on("mousemove",function(e) {
      var ax = -($(window).innerWidth()/2- e.pageX)/20;
      var ay = ($(window).innerHeight()/2- e.pageY)/10;
      bannerBox.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");



      //console.log("banner ax: "+ ax + " banner ay: " + ay)
    })//end banner

/*
*
*
*
*       LOGO ANIMATION
*
*
*
*/

$('.menuShell').on("mousemove",function(e) {
  var parentOffset = $(this).offset();
  var mouseX = e.pageX - parentOffset.left;
  var mouseY = e.pageY - parentOffset.top;


  var ax = -(menuShell.width()/2 - mouseX)/40;
  var ay = (menuShell.height()/2 - mouseY)/20;

  //var ax = -($(window).innerWidth()/2- e.mouseX)/50;
  //var ay = ($(window).innerHeight()/2- e.mouseY)/25;

  TweenMax.to(fixedLogo, 0.2, {transform: "rotateY("+ax+"deg) rotateX("+ay+"deg)"})

  console.log("banner ax: "+ ax + " banner ay: " + ay)
})//end banner




/*
    $('body').on("mousemove",function(e) {
      var ax = -($(window).innerWidth()/2- e.offsetX)/50;
      var ay = ($(window).innerHeight()/2- e.offsetY)/25;

      TweenMax.to(fixedLogo, 0.2, {transform: "rotateY("+ax+"deg) rotateX("+ay+"deg)"})
    })//end banner
*/


if( $(window).innerWidth() >= 1200){

    console.log("greater than or equal to 1200 " + $(window).innerWidth());


    banner.on("mousemove",function(e) {
      var ax = -($(window).innerWidth()/2- e.pageX)/20;
      var ay = ($(window).innerHeight()/2- e.pageY)/10;
      bannerBox.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");



      //console.log("banner ax: "+ ax + " banner ay: " + ay)
    })//end banner


    website.on("mousemove",function(e) {
      var parentOffset = $(this).offset();
      var mouseX = e.pageX - parentOffset.left;
      var mouseY = e.pageY - parentOffset.top;


      var ax = -(website.width()/2 - mouseX)/40;
      var ay = (website.height()/2 - mouseY)/20;
      //image.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
    //$(this).find(".itemHolder").attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
    TweenMax.to($(this).find(".itemHolder"), 0.2, {transform: "rotateY("+ax+"deg) rotateX("+ay+"deg)"})

/*
    image.on("mousemove",function(e) {
      var ax = -(website.width()/2 - e.clientX)/20;
      var ay = (website.height()/2 - e.clientY)/10;
      //image.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
      $(this).attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
*/


      console.log("banner ax: "+ ax + " banner ay: " + ay)
    })//end banner

    website.on("mouseleave",function() {
      console.log("before");
      //$(this).find(".wrap").attr("style", "transform: rotateY(0deg) rotateX(0deg);-webkit-transform: rotateY(0deg) rotateX(0deg);-moz-transform: rotateY(0deg) rotateX(0deg)", "transition: 1.5s");
      TweenMax.to($(this).find(".itemHolder"), 1, {transform: "rotateY(0deg) rotateX(0deg)"})
      console.log("after");

        //TweenMax.to($(this).siblings(), 1, {autoAlpha:1})

        //TweenMax.to($(this).find(".name"), 1, {opacity:0})
        //TweenMax.to($(this).find(".type"), 1, {opacity:0})

        //TweenMax.set($(this).find(".name"),  {opacity:0})
        //TweenMax.set($(this).find(".type"),  {opacity:0})

        //TweenMax.to(templatesGrid,1, {backgroundColor:'#455977'})

    })

/*
    $('.hoverShell, .information, .backgroundShell').on("mousemove",function(e) {
      var ax = -($(window).innerWidth()/2- e.pageX)/50;
      var ay = ($(window).innerHeight()/2- e.pageY)/25;
      mainLogo.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");

      //console.log("banner ax: "+ ax + " banner ay: " + ay)

      //console.log($(window).innerHeight()/2);

    })//end hoverShell
    */

/*
    $('body').on("mousemove",function(e) {
      var ax = -($(window).innerWidth()/2- e.clientX)/50;
      var ay = ($(window).innerHeight()/2- e.clientY)/50;
      fixedLogo.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");

      //console.log("banner ax: "+ ax + " banner ay: " + ay)

      //console.log($(window).innerHeight()/2);

    })//end hoverShell
    */

  }//end 1200



    //var backgroundShade = $(".backgroundShade");

    //TweenMax.set(backgroundShade, {autoAlpha:0})

    var name = $('.name'),
        type = $('.type'),
        templatesGrid = $('.templatesGrid');

        //TweenMax.fromTo(name, 1, {x:-50}, {x:0, opacity:1})
        //TweenMax.fromTo(type, 1, {y:50}, {x:0, opacity:1})


/*
    $(".templateT").on("hover",function() {
      //console.log("wrap hover before");
      //TweenMax.fromTo($(this).find(".name"), 1, {x:-50}, {x:0, opacity:1})
      //TweenMax.fromTo($(this).find(".type"), 1, {x:50}, {x:0, opacity:1})
      //console.log("wrap hover after");

      console.log("templateT hover before");
      TweenMax.to(templatesGrid,1 ,{backgroundColor:'#2d333c'})
      console.log("templateT hover after");

    })

    $(".templateT").on("leave",function() {
      //TweenMax.to($(this).find(".name"), 1, {opacity:0})
      //TweenMax.to($(this).find(".type"), 1, {opacity:0})
      TweenMax.to(templatesGrid,1 ,{backgroundColor:'#455977'})
    })

    */



    $(".templateT").on("mousemove",function(e) {
      var parentOffset = $(this).offset();
      var mouseX = e.pageX - parentOffset.left;
      var mouseY = e.pageY - parentOffset.top;

      var ax = -($(".templateT").width()/2 - mouseX)/20;
      var ay = ($(".templateT").height()/2 - mouseY)/10;
      //image.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
      //$(this).find(".wrap").attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");

      TweenMax.to($(this).find(".wrap"), 0.2, {transform: "rotateY("+ax+"deg) rotateX("+ay+"deg)"})
      TweenMax.to($(this).siblings(), 1, {autoAlpha:0.2})
      TweenMax.to($(".backgroundShade"), 1, {autoAlpha:1})
      //TweenMax.set($(this), {css:{zIndex:501}})
      //TweenMax.to(".banner, .info", 1, {backgroundColor:"transparent", opacity:0.5})


      //TweenMax.to($(".backgroundShade"), 1, {autoAlpha:1})

      TweenMax.set(templatesGrid, {backgroundColor:'#2d333c'})

      TweenMax.set($(this).find(".name"),  {opacity:1})
      TweenMax.set($(this).find(".type"),  {opacity:1})


  })


  $(".templateT").on("mouseleave",function() {
    console.log("before");
    //$(this).find(".wrap").attr("style", "transform: rotateY(0deg) rotateX(0deg);-webkit-transform: rotateY(0deg) rotateX(0deg);-moz-transform: rotateY(0deg) rotateX(0deg)", "transition: 1.5s");
    TweenMax.to($(this).find(".wrap"), 1, {transform: "rotateY(0deg) rotateX(0deg)"})
    console.log("after");

      TweenMax.to($(this).siblings(), 1, {autoAlpha:1})
      //TweenMax.to($(this).find(".name"), 1, {opacity:0})
      //TweenMax.to($(this).find(".type"), 1, {opacity:0})

      TweenMax.set($(this).find(".name"),  {opacity:0})
      TweenMax.set($(this).find(".type"),  {opacity:0})

      TweenMax.to(templatesGrid,1, {backgroundColor:'#455977'})

  })




/*
  $(".wrap").on("mousemove",function(e) {
    var parentOffset = $(this).offset();
    var mouseX = e.pageX - parentOffset.left;
    var mouseY = e.pageY - parentOffset.top;

    var ax = -($(".templateT").width()/2 - mouseX)/20;
    var ay = ($(".templateT").height()/2 - mouseY)/10;
    //image.attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");
    //$(this).find(".wrap").attr("style", "transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: rotateY("+ax+"deg) rotateX("+ay+"deg)");

    TweenMax.to($(this), 0.2, {transform: "rotateY("+ax+"deg) rotateX("+ay+"deg)"})

    //.siblings only works with templateT!!
    //TweenMax.to($(this).siblings(), 1, {autoAlpha:0.2})

    TweenMax.to($(".backgroundShade"), 1, {autoAlpha:1})
    //TweenMax.set($(this), {css:{zIndex:501}})
    //TweenMax.to(".banner, .info", 1, {backgroundColor:"transparent", opacity:0.5})


    //TweenMax.to($(".backgroundShade"), 1, {autoAlpha:1})

    //TweenMax.to(templatesGrid,1, {backgroundColor:'#2d333c'})

    TweenMax.set($(this).find(".name"),  {opacity:1})
    TweenMax.set($(this).find(".type"),  {opacity:1})


  })


$(".wrap").on("mouseleave",function() {
console.log("before");
//$(this).find(".wrap").attr("style", "transform: rotateY(0deg) rotateX(0deg);-webkit-transform: rotateY(0deg) rotateX(0deg);-moz-transform: rotateY(0deg) rotateX(0deg)", "transition: 1.5s");
TweenMax.to($(this), 1, {transform: "rotateY(0deg) rotateX(0deg)"})
console.log("after");

  TweenMax.to($(this).siblings(), 1, {autoAlpha:1})
  //TweenMax.to($(this).find(".name"), 1, {opacity:0})
  //TweenMax.to($(this).find(".type"), 1, {opacity:0})

  TweenMax.set($(this).find(".name"),  {opacity:0})
  TweenMax.set($(this).find(".type"),  {opacity:0})

  TweenMax.to(templatesGrid,1, {backgroundColor:'#455977', delay:0.5})

})

*/













})//end main.js
