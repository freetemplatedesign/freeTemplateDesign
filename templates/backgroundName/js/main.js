$(document).ready(function(){
  $("#shell").css({height:$(window).innerHeight()})
  $(window).resize(function(){
    $("#shell").css({height:$(window).innerHeight()})
  });

/*
  $('.item').on('mouseenter', function(){
    TweenMax.to($(this), 0.2, {opacity:1})
    $(this).addClass('activeItem')
    //console.log('enter')

    $('.activeItem').on('mouseleave', function(){
      TweenMax.to($(this), 0.2, {opacity:0.8})
      $(this).removeClass('activeItem')
      //console.log('exit');
    })

  })
*/

    var freeTemplateDesign = $('.freeTemplateDesign'),
        item = $('.item'),
        freeLine = $('.freeLine'),
        shell = $('#shell')




  freeTemplateDesign.on('mouseenter', function(){
    TweenMax.to(freeLine, 0.3, {width:'100%'})
  })

  freeTemplateDesign.on('mouseleave', function(){
    TweenMax.to(freeLine, 0.3, {width:'0'})
  })





item.on('mouseenter', function(){
  $(this).addClass('activeItem')
  TweenMax.to(item, 0.1, {opacity:0})
  TweenMax.to($('.item.activeItem'), 0.3, {opacity:1})

  TweenMax.to(shell, 0.3, {backgroundColor:'#000'})
  //TweenMax.to($('.name'), 0.1, {opacity:0.1, color:'#4CEF37'})
  TweenMax.to($('.name'), 0.1, {opacity:0.1, color:'#ECEF37'})

  TweenMax.to('.menu, .social, .links', 0.1, {autoAlpha:0})

  TweenMax.to($(this).find('.itemLink'), 0.3, {opacity:1, pointerEvents:'all'})
  TweenMax.to($(this).find('.itemText'), 0.3, {opacity:1, pointerEvents:'all'})


  $('.activeItem').on('mouseleave', function(){
    TweenMax.to($('.item'), 0.7, { ease: Power4.easeIn, opacity:0.9})
    $(this).removeClass('activeItem')

    TweenMax.to($('#shell'), 0.7, { ease: Power4.easeIn, backgroundColor:'#210202'})
    TweenMax.to($('.name'), 0.7, { ease: Power4.easeIn, color: '#fff', opacity:0.3})
    TweenMax.to($(this).find('.itemLink'), 0.3, {opacity:0, pointerEvents:'none'})
    TweenMax.to($(this).find('.itemText'), 0.3, {opacity:0, pointerEvents:'none'})

    TweenMax.to('.menu, .social, .links', 0.7, { ease: Power4.easeIn,autoAlpha:1})

  })

})//end mouseover

$('.galleryImg img').on('mouseenter', function(){
  $(this).addClass('activeItem')
  TweenMax.to(item, 0.1, {opacity:0})
  TweenMax.to($('.galleryImg.activeItem'), 0.3, {opacity:1})

  TweenMax.to(shell, 0.3, {backgroundColor:'#000'})
  //TweenMax.to($('.name'), 0.1, {opacity:0.1, color:'#4CEF37'})
  TweenMax.to($('.name'), 0.1, {opacity:0.1, color:'#ECEF37'})

  TweenMax.to('.menu, .social, .links', 0.1, {autoAlpha:0})

  //TweenMax.to($(this).find('.itemLink'), 0.3, {opacity:1, pointerEvents:'all'})


  $('.activeItem').on('mouseleave', function(){
    TweenMax.to($('.item'), 0.7, { ease: Power4.easeIn, opacity:0.9})
    $(this).removeClass('activeItem')

    TweenMax.to($('#shell'), 0.7, { ease: Power4.easeIn, backgroundColor:'#210202'})
    TweenMax.to($('.name'), 0.7, { ease: Power4.easeIn, color: '#fff', opacity:0.3})
    //TweenMax.to($(this).find('.itemLink'), 0.3, {opacity:0, pointerEvents:'none'})

    TweenMax.to('.menu, .social, .links', 0.7, { ease: Power4.easeIn,autoAlpha:1})

  })

})//end mouseover





  //$('.item').on('mouseleave', function(){
  //  TweenMax.to($(this), 0.2, {opacity:0})
  //})

  var menuCounter = 1;
  $('.menu').on("click", function(){
    menuCounter++;
      if(menuCounter%2=== 0){
        menuOpen();
       }else if(menuCounter%2===1){
        menuClose();
      }
  })

  function menuOpen(){
    TweenMax.to($('.imageContainer'), 0.7, {scale:0})
  }

  function menuClose(){
    TweenMax.to($('.imageContainer'), 0.7, {scale:1})
  }



})//end js
