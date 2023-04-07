var acc = document.getElementsByClassName("faq-text");
var i;

for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function () {
      this.classList.toggle("active");

   });
}

const headerBurger = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header-nav');

headerBurger.addEventListener('click', function () {
   headerMenu.classList.toggle("active")
   headerBurger.classList.toggle("active")
})