const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')


const app = express()
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


const port = 4000
app.listen(port, function () {
    console.log(`Server running on port ${port}`)
})