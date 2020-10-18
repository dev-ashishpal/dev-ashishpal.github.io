window.addEventListener("load", () => {
  const loader = document.querySelector(".preloader");
  loader.classList.add("preloader__finish");
});

let colorMode = localStorage.getItem("colorMode");

const redBtn = document.getElementById("red-btn");
const whiteBtn = document.getElementById("white-btn");
const greenBtn = document.getElementById("green-btn");
const blueBtn = document.getElementById("blue-btn");

///////////////// defining functions ////////////////////

const enableRedMode = () => {
  document.body.classList.add("redMode");

  document.body.classList.remove("greenMode");
  document.body.classList.remove("blueMode");
  document.body.classList.remove("whiteMode");
  localStorage.setItem("colorMode", "red");
};

const enableWhiteMode = () => {
  document.body.classList.add("whiteMode");

  document.body.classList.remove("redMode");
  document.body.classList.remove("greenMode");
  document.body.classList.remove("blueMode");
  localStorage.setItem("colorMode", "white");
};

const enableGreenMode = () => {
  document.body.classList.add("greenMode");

  document.body.classList.remove("redMode");
  document.body.classList.remove("blueMode");
  document.body.classList.remove("whiteMode");
  localStorage.setItem("colorMode", "green");
};

const enableBlueMode = () => {
  document.body.classList.add("blueMode");

  document.body.classList.remove("redMode");
  document.body.classList.remove("greenMode");
  document.body.classList.remove("whiteMode");
  localStorage.setItem("colorMode", "blue");
};

////////////////////// listening to the events  /////////////////////

enableBlueMode();

if (colorMode === "blue") {
  enableBlueMode();
}

if (colorMode === "red") {
  enableRedMode();
}

if (colorMode === "white") {
  enableWhiteMode();
}

if (colorMode === "green") {
  enableGreenMode();
}

redBtn.addEventListener("click", () => {
  enableRedMode();
});

whiteBtn.addEventListener("click", () => {
  enableWhiteMode();
});

greenBtn.addEventListener("click", () => {
  enableGreenMode();
});

blueBtn.addEventListener("click", () => {
  enableBlueMode();
});

///////////////////////////// GSAP ANIMATIONS ////////////////////////////////

///////////////// animating navigation //////////////////
const nav = document.querySelector(".nav-icon");
const navBtn = document.querySelector(".nav-icon--1");

const navAnimation = () => {
  navBtn.classList.toggle("active");

  if (navBtn.classList.contains("active")) {
    gsap.to(".navigation", { x: "0", duration: 0.6, delay: 0.2 });
    gsap.to(".navigation--slider", { x: "0", duration: 0.6 });
    gsap.from(".navigation-list__item", {
      opacity: 0,
      duration: 0.5,
      delay: 0.7,
      y: -50,
      stagger: 0.4,
    });
    gsap.from(".navigation-color__box--title", {
      opacity: 0,
      duration: 1,
      delay: 0.7,
      y: 50,
    });
    gsap.from(".navigation-color__tile", {
      opacity: 0,
      duration: 1,
      delay: 0.7,
      x: "300px",
    });
  } else {
    gsap.to(".navigation", { x: "100%", duration: 0.6 });
    gsap.to(".navigation--slider", { x: "100%", duration: 0.6, delay: 0.2 });
  }
};

nav.addEventListener("click", navAnimation);

gsap.from(".nav-icon", { opacity: 0, delay: 1, duration: 1, x: "100%" });

gsap.from(".stagger", {
  opacity: 0,
  duration: 1,
  y: "100%",
  delay: 0.1,
  stagger: 0.5,
});
