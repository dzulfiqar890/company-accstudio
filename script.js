let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});

const yearText = document.getElementById("year");
const year = new Date().getFullYear();

yearText.textContent = year;

const texts = ["and graffiti", "and logo design", "and mockup", "and art"];
let index = 0;
let charIndex = 0;
const speed = 100;
const delay = 1200;
const textElement = document.getElementById("typingText");

function typeText() {
  if (charIndex < texts[index].length) {
    textElement.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, speed);
  } else {
    setTimeout(eraseText, delay);
  }
}

function eraseText() {
  if (charIndex > 0) {
    textElement.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, speed / 2);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(typeText, speed);
  }
}

typeText();

const slider = document.querySelectorAll(".slider");

  slider.forEach((slideContainer) => {
    const slides = slideContainer.querySelectorAll("img");
    let index = 0;

    setInterval(() => {
      index++;
      if (index >= slides.length) index = 0;
      slideContainer.scrollTo({
        left: slides[index].offsetLeft,
        behavior: "smooth",
      });
    }, 3100); 
  });
