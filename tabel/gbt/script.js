// Hamburger Menüsü
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", function () {
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }
});

// Tarayıcı boyutu değiştiğinde hamburger menüsünü gizle
window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        navLinks.style.display = "block";
        hamburger.style.display = "none";
    } else {
        navLinks.style.display = "none";
        hamburger.style.display = "block";
    }
});

// Sayfa yüklendiğinde, eğer ekran genişse navbarı göster
window.addEventListener("load", function () {
    if (window.innerWidth > 768) {
        navLinks.style.display = "block";
    } else {
        hamburger.style.display = "block";
    }
});
