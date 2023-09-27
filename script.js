const hamburger = document.querySelector('.toggle-btn');
const navLink = document.querySelector('.navbar-links');
const sidebar = document.querySelector('.sidebar-links');
const sidebarBtn = document.querySelector('.sidebar-btn');
const sidebarBtnIcon = document.querySelector('.btn-icon');

let isMovedPage = false;
let isSidebarVisible = true;

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

// poems sidebar
function moveSidebar() {
  if (isSidebarVisible === true) {
    isSidebarVisible = false;
    sidebar.setAttribute("class", "sidebar-links sidebar-links-move");
    sidebarBtn.setAttribute("class", "sidebar-btn sidebar-btn-move");
    sidebarBtnIcon.setAttribute("class", "fa-solid fa-angle-left btn-icon");
  } else {
    isSidebarVisible = true;
    sidebar.setAttribute("class", "sidebar-links");
    sidebarBtn.setAttribute("class", "sidebar-btn");
    sidebarBtnIcon.setAttribute("class", "fa-solid fa-angle-right btn-icon");
  }
}

// poems pages
function poemPageMove() {
  if (isMovedPage === false) {
    console.log("isMovedPage ", isMovedPage);
    let cardsArr = document.querySelectorAll(".cards");
    for (let i = 0; i < cardsArr.length; i++) {
      cardsArr[i].setAttribute("class", "card-poems-move cards")};
    }
    isMovedPage = true;
    console.log("isMovedPage2 ", isMovedPage);
}

// clean form
function cleanForm() {
  document.querySelectorAll(".contact-field").innerHTML = "";
}

// copyright
function todayDate() {
  let date = new Date().getFullYear();
  return date;
}

function getYears() {
  let years = [];
  for (let article of articles) {
    if (!years.includes(article.year)) {
      years.push(article.year);
    }
  }
  return years.sort((a, b) => b - a);  
}

function findArticlesWithSameYear(articles, year) {
  let articlesThisYear = articles.filter(article => article.year === year);
  return articlesThisYear;
}

function renderBoard() {
  let dateCopyright = todayDate();
  document.querySelector(
    ".copyright"
  ).innerHTML = `Copyright &copy; ${dateCopyright} LivenLab`;
  document.querySelector(".cards").setAttribute("class", "card-poems cards");
  isMovedPage = false;
  isSidebarVisible = true;
}

// executed with loading
(function () {
  renderBoard();
})();