document.getElementById('search-button').addEventListener('click', getWeather);

async function getWeather() {
    const apiKey = 'f24d51722bc63bbabe98f45ca9532991';
    let city = 'delhi';
    city = document.getElementById('location-input').value;
    const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const responseCurrent = await fetch(urlCurrent);
        if (!responseCurrent.ok) {
            throw new Error(`Network response was not ok: ${responseCurrent.statusText}`);
        }
        const dataCurrent = await responseCurrent.json();
        
        const temperature = dataCurrent.main.temp;
        const humidity = dataCurrent.main.humidity;
        const windSpeed = dataCurrent.wind.speed;
        const weatherIcon = `http://openweathermap.org/img/wn/${dataCurrent.weather[0].icon}.png`;
        const description = dataCurrent.weather[0].description;
        
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

        // Fetch forecast data
        const responseForecast = await fetch(urlForecast);
        if (!responseForecast.ok) {
            throw new Error(`Network response was not ok: ${responseForecast.statusText}`);
        }
        const dataForecast = await responseForecast.json();
        const forecastContainer = document.getElementById('forecast-container');
        forecastContainer.innerHTML = ''; // Clear previous forecast data

        // Process and display 3 days' forecast
        for (let i = 0; i < dataForecast.list.length && forecastContainer.childElementCount < 3; i++) {
            const forecast = dataForecast.list[i];
            if (forecast.dt_txt.includes('12:00:00')) { // Taking the data for 12:00 PM each day
                const forecastElement = document.createElement('div');
                forecastElement.className = 'forecast-day';
                forecastElement.innerHTML = `
                    <p>${new Date(forecast.dt_txt).toLocaleDateString('en-US', { weekday: 'short' })}</p>
                    <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png" alt="${forecast.weather[0].description}">
                    <p>${forecast.main.temp}°C</p>
                `;
                forecastContainer.appendChild(forecastElement);
            }
        }

    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.querySelector('.weather-info').innerText = `Error fetching weather data: ${error.message}`;
    }
}
