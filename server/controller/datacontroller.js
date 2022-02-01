import mongoosse from 'mongoose';
import datas from '../modals/dataschema.js'

import fetch from 'node-fetch';

export const first = (async (req, res) => {
  const str = req.params.city;

  //for capitalize the datas
  const arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const str2 = arr.join(" ");



  try {
    const data = await datas.find({ "location.name": str2 });

    if (data == "") {
      const respo = await fetch(`http://api.weatherapi.com/v1/current.json?key=867da91417f94c0cbd4155724222801&q=${str2}&aqi=no`)
      const dataa = await respo.json();
      res.send(dataa)

    }
    else {
      
      const result = await res.json(data[0]);
    }
  } catch (err) {
    res.send("failed to at database level")
  }


})











