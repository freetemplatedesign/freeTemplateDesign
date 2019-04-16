$(document).ready(function(){
  $("#shell").css({height:$(window).innerHeight()})
  $(window).resize(function(){
    $("#shell").css({height:$(window).innerHeight()})
  });

  var panel = $('.panel'),
      back = $('.back'),
      backContent = $('.backContent')
      panel = $('.panel'),

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
      spacer = $('.spacer')
      spacer1 = $('.spacer1'),
      title = $('.title'),
      spacer2 = $('.spacer2'),
      icon = $(' .social .icon'),

      workExit = $(' .workExit'),
      aboutExit = $(' .aboutExit'),
      contactExit = $(' .contactExit');


  var loading = new TimelineMax();





   var bigOpen = function(){
     //TweenMax.to(panel, 0.02, {css:{boxShadow:"none" }})

     TweenMax.to(homeImg, 0.7, {rotationY:-90,  ease:Back. easeIn.config( 1.4), transformOrigin:"right center"})
     TweenMax.to(homeContent, 0.7, {rotationY:90,  ease:Back. easeIn.config( 1.4), transformOrigin:"left center"})

     TweenMax.to(homeImg, 0.1, {autoAlpha:0, delay:0.6})
     TweenMax.to(homeContent, 0.1, {autoAlpha:0, delay:0.6})
     //TweenMax.to(panel, 0.4, {css:{boxShadow: "0px 18px 92px -35px #000" }, delay:1.2})

   }//end bigOpen

   var bigClose = function(){
     //TweenMax.to(panel, 0.02, {css:{boxShadow:"none" }})
     TweenMax.to(homeImg, 0.1, {autoAlpha:1, delay:0.6})
     TweenMax.to(homeContent, 0.1, {autoAlpha:1, delay:0.6})

     TweenMax.to(homeImg, 0.7, {rotationY:0, ease:Back. easeOut.config( 1.4), transformOrigin:"right center", delay:0.6})
     TweenMax.to(homeContent, 0.7, {rotationY:0, ease:Back. easeOut.config( 1.4), transformOrigin:"left center", delay:0.6})

     //TweenMax.to(panel, 0.4, {css:{boxShadow: "0px 18px 92px -35px #000" }, delay:1.2})
   }//end bigClose





   var mobileOpen = function(){
     TweenMax.to(homeImg, 0.7, {autoAlpha:0, delay:0})
     TweenMax.to(homeContent, 0.7, {autoAlpha:0, delay:0})
   }//end mobileOpen

   var mobileClose = function(){
     TweenMax.to(homeImg, 0.7, {autoAlpha:1, delay:0})
     TweenMax.to(homeContent, 0.7, {autoAlpha:1, delay:0})
   }//end bigClose





   if( $(window).innerWidth() >= 751){

    TweenMax.set(workImg, {autoAlpha:0, rotationY:-90, transformOrigin:"right center"});
    TweenMax.set(workContent, {autoAlpha:0, rotationY:90, transformOrigin:"left center"});

    TweenMax.set(contactImg, {autoAlpha:0, rotationY:-90, transformOrigin:"right center"});
    TweenMax.set(contactContent, {autoAlpha:0, rotationY:90, transformOrigin:"left center"});

    TweenMax.set(aboutImg, {autoAlpha:0, rotationY:-90, transformOrigin:"right center"});
    TweenMax.set(aboutContent, {autoAlpha:0, rotationY:90, transformOrigin:"left center"});


    TweenMax.fromTo(homeImg, 1.5, {rotationY:-90, transformOrigin:"right center"}, {rotationY:0, delay:1, ease: Elastic.easeOut.config(1, 0.4)})
    TweenMax.fromTo(homeContent, 1.5, {rotationY:90, transformOrigin:"left center"}, {rotationY:0, delay:1, ease: Elastic.easeOut.config(1, 0.4)})


    loading
      .fromTo(homeName, 0.3, {y:-20, autoAlpha:0}, {y:0, autoAlpha:1, delay:2}, '-=0.2')
      .fromTo(spacer, 0.3, {autoAlpha:0}, {width:100, autoAlpha:1}, '-=0.2')
      .fromTo(title, 0.3, {y:-20, autoAlpha:0}, {y:0, autoAlpha:1}, '-=0.2')
      .staggerFromTo(icon, 1, {autoAlpha:0,y:50 },{ y:0, autoAlpha:1, ease: Elastic.easeOut.config(1, 0.5)}, 0.1)
      .fromTo(navBtn, 0.3, {y:20, autoAlpha:0},{y:0,autoAlpha:1}, '-=0.8')
      //.to(panel, 0.4, {css:{boxShadow: "0px 18px 92px -35px #000" }}, '-=0.8')


      $('.about').on('click', function(){

          bigOpen();
          TweenMax.to(aboutImg, 0.1, {autoAlpha:1, delay:0.6})
          TweenMax.to(aboutContent, 0.1, {autoAlpha:1, delay:0.6})

          TweenMax.to(aboutImg, 0.6, {rotationY:0, ease:Back. easeOut.config( 1.4), transformOrigin:"right center", delay:0.6})
          TweenMax.to(aboutContent, 0.6, {rotationY:0, ease:Back. easeOut.config( 1.4), transformOrigin:"left center", delay:0.6})
      })

    $('.work').on('click', function(){

        bigOpen();

        TweenMax.to(workImg, 0.1, {autoAlpha:1, delay:0.6})
        TweenMax.to(workContent, 0.1, {autoAlpha:1, delay:0.6})

        TweenMax.to(workImg, 0.6, {rotationY:0, ease:Back. easeOut.config( 1.4), transformOrigin:"right center", delay:0.6})
        TweenMax.to(workContent, 0.6, {rotationY:0, ease:Back. easeOut.config( 1.4), transformOrigin:"left center", delay:0.6})
    })



    $('.contact').on('click', function(){

        bigOpen();
        TweenMax.to(contactImg, 0.1, {autoAlpha:1, delay:0.6})
        TweenMax.to(contactContent, 0.1, {autoAlpha:1, delay:0.6})

        TweenMax.to(contactImg, 0.6, {rotationY:0,ease:Back. easeOut.config( 1.4), transformOrigin:"right center", delay:0.6})
        TweenMax.to(contactContent, 0.6, {rotationY:0,ease:Back. easeOut.config( 1.4), transformOrigin:"left center", delay:0.6})
    })


    $('.aboutExit').on('click', function(){

      bigClose();

      TweenMax.to(aboutImg, 0.6, {rotationY:-90, ease:Back. easeIn.config( 1.4), transformOrigin:"right center"})
      TweenMax.to(aboutContent, 0.6, {rotationY:90, ease:Back. easeIn.config( 1.4), transformOrigin:"left center"})

      TweenMax.to(aboutImg, 0.1, {autoAlpha:0, delay:0.6})
      TweenMax.to(aboutContent, 0.1, {autoAlpha:0, delay:0.6})

    })


    $('.workExit').on('click', function(){

        bigClose();

        TweenMax.to(workImg, 0.6, {rotationY:-90,ease:Back. easeIn.config( 1.4), transformOrigin:"right center"})
        TweenMax.to(workContent, 0.6, {rotationY:90,ease:Back. easeIn.config( 1.4), transformOrigin:"left center"})

        TweenMax.to(workImg, 0.1, {autoAlpha:0, delay:0.6})
        TweenMax.to(workContent, 0.1, {autoAlpha:0, delay:0.6})
    })

    $('.contactExit').on('click', function(){

      bigClose();
      
      TweenMax.to(contactImg, 0.6, {rotationY:-90,ease:Back. easeIn.config( 1.4), transformOrigin:"right center"})
      TweenMax.to(contactContent, 0.6, {rotationY:90,ease:Back. easeIn.config( 1.4), transformOrigin:"left center"})

      TweenMax.to(contactImg, 0.1, {autoAlpha:0, delay:0.6})
      TweenMax.to(contactContent, 0.1, {autoAlpha:0, delay:0.6})


    })
  }//end greater than 750px




  else if( $(window).innerWidth() <= 750){
    console.log($(window).innerWidth());

    TweenMax.set(workImg, {autoAlpha:0});
    TweenMax.set(workContent, {autoAlpha:0});

    TweenMax.set(contactImg, {autoAlpha:0});
    TweenMax.set(contactContent, {autoAlpha:0});

    TweenMax.set(aboutImg, {autoAlpha:0});
    TweenMax.set(aboutContent, {autoAlpha:0});



    loading
      .fromTo(homeName, 0.3, {y:-20, autoAlpha:0}, {y:0, autoAlpha:1, delay:2}, '-=0.2')
      .fromTo(spacer, 0.3, {autoAlpha:0}, {width:100, autoAlpha:1}, '-=0.2')
      .fromTo(title, 0.3, {y:-20, autoAlpha:0}, {y:0, autoAlpha:1}, '-=0.2')
      .staggerFromTo(icon, 1, {autoAlpha:0,y:50 },{ y:0, autoAlpha:1, ease: Elastic.easeOut.config(1, 0.5)}, 0.1)
      .fromTo(navBtn, 0.3, {y:20, autoAlpha:0},{y:0,autoAlpha:1}, '-=0.8')
      //.to(panel, 0.4, {css:{boxShadow: "0px 18px 92px -35px #000" }}, '-=0.8')



      $('.about').on('click', function(){
        mobileOpen();
        TweenMax.to(aboutImg, 0.7, {autoAlpha:1, delay:0})
        TweenMax.to(aboutContent, 0.7, {autoAlpha:1, delay:0})
      })

    $('.work').on('click', function(){
        mobileOpen();
        TweenMax.to(workImg, 0.7, {autoAlpha:1, delay:0})
        TweenMax.to(workContent, 0.7, {autoAlpha:1, delay:0})
    })



    $('.contact').on('click', function(){
      mobileOpen();
      TweenMax.to(contactImg, 0.7, {autoAlpha:1, delay:0})
      TweenMax.to(contactContent, 0.7, {autoAlpha:1, delay:0})
    })


    $('.aboutExit').on('click', function(){
      TweenMax.to(aboutImg, 0.7, {autoAlpha:0, delay:0})
      TweenMax.to(aboutContent, 0.7, {autoAlpha:0, delay:0})
      mobileClose();
    })

    $('.workExit').on('click', function(){
      TweenMax.to(workImg, 0.7, {autoAlpha:0, delay:0})
      TweenMax.to(workContent, 0.7, {autoAlpha:0, delay:0})
      mobileClose();
    })



    $('.contactExit').on('click', function(){
      TweenMax.to(contactImg, 0.7, {autoAlpha:0, delay:0})
      TweenMax.to(contactContent, 0.7, {autoAlpha:0, delay:0})
      mobileClose();
    })

  }//end less than or equal to 750px























})//end main.js
