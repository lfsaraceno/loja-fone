const $heart = document.querySelector(".heart");
const $btnCart = document.querySelector(".-cart");
const $navCart = document.querySelector(".-cart-menu");

$heart.addEventListener("click", handleClick);
$btnCart.addEventListener("click", clickCart);

function handleClick() {
  console.log("Heart");
}

function clickCart() {
  $navCart.innerHTML = "NewCart";
}
