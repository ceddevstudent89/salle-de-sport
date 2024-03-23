const btns = document.querySelectorAll(".btn-modale");
const modaleEquipement = document.querySelector(".bloc-modale");
// const fermetureModale = document.querySelector(".fermeture-modale");
const imgIndex = document.querySelector(".bloc-modale img");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    imgIndex.src = `ressources/img${e.target.getAttribute(
      "data-index"
    )}-equip.jpg`;
    modaleEquipement.classList.add("active-modale");
  });
});

// fermetureModale.addEventListener("click", () => {
//   modaleEquipement.classList.remove("active-modale");
// });

modaleEquipement.addEventListener("click", () => {
  modaleEquipement.classList.remove("active-modale");
});
