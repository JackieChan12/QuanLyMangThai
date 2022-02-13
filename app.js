const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
const url = 'mongodb://localhost:27017/QLY-tiem'

const userRouter = require('./routes/user')
const adminRouter = require('./routes/admin')
app.use(userRouter)
app.use(adminRouter)

mongoose.connect(url, { useNewUrlParser: true})
    .then(() => {
        app.listen(3000, () => {
            console.log("Server listening port",+ 3000)
        })
    })
const db = mongoose.connection
db.once('open', () => {
    console.log('Connected: ', url)
})
db.on('error', ()=>{
    console.log('Error.')
})
