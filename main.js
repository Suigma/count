function countdown() {
    const countDownDate = new Date("December 5, 2024 00:00:00").getTime();

    const x = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        // Menghitung hari, jam, menit, dan detik
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Menampilkan hasil dalam elemen HTML
        document.getElementById("date").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // Jika waktu habis
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}

countdown();