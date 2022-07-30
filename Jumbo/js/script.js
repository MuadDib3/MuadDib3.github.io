$(window).scroll(function(){
   if($(window).scrollTop() <= 108){

      $(".header-content").css("padding-top", 26);
      $(".header-content").css("padding-bottom", 26);

   }
   if ($(window).scrollTop() > 108) {

       $(".header-content").css("padding-top", 20);
       $(".header-content").css("padding-bottom", 20);
   }
});




$(".use-cases-text__nav-item").on("click", function() {
   $(".use-cases-text__nav-description").slideUp('fast');
   $(".use-cases-text__nav-button").slideUp('fast');
   $(this).find('.use-cases-text__nav-description').slideToggle('fast');
   $(this).find('.use-cases-text__nav-button').slideToggle('fast');
   });