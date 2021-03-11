import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";
//import Table from "./components/FilterableProductTable";

ReactDOM.render(<App />, document.getElementById('root'));
// function tick() {
// 	ReactDOM.render(<App />, document.getElementById("root"));
// }

// setInterval(tick, 1000);
// const PRODUCTS = [
// 	{
// 		category: "Sporting Goods",
// 		price: "$49.99",
// 		stocked: true,
// 		name: "Football",
// 	},
// 	{
// 		category: "Sporting Goods",
// 		price: "$9.99",
// 		stocked: true,
// 		name: "Baseball",
// 	},
// 	{
// 		category: "Sporting Goods",
// 		price: "$29.99",
// 		stocked: false,
// 		name: "Basketball",
// 	},
// 	{
// 		category: "Electronics",
// 		price: "$99.99",
// 		stocked: true,
// 		name: "iPod Touch",
// 	},
// 	{
// 		category: "Electronics",
// 		price: "$399.99",
// 		stocked: false,
// 		name: "iPhone 5",
// 	},
// 	{
// 		category: "Electronics",
// 		price: "$199.99",
// 		stocked: true,
// 		name: "Nexus 7",
// 	},
// ];

// ReactDOM.render(<Table product={PRODUCTS} />, document.getElementById("root"));
