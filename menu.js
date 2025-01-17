const itensDoMenu = document.querySelectorAll('#menu-principal li');

itensDoMenu.forEach(el => el.addEventListener('click', ativaItemMenu));

function ativaItemMenu(e) {
  itensDoMenu.forEach(el => el.classList.remove('menu-ativo'));
  e.currentTarget.classList.add('menu-ativo');
}

const button = document.getElementById("menu-button");
const menu = document.getElementById('menu-principal');

button.addEventListener("click", (e) => {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove('showMenu');
  } else {
    menu.classList.add('showMenu');
  }

})