
const WebSocket = require('ws')
const { alpaca: alpacaConfig } = require('../config');

const APIKEY = alpacaConfig.keyId;//process.env.POLY_API_KEY || 'YOUR_API_KEY'
console.log({APIKEY})
const ws = new WebSocket('wss://socket.polygon.io/forex')

// Connection Opened:
ws.on('open', () => {
	console.log('Connected!')
	ws.send(`{"action":"auth","params":"${APIKEY}"}`)
	ws.send(`{"action":"subscribe","params":"C.AUD/USD,C.USD/EUR,C.USD/JPY"}`)
})

// Per message packet:
ws.on('message', ( data ) => {
	data = JSON.parse( data )
	data.map(( msg ) => {
		if( msg.ev === 'status' ){
			return console.log('Status Update:', msg.message)
		}
		console.log('Tick:', msg)
	})
})

ws.on('error', console.log)