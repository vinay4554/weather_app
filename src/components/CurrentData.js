import react,{useState,useEffect} from "react";
import axios from "axios";
import Details from "./Details";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faSearch} from "@fortawesome/free-solid-svg-icons";

function CurrentData({time,day}){
     const[data,setData]=useState([])
     const[place,setPlace]=useState("Warangal")
     const[image,setImage]=useState("")
     const [inputvalue,setInputValue]=useState("")
     const handleValue=(e) => {
       setPlace(e.target.value)
       setInputValue(e.target.value)
     }
     const handleRequest=() => {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${place}&appid=82155dfc482d0e4c83cbbbc514394e78`)
      .then(data => {
        setImage(data.data.weather[0].main)
        setData(data.data)
        setInputValue("")
     })
      .catch(err => console.log(err))
     }
     useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${place}&appid=82155dfc482d0e4c83cbbbc514394e78`)
             .then(data => {
              setImage(data.data.weather[0].main)
              setData(data.data)
            })
            .catch(err => console.log(err))
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
        onClick={handleRequest} 
        />
      </div>
      <>
      {data.length !==0?(
        <>
        <div className="CurrentWeather">
       <div className="location">
        <h2><FontAwesomeIcon icon={faMapMarkerAlt}/> {data.name}</h2>  
        <h5>{`${day}  ${time}`}</h5>
       </div>
       <div className="clouds">
      <h1>{data.main.temp} <sup>°</sup>c</h1> 
      
      <h4>{data.weather[0].description}</h4>
       </div>
       <div className="clouds-icon">
         <h1><img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
         </h1>
       </div>
      </div>
        <Details data={data}/>
        </>
      ):(
        <>
        <h1 className="errormessage">Opps ! page not found please come back later</h1>
        </>
      )}
        </>
      </div>
        
    )
}
export default CurrentData;