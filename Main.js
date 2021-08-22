// ? Responsive Design For Nav BAr
let navSlide = () => {
  let burger = document.querySelector(".burger");
  let nav = document.querySelector(".nav-links");
  let navLinks = document.querySelectorAll(".nav-links li");
  burger.addEventListener("click", () => {
    // ? Toggle
    nav.classList.toggle("nav-active");
    // ? Animation Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });
    // ? Burger Animation
    burger.classList.toggle("toggle");
    // ? Dont mind me please
    navDis.classList.remove("transparent");
  });
};
navSlide();

// ? Button  apear When Scrolling
let Button = document.querySelector(".button");
window.addEventListener("scroll", () => {
  if (window.scrollY <= 100) {
    Button.classList.add("Button");
    Button.classList.remove("button_apear");
  } else {
    Button.classList.remove("Button");
  }

  // ? Click Button Action
  let lastBcscroll = window.scrollY;
  Button.addEventListener("click", () => {
    window.scrollBy(0, -lastBcscroll);
    lastBcscroll = window.scrollY;
  });
});

// ? Dark/light Mode
let DButton = document.querySelector(".DarkMode");
let LButton = document.querySelector(".lightMode");
DButton.addEventListener("click", () => {
  document.documentElement.style.setProperty("--main-color", "#552208");
  document.documentElement.style.setProperty("--second-color", "#083B55");
  document.documentElement.style.setProperty("--writing-color", "#ffffff");
  LButton.style.display = "block";
  DButton.style.display = "none";
});
LButton.addEventListener("click", () => {
  document.documentElement.style.setProperty("--main-color", "#5d4954");
  document.documentElement.style.setProperty("--second-color", "whitesmoke");
  document.documentElement.style.setProperty("--writing-color", "black");
  LButton.style.display = "none";
  DButton.style.display = "block";
});

// ? Sort Button
let AllButton = document.querySelector(".AllButton");
let All = document.querySelectorAll(".box");
let AnimeButton = document.querySelector(".AnimeButton");
let PhotoButton = document.querySelector(".PhotoButton");
let NatureButton = document.querySelector(".NatureButton");
let ArtButton = document.querySelector(".ArtButton");
let moreButton = document.querySelector(".more");
let lessButton = document.querySelectorAll(".More");
let lessButton2 = document.querySelector(".less");

let tryy = document.querySelectorAll(".shuffle li");

AllButton.addEventListener("click", () => {
  for (let i = 0; i < All.length; i++) {
    All[i].style.display = "block";
  }
  moreButton.style.display = "none";
  lessButton2.style.display = "block";
  tryy.forEach(function(b) {
    b.classList.remove("active");
  })
  AllButton.classList.add("active");
});

AnimeButton.addEventListener("click", () => {
  console.log("Anime");
  for (let i = 0; i < All.length; i++) {
    if (All[i].classList.contains("Anime") == true) {
      All[i].style.display = "block";
    } else {
      All[i].style.display = "none";
    }
  }
  moreButton.style.display = "none";
  lessButton2.style.display = "none";
  tryy.forEach(function(b) {
    b.classList.remove("active");
  })
  AnimeButton.classList.add("active");
});
PhotoButton.addEventListener("click", () => {
  console.log("Photo");
  for (let i = 0; i < All.length; i++) {
    if (All[i].classList.contains("Photo") == true) {
      All[i].style.display = "block";
    } else {
      All[i].style.display = "none";
    }
  }
  moreButton.style.display = "none";
  lessButton2.style.display = "none";
  tryy.forEach(function(b) {
    b.classList.remove("active");
  })
  PhotoButton.classList.add("active");
});
NatureButton.addEventListener("click", () => {
  console.log("Nature");
  for (let i = 0; i < All.length; i++) {
    if (All[i].classList.contains("Nature") == true) {
      All[i].style.display = "block";
    } else {
      All[i].style.display = "none";
    }
  }
  moreButton.style.display = "none";
  lessButton2.style.display = "none";
  tryy.forEach(function(b) {
    b.classList.remove("active");
  })
  NatureButton.classList.add("active");
});
ArtButton.addEventListener("click", () => {
  console.log("Art");
  for (let i = 0; i < All.length; i++) {
    if (All[i].classList.contains("Art") == true) {
      All[i].style.display = "block";
    } else {
      All[i].style.display = "none";
    }
  }
  moreButton.style.display = "none";
  lessButton2.style.display = "none";
  tryy.forEach(function(b) {
    b.classList.remove("active");
  })
  ArtButton.classList.add("active");
});


// ? More/less Button
moreButton.addEventListener("click", () => {
  for (let i = 0; i < All.length; i++) {
    All[i].style.display = "block";
  }
  moreButton.style.display = "none";
  lessButton2.style.display = "block";
});
lessButton2.addEventListener("click", () => {
  for (let i = 0; i < All.length; i++) {
    if (All[i].classList.contains("More") == true) {
      All[i].style.display = "none";
    }
  }
  moreButton.style.display = "block";
  lessButton2.style.display = "none";
});


// ? Testimonials Scroll-X
let SButton1 = document.querySelector(".firstdote");
let SButton2 = document.querySelector(".seconddote");
let SButton3 = document.querySelector(".theredote");
let dote_one = document.querySelector(".testimonials .container .boxes .dote_one")
let dote_two = document.querySelector(".testimonials .container .boxes .dote_two")
let dote_Three = document.querySelector(".testimonials .container .boxes .dote_Three")

SButton1.addEventListener("click", () => {

  dote_one.style.display = "flex"
  dote_two.style.display = "none"
  dote_Three.style.display = "none"
});
SButton2.addEventListener("click", () => {
  dote_one.style.display = "none"
  dote_two.style.display = "flex"
  dote_Three.style.display = "none"
});
SButton3.addEventListener("click", () => {
  dote_one.style.display = "none"
  dote_two.style.display = "none"
  dote_Three.style.display = "flex"
});


// ? Start decoration Of Nav Bar
let navDis = document.querySelector(".bossNav");
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      navDis.classList.add("translate");
    } else {
      navDis.classList.remove("translate");
    }
  });
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      navDis.classList.add("translate");
    } else {
      navDis.classList.remove("translate");
    }
  });
