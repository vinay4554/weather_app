import react,{useState} from "react"
import { Link } from "react-router-dom";
function Nav({display,setDisplay}){
    return(
        <nav className={`footer ${display?"active":""}`}>
        <ul>
        <Link to="/">
        <li onClick={() => {
      setDisplay(!display);
    }}>Home Page</li>
        </Link>
        <Link to="/HourlyWeather">
        <li onClick={() => {
      setDisplay(!display);
    }}>Hourly Forecast</li>
        </Link>
        <Link to="/DailyWeather">
        <li onClick={() => {
      setDisplay(!display);
    }}>Daily Forecast</li>
        </Link>
        <Link to="/Weathertypes">
        <li onClick={() => {
      setDisplay(!display);
    }}>Weather Types</li>
        </Link>
        <Link to="/About">
        <li onClick={() => {
      setDisplay(!display);
    }}>About</li>
        </Link>
        </ul>
            </nav>
       
    )
}
 export default Nav;