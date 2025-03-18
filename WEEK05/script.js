// OpenWeatherMap API Key
const apiKey = '3ede2408616e95c5df69c783ffb57766'; // Replace with your OpenWeatherMap API key

// Get references to DOM elements
const cityInput = document.getElementById('city');
const getWeatherButton = document.getElementById('get-weather');
const weatherInfo = document.getElementById('weather-info');
const errorMessage = document.getElementById('error-message');

// Function to fetch weather data
async function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === '404') {
            errorMessage.textContent = 'City not found. Please try again.';
            errorMessage.style.display = 'block';
            weatherInfo.style.display = 'none';
        } else {
            errorMessage.style.display = 'none';
            weatherInfo.style.display = 'block';

            const cityName = data.name;
            const temperature = `${data.main.temp}°C`;
            const humidity = `Humidity: ${data.main.humidity}%`;
            const description = `Weather: ${data.weather[0].description}`;

            // Update UI with weather info
            document.getElementById('city-name').textContent = cityName;
            document.getElementById('temperature').textContent = temperature;
            document.getElementById('humidity').textContent = humidity;
            document.getElementById('description').textContent = description;
        }
    } catch (error) {
        errorMessage.textContent = 'Error fetching weather data. Please try again later.';
        errorMessage.style.display = 'block';
        weatherInfo.style.display = 'none';
    }
}

// Event listener for the "Get Weather" button
getWeatherButton.addEventListener('click', () => {
    const city = cityInput.value.trim();

    if (city) {
        getWeather(city);
    } else {
        errorMessage.textContent = 'Please enter a city name.';
        errorMessage.style.display = 'block';
        weatherInfo.style.display = 'none';
    }
});

// Allow pressing Enter key to get weather
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getWeatherButton.click();
    }
});
