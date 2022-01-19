import React from "react";
import WeatherDisplay from "./WeatherDisplay/ShowWeather";

type WeatherState = {
  latitude: number;
  longitude: number;
  weatherApiUrl: string;
  weatherApiKey: string;
  temperature: number;
};

class Weather extends React.Component<{}, WeatherState> {
  componentWillMount() {
    this.setState({
      weatherApiKey: "4a9339867b7a0458ce8675757cd8ba3e",
      temperature: 0,
    });

    this.setCoords();
  }

  setCoords = () => {
    navigator.geolocation.getCurrentPosition((where) => {
      this.setState({
        latitude: where.coords.latitude,
        longitude: where.coords.longitude,
        weatherApiUrl: `https://api.openweathermap.org/data/2.5/onecall?lat=${where.coords.latitude}&lon=${where.coords.longitude}&appid=${this.state.weatherApiKey}`,
      });
    });
  };

  weatherAPI = () => {
    fetch(this.state.weatherApiUrl)
      .then((response) => {
        return response.json();
      })
      .then((weather) => {
        this.setState({
          temperature: weather.current.temp,
        });
      })
      .catch((error) => console.log("Error:", error));
  };

  render() {
    return (
      <div>
        <button onClick={() => this.weatherAPI()}>Get temp</button>
        <div>
          <WeatherDisplay temperature={this.state.temperature} />
        </div>
      </div>
    );
  }
}

export default Weather;
