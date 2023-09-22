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

function setSections() {
  let years = getYears();

  // create a section
  let sectionArticle = document.createElement("section");
  sectionArticle.setAttribute("class", "article-section");
  document.querySelector(".articles").appendChild(sectionArticle);

  // create subsections by years
  years.map((publishedYear, index) => {
    let divSection = document.createElement("div");
    divSection.setAttribute("class", "article-year-section");
    divSection.setAttribute("id", index);
    document.querySelector(".article-section").appendChild(divSection);

    let h2Art = document.createElement("h2");
    let h2ArtIndex = index + 10;
    h2Art.setAttribute("class", "articles-year");
    h2Art.setAttribute("id", h2ArtIndex);
    document.querySelector(`#${CSS.escape(index)}`).appendChild(h2Art);

    let divSubArt = document.createElement("div");
    let divSubArtIndex = index + 1000;
    divSubArt.setAttribute("class", "article-by-year"); 
    divSubArt.setAttribute("id", divSubArtIndex);        
    document.querySelector(`#${CSS.escape(h2ArtIndex)}`).innerHTML = publishedYear;
    document.querySelector(`#${CSS.escape(index)}`).appendChild(divSubArt);
    let yearArticles = findArticlesWithSameYear(articles, publishedYear);
    console.log("year articles ", yearArticles);

    // create cards with articles
    yearArticles.map((yearArticle, index) => {
      let card = document.createElement("div");
      let cardIndex = Math.random() * 100;
      card.setAttribute("class", "article-card");
      card.setAttribute("id", cardIndex);
      document.querySelector(`#${CSS.escape(divSubArtIndex)}`).appendChild(card);

      let titleLink = document.createElement("a");
      let titleLinkIndex = cardIndex + 300;
      titleLink.setAttribute("class", "article-title");
      titleLink.setAttribute("href", yearArticle.url);
      titleLink.setAttribute("target", "_blank");
      titleLink.setAttribute("id", titleLinkIndex);   
      document.querySelector(`#${CSS.escape(cardIndex)}`).appendChild(titleLink);

      let createText = document.createTextNode(yearArticle.title);
      document.querySelector(`#${CSS.escape(titleLinkIndex)}`).appendChild(createText);

      let cardBody = document.createElement("div");
      let cardBodyIndex = cardIndex + 500;
      cardBody.setAttribute("class", "article-card-body");
      cardBody.setAttribute("id", cardBodyIndex);
      document.querySelector(`#${CSS.escape(cardIndex)}`).appendChild(cardBody);

      let imgLink = document.createElement("a");
      let imgLinkIndex = cardIndex + 700;
      imgLink.setAttribute("class", "article-title-link");
      imgLink.setAttribute("href", yearArticle.url);
      imgLink.setAttribute("target", "_blank");
      imgLink.setAttribute("id", imgLinkIndex);   
      document.querySelector(`#${CSS.escape(cardBodyIndex)}`).appendChild(imgLink);

      let cardImg = document.createElement("img");
      cardImg.setAttribute("class", "article-img");
      cardImg.setAttribute("src", yearArticle.image);
      document.querySelector(`#${CSS.escape(imgLinkIndex)}`).appendChild(cardImg);

      let cardText = document.createElement("div");
      let cardTextIndex = cardIndex + 2000;
      cardText.setAttribute("class", "article-card-text");
      cardText.setAttribute("id", cardTextIndex); 
      document.querySelector(`#${CSS.escape(cardBodyIndex)}`).appendChild(cardText);
      document.querySelector(`#${CSS.escape(cardTextIndex)}`).innerHTML = yearArticle.description;

     }) 
  });
}

function setArticles() {
  setSections();
//   articles.forEach(article => {
//     document.querySelector()
//   })

 }

 // contacts
// const SERVICE_ID = "service_a730kxo";
// const TEMPLATE_ID = "template_x8gn677";

//   function submitMessage() {
//     const PUBLIC_KEY = "R65UY0wRBH2tmKunK";
//      // https://dashboard.emailjs.com/admin/account
//      (function() {
//       emailjs.init('PUBLIC_KEY');
//   })();
//     document.getElementById('contact-form').addEventListener('submit', function(event) {
//       event.preventDefault();
//       // generate a five digit number for the contact_number variable
//       this.contact_number.value = Math.random() * 100000 | 0;
//       // these IDs from the previous steps
//       emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', this)
//           .then(function() {
//             console.log('SUCCESS!');
//           }, function(error) {
//             console.log('FAILED...', error);
//           });
//     });
// }

function renderBoard() {
  let dateCopyright = todayDate();
  document.querySelector(
    ".copyright"
  ).innerHTML = `Copyright &copy; ${dateCopyright} LivenLab`;

 // setArticles();
  //setPoems();
}

// executed with loading
(function () {
  renderBoard();
})();