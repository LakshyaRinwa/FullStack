//we can use gifs here

document.getElementById('search-button').addEventListener('click', getWeather);

async function getWeather() {
    const apiKey = 'f24d51722bc63bbabe98f45ca9532991';
    const city = document.getElementById('location-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        const description = data.weather[0].description;
        
        document.getElementById('weather-icon').src = weatherIcon;
        document.getElementById('weather-icon').style.display = 'block';
        document.getElementById('temperature').innerText = temperature;
        document.getElementById('description').innerText = description.charAt(0).toUpperCase() + description.slice(1);
        document.getElementById('humidity').innerText = humidity;
        document.getElementById('wind-speed').innerText = windSpeed;

        const weatherContainer = document.querySelector('.weather-container');
        if (description.includes('clear')) {
            weatherContainer.className = 'weather-container sunny';
        } else if (description.includes('cloud')) {
            weatherContainer.className = 'weather-container cloudy';
        } else if (description.includes('rain')) {
            weatherContainer.className = 'weather-container rainy';
        } else {
            weatherContainer.className = 'weather-container';
        }

        document.querySelector('.weather-info').style.display = 'block';
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.querySelector('.weather-info').innerText = `Error fetching weather data: ${error.message}`;
    }
}
