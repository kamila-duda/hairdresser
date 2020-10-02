const navigation = document.querySelector(".navigation");
let navigationTop = navigation.offsetTop;
window.addEventListener("scroll", () => {
if (window.scrollY > navigationTop) {
    navigation.classList.add("sticky")
  } else {
    navigation.classList.remove("sticky");
  }
})