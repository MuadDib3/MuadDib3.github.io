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



function backToCurrentScroll () {
   document.location.href = "/moxa/index.html";
   window.scrollTo(0, 300);
}

//!---------------------scroll----------------------------------------//
const about = document.querySelector(".about__text");
function scrollToAbout () {
   about.scrollIntoView({block: "center", behavior: "smooth"});
}

const portfolio = document.querySelector(".about__portfolio");
function scrollToPortfolio () {
   portfolio.scrollIntoView({block: "start", behavior: "smooth"});
}

const articles = document.querySelector(".articles");
function scrollToArticles () {
   articles.scrollIntoView({block: "start", behavior: "smooth"});
}

//!------------------------scroll-animation------------------------//

const throttle = (func, limit) => {
   let lastFunc;
   let lastRan;
   return function() {
     const context = this;
     const args = arguments;
     if (!lastRan) {
       func.apply(context, args);
       lastRan = Date.now();
     } else {
       clearTimeout(lastFunc);
       lastFunc = setTimeout(function() {
         if ((Date.now() - lastRan) >= limit) {
           func.apply(context, args);
           lastRan = Date.now();
         }
       }, limit - (Date.now() - lastRan));
     }
   }
 }

window.addEventListener('wheel', throttle(function Animation() {
   const logoDecotation = document.querySelectorAll('.logo-decoration__aimation');
   for (let i = 0; i < logoDecotation.length; i++) {
      logoDecotation[i].classList.add('logo-decoration_scroll');
   }
 function removeAnimation() {
      for (let i = 0; i < logoDecotation.length; i++) {
      logoDecotation[i].classList.remove('logo-decoration_scroll');
   }}
   setTimeout(removeAnimation, 6000);
}, 7000));



//  window.addEventListener('scroll', function removeAnimation() {
//    const logoDecotation = document.querySelectorAll('.logo-decoration__aimation');
//    for (let i = 0; i < logoDecotation.length; i++) {
//       logoDecotation[i].classList.remove('logo-decoration_scroll');
//    }
//  });
 