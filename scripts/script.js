const hamburger = document.querySelector(".toggle-btn");
const closed = document.querySelector(".close-toggle-btn");
const navLink = document.querySelector(".navbar-links");
const movieContact = document.querySelectorAll(".movie-contact");

// Event listener for window resize
window.addEventListener("resize", function () {
  let windowWidth = window.innerWidth;

  if (windowWidth > 1200) {
    closed.style.display = "none";
    hamburger.style.display = "none";
  } else if (!navLink.classList.contains("hide")) {
    closed.style.display = "block";
  } else if (navLink.classList.contains("hide")) {
    hamburger.style.display = "block";
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
