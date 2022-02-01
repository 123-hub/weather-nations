import mongoose from 'mongoose'

const dataschema = new mongoose.Schema(
  {
      
            location: {
        name: { type: String},
        region:{type: String,
        country:{type: String},
        lat: {type: Number},
        lon:  {type: Number},
        tz_id: {type: String},
        localtime_epoch:{type: Number},
        localtime: {type:String}
      },
      current: {
        last_updated_epoch: { type: Number},
        last_updated:  {type:String},
        temp_c: {type: Number},
        condition: {
            text: {type:String},
            icon: {type:String}
        },
        wind_kph: {type: Number},
        humidity:  { type: Number},
        cloud: { type: Number},
        uv: {type: Number}
      }
    }
  
}

)

export default mongoose.model('datasch',dataschema);