const http =  require('http')
// const http =  require('https')
// const fs =  require('fs')
const express =  require('express')
require('dotenv').config()
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT

const httpOptions = {

    // use openssl or certbot to install ssl cert
    
    // key: fs.readFileSync('certs/fullchain.pem'),
    // cert: fs.readFileSync('certs/privkey.pem')
}

const httpServer = http.createServer(httpOptions, app)

httpServer.listen(PORT, () => console.log('Server started at', PORT))

app.get('/', (req, res) => {
    console.log('https will fail \'cos ssl isn\'t installed yet. just empty object');
    const html = `
        <div style="block-size:100vh; display:flex; flex-direction:column; justify-content:center; align-items:center; margin-inline:auto;"><h1 style="font-size:4rem; margin-block:0; -webkit-text-fill-color:transparent; -webkit-background-clip:text; background-clip: text; background-image: linear-gradient(90deg, #00BCD4, #FF9800);">CI/CD - express app - github action to ec2</h1>
        <p style="font-size:2rem;">better than CodeDeploy</p></div>
    `

    res.send(html).status(200)
    
})


