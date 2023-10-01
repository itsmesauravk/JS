const card1 = document.querySelector(".card1")
const card2 = document.querySelector(".card2")
const card3 = document.querySelector(".card3")
const card4 = document.querySelector(".card4")

const detail1 = document.querySelector(".detail1")
const detail2 = document.querySelector(".detail2")
const detail3 = document.querySelector(".detail3")
const detail4 = document.querySelector(".detail4")

//buttons
const shoesNext = document.getElementById("shoes-next")
const shoesPrev = document.getElementById("shoes-prev")

const tshirtNext = document.getElementById("t-shirt-next")
const tshirtPrev = document.getElementById("t-shirt-prev")

const pantsNext = document.getElementById("pants-next")
const pantsPrev = document.getElementById("pants-prev")

const jacketsNext = document.getElementById("jackets-next")
const jacketsPrev = document.getElementById("jackets-prev")

//for slider
let slideIndex = 0
const slideShow = () => {
  card1.style.transform = `translateX(-${slideIndex * 10}%)`
  card2.style.transform = `translateX(-${slideIndex * 5}%)`
  card3.style.transform = `translateX(-${slideIndex * 10}%)`
  card4.style.transform = `translateX(-${slideIndex * 5}%)`
}
// let data
const getAllProduts = () => {
  let products = fetch("./products.json")
  products
    .then(res => {
      return res.json()
    })
    .then(data => {
      // console.log(data)
      let shoesData = data.shoes
      let tshirtData = data.tshirts
      let pantsData = data.pants
      let jacketsData = data.jackets
      cardOne(shoesData)
      cardTwo(tshirtData)
      cardThree(pantsData)
      cardFour(jacketsData)

      showShoeData(shoesData)
      showTshirtData(tshirtData)
      showPantsData(pantsData)
      showJacketsData(jacketsData)
    })
}

getAllProduts()

const cardOne = shoesData => {
  card1.innerHTML = ""
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
            `
  }
}

const cardTwo = tshirtData => {
  card2.innerHTML = ""

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
              `
  }
}

const cardThree = pantsData => {
  card3.innerHTML = ""

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
            `
  }
}

const cardFour = jacketsData => {
  card4.innerHTML = ""

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
              `
  }
}
//card1
shoesNext.addEventListener("click", () => {
  if (slideIndex < card1.childElementCount - 1) {
    slideIndex++
  } else {
    slideIndex = 0
  }
  slideShow(slideIndex)
})
shoesPrev.addEventListener("click", () => {
  if (slideIndex >= 0) {
    slideIndex--
  } else {
    slideIndex = card1.childElementCount - 1
  }
  slideShow(slideIndex)
})
//card2
tshirtPrev.addEventListener("click", () => {
  if (slideIndex >= 0) {
    slideIndex--
  } else {
    slideIndex = card2.childElementCount - 1
  }
  slideShow(slideIndex)
})
tshirtNext.addEventListener("click", () => {
  if (slideIndex < card2.childElementCount - 1) {
    slideIndex++
  } else {
    slideIndex = 0
  }
  slideShow(slideIndex)
})
//card3
pantsPrev.addEventListener("click", () => {
  if (slideIndex >= 0) {
    slideIndex--
  } else {
    slideIndex = card3.childElementCount - 1
  }
  slideShow(slideIndex)
})
pantsNext.addEventListener("click", () => {
  if (slideIndex < card3.childElementCount - 1) {
    slideIndex++
  } else {
    slideIndex = 0
  }
  slideShow(slideIndex)
})
//card4
jacketsPrev.addEventListener("click", () => {
  if (slideIndex >= 0) {
    slideIndex--
  } else {
    slideIndex = card4.childElementCount - 1
  }
  slideShow(slideIndex)
})
jacketsNext.addEventListener("click", () => {
  if (slideIndex < card4.childElementCount - 1) {
    slideIndex++
  } else {
    slideIndex = 0
  }
  slideShow(slideIndex)
})
//for self movement
function selfServ() {
  if (slideIndex < card1.childElementCount - 1) {
    slideIndex++
  } else {
    slideIndex = 0
  }
  slideShow(slideIndex)
}
setInterval(selfServ, 4000)

slideShow(slideIndex)

//details data input
//for shoes
const showShoeData = shoesData => {
  card1.addEventListener("click", e => {
    const card = e.target.closest(".card")
    if (card) {
      // Get the data-card-id attribute to identify the clicked card
      const cardId = card.getAttribute("data-card-id")
      console.log("id: " + cardId)

      // Use the cardId to find the corresponding data in your result array
      const clickedCardData = shoesData.find(item => {
        return item.id === Number(cardId)
      })
      //calling the function
      displayExtraDetails(clickedCardData, detail1)
    }
  })
}

//for t-shirts
const showTshirtData = tshirtData => {
  card2.addEventListener("click", e => {
    const card = e.target.closest(".card")
    if (card) {
      // Get the data-card-id attribute to identify the clicked card
      const cardId = card.getAttribute("data-card-id")
      console.log("id: " + cardId)

      // Use the cardId to find the corresponding data in your result array
      const clickedCardData = tshirtData.find(item => {
        return item.id === Number(cardId)
      })
      //calling the function
      displayExtraDetails(clickedCardData, detail2)
    }
  })
}

//for pants
const showPantsData = pantsData => {
  card3.addEventListener("click", e => {
    const card = e.target.closest(".card")
    if (card) {
      // Get the data-card-id attribute to identify the clicked card
      const cardId = card.getAttribute("data-card-id")
      console.log("id: " + cardId)

      // Use the cardId to find the corresponding data in your result array
      const clickedCardData = pantsData.find(item => {
        return item.id === Number(cardId)
      })
      //calling the function
      displayExtraDetails(clickedCardData, detail3)
    }
  })
}
//for jacket
const showJacketsData = jacketsData => {
  card4.addEventListener("click", e => {
    const card = e.target.closest(".card")
    if (card) {
      // Get the data-card-id attribute to identify the clicked card
      const cardId = card.getAttribute("data-card-id")
      console.log("id: " + cardId)

      // Use the cardId to find the corresponding data in your result array
      const clickedCardData = jacketsData.find(item => {
        return item.id === Number(cardId)
      })
      //calling the function
      displayExtraDetails(clickedCardData, detail4)
    }
  })
}

//for all
function displayExtraDetails(clickedCardData, detailBox) {
  if (clickedCardData) {
    detailBox.innerHTML = `
        <img src='${clickedCardData.image}'>
        <div id='extra-data'>
        
        <p>Name: ${clickedCardData.name}</p><br>
        <p>Price: $${clickedCardData.price}</p><br>
        <p>Company: ${clickedCardData.brand}</p><br>
        <p>Ratings: ⭐${clickedCardData.ratings}</p><br>
        <div id='item-colors'>
        Colors: <br>
          <div class="color-box" style="background-color: ${clickedCardData.colors[0]}"></div>
          <div class="color-box" style="background-color: ${clickedCardData.colors[1]}"></div>
          <div class="color-box" style="background-color: ${clickedCardData.colors[2]}"></div>

        <br><br>
        </div>
        <p>Description:</p><br>
        <p>${clickedCardData.description}</p><br>
        <button class="close">Close</button>
        </div>
      `

    // Add a click event listener to the close button within the details element
    document.querySelector(".close").addEventListener("click", () => {
      detailBox.style.display = "none"
    })

    // Display the details
    detailBox.style.display = "flex"
  }
}
