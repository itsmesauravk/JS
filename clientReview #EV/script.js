const displayReviews = async () => {
  const reviews = await fetch("./review.json")
  const allReviews = await reviews.json()
  const clientReviews = allReviews.clientReviews
  console.log(clientReviews)

  const swiperWrapper = document.querySelector(".my-swiper-wrapper")
  swiperWrapper.innerHTML = ""

  for (let i = 0; i < clientReviews.length; i++) {
    const review = clientReviews[i]
    const backgroundColor = i % 2 === 0 ? "#ADC4CE" : "#C4DFDF"

    swiperWrapper.innerHTML += `
        <div class="swiper-slide"> 
          <div class="card">
            <div class="review" style="background-color: ${backgroundColor};">
              <p>${review.comment}</p>
            </div>
            <div class="details">
              <div class="userImage">
                <img src="${review.image}" alt="cat" />
              </div>
              <div class="userDetails">
                <h2>${review.name}</h2>
                <h3>${review.job}</h3>
              </div>
            </div>
            <div class="arrow-div" style="background-color: ${backgroundColor}"></div>
          </div>
        </div>
      `
  }

  // Initialize Swiper after adding all review cards

  const swiper = new Swiper(".my-swiper-container", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  })
}

// Call displayReviews to load reviews and initialize Swiper
displayReviews()
