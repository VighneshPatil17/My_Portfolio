// Typing Animation
const typedTextSpan = document.querySelector(".typed-text");
const textArray = ["AWS & DevOps Practitioner","Software Developer", "Python Programmer","Open Source Enthusiast"];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) setTimeout(type, 1000);
});

document.getElementById('hireMeBtn').addEventListener('click', function () {
  console.log("Hire Me clicked!");
  window.location.href = "mailto:vighnesh17.patil@gmail.com?subject=Interested%20in%20Hiring%20You";
  setTimeout(() => {
    alert("If your email client didn't open, please mail me directly at vighnesh17.patil@gmail.com");
  }, 2000);

});

document.getElementById('viewProjectsBtn').addEventListener('click', function () {
  const projectSection = document.getElementById("projects"); // update this ID if different
  if (projectSection) {
    projectSection.scrollIntoView({ behavior: "smooth" });
  }
});


// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  themeToggle.innerHTML = document.body.classList.contains("light-theme")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});
// Smooth scrolling for nav links
document.querySelectorAll('.navlist a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // adjust for fixed navbar height
        behavior: 'smooth'
      });
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();

      if (typeof emailjs === 'undefined') {
        alert("Email service is temporarily unavailable. Please try again later.");
        console.error("EmailJS SDK not loaded.");
        return;
      }

      emailjs.sendForm('service_87b2nag', 'template_0oquj7q', this)
        .then(() => {
          alert('✅ Message sent successfully!');
          contactForm.reset();
        }, (error) => {
          alert('❌ Failed to send message. Please try again.');
          console.error(error);
        });
    });
  } else {
    console.error("Contact form not found on the page.");
  }
});
// === Carousel Functionality for Services Section ===
// services.js
const servicesTrack = document.getElementById("servicesTrack");
const dotsContainer = document.getElementById("servicesDots");
const serviceCards = document.querySelectorAll(".service-card");

let currentIndex = 0;

if (servicesTrack && dotsContainer && serviceCards.length > 0) {
  // Create dots
  serviceCards.forEach((_, idx) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (idx === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  function goToSlide(index) {
    servicesTrack.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");

    currentIndex = index;
  }

  function autoSlide() {
    currentIndex = (currentIndex + 1) % serviceCards.length;
    goToSlide(currentIndex);
  }

  setInterval(autoSlide, 4000);
}







