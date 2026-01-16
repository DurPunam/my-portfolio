document.addEventListener("DOMContentLoaded", () => {

  /* ===== Mobile Menu Toggle ===== */
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  if (menuToggle) {
    const menuIcon = menuToggle.querySelector("i");

    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      menuIcon.classList.toggle("fa-bars");
      menuIcon.classList.toggle("fa-times");
    });
  }

  /* Close menu on link click */
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      const icon = document.querySelector(".menu-toggle i");
      if (icon) {
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");
      }
    });
  });

  /* ===== Smooth Scroll ===== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth"
        });
      }
    });
  });

  /* ===== Typing Text Animation ===== */
  const texts = [
    "Student at VIT Chennai",
    "Secretary of Code-Y-Gen",
    "Google Arcade player"
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 100;

  const typingElement = document.querySelector(".typing-text");
  if (!typingElement) return;

  function typeEffect() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentText.length) {
        isDeleting = true;
        delay = 1500;
      } else {
        delay = 100;
      }
    } else {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        delay = 500;
      } else {
        delay = 50;
      }
    }

    setTimeout(typeEffect, delay);
  }

  setTimeout(typeEffect, 1000);
});
