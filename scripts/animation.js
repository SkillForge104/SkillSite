const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((elements) => {
  elements.forEach((element) => {
    if (element.isIntersecting) {
      element.target.classList.add("show");
    } else {
      element.target.classList.remove("show");
    }
  });
});

hiddenElements.forEach((element) => observer.observe(element));
