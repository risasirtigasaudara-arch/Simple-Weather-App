async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "ee8323c503ca5f2e64e3bcc0f30f5457"; // Tetap isi API key kamu
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        document.getElementById("cityName").innerText = data.name;
        const temp = Math.round(data.main.temp);
        document.getElementById("temp").innerText = temp + "°C";

        // Logika Ikon Cuaca
        const iconDiv = document.getElementById("weatherIcon");
        if (temp > 25) {
            iconDiv.innerHTML = '<i class="fa-solid fa-sun" style="color: #FFD43B;"></i>'; // Panas
        } else if (temp > 15) {
            iconDiv.innerHTML = '<i class="fa-solid fa-cloud-sun" style="color: #63E6BE;"></i>'; // Sejuk
        } else {
            iconDiv.innerHTML = '<i class="fa-solid fa-snowflake" style="color: #74C0FC;"></i>'; // Dingin
        }
    } catch (error) {
        alert("Kota tidak ditemukan!");
    }
}
