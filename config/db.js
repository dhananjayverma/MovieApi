const mongoose = require('mongoose');
// const dotenv=require('dotenv');
// dotenv.config();
// const username=process.env.DB_USERNAME;
// const password=process.env.DB_PASSWORD; 
const connection = async()=>{
    await mongoose.connect(`mongodb+srv://dj:dj1234@cluster0.ax9jken.mongodb.net/?retryWrites=true&w=majority`)
//   await mongoose.connect(`mongodb+srv://dj:<password>@todo.jydftzo.mongodb.net/?retryWrites=true&w=majority`)
}
module.exports=connection ;
