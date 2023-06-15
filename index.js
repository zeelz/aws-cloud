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
    const color = 'blue'
    const script = `
        <script>
            el = document.createElement('h1');
            body = document.getElementsByTagName('body')[0];
            tn = document.createTextNode('canada');
            el.appendChild(tn);
            body.appendChild(el)
        </script>
    `

    res.send(`<body><h1 style="color: ${color}">foo bar</h1> ${script} </body>`).status(200)
    
})


