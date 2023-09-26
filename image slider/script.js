const slider = document.querySelector(".slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let slideIndex = 0;

// Function to show the current slide
function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

// Event listeners for previous and next buttons
prevBtn.addEventListener("click", () => {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = slider.childElementCount - 1;
  }
  showSlide(slideIndex);
});

nextBtn.addEventListener("click", () => {
  if (slideIndex < slider.childElementCount - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  showSlide(slideIndex);
});

// Auto-slide (uncomment this to enable auto-sliding)

function autoSlide() {
  if (slideIndex < slider.childElementCount - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

setInterval(autoSlide, 3000); // Change slide every 3 seconds

// Initial slide
showSlide(slideIndex);
