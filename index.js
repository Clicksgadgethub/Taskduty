require(`dotenv/config`);
const express = require("express");
const app = express();
const port = 6767
const connect = require("./config/db")

connect()
.then(()=>{
    try {
        
        app.listen(port, () => {
            console.log(`server is running on http://localhost:${port}`);
        })
    } catch (error) {
        console.log("can not connect to the server");
    }
})
.catch((error)=>{
    console.log("invalid database connection..!", error);
})

app.get('/', function (req, res) {
  res.send('Hello World')
})
