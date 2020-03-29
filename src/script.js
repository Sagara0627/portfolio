const ham = document.getElementById("ham")
const hamNav = document.getElementById("ham_nav")
const profile = document.getElementById("profile");
const history = document.getElementById("history");
const skills = document.getElementById("skills");
const works = document.getElementById("works");
const contact = document.getElementById("contact");
const links = document.getElementById("links");

ham.addEventListener("click", () => {
  hamNav.classList.toggle("appear")
})

const array = [
  profile, history, skills, works, contact, links
]

$(function () {
  $(window).scroll(function () {
    for (i = 0; i < array.length; i++) {
      $(array[i]).each(function () {
        let imgPos = $(this).offset().top;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight / 5) {
          $(this).addClass("fade_in");
        } else {
          $(this).removeClass("fade_in");
        }
      });
    };
  });
});
