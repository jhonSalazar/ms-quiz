const mongoose = require("mongoose");
const connectionDB =  () =>{
    const url = process.env.DB_URL;
    return  mongoose.connect(
        url, {
            useNewUrlParser: true,
            useUnifiedTopology: true });
}
const disConnectionDB =  ()=>{
    return mongoose.connection.close();
}
module.exports = { connectionDB, disConnectionDB};
