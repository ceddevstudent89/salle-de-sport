const btns = document.querySelectorAll(".btn-modale");
const modaleEquipement = document.querySelector(".bloc-modale");
// const fermetureModale = document.querySelector(".fermeture-modale");
const imgIndex = document.querySelector(".bloc-modale img");

// jusqu'à 850px les images de la galerie ne sont pas cliquable:
// Le méthode matchMedia retournera false au-dessous
// et au-dessus cela va autoriser le code ci-desous (true).
// .matches est-ce que ça matches "(min-width: 850px)"
if (window.matchMedia("(min-width: 850px)").matches) {
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
}

// Animation NavBar
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    nav.classList.add("anim-nav");
  } else {
    nav.classList.remove("anim-nav");
  }
});
