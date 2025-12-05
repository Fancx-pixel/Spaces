const observers = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, {});
const logos = document.querySelectorAll(".logo");
const btn = document.querySelectorAll(".nav-form");
const circle = document.querySelectorAll(".circle");
const rock1 = document.querySelectorAll(".rock1");
const rock2 = document.querySelectorAll(".rock2");
const rock3 = document.querySelectorAll(".rock3");
const moon1 = document.querySelectorAll(".moon1");
logos.forEach(el => observer.observe(el));
btn.forEach(el => observer.observe(el));