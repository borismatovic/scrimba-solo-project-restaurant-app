let order = [
  {
    name: "Pizza",
    item: 0,
  },
  {
    name: "Burger",
    item: 0,
  },
  {
    name: "Beer",
    item: 0,
  },
];

document.addEventListener("click", (e) => console.log(e.target.parentElement));

let cartEl = document.querySelector(".cart");
let cart = order.filter((el) => el.item > 0);
if (cart.length) cartEl.classList.remove("hide");
else cartEl.classList.add("hide");
