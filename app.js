const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.listen(8080, () => {
    console.log('App listening on port 8080')
})