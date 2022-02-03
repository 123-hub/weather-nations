import mongoosse from "mongoose";
import datas from "../modals/dataschema.js";
import dotenv from 'dotenv'
import fetch from "node-fetch";

dotenv.config({ path: '../config.env' });

export const datacontroller= async (req, res) => {
  const cityvalue = req.params.city;

  //for capitalize the datas
  const arr = cityvalue.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const capitalizevalue = arr.join(" ");

  try {
    const data = await datas.find({ "location.name": capitalizevalue });
        
    if (data == "") {
      const api= process.env.APIKEY
      const fetcheddata = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${api}&q=${capitalizevalue}&aqi=no`
      );
      const result = await fetcheddata.json();

      res.send(result);
    } 
    else 
    {
      const result = await res.json(data[0]);
    }
  } catch (err) {
    res.send("failed to at database level");
  }
};
