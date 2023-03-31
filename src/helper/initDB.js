import mongoose from 'mongoose'

function initDB(){
    if(mongoose.connections[0].readyState){
        console.log('already connected')
        return
    }

    mongoose.connect("mongodb+srv://letsdoit:1234@cluster0.ecjw8hy.mongodb.net/?retryWrites=true&w=majority")
    
    mongoose.connection.on('connected',()=>{
        console.log('Database Connected Successfully :)')
    })
    mongoose.connection.on('error',(err)=>{
        console.log(err)
    })
}


export default initDB; 