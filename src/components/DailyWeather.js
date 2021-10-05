import react, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";
function DailyWeather(){
    const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const [dailydata,setDailyData]=useState([])
    const getCurrentDay=(value) => {
        const myDate = new Date( value *1000);
        return (days[myDate.getDay()]);
       
    }
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,alerts,current,minutely&units=metric&appid=82155dfc482d0e4c83cbbbc514394e78`)
        .then(res => {
            console.log(res.data.daily)
            setDailyData(res.data.daily);
        })
        .catch(err => {
            console.log(err)
        });
        return () => {
            setDailyData([]);
          };
    },[])
    return(
        <div className="dailyWeather">
        <h1>Week Weather</h1>
        {dailydata && dailydata.map(days => {
        return(
            <div className="dayweather" key={days.dt}>
               <div className="day">
               <h4>{ getCurrentDay(days.dt)}</h4> 
                </div>
                <div className="cloudicon">
                <img src={`http://openweathermap.org/img/wn/${days.weather[0].icon}.png`} alt="" />
                </div>
                <div className="daytemp">
                <h4> {days.temp.day} <sup>°</sup>c </h4>
                </div>
                <div className="selecticon">
                <Link to={`/DailyWeather/${days.dt}`}>
                <FontAwesomeIcon size="2x" icon={faAngleDoubleRight} />
                </Link>
                </div>
            </div>
            
        )
           
        })}
            
        </div>
    )
}
export default DailyWeather;