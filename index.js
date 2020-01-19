document.querySelectorAll("section").forEach(section =>
  section.querySelector("h1").addEventListener("click", event => {
    event.preventDefault();
    document.querySelector(".active").classList.remove("active");
    section.classList.add("active");
  })
);
