const container = document.querySelector(".container")

const featuredItems = async () => {
  try {
    const response = await fetch("./products.json")
    if (!response.ok) {
      throw new Error("Network is not responding correctly")
    }
    const products = await response.json()
    const featuredProducts = products.featuredProducts
    showDataInCard(featuredProducts)
  } catch (error) {
    console.error("Error fetching or parsing data:", error)
  }
}

featuredItems()

// show data in card

function showDataInCard(featuredProducts) {
  container.innerHTML = ""
  for (let i = 0; i < 4; i++) {
    let product = featuredProducts[i]

    container.innerHTML += `
        <div class="card">
          <div class="card-image">
            <img src="${product.image}" alt="image" />
          </div>
          <div class="card-details">
            <p id="card-name">${product.name}</p>
            <p id="card-price">$${product.price}</p>
            <p id="card-rating">${product.rating}</p>
          </div>
          <div class="card-btns">
            <button type="submit" class="btn add-to-cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
            <button type="submit" class="btn watch-card">
              <i class="fa-solid fa-eye"></i>
            </button>
            <button type="submit" class="btn share-card">
              <i class="fa-solid fa-share"></i>
            </button>
          </div>
        </div>`
  }
}
