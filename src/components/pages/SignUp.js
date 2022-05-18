import React from "react";
import "../../App.css";

export default function SignUp() {
	return (
		<>
			<br />
			<h1 className="signup-heading">SIGN UP</h1>
			<form className="signup-form">
				<input placeholder="Full Name" />
				<input placeholder="Email" />
				<input placeholder="Password" />
				<button className="signup-button">Button</button>
			</form>
		</>
	);
}
