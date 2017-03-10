import http from 'http'
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import config from './config.json'

let app = express();
app.server = http.createServer(app)

// debug logger
app.use(morgan('dev'))

app.get('/', (req, res) => {
	res.send('yep')
})

app.server.listen(process.env.PORT || config.port, () => {
	console.log(`Started on port ${app.server.address().port}`)
})
