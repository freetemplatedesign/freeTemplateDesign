$(document).ready(function(){
  $("#shell").css({height:$(window).innerHeight()})
  $(window).resize(function(){
    $("#shell").css({height:$(window).innerHeight()})
  });

/*
  var box = $('.box'),
      back = $('.back'),
      backContent = $('.backContent')
      panelHold = $('.panelHold'),

      homeImg = $('.homeImg'),
      homeContent = $('.homeContent'),

      workImg = $('.workImg'),
      workContent = $('.workContent'),

      aboutImg = $('.aboutImg'),
      aboutContent = $('.aboutContent'),

      contactImg = $('.contactImg'),
      contactContent = $('.contactContent'),

      work = $('.work'),
      navBtn = $('.navBtn')
      exit = $('.exit'),
      tempClass1 = $('.tempClass1'),

      homeName = $('.homeContent .name'),
      spacer1 = $('.spacer1'),
      title = $('.title'),
      spacer2 = $('.spacer2'),
      icon = $(' .social .icon'),

      workExit = $('.workContent .exit'),
      aboutExit = $('.aboutContent .exit'),
      contactExit = $('.contactContent .exit');
*/

var box = $('.box'),
    left = $('.left'),
    right = $('.right'),
    bannerContent = $('.bannerContent'),
    name = $('.name'),
    spacer = $('.spacer'),
    spacerTop = $('.spacerTop'),
    spacerBottom = $('.spacerBottom'),
    title = $('.title'),
    followLinks = $('.followLinks'),
    icon = $('.icon'),
    pageNavigation = $('.pageNavigation'),
    navItem = $('.navItem'),
    about = $('.about'),
    work = $('.work'),
    contact = $('.contact')

    myImg = $('.myImg'),
    aboutImg = $('.aboutImg'),
    workImg = $('.workImg'),
    contactImg = $('.contactImg')

    exit = $('.exit'),
    aboutExit = $('.aboutExit'),
    workExit = $('.workExit'),
    contactExit = $('.contactExit'),

    pageContent = $('.pageContent'),
    aboutContent = $('.aboutContent'),
    workContent = $('.workContent'),
    contactContent = $('.contactContent');


    TweenMax.set(exit, {autoAlpha:0});
    TweenMax.set(pageContent, {autoAlpha:0});




  //this 2 items are for the words + etc for the startup animation

  var startup = new TimelineMax();

  startup
    .fromTo(name, 0.3, {y:-20, autoAlpha:0}, {y:0, autoAlpha:1, delay:2}, '-=0.2')
    .fromTo(spacerTop, 0.3, {autoAlpha:0}, {width:100, autoAlpha:1}, '-=0.2')
    .fromTo(title, 0.3, {y:-20, autoAlpha:0}, {y:0, autoAlpha:1}, '-=0.2')
    .fromTo(spacerBottom, 0.3, {autoAlpha:0}, {width:100, autoAlpha:1}, '-=0.2')
    .staggerFromTo(icon, 2, {autoAlpha:0,y:50 },{ y:0, autoAlpha:1, ease: Elastic.easeOut}, 0.1)
    .fromTo(navItem, 0.3, {y:20, autoAlpha:0},{y:0,autoAlpha:1}, '-=0.8')
    .to(box, 0.4, {css:{boxShadow:"0px 26px 98px -20px #000" }}, '-=0.8')




  //these 2 lines create and execute the butterfly startup animatino
  TweenMax.fromTo(left, 1, {rotationY:-90, transformOrigin:"right center"}, {rotationY:0, delay:1, ease: Elastic.easeOut.config(1, 0.5)})
  TweenMax.fromTo(right, 1, {rotationY:90, transformOrigin:"left center"}, {rotationY:0, delay:1, ease: Elastic.easeOut.config(1, 0.5)})


/*

  $('.about').on('click', function(){
    TweenMax.to(myImg, 0.7, {autoAlpha:0, delay:0})
    TweenMax.to(bannerContent, 0.7, {autoAlpha:0, delay:0})

    TweenMax.to(aboutImg, 0.7, {autoAlpha:1, delay:0})
    //TweenMax.to(aboutContent, 0.7, {autoAlpha:1, delay:0})
  })

  $('.work').on('click', function(){
      TweenMax.to(homeImg, 0.7, {autoAlpha:0, delay:0})
      TweenMax.to(homeContent, 0.7, {autoAlpha:0, delay:0})

      TweenMax.to(workImg, 0.7, {autoAlpha:1, delay:0})
      TweenMax.to(workContent, 0.7, {autoAlpha:1, delay:0})
    })

    $('.contact').on('click', function(){
      TweenMax.to(homeImg, 0.7, {autoAlpha:0, delay:0})
      TweenMax.to(homeContent, 0.7, {autoAlpha:0, delay:0})

      TweenMax.to(contactImg, 0.7, {autoAlpha:1, delay:0})
      TweenMax.to(contactContent, 0.7, {autoAlpha:1, delay:0})

    })

*/


var open = function(){

    //shadow dissapears
    TweenMax.to(box, 0.02, {css:{boxShadow:"none" }})

    //left and right box rotate away
    TweenMax.to(left, 0.6, {rotationY:-90, transformOrigin:"right center"})
    TweenMax.to(right, 0.6, {rotationY:90, transformOrigin:"left center"})

    //home img and words dissapear
    TweenMax.to(myImg, 0.1, {autoAlpha:0, delay:0.7})
    TweenMax.to(bannerContent, 0.1, {autoAlpha:0, delay:0.7})


    //left and right rotate back into view
    TweenMax.to(left, 0.6, {rotationY:0, transformOrigin:"right center", delay:0.8})
    TweenMax.to(right, 0.6, {rotationY:0, transformOrigin:"left center", delay:0.8})

    //shadow appears
    TweenMax.to(box, 0.4, {css:{boxShadow:"-1px 9px 48px -6px #000" }, delay:1.2})

      console.log("open end lol");

  }//end open

  var close = function(){
    //remove shadow from box
    TweenMax.to(box, 0.02, {css:{boxShadow:"none" }})

    //left and right box rotate away
    TweenMax.to(left, 0.6, {rotationY:-90, transformOrigin:"right center"})
    TweenMax.to(right, 0.6, {rotationY:90, transformOrigin:"left center"})
    // home img and words come back
    TweenMax.to(myImg, 0.1, {autoAlpha:1, delay:0.7})
    TweenMax.to(bannerContent, 0.1, {autoAlpha:1, delay:0.7})

    //left and right rotate back into view
    TweenMax.to(left, 0.6, {rotationY:0, transformOrigin:"right center", delay:0.8})
    TweenMax.to(right, 0.6, {rotationY:0, transformOrigin:"left center", delay:0.8})

    //place shadow appears
    TweenMax.to(box, 0.4, {css:{boxShadow:"-1px 9px 48px -6px #000" }, delay:1.2})

    console.log('close end');
  }//end close



  $('.about').on('click', function(){

      open();

      //about img and words appear
      TweenMax.to(aboutImg, 0.1, {autoAlpha:1, delay:0.7})
      TweenMax.to(aboutContent, 0.1, {autoAlpha:1, delay:0.7})


      //exit button apears
      TweenMax.to(aboutExit, 0.5, {autoAlpha:1})

    })//end about





    $('.aboutExit').on('click', function(){

      close();

      //about img and words go away
      TweenMax.to(aboutImg, 0.1, {autoAlpha:0, delay:0.7})
      TweenMax.to(aboutContent, 0.1, {autoAlpha:0, delay:0.7})

      //about exit dissapears
      TweenMax.to(aboutExit, 0.5, {autoAlpha:0})

    })//end aboutExit





    $('.work').on('click', function(){

      open();


      //work img and words appear
      TweenMax.to(workImg, 0.1, {autoAlpha:1, delay:0.7})
      TweenMax.to(workContent, 0.1, {autoAlpha:1, delay:0.7})


      //exit button apears
      TweenMax.to(workExit, 0.5, {autoAlpha:1})

    })//end about





    $('.workExit').on('click', function(){

      close();


      //work img and words go away
      TweenMax.to(workImg, 0.1, {autoAlpha:0, delay:0.7})
      TweenMax.to(workContent, 0.1, {autoAlpha:0, delay:0.7})

      //about exit dissapears
      TweenMax.to(workExit, 0.5, {autoAlpha:0})

    })//end aboutExit



    $('.contact').on('click', function(){

      open();


      //work img and words appear
      TweenMax.to(contactImg, 0.1, {autoAlpha:1, delay:0.7})
      TweenMax.to(contactContent, 0.1, {autoAlpha:1, delay:0.7})


      //exit button apears
      TweenMax.to(contactExit, 0.5, {autoAlpha:1})

    })//end contact





    $('.contactExit').on('click', function(){

      close();


      //work img and words go away
      TweenMax.to(contactImg, 0.1, {autoAlpha:0, delay:0.7})
      TweenMax.to(contactContent, 0.1, {autoAlpha:0, delay:0.7})

      //about exit dissapears
      TweenMax.to(contactExit, 0.5, {autoAlpha:0})

    })//end contactExit



})//end js
