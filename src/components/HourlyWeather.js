import react, { useState, useEffect } from "react";
import axios from "axios";
function HourlyWeather() {
  const [hourlydata, setHourlyData] = useState([]);
  const [lat, setLat] = useState("17.385044");
  const [long, setLong] = useState("78.486671");
  const getCurrentHour = (value) => {
    const myDate = new Date(value * 1000);
    return myDate.toLocaleString([], { hour: "numeric", minute: "numeric" });
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    }
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=daily,alerts,current,minutely&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        console.log(res.data.hourly);
        setHourlyData(res.data.hourly);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="hourlyweather">
      <h3>Next 48 Hours Weather</h3>
      {hourlydata.length > 0 ? (
        hourlydata.map((hourdata) => {
          return (
            <div className="hourweather" key={hourdata.dt}>
              <div className="time">
                <h4>{getCurrentHour(hourdata.dt)}</h4>
              </div>
              <div className="cloudicon">
                <img
                  src={`https://openweathermap.org/img/wn/${hourdata.weather[0].icon}.png`}
                  alt=""
                />
              </div>
              <div className="hourtemp">
                <h4>
                  {hourdata.temp} <sup>°</sup>c
                </h4>
              </div>
            </div>
          );
        })
      ) : (
        <div class="loading-container">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
      )}
    </div>
  );
}
export default HourlyWeather;
