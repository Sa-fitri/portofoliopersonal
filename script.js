// Pesan saat website dibuka
window.addEventListener("load", function () {
    console.log("Portfolio Safitri berhasil dibuka!");
});


// Efek tombol menu
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        menuLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// Animasi sederhana saat card muncul
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.1
});


cards.forEach(function(card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s";

    observer.observe(card);

});
