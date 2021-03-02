import React from "react";

function FancyBorder(props) {
	return (
		<div className={"FancyBorder FancyBorder-" + props.color}>
			{props.children}
		</div>
	);
}

function WelcomeDialog() {
	return (
		<FancyBorder color="blue">
		    <h1 className="Dialog-title">Welcome</h1>
			<p className="Dialog-message">Thank you!</p>
		</FancyBorder>
	);
}

export default WelcomeDialog;
