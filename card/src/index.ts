import express from 'express'
import mongoose from 'mongoose'
import log from '../utils/logger'

const app = express()
app.use(express.json())

const start = async () => {

    try {
        await mongoose.connect('mongodb://mongo-srv:27017/card');
        log.info('Db Connected Successfully');
    } catch (err: any) {
        log.error(err);
    }

    app.listen(3000, () => {
        log.info('Listening on port 3000!!!')
    })
}

start();
