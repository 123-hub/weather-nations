import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import router from './router/route.js'

import mongoose from 'mongoose'

const app = express();
const port = 4000;

dotenv.config({ path: './config.env' });


app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());


app.use('/getdata', router)




//database connection 

const db = process.env.ATL;

mongoose.connect(db, {
    useNewUrlParser: true
}).then(() => {
    console.log('connection successful')
}).catch((err) => {
    console.log('connection failed ', err);
})



// app port listening

app.listen(port, () => {
    console.log('server is listening')
}).on('error', function (err) {
    process.once('SIGUSR2', function () {
        process.kill(process.pid, 'SIGUSR2');

    })

    process.on('SIGINT', function () {
        process.kill(process.pid, 'SIGINT')

    })


    process.on('uncaughtException', function (err) {
        console.log("uncaught wxception")

    })
})