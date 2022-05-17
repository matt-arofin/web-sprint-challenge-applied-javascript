import axios from 'axios'

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.

  // create elements
  const cardContainer = document.createElement("div");
  const headlineDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const imgContainer = document.createElement("div");
  const imgTag = document.createElement("img");
  const nameSpan = document.createElement("span");

  // add tags
  cardContainer.classList.add("card");
  headlineDiv.classList.add("headline");
  authorDiv.classList.add("author");
  imgContainer.classList.add("img-container");

// fill content
  headlineDiv.textContent = article.headline;
  imgTag.src = article.authorPhoto;
  nameSpan.textContent = `By ${article.authorName}`;

  // join elements
  cardContainer.appendChild(headlineDiv);
  cardContainer.appendChild(authorDiv);
  authorDiv.appendChild(imgContainer);
  authorDiv.appendChild(nameSpan);
  imgContainer.appendChild(imgTag);

  console.log(cardContainer)
  return cardContainer
}
const testCard = Card({ headline: "Javascript", authorPhoto: "#", authorName: "BloomTech" })
console.log(testCard);

  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const entryPoint = document.querySelector(selector);
  // convert object of objects into array of objects
  axios.get("http://localhost:5001/api/articles")
    .then(res => {
      const articles = res.data.articles;
      console.log(articles)
      const jsCard = articles.javascript.forEach(item => {entryPoint.appendChild(Card(item));});
      console.log("javascript: ", jsCard)
      // jsCard.foreach(item => {entryPoint.appendChild(Card(item));})
      const bootstrap = articles.bootstrap.forEach(item => {entryPoint.appendChild(Card(item));});
      console.log("bootstrap: ", bootstrap)
      // bootstrap.foreach(item => {bootstrap.appendChild(Card(item));})
      const tech = articles.technology.forEach(item => {entryPoint.appendChild(Card(item));});
      console.log("tech: ", tech)
      // tech.foreach(item => {tech.appendChild(Card(item));})
      const jsquery = articles.jquery.forEach(item => {entryPoint.appendChild(Card(item));});
      console.log("jsquery: ", jsquery)
      // jsquery.foreach(item => {jsquery.appendChild(Card(item));})
      const nodejs = articles.node.forEach(item => {entryPoint.appendChild(Card(item));});
      console.log("nodejs: ", nodejs)
      // nodejs.foreach(item => {jsquery.appendChild(Card(item));})
    })
  return entryPoint
  // console.log()
}

export { Card, cardAppender }
