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

}

// executed with loading
(function () {
  renderBoard();
})();