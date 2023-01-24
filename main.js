//HAMBURGER NAV

let menuBtn = document.querySelector(".menu-btn");
let navOpen = document.getElementById("header-nav-smallscreen");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navOpen.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navOpen.classList.remove("open");
    menuOpen = false;
  }
});

//AUTO CLOSE NAV

const screenSize = window.matchMedia("(max-width: 850px)");
function autoClose(screenSize) {
  if (screenSize.matches) {
    return;
  } else {
    menuBtn.classList.remove("open");
    navOpen.classList.remove("open");
    menuOpen = false;
  }
}

autoClose(screenSize);
screenSize.addListener(autoClose);

//CAROUSEL

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

//automatically change photo carousel

//HeaderVV

class HiltiHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
      <img class="hiltieskilstuna" src="../media/hilti-eskilstuna-logo.png" alt="Hilti Eskilstuna Logo">
      <div class="menu-btn">
      <div class="menu-btn_burger"></div>
      </div><nav class="header">
      <ul class="nav-list">
        <li><a href="needlink">OM</a></li>
        <li><a href="needlink">BJJ</a></li>
        <li><a href="needlink">SCHEMA</a></li>
        <li><a href="needlink">KONTAKT</a></li>
      </ul>
    </nav>
  </header>
  `;
  }
}

customElements.define("hilti-header", HiltiHeader);
