window.addEventListener("load", () => {
  document.querySelectorAll("section").forEach(section =>
    section.addEventListener("click", event => {
      event.preventDefault();
      document.querySelector(".active").classList.remove("active");
      section.classList.add("active");
    })
  );
});
