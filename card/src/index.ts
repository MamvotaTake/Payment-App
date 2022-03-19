import express from 'express'
import mongoose from 'mongoose'
import log from '../utils/logger'

const app = express()
app.use(express.json())

app.get('/api/v1/card', (req, res)=>{
    res.send('This is your card number')
})

const start = async () => {

    // try {
    //     await mongoose.connect('mongodb://auth-mongo-srv:27017/card');
    //     log.info('Db Connected Successfully');
    // } catch (err) {
    //     log.error('Db not Connected');

    // }

    app.listen(3000, () => {
        log.info('Server listening on port 3000!!!')
    })
}



start();