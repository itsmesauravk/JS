const next = document.getElementById("next");
const prev = document.getElementById("prev");
const slider = document.querySelector(".slider");
const details = document.querySelector(".details");

let slideIndex = 0;
const slideShow = () => {
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
};

let result; // Define result in a higher scope

const dataEntry = () => {
  let data = fetch("data.json");
  data
    .then(res => {
      return res.json();
    })
    .then(data => {
      result = data; // Store the data in the result variable
      console.log(result);
      slider.innerHTML = "";
      for (let i = 0; i < result.length; i++) {
        slider.innerHTML += `
            <div class="card" data-card-id='${result[i].id}'>
              <img src="${result[i].image}" alt="shoe-image">
              <p>id:gid${i}ravg</p><br>
              <p>name:${result[i].name}</p><br>
              <p>price:${result[i].price}</p><br>
              <p>company:${result[i].company}</p><br>
              <p>rating:${result[i].rating}</p><br>
            </div>`;
      }
    });
};

dataEntry();

// Rest of your code...

next.addEventListener("click", () => {
  if (slideIndex < slider.childElementCount - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  slideShow(slideIndex);
});

prev.addEventListener("click", () => {
  if (slideIndex >= 0) {
    slideIndex--;
  } else {
    slideIndex = slider.childElementCount - 1;
  }
  slideShow(slideIndex);
});

//for defult
function selfServ() {
  if (slideIndex < slider.childElementCount - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  slideShow(slideIndex);
}
setInterval(selfServ, 5000);

slideShow(slideIndex);

//details data input

const showData = () => {
  slider.addEventListener("click", e => {
    const card = e.target.closest(".card");
    if (card) {
      // Get the data-card-id attribute to identify the clicked card
      const cardId = card.getAttribute("data-card-id");
      console.log("id: " + cardId);

      // Use the cardId to find the corresponding data in your result array
      const clickedCardData = result.find(item => {
        return item.id === Number(cardId);
      });
      console.log(clickedCardData);

      if (clickedCardData) {
        details.innerHTML = `
            <img src='${clickedCardData.image}'>
            <p>Name: ${clickedCardData.name}</p><br>
            <p>Price: ${clickedCardData.price}</p><br>
            <p>Company: ${clickedCardData.company}</p><br>
            <p>Ratings: ${clickedCardData.rating}</p><br>
            <p>Description:</p><br>
            <p>${clickedCardData.description}</p><br>
            <button id="close">Close</button>
          `;

        // Add a click event listener to the close button within the details element
        document.getElementById("close").addEventListener("click", () => {
          details.style.display = "none";
        });

        // Display the details
        details.style.display = "flex";
      }
    }
  });
};

showData(); // Call the showData function to set up the event listener
