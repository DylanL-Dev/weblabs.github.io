document.addEventListener("DOMContentLoaded", function () {
  const overlayLinks = document.querySelectorAll(".overlay-link");

  overlayLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const overlayId = link.getAttribute("data-overlay");
      const overlay = document.getElementById(overlayId);
      overlay.style.display = "flex";
    });
  });

  const overlays = document.querySelectorAll(".overlay");

  overlays.forEach(function (overlay) {
    overlay.addEventListener("click", function () {
      overlay.style.display = "none";
    });
  });
});



