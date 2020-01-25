// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createArticleCards(card) {
  let cardClass = document.createElement("div");
  let headlineClass = document.createElement("div");
  let authorClass = document.createElement("div");
  let imgContainerClass = document.createElement("div");
  let imgSrc = document.createElement("img");
  imgSrc.src = card.authorPhoto;

  let authorName = document.createElement("span");

  cardClass.classList.add("card");
  headlineClass.classList.add("headline");
  authorClass.classList.add("author");
  imgContainerClass.classList.add("img-container");

  imgContainerClass.appendChild(imgSrc);
  authorClass.appendChild(imgContainerClass);
  authorClass.appendChild(authorName);
  cardClass.appendChild(headlineClass);
  cardClass.appendChild(authorClass);

  headlineClass.textContent = card.headline;
  authorName.textContent = card.authorName;

  return cardClass;
}

const axiosUrl = axios.get("https://lambda-times-backend.herokuapp.com/articles");
axiosUrl.then(response => {
  Object.values(response.data.articles)
    .forEach(item => {
      item.forEach(element => {
        document
          .querySelector(".cards-container")
          .appendChild(createArticleCards(element));
      });
    })
    .catch(err => {
      console.log("Nothing to display",err);
    });
  
});
