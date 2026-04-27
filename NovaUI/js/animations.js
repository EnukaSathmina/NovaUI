(function () {
  "use strict";

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  function forceTop() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  forceTop();

  window.addEventListener("load", forceTop);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  document.addEventListener("DOMContentLoaded", () => {
    forceTop();

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });
  });
})();
