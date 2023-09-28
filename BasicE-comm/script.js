const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");

//for slider
let slideIndex = 0;
const slideShow = () => {
  card1.style.transform = `translateX(-${slideIndex * 10}%)`;
  card2.style.transform = `translateX(-${slideIndex * 5}%)`;
  card3.style.transform = `translateX(-${slideIndex * 10}%)`;
  card4.style.transform = `translateX(-${slideIndex * 5}%)`;
};

const getAllProduts = () => {
  let products = fetch("./products.json");
  products
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);

      cardOne(data);
      cardTwo(data);
      cardThree(data);
      cardFour(data);
    });
};

getAllProduts();

const cardOne = data => {
  let shoesData = data.shoes;
  card1.innerHTML = "";
  for (let i = 0; i < shoesData.length; i++) {
    card1.innerHTML += `
        <div class='card' data-card-id='${shoesData[i].id}'>
        <div class='imageBox'>
        <img src='${shoesData[i].image}'></div>
        <p class='shoeName'>${shoesData[i].name}</p>
        <p class = 'shoePrice'>Price: $${shoesData[i].price}</p>
        <p class = 'shoeBrand'>Brand: ${shoesData[i].brand}</p>
        <p class = 'shoeRating'>Ratings: ⭐ ${shoesData[i].ratings}</p>
        </div>
            `;
  }
};

const cardTwo = data => {
  card2.innerHTML = "";
  let tshirtData = data.tshirts;
  for (let i = 0; i < tshirtData.length; i++) {
    card2.innerHTML += `
          <div class='card' data-card-id='${tshirtData[i].id}'>
          <div class='imageBox'>
          <img src='${tshirtData[i].image}'></div>
          <p class='shoeName'>${tshirtData[i].name}</p>
          <p class = 'shoePrice'>Price: $${tshirtData[i].price}</p>
          <p class = 'shoeBrand'>Brand: ${tshirtData[i].brand}</p>
          <p class = 'shoeRating'>Ratings: ⭐ ${tshirtData[i].ratings}</p>
  
          </div>
              `;
  }
};

const cardThree = data => {
  card3.innerHTML = "";
  let pantsData = data.pants;
  for (let i = 0; i < pantsData.length; i++) {
    card3.innerHTML += `
        <div class='card' data-card-id='${pantsData[i].id}'>
        <div class='imageBox'>
        <img src='${pantsData[i].image}'>
        </div>
        <p class='shoeName'>${pantsData[i].name}</p>
        <p class = 'shoePrice'>Price: $${pantsData[i].price}</p>
        <p class = 'shoeBrand'>Brand: ${pantsData[i].brand}</p>
        <p class = 'shoeRating'>Ratings: ⭐ ${pantsData[i].ratings}</p>

        </div>
            `;
  }
};

const cardFour = data => {
  card4.innerHTML = "";
  let jacketsData = data.jackets;
  for (let i = 0; i < jacketsData.length; i++) {
    card4.innerHTML += `
          <div class='card' data-card-id='${jacketsData[i].id}'>
          <div class='imageBox'>
          <img src='${jacketsData[i].image}' alt='image'></div>
          <p class='shoeName'>${jacketsData[i].name}</p>
          <p class = 'shoePrice'>Price: $${jacketsData[i].price}</p>
          <p class = 'shoeBrand'>Brand: ${jacketsData[i].brand}</p>
          <p class = 'shoeRating'>Ratings: ⭐ ${jacketsData[i].ratings}</p>
  
          </div>
              `;
  }
};

//for self movement
function selfServ() {
  if (slideIndex < card1.childElementCount - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  slideShow(slideIndex);
}
setInterval(selfServ, 3000);

slideShow(slideIndex);
