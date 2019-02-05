// https://api.polygon.io/v1/last/stocks/AAPL?apiKey=YOURKEY
const { alpaca: alpacaConfig } = require('../config');

const request = require('minimal-request-promise');

const req = async url => {
	const res = await request(`https://api.polygon.io${url}?apiKey=${alpacaConfig.keyId}`);
	return JSON.parse(res.body);
}

module.exports = async ticker => {
	const [
		{ last},
		{ last: quote }
	] = await Promise.all([
		req(`/v1/last/stocks/${ticker}`),
		req(`/v1/last_quote/stocks/${ticker}`)
	]);

	return {
		last,
		quote
	};
};