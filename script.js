const apiKey = "ee8323c503ca5f2e64e3bcc0f30f5457";

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temp").innerText = Math.round(data.main.temp) + "°C";
    } catch (error) {
        alert("Kota tidak ditemukan!");
    }
}