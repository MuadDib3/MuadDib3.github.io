$(".use-cases-text__nav-item").on("click", function() {

   $(this).find('.use-cases-text__nav-description').slideToggle('fast');
   $(this).find('.use-cases-text__nav-button').slideToggle('fast');

   });


function toggleForm() {
   document.body.classList.toggle("no-scroll");
   const form = document.getElementById('modal-demo');
   form.classList.toggle('modal-show');
}

const burger = document.getElementById('header-menu__burger');
const menu = document.getElementById('header-content');
const links = document.getElementById('header-content__links');
const buttonHeader = document.getElementById('header-menu__button');


burger.addEventListener("click", function() {
   burger.classList.toggle("header-menu_active");
   menu.classList.toggle("header-menu_active");
   links.classList.toggle("header-menu_active");
   buttonHeader.classList.toggle("header-menu_active");
});