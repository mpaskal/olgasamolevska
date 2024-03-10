const sidebar = document.querySelector(".sidebar-links");
const sidebarBtn = document.querySelector(".sidebar-btn");
const sidebarBtnIcon = document.querySelector(".btn-icon");

let isMovedPage = false;
let isSidebarVisible = false;

// poems sidebar
function moveSidebar() {
  if (isSidebarVisible === false) {
    isSidebarVisible = true;
    sidebar.setAttribute("class", "sidebar-links sidebar-links-move");
    sidebarBtn.setAttribute("class", "sidebar-btn sidebar-btn-move");
    sidebarBtnIcon.setAttribute("class", "fa-solid fa-angle-left btn-icon");
  } else {
    isSidebarVisible = false;
    sidebar.setAttribute("class", "sidebar-links");
    sidebarBtn.setAttribute("class", "sidebar-btn");
    sidebarBtnIcon.setAttribute("class", "fa-solid fa-angle-right btn-icon");
  }
}

function initSidebar() {
  if (window.innerWidth < 1200) {
    isSidebarVisible = false;
    sidebar.setAttribute("class", "sidebar-links");
    sidebarBtn.setAttribute("class", "sidebar-btn");
    sidebarBtnIcon.setAttribute("class", "fa-solid fa-angle-right btn-icon");
  } else {
    isSidebarVisible = true;
    sidebar.setAttribute("class", "sidebar-links sidebar-links-move");
    sidebarBtn.setAttribute("class", "sidebar-btn sidebar-btn-move");
    sidebarBtnIcon.setAttribute("class", "fa-solid fa-angle-left btn-icon");
  }
}

// poems sidebar depends on a screen size
window.addEventListener(
  "resize",
  function (event) {
    if (window.innerWidth < 1200) {
      isSidebarVisible = true;
      moveSidebar();
    } else {
      isSidebarVisible = false;
      moveSidebar();
    }
  },
  true
);

// poems pages
function poemPageMove() {
  if (isMovedPage === false) {
    let cardsArr = document.querySelectorAll(".cards");
    for (let i = 0; i < cardsArr.length; i++) {
      cardsArr[i].setAttribute("class", "card-poems-move cards");
    }
  }

  isMovedPage = true;

  if (window.innerWidth < 1200) {
    sidebar.setAttribute("class", "sidebar-links");
    sidebarBtn.setAttribute("class", "sidebar-btn");
    sidebarBtnIcon.setAttribute("class", "fa-solid fa-angle-right btn-icon");
    isSidebarVisible = false;
  }
}

(function () {
  initSidebar();
})();
