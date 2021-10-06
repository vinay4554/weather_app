import react from "react";

function Details({infor,visi,speed,image}){
    return(
        <div className={`detail ${image.toUpperCase()}`}>
        <div className="feelsLike">
         <h5>Feeels Like</h5>
         <h5>{infor.feels_like} <sup>°</sup>c</h5> 
        </div>
        <div className="wind">
        <h5>Wind</h5>
         <h5>{speed} m/s</h5>
        </div>
        <div className="humidity">
         <h5>Humidity</h5>
         <h5>{infor.humidity} %</h5>
         </div>
        <div className="pressure">
         <h5>Pressure</h5>
         <h5>{infor.pressure} hpa</h5> 
        </div>
        <div className="visilibity">
        <h5>Visilibity</h5>
         <h5>{visi.visibility} m</h5>
        </div>
        <div className="dew-point">
         <h5>Max : {infor.temp_max} <sup>°</sup>c</h5>
         <h5>Min : {infor.temp_min} <sup>°</sup>c</h5>
         </div>
         
        </div>
    )
}

export default Details;