let valorInicial = 0;
const $heart = document.querySelector(".heart");
const $btnCart = document.querySelector(".-cart");

$heart.addEventListener("click", handleClick);
$btnCart.addEventListener("click", clickCart);

function handleClick() {
  $heart.classList.toggle("-active");
}

function clickCart() {
  const $navCart = document.querySelector(".-cart-menu");
  $navCart.innerHTML = `Carrinho (${++valorInicial})`;
}
