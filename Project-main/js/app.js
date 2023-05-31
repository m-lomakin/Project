document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector(".mobile-menu").classList.toggle("open");
    })

    document.getElementById("close").addEventListener("click", function() {
        document.querySelector(".mobile-menu").classList.toggle("open");
    })
})