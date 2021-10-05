import react from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
function About(){
    return(
            <div className="about">
                <h1 style={{textAlign:"center",margin:"0"}}>Hello !</h1>
                <div className="about-section">
                <h1>About Me</h1>
                <p>Vinay Chittibommala</p>
                <p>Indian Institute Of Information Technology Vadodara</p>
                </div>
                <div className="project-section">
                <h1>Weather App</h1>
                <p>By using this project one can be able to know current weather condition of any valid city . </p>
                <p>And also provide information regarding Hourly forecast and Weekly forecast</p>
                <p>The data here provided are taken From OpenWeatherMap API</p>
                </div>
                <div className="contact-section">
                <h1>Contact Here</h1>
                 <div className="phone">
                     <FontAwesomeIcon id="icon" icon={faPhoneAlt}/> +91951561016
                 </div>
                 <div className="email">
                 <FontAwesomeIcon id="icon" icon={faEnvelope }/> 
                 <a href="mailto:vinaychittibommala@gmail.com">vinaychittibommal@gmail.com</a>
                 </div>
                 <div className="instagram">
                 <FontAwesomeIcon id="icon" icon={faInstagram}/>  vinay_45
                 </div>
                </div>
            </div>
    )
}

export default About;