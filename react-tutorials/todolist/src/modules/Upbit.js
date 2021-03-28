// const jwt = require("jsonwebtoken");
const fetch = require("node-fetch");
const querystring = require("querystring");
const request = require("request");
const uuidv4 = require("uuid/v4");
const sign = require("jsonwebtoken").sign;
require("dotenv").config();

const access_key = process.env.UPBIT_OPEN_API_ACCESS_KEY;
const secret_key = process.env.UPBIT_OPEN_API_SECRET_KEY;
const server_url = "https://api.upbit.com";
const payload = {
	access_key: access_key,
	nonce: uuidv4(),
};

const token = sign(payload, secret_key);

function getAccount() {
	const options = {
		method: "GET",
		url: server_url + "/v1/accounts",
		headers: { Authorization: `Bearer ${token}` },
	};

	request(options, (error, response, body) => {
		if (error) throw new Error(error);
		console.log(body);
	});
}

const qs = { market: "KRW-BTC", count: "1" };
const options = { method: "GET" };
const url =
	"https://api.upbit.com/v1/candles/minutes/1?" + querystring.stringify(qs);

console.log(url);

fetch(url, options)
	.then((res) => res.json())
	.then((json) => console.log(json))
	.catch((err) => console.error("error:" + err));

const qsOrder = { markets: "KRW-HIVE"};
const oderUrl =
	"https://api.upbit.com/v1/orderbook?" + querystring.stringify(qsOrder);

fetch(oderUrl, options)
	.then((res) => res.json())
	.then((json) => console.log(json))
	.catch((err) => console.error("error:" + err));


const urlNow = 'https://api.upbit.com/v1/ticker?' + querystring.stringify(qsOrder);


fetch(urlNow, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

  // 현재가, 호가, 코드 등등 promise에서 data만 꺼내서 리턴한 다음 리스트로 출력해보자
  

// const upbitUrl = "https://api.upbit.com/v1/market/all";

// const options = { method: "GET", qs: { isDetails: "false" } };
// async function getMarketCodes() {
//     let marketinfo = await fetch(upbitUrl, options)
// 	    .then((res) => res.json())
//     return marketinfo.market;
// }

// const codes = getMarketCodes();
// console.log(codes);

//export { marketCodes };
