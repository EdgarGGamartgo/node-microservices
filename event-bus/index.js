
const express = require('express')
const { randomBytes } = require('crypto')
const bodyParser = require('body-parser')
const cors = require('cors');
const axios = require('axios');

const app = express()
app.use(bodyParser.json())
app.use(cors());


app.post('/events', (req, res) => {

    const event = req.body

    axios.posts('http://localhost:4000/events', event)
    axios.posts('http://localhost:4001/events', event)
    axios.posts('http://localhost:4002/events', event)

    res.status(201).send({ status: 'OK' })
})

app.listen(4005, () => {
    console.log('Listening on 4005')
})