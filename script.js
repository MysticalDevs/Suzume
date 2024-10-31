document.addEventListener("DOMContentLoaded", function() {
        const images = ["resources/img/suzume1.png", "resources/img/suzume2.png", "resources/img/suzume3.png", "resources/img/suzume4.png"];
        const randomImage = images[Math.floor(Math.random() * images.length)];
        document.getElementById("suzumeImage").src = randomImage;
    });
