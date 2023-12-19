const hamburger = document.querySelector(".toggle-btn");
const closed = document.querySelector(".close-toggle-btn");
const navLink = document.querySelector(".navbar-links");
const movieContact = document.querySelectorAll(".movie-contact");

// Function to hide the element
function hideCloseNav() {
  closed.style.display = "none";
}

// Event listener for window resize
window.addEventListener("resize", function () {
  // Define your condition based on window size here
  var windowWidth = window.innerWidth;

  // For example, hide the element if window width is more than 1200 pixels
  if (windowWidth > 1200) {
    hideCloseNav();
  }
});

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
  hamburger.style.display = "none"; // Show the navbar content
  closed.style.display = "block";
});

closed.addEventListener("click", () => {
  navLink.classList.toggle("hide");
  hamburger.style.display = "block"; // Show the navbar content
  closed.style.display = "none";
});

function toContact() {
  movieContact.forEach((item) => {
    item.addEventListener("click", function () {
      window.location.assign("contacts.html");
    });
  });
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
  let articlesThisYear = articles.filter((article) => article.year === year);
  return articlesThisYear;
}

function renderBoard() {
  let dateCopyright = todayDate();
  document.querySelector(
    ".copyright"
  ).innerHTML = `Copyright &copy; ${dateCopyright} LivenLab`;
  document.querySelector(".cards").setAttribute("class", "card-poems cards");
}

// executed with loading
(function () {
  renderBoard();
})();
