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
  });
};
navSlide();

// ? NavBar Desapear When Scrolling
let navDis = document.querySelector(".bossNav");
let lastScroll = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScroll < window.scrollY) {
    navDis.classList.add("navHidden");
  } else {
    navDis.classList.remove("navHidden");
  }
  lastScroll = window.scrollY;
});

// ? Button  apear When Scrolling
let Button = document.querySelector(".button");
window.addEventListener("scroll", () => {
  if (window.scrollY <= 100) {
    Button.classList.add("Button");
    Button.classList.remove("button_apear");
  }
  else  {
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
let AllButton = document.querySelector(".AllButton")
let All = document.querySelectorAll(".box")
let AnimeButton = document.querySelector(".AnimeButton")
let Anime = document.querySelectorAll(".Anime");
let PhotoButton = document.querySelector(".PhotoButton")
let Photo = document.querySelectorAll(".Photo")
let NatureButton = document.querySelector(".NatureButton")
let Nature = document.querySelectorAll(".Nature")
let ArtButton = document.querySelector(".ArtButton")
let Art = document.querySelectorAll(".Art")
let moreButton = document.querySelector(".more");
let lessButton = document.querySelectorAll(".More");
let lessButton2 = document.querySelector(".less");
AllButton.addEventListener("click", () => {
  for(let i = 0 ; i< All.length ; i++){
    All[i].style.display = "block";
   }
  moreButton.style.display = "none";
  lessButton2.style.display = "block";
  AllButton.classList.add("active");
  AnimeButton.classList.remove("active");
  PhotoButton.classList.remove("active");
  NatureButton.classList.remove("active");
  ArtButton.classList.remove("active");
})

  AnimeButton.addEventListener("click", () => {
    console.log("Anime")
    for(let i = 0 ; i< All.length ; i++){
      if(All[i].classList.contains('Anime') == true) {
        All[i].style.display = "block";
      }
      else {
        All[i].style.display = "none";
      }
  }
  moreButton.style.display = "none";
  lessButton2.style.display = "none";
  AllButton.classList.remove("active");
  AnimeButton.classList.add("active");
  PhotoButton.classList.remove("active");
  NatureButton.classList.remove("active");
  ArtButton.classList.remove("active");
})
PhotoButton.addEventListener("click", () => {
  console.log("Photo")
  for(let i = 0 ; i< All.length ; i++){
    if(All[i].classList.contains('Photo') == true) {
      All[i].style.display = "block";
    }
    else {
      All[i].style.display = "none";
    }
  }
  moreButton.style.display = "none";
  lessButton2.style.display = "none";
  AllButton.classList.remove("active");
  AnimeButton.classList.remove("active");
  PhotoButton.classList.add("active");
  NatureButton.classList.remove("active");
  ArtButton.classList.remove("active");
})
NatureButton.addEventListener("click", () => {
  console.log("Nature")
  for(let i = 0 ; i< All.length ; i++){
    if(All[i].classList.contains('Nature') == true) {
     All[i].style.display = "block";
    }
    else {
     All[i].style.display = "none";
    }
  }
  moreButton.style.display = "none";
  lessButton2.style.display = "none";
  AllButton.classList.remove("active");
  AnimeButton.classList.remove("active");
  PhotoButton.classList.remove("active");
  NatureButton.classList.add("active");
  ArtButton.classList.remove("active");
})
ArtButton.addEventListener("click", () => {
  console.log("Art")
  for(let i = 0 ; i< All.length ; i++){
    if(All[i].classList.contains('Art') == true) {
      All[i].style.display = "block";
    }
    else {
      All[i].style.display = "none";
    }
  }
  moreButton.style.display = "none";
  lessButton2.style.display = "none";
  AllButton.classList.remove("active");
  AnimeButton.classList.remove("active");
  PhotoButton.classList.remove("active");
  NatureButton.classList.remove("active");
  ArtButton.classList.add("active");
})

// ? More/less Button 
moreButton.addEventListener("click", () => {
  for(let i = 0 ; i< All.length ; i++){
    All[i].style.display = "block";
  }
  moreButton.style.display = "none";
  lessButton2.style.display = "block";
})
lessButton2.addEventListener("click", () => {
  for(let i = 0 ; i< All.length ; i++){
    if(All[i].classList.contains('More') == true) {
     All[i].style.display = "none";
    }
  }
  moreButton.style.display = "block";
  lessButton2.style.display = "none";
})
