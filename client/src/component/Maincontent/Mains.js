import "./Maincss.css";
import validation from '../../validaton/inputvalidation'
import react, { useState, useEffect } from "react";
function Mains() {
  const object = {
    location: {
      name: "Mumbai",
      region: "Maharashtra",
      country: "India",
      lat: 18.98,
      lon: 72.83,
      tz_id: "Asia/Kolkata",
      localtime_epoch: 1643520180,
      localtime: "2022-01-30 10:53",
    },
    current: {
      last_updated_epoch: 1643519700,
      last_updated: "2022-01-30 10:45",
      temp_c: 28.0,
      condition: {
        text: "Overcast",
        icon: "//cdn.weatherapi.com/weather/64x64/day/122.png",
      },
      wind_kph: 15.1,
      humidity: 35,
      cloud: 0,
      uv: 6.0,
    },
  };

  const [initial, setinitial] = useState(object);

  async function updateplease() {
    let city = document.getElementById("inputfieldvalue").value;


    if(validation(city))
    {
    const response = await fetch(`http://localhost:4000/getdata/${city}`);
    const data = await response.json();

    setinitial(data);
    }
    else 
    window.alert("enter the valid input")
  }

  return (
    <div class="container">
      <span className="brand">Weather Nation</span>
      <p className="city1">ENTER THE CITY</p>

      <input type="text" placeholder="city" id="inputfieldvalue" />

      {/* search button */}
      <div className="button3">
        <button className="button1 btn" onClick={updateplease}>
          Search
        </button>
      </div>
      <div className="rightinner">
        <div className="city2">{initial.location.name}</div>
        <div className="date">{initial.location.localtime}</div>
        <div className="image">
          <img src={initial.current.condition.icon} alt="dfdf" />
        </div>
        <div className="temp">
          {initial.current.temp_c}
          <span>&#176;c</span>
        </div>
        <div className="wind">Wind: {initial.current.wind_kph}kph</div>
        <div className="humi">Humidity: {initial.current.humidity}%</div>
        <div className="sky">
          Sky:{initial.current.condition.text} <br />
          U-V:{initial.current.uv}{" "}
        </div>
        <div className="region">
          {initial.location.region}/{initial.location.tz_id}
        </div>
        <div className="latitudee">
          Latitude:{initial.location.lat} <br />
          Longitude:{initial.location.lon}{" "}
        </div>
      </div>
    </div>
  );
}

export default Mains;
