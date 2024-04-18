const express = require('express');
const cors = require('cors')


const app = express();
app.use(cors());
app.use(express.json());


// import all the router here

const userRouter = require('./routes/userRoute');
const taskRouter = require('./routes/taskRoutes');

app.use('/api/v1/auth', userRouter);
app.use('/api/v1', taskRouter);


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PATCH, DELETE"
    );
    next();
  }); 


module.exports = app;