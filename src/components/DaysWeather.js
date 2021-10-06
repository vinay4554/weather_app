import react,{useState,useEffect} from "react";
import axios from "axios"
function DaysWeather({match}){
    const[weekData,setWeekData]=useState([])
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${match.params.lati}&lon=${match.params.longi}&exclude=hourly,alerts,current,minutely&units=metric&appid=82155dfc482d0e4c83cbbbc514394e78`)
        .then(res => {
            console.log(res.data.daily)
            setWeekData(res.data.daily);
        })
        .catch(err => {
            console.log(err)
        });
        return () => {
            setWeekData([]);
          };
    },[])
    return(
        <div className="daysdata">
        {weekData.filter(data => (data.dt).toString()===match.params.id).map(dayData => {
            return(
                <div key={dayData.dt} className="daydata">
                 <div className="icon">
                {/* <img src={`http://openweathermap.org/img/wn/${dayData.weather[0].icon}@2x.png`} alt="" /> */}
                 </div>
                 <div className="des">
                     <h2>{(dayData.weather[0].description).toUpperCase()}</h2>
                 </div>
                 <div className="daydetails">
                 <div className="maxtemp">
                    <h5 className="hdata">{dayData.temp.max}  <sup>°</sup>c</h5>
                    <h5 className="hdata">Max_Temp </h5>
                     </div>
                     <div className="mintemp">
                    <h5 className="hdata">{dayData.temp.min}  <sup>°</sup>c</h5>
                    <h5 className="hdata">Min_Temp </h5>
                     </div>
                     <div className="pressure">
                    <h5 className="hdata">{dayData.pressure} hpa</h5>
                    <h5 className="hdata">Pressure</h5>
                     </div>
                     <div className="humidity">
                    <h5 className="hdata">{dayData.humidity} %</h5>
                    <h5 className="hdata">Humidity</h5>
                     </div>
                     <div className="dew_point">
                    <h5 className="hdata">{dayData.dew_point} %</h5>
                    <h5 className="hdata">Dew Point</h5>
                     </div>
                     <div className="wind_speed">
                    <h5 className="hdata">{dayData.wind_speed} m/s</h5>
                    <h5 className="hdata">Wind Speed</h5>
                     </div>
                 </div>
                </div>
            )
        })}
           
        </div>
    )
}
export default DaysWeather;