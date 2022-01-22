import mongoose from 'mongoose';
// const options = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
   
// };


const connectDB=async()=>{
    try {
        mongoose.connect(process.env.DB_URl!)
      } catch (err:any) {
        console.log("Connection Error ", err.massage);
        
      }



      const connection=mongoose.connection

    if (connection.readyState>=1) {
    console.log("connection ok");
    return
}
connection.on("error",()=>console.log("connection bad")
)
}

export default connectDB