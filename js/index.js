var burger = "";
document.addEventListener("DOMContentLoaded", function() {
  burger = document.getElementById('burger')
  burger.onclick = toggleBurger
});
function toggleBurger() {
  if(burger.classList.contains("active")){
    burger.classList.remove("active");
  }else{
    burger.classList += " active";
  }
}