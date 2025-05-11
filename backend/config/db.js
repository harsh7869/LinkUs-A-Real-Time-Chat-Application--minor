const mongoose = require("mongoose")

const connectDB = async() => {
        try {
            const conn = await mongoose.connect(process.env.MONGO_URI,{
                useNewUrlParser:true,
                useUnifiedTopology:true,
                
            });

            console.log(`MOngoDB Connected : ${conn.connection.host}`.cyan.underline)


        } catch (error) {
            console.log(`Error : ${error.message}`.bgRed.bold);
            process.exit();
        }
<<<<<<< HEAD
=======


>>>>>>> 83b3c62f871021a5988bdf29fe2b3e6b0fd89947
};
module.exports=connectDB;