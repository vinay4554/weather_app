import react,{useState} from "react"
import CurrentWeather from "./components/CurrentWeather";
import Nav from "./components/Nav";
import DailyWeather from "./components/DailyWeather";
import HourlyWeather from "./components/HourlyWeather";
import DaysWeather from "./components/DaysWeather";
import About from "./components/About";
import Weathertypes from "./components/Weathertypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./styles/App.scss";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  const[display,setDisplay]=useState(false)
  return (
    <Router>
    <div className="App clear">
    <div className="header">
     <div className="applogo">
       weather App
    </div>
    <div className="appicon" onClick={() => {
      setDisplay(!display);
    }}>
    <FontAwesomeIcon id="baricon" size="2x" icon={faBars}/>
    </div>
        </div> 
    <Switch> 
    <Route  path="/" exact component={CurrentWeather} />
    <Route path="/DailyWeather" exact component={DailyWeather} />
    <Route path="/HourlyWeather" component={HourlyWeather} />
    <Route path="/DailyWeather/:id" component={DaysWeather}/>
    <Route path="/Weathertypes" component={Weathertypes}/>
    <Route path="/About" component={About}/>
    </Switch>  
    <Nav display={display} setDisplay={setDisplay}/>
    </div>
      </Router>
      
    
  );
}

export default App;
