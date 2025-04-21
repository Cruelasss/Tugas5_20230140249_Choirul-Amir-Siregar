document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("video");
    const audio = document.getElementById("audio");
    const gambar = document.getElementById("gambar");

    video.addEventListener("click", function () {
        alert("Ini video Tari Sekapur Sirih");
    });

    audio.addEventListener("click", function () {
        alert("Ini audio Tari Sekapur Sirih");
    });

    gambar.addEventListener("click", function () {
        alert("Ini gambar Tari Sekapur Sirih");
    });
  

    function tampilkanAlert() {
        alert("Hai, selamat datang di halaman multimedia Bernadya!");
    }


});
