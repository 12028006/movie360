const mongoose = require ("mongoose");


mongoose.connect("mongodb://localhost:27017/admintry")
.then(()=>{
    console.log("connection is successful");
}).catch((e) =>{
    console.log("faild to connect");
});