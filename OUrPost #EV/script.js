const blogContainer = document.querySelector(".blogs-cards-container")

const getAllBlogs = async () => {
  const allBlogs = await fetch("./blogs.json")
  const getBlogs = await allBlogs.json()
  const displayBlogs = getBlogs.blogs
  showBlogs(displayBlogs)
}
getAllBlogs()

function showBlogs(displayBlogs) {
  blogContainer.innerHTML = ""
  for (let i = 0; i < 3; i++) {
    const blog = displayBlogs[i]
    blogContainer.innerHTML += `
        <div class="blog-card">
          <div class="image-box">
            <img
              src="${blog.image}"
              alt="image"
            />
          </div>
          <div class="date-posted">
            <div class="date">
              <i class="fa-solid fa-calendar-days"></i>
              ${blog.date}
            </div>
            <div class="postedby">
              <i class="fa-solid fa-user"></i>
              ${blog.writer}
            </div>
          </div>
          <div class="extra-details">
            <div class="blog-name">${blog.title}</div>
            <div class="blog-blogs">
            ${blog.highlight}
            </div>
            <button class="read-more">Read More</button>
          </div>
        </div>
        `
  }
}
