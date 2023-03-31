import mongoose from 'mongoose'
import {MONGODB_URI} from "../helper/BASE_CONFIG.js"

function initDB(){
    if(mongoose.connections[0].readyState){
        console.log('already connected')
        return
    }

    mongoose.connect("mongodb+srv://godprofit:TjI17M9dNT6VMeVQ@godprofit.vfmhzn9.mongodb.net/?retryWrites=true&w=majority",{
        useNewUrlParser : true,
        useUnifiedTopology:true

    })
    mongoose.connection.on('connected',()=>{
        console.log('Database Connected Successfully :)')
    })
    mongoose.connection.on('error',(err)=>{
        console.log(err)
    })
}


export default initDB; 