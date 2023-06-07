const express = require('express')
require('dotenv').config()

const app = express()

app.get('/status', (req:any, res:any) => {
    res.json({status: 'healthy!!!'})
})

app.listen(process.env.PORT, () => console.log('server running...'))