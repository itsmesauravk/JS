const offerContainer = document.querySelector(".offers-container")

const fetchOffers = async () => {
  try {
    const offers = await fetch("./offers.json")
    if (!offers) {
      throw new Error("Somthing error occured")
    }
    const allOffers = await offers.json()
    const getAllOffers = allOffers.offers
    console.log(getAllOffers)
    offerContainer.innerHTML = ""
    for (let i = 0; i < getAllOffers.length; i++) {
      let offerData = getAllOffers[i]
      offerContainer.innerHTML += `
        <div class="of-card">
          <div class="of-image-div">
            <img src="${offerData.icon}" alt="" />
          </div>
          <div class="of-extra">
            <div class="of-name">${offerData.name}</div>
            <div class="of-short-details">${offerData.details}</div>
            </div>
            <button id="offersBtn" class='read-more'>Read More</button>
        </div>
        `
    }
  } catch (error) {
    console.log(error)
  }
}

fetchOffers()
