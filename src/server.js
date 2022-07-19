const express = require('express')
const path = require('path')
const modules = require('./modules/index.js')
const auth = require('./middlewares/checkToken.js')

const app = express()
app.use( express.json() )

app.use( express.static(path.join(__dirname, './uploads')) )

app.use( auth )
app.use( modules )

app.listen(process.env.PORT || 5000, () => console.log(process.env.PORT || 5000))