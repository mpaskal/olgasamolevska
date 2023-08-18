function navBtnClick() {
  let navStatus = document.getElementById("topNavbar");
  console.log("navStatus ", navStatus);
  if (navStatus.className === "navbar") {
    navStatus.className += " nav-responsive";
  } else {
    navStatus.className = "navbar";
  }
}

// copyright
function todayDate() {
  let date = new Date().getFullYear();
  return date;
}

function renderBoard() {
  let dateCopyright = todayDate();
  document.querySelector(
    ".copyright"
  ).innerHTML = `Copyright &copy; ${dateCopyright} LivenLab`;
}

// executed with loading
(function () {
  renderBoard();
})();