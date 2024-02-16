let mongoose = require("mongoose");
mongoose.connect("mongodb+srv://srsahoo860:2U03i9codx8uyz3x@cluster0.byxu5mf.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connected");
})
.catch(err=>{
    console.log(err);
})