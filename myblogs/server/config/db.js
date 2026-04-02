const mongoose = require('mongoose');


const connectToDB = async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log("db connected ")

    } catch (error) {
        console.error(error.message, "db connetion failed")

    }
}
module.exports = connectToDB