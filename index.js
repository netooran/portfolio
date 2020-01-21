const app = new Vue({
  el: "#app",
  data: {
    name: { first: "Sarath", last: "Sasindrakumar" },
    description:
      "I am a Full Stack Developer, a Traveller and a Photographer based in Bangalore, India.",
    socials: [
      { url: "https://github.com/netooran", icon: "fab fa-github-square" },
      { url: "https://www.linkedin.com/in/sarath-vs-935641ab", icon: "fab fa-linkedin" },
      { url: "https://www.instagram.com/netooraan", icon: "fab fa-instagram" },
      { url: "https://www.facebook.com/netooran", icon: "fab fa-facebook-square" },
      { url: "https://twitter.com/SarathVS65", icon: "fab fa-twitter-square" }
    ]
  }
});

document.addEventListener("click", event => {
  const section = event.target;
  if (section.tagName !== "SECTION") return;
  event.preventDefault();
  document.querySelector(".active").classList.remove("active");
  section.classList.add("active");
});
