// overlay boutton
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

//nav mobile
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0";
}

//scroll boutton
document.addEventListener("DOMContentLoaded", function () {
  var lastScrollTop = 0;

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var scrollThreshold = 0;

    if (scrollPosition > lastScrollTop) {
      // Faire défiler vers le bas
      document
        .querySelectorAll(".scroll-animation")
        .forEach(function (element) {
          var elementOffset = element.offsetTop;
          if (
            scrollPosition + window.innerHeight >
            elementOffset + scrollThreshold
          ) {
            element.classList.add("active");
          }
        });
    }

    lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition; // Gestion des valeurs négatives
  });
});

// Vérifie si le navigateur prend en charge les service workers
if ("serviceWorker" in navigator) {
  // Enregistre le service worker depuis le fichier service-worker.js
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(function (registration) {
      // Succès de l'enregistrement du service worker
      console.log("Service Worker enregistré avec succès : ", registration);
    })
    .catch(function (error) {
      // Erreur lors de l'enregistrement du service worker
      console.log(
        "Erreur lors de l'enregistrement du Service Worker : ",
        error
      );
    });
}

// Événement déclenché lors de l'installation du service worker
self.addEventListener("install", function (event) {
  // Attend que le cache soit ouvert et que les fichiers soient ajoutés
  event.waitUntil(
    caches.open("v1").then(function (cache) {
      // Ajoute les fichiers essentiels au cache lors de l'installation
      return cache.addAll([
        "/",
        "/index.html",
        "/html/inspiration.html",
        "/css/styles.css",
        "/css/normalize/node_modules/normalize.css/normalize.css",
        "/script.js",
      ]);
    })
  );
});

// Événement déclenché lors de l'activation du service worker
self.addEventListener("activate", function (event) {
  // Des actions peuvent être effectuées ici lors de l'activation du service worker
  // Cela peut inclure la suppression d'anciens caches ou d'autres opérations de nettoyage
});
