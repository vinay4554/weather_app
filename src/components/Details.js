import react from "react";

function Details({data}){
    return(
        <div className={`detail ${data.weather[0].main.toUpperCase()}`}>
        <div className="feelsLike">
         <h5>Feeels Like</h5>
         <h5>{data.main.feels_like} <sup>°</sup>c</h5> 
        </div>
        <div className="wind">
        <h5>Wind</h5>
         <h5>{data.wind.speed} m/s</h5>
        </div>
        <div className="humidity">
         <h5>Humidity</h5>
         <h5>{data.main.humidity} %</h5>
         </div>
        <div className="pressure">
         <h5>Pressure</h5>
         <h5>{data.main.pressure} hpa</h5> 
        </div>
        <div className="visilibity">
        <h5>Visilibity</h5>
         <h5>{data.visibility} m</h5>
        </div>
        <div className="dew-point">
         <h5>Max : {data.main.temp_max} <sup>°</sup>c</h5>
         <h5>Min : {data.main.temp_min} <sup>°</sup>c</h5>
         </div>
         
        </div>
    )
}

export default Details;