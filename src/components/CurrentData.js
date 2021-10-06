import react,{useState,useEffect} from "react";
import axios from "axios";
import Details from "./Details";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faSearch} from "@fortawesome/free-solid-svg-icons";

function CurrentData({time,day}){
     const[infor,setInfor]=useState([])
     const[imageId,setImageId]=useState([])
     const[place,setPlace]=useState("Hyderabad")
     const[desc,setDesc]=useState([])
     const[visi,setVisi]=useState([])
     const[speed,setSpeed]=useState([])
     const[image,setImage]=useState("")
     const[error,setError]=useState("")
     const [inputvalue,setInputValue]=useState("")
     const handleValue=(e) => {
       setPlace(e.target.value)
       setInputValue(e.target.value)
     }
     const MY_KEY=process.env.REACT_APP_API_KEY;
     const handleRequest=() => {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${place}&appid=82155dfc482d0e4c83cbbbc514394e78`)
      .then(data => {
        setInfor(data.data.main)
        setImageId(data.data.weather[0].icon)
        setDesc(data.data.weather[0].description)
        setVisi(data.data)
        setSpeed(data.data.wind.speed)
        setImage(data.data.weather[0].main)
        setInputValue("")
     })
      .catch(err => console.log(err))
     }
     useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${place}&appid=82155dfc482d0e4c83cbbbc514394e78`)
             .then(data => {
              setImage(data.data.weather[0].main)
               setInfor(data.data.main)
               setImageId(data.data.weather[0].icon)
               setDesc(data.data.weather[0].description)
               setVisi(data.data)
               setSpeed(data.data.wind.speed)
            })
            .catch(err => setError("Oops Location Not Found.Try with valid City"))
     },[])
    return(
      <div className={`homepage ${image}`}>
      <div className="input">
      <input 
        type="text" 
        spellCheck="false"
        value={inputvalue} 
        onInput={handleValue}
        placeholder="Search Your City ..."
        />
      <FontAwesomeIcon 
        icon={faSearch}  
        className="searchicon"
        id="searchicon"
        onClick={handleRequest} 
        />
      </div>
        <div className="CurrentWeather">
       <div className="location">
        <h2><FontAwesomeIcon icon={faMapMarkerAlt}/> {visi.name}</h2>  
        <h5>{`${day}  ${time}`}</h5>
       </div>
       <div className="clouds">
      <h1>{infor.temp} <sup>°</sup>c</h1> 
      
      <h4>{desc}</h4>
       </div>
       <div className="clouds-icon">
        <h1><img src={`http://openweathermap.org/img/wn/${imageId}@2x.png`} alt="" />
         </h1>
       </div>
      </div>
        <Details infor={infor} visi={visi} speed={speed} image={image}/>
      </div>
        
        
    )
}
export default CurrentData;