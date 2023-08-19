const prev = document.getElementById("prev")
const next = document.getElementById("next")
const disp = document.getElementById("img")

let showImage = async (id) => {
    try {
        const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=20");
        const pics = await res.json();
        console.log(pics, id);
        let image = pics[id].url;
        disp.innerHTML = `
        <img src="${image}" alt="cat image">
        `;
    } catch (error) {
        console.error("Error fetching images:", error);
    }
    };
    
  // for default image
    let id = 0;
    showImage(id);
    
  // for next image
    next.addEventListener("click", () => {
    id += 1;
    showImage(id);
    });
    
  // for previous image
    prev.addEventListener("click", () => {
    id -= 1;
    showImage(id);
    });


