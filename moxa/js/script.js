$(window).scroll(function(){
   if($(window).scrollTop() <= 96){
      $(".content-header").css ("height", 96);
      $(".content-header-after").css("margin-top", 27);
      $(".content-header__flexbox").css("margin-top", 27);
      $(".content-header-after").css("opacity", 0);
   }
   if ($(window).scrollTop() > 97) {

      $(".content-header").height (70);
       $(".content-header-after").css("margin-top", 14);
       $(".content-header-after").css("opacity", 1);
       $(".content-header__flexbox").css("margin-top", 14);
   }
});


// document.addEventListener('mousewheel', scroll, false);

// const logoDecoration = document.getElementsByClassName('logo-decoration');
// console.log(logoDecoration);
// window.addEventListener('wheel', function () {
//    logoDecoration.classList.add ("active");
// )};