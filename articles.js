const articles = [
    {
      "title": "Святе місце Миколи Макаренка",
      "name": "Макаренка",
      "id": "makarenka",
      "path": "#makarenka",
      "year": "2019",
      "date": "20 грудня, 2019",
      "image": "assets/images/makarenka.jpg",
      "description": "Микола Макаренко – людина, яка зуміла врятувати від знищення більшовицькою Ордою Софію Київську.",
      "url": "https://zn.ua/ukr/HISTORY/svyate-misce-mikoli-makarenka-333577_.html",
      "poemsLink": "sidebar_link"
    },
    {
      "title": "Мовчання Зони",
      "name": "Мовчання",
      "id": "movchanya",
      "path": "#movchanya",
      "year": "2019",
      "date": "26 квiтня, 2019",
      "image": "assets/images/movchanya.jpg",
      "description": "До 33-х роковин Чорнобильської трагедії.",
      "url": "https://zn.ua/ukr/personalities/movchannya-zoni-309676_.html",
      "poemsLink": "sidebar_link"
    },
    {
      "title": "Один у полі воїн — один у небі Бог",
      "name": "Oдин",
      "id": "odin",
      "path": "#odin",
      "year": "2018",
      "date": "20 грудня 2018",
      "image": "assets/images/odin.jpg",
      "description": "Набат Михайлівського монастиря лунав над Києвом 1240 року під час ординської навали.",
      "url": "https://zn.ua/ukr/HISTORY/odin-u-poli-voyin-odin-u-nebi-bog-297561_.html",
      "poemsLink": "sidebar_link",
    },
    {
      "title": "Той Горбачов, що горнєє вбачає",
      "name": "Горбачов",
      "id": "gorbachov",
      "path": "#gorbachov",
      "year": "2017",
      "date": "20 жовтня 2017",
      "image": "assets/images/gorbachov.jpg",
      "description": "Дмитро Горбачов ввів у міжнародний обіг поняття'український авангард','українська сецесія'.",
      "url": "https://zn.ua/ukr/personalities/toy-gorbachov-scho-gornyeye-vbachaye-257573_.html",
      "poemsLink": "sidebar_link",
    },
    {
      "title": "Алеї нашої пам'яті",
      "name": "Алеї",
      "id": "alei",
      "path": "#alei",
      "year": "2017",
      "date": "11 серпня 2017",
      "image": "assets/images/alei.jpg",
      "description": "У яку ж прірву ми скотилися, коли духовна еліта України знищувалася разом із пам'яттю про неї!",
      "url": "https://zn.ua/ukr/personalities/aleyi-nashoyi-pam-yati-250964_.html",
      "poemsLink": "sidebar_link",
    },
    {
      "title": "Важка дорога з України в Україну",
      "name": "Важка",
      "id": "vazka",
      "path": "#vazka",
      "year": "2015",
      "date": "13 листопада 2015",
      "image": "assets/images/vazka.jpg",
      "description": "Живе серед нас дивовижна жінка - Оксана Миколаївна Хращевська. Вона не зрадила ні Україну, ні ближніх, за що пройшла сталінські табори й заслання. Нещодавно їй виповнилося 90 років.",
      "url": "https://zn.ua/ukr/personalities/vazhka-doroga-z-ukrayini-v-ukrayinu-_.html",
      "poemsLink": "sidebar_link",
    },
    {
      "title": "Феномен Теофіла Яновського",
      "name": "Феномен",
      "id": "phenomen",
      "path": "#phenomen",
      "year": "2013",
      "date": "30 серпня 2013",
      "image": "assets/images/phenomen.jpg",
      "description": "Хтось вважав, що може вдосконалити світ насильством - Теофіл Яновський щоденно вдосконалював світ милосердям і напруженням інтелекту.",
      "url": "https://zn.ua/ukr/personalities/fenomen-teofila-yanovskogo-_.html",
      "poemsLink": "sidebar_link"
    }
  ]

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

  // executed with loading
(function () {
    setSections();
  })();