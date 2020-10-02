const navigation = document.querySelector(".navigation");
let navigationTop = navigation.offsetTop;
window.addEventListener("scroll", () => {
if (window.scrollY > navigationTop) {
    navigation.classList.add("sticky")
  } else {
    navigation.classList.remove("sticky");
  }
})
const menuMobileButton = document.querySelector('.mobileMenu__button')
  const menuMobile = document.querySelector('.mobileMenu')
  menuMobileButton.addEventListener('click', () => {
    menuMobileButton.classList.toggle('mobileMenu__button--open')
    menuMobile.classList.toggle('mobileMenu--open')
  })
  menuMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('mobileMenu--open')
    menuMobileButton.classList.toggle('mobileMenu__button--open')
  })