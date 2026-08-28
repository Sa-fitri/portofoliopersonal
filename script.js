// Animasi saat halaman dibuka

document.addEventListener("DOMContentLoaded", function () {

    const heroText = document.querySelector(".hero-text");
    const heroImage = document.querySelector(".hero-image");

    heroText.style.opacity = "0";
    heroText.style.transform = "translateX(-30px)";

    heroImage.style.opacity = "0";
    heroImage.style.transform = "translateX(30px)";

    setTimeout(function () {
        heroText.style.transition = "0.8s";
        heroText.style.opacity = "1";
        heroText.style.transform = "translateX(0)";
    }, 200);

    setTimeout(function () {
        heroImage.style.transition = "0.8s";
        heroImage.style.opacity = "1";
        heroImage.style.transform = "translateX(0)";
    }, 400);

});


// Efek saat scroll

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

sections.forEach(function (section) {
    observer.observe(section);
});
