import { blogPostsData } from "./data.js";

// Add current year in footer

document.getElementById("copyright-year-el").textContent =
  new Date().getFullYear();

// Render blog posts
document.getElementById("blogs-container").innerHTML = blogPostsData
  .map((blogPost) => {
    return `
    <div class="blog-post">
      <p>${blogPost.datePosted}</p>
      <img src="${blogPost.thumbnailImage}"/>
      <h3>${blogPost.title}</h3>
      <p>${blogPost.description}</p>
    </div>
  `;
  })
  .join("");
