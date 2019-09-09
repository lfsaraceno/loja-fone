const $search = document.querySelector(".header-action");
const $icon = $search.querySelector(".icon");
const $active = $search.querySelector(".active");

$icon.addEventListener("click", event => {
  event.preventDefault();

  $search.classList.toggle("active");
  $icon.classList.toggle("-close");
});
