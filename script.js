// let toggleBtn = document.querySelector(".toggle-btn");
// let toggleBtnIcon = document.querySelector(".toggle-btn i");
// let dropDownMenu = document.querySelector(".navbar-links-bars");

// console.log("toggleBtn ", toggleBtn);
// console.log("toggleBtnIcon", toggleBtnIcon);
// console.log("dropDownMenu", dropDownMenu);

// function navBtnClick() {
//  // dropDownMenu.classList.replace("navbar-links","navbar-links-bars");
//   dropDownMenu.classList.toggle('open');
//   console.log("dropDownMenu1", dropDownMenu);
//   const isOpen = dropDownMenu.classList.contains('open');
//   console.log("isOpen ", isOpen);
//   //isOpen ? dropDownMenu.classList.replace("navbar-links","navbar-links-bars") : dropDownMenu.classList.replace("navbar-links-bars","navbar-links");
//   isOpen ? dropDownMenu.style.visibility = "visible" : dropDownMenu.style.visibility = "hidden";
// }

const hamburger = document.querySelector('.toggle-btn');
const navLink = document.querySelector('.navbar-links');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

// copyright
function todayDate() {
  let date = new Date().getFullYear();
  return date;
}

function setPoems() {
  let poemsSet = [];
}

function renderBoard() {
  let dateCopyright = todayDate();
  document.querySelector(
    ".copyright"
  ).innerHTML = `Copyright &copy; ${dateCopyright} LivenLab`;

  //setPoems();
}



// executed with loading
(function () {
  renderBoard();
})();