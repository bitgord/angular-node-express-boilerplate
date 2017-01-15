var express = require("express");
var app = express();
var request = require("request");

request({
    url: "http://blockchain.info/stats?format=json",
    json: true
}, function(error, response, body) {
      btcPrice = body.market_price_usd;
      supply = body.totalbc;
});

console.log(btcPrice);
console.log(supply);

var GlobalWealth = 250000000000000;
var BTCPrice = btcPrice;
var BTCSupply = supply;
var BTCMarketCap = BTCSupply*BTCPrice;
			        
             
function Calculate() {
	var Wealth = document.getElementById('UserWealth').value;
	var Target = (Wealth/GlobalWealth)*BTCMarketCap;
	var BTCTarget = (Wealth/GlobalWealth)*BTCSupply;

	document.getElementById('BTCAmount').innerHTML = BTCTarget;          
}




