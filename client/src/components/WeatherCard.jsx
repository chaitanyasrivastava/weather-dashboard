import React from "react";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const { temp, description, icon, humidity, wind, city } = weatherData;

  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <p>{description}</p>
      <p>🌡 Temp: {temp}°C</p>
      <p>💧 Humidity: {humidity}%</p>
      <p>🌬 Wind: {wind} m/s</p>
    </div>
  );
};

export default WeatherCard;

