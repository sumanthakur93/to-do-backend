const app = require('./app');
const dotenv = require('dotenv');
const {connectDatabase} = require('./config/connectDatabase')
require('./initializeFirebase');




dotenv.config();


const port = process.env.PORT || 8001;

// call a function for connection for mongo db databse
connectDatabase(); 

app.listen(port, ()=> {
    console.log(`server is running on ${port}`);
})