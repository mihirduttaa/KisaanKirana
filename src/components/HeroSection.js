import React from "react";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
	return (
		<main>
			<div className="hero-container">
				<h1>KisaanKirana</h1>
				<p>Where farmers are the priority!</p>
			</div>
			<div className="quote-container">
				<p>
					"The farmer is the only man in our economy who buys
					everything at retail, sells everything at wholesale, and
					pays the freight both ways."
				</p>
				<br />
				<h6>
					<i>John F. Kennedy</i>
				</h6>
			</div>
			<div className="about-container">
				<h1>About Us</h1>
				<p>
					<span>KisaanKirana</span> - <i>Farmer's most efficient companion.</i> <br/><br/> We are here
					to help farmers to grow efficiently. Any farmer can input
					the required detail and get to know the most favorable crop
					according to the statistics. Also we provide the best
					e-store from where farmers can purchase seeds in a very
					pocket friendly price.
				</p>
			</div>
		</main>
	);
}

export default HeroSection;
