import React from "react";
import "../../App.css";
// import wiki from 'wikijs';

const statesSelect = document.getElementById("states");
const seasonsSelect = document.getElementById("seasons");

// Used to query data from both selected and use the state and season to find the suggested rop
function queryData() {
	const jsonFile = require("../../data/crop_production.json");
	const selectedState = statesSelect.value;
	const selectedSeason = seasonsSelect.value;

	for (let i = 0; i < jsonFile.length; i++) {
		if (
			jsonFile[i].State_Name == selectedState &&
			jsonFile[i].Season == selectedSeason
		) {
			let suggestedCrop = jsonFile[i].Crop;
			document.getElementById("suggested-crop").innerText = suggestedCrop;
			displayWiki(suggestedCrop);
		}
	}
}

function initOptions() {
	let states = [
		"Andaman and Nicobar Islands",
		"Andhra Pradesh",
		"Arunachal Pradesh",
		"Assam",
		"Bihar",
		"Chandigarh",
		"Chhattisgarh",
		"Dadra and Nagar Haveli",
		"Goa",
		"Gujarat",
		"Haryana",
		"Himachal Pradesh",
		"Jammu and Kashmir ",
		"Jharkhand",
		"Karnataka",
		"Kerala",
		"Madhya Pradesh",
		"Maharashtra",
		"Manipur",
		"Meghalaya",
		"Mizoram",
		"Nagaland",
		"Odisha",
		"Puducherry",
		"Punjab",
		"Rajasthan",
		"Sikkim",
		"Tamil Nadu",
		"Telangana ",
		"Tripura",
		"Uttar Pradesh",
		"Uttarakhand",
		"West Bengal",
	];
	let seasons = [
		"Kharif",
		"Whole Year",
		"Autumn",
		"Rabi",
		"Summer",
		"Winter",
	];

	// Loop for inserting states options
	for (let i = 0; i < states.length; i++) {
		let stateOption = new Option(states[i], states[i]);
		statesSelect.appendChild(stateOption);
	}

	// Loop for inserting seasons options
	for (let i = 0; i < seasons.length; i++) {
		let seasonOption = new Option(seasons[i], seasons[i]);
		seasonsSelect.appendChild(seasonOption);
	}
}

function displayWiki(crop) {
	document.getElementById('wiki-h1').innerText = crop;

	// wiki()
	// 	.page(crop)
	// 	.then(page => page.info('definition'))
	// 	.then(document.getElementById('wiki-p').innerText)
}

export default function Services() {
	initOptions();
	return (
		<>
			<div className="services">
				<h1>Services</h1>
			</div>
			<div className="crops-main">
				<p>
					Select "State" and "Season" to find out what's the best
					crop!
				</p>
				<select name="states" id="states">
				</select>
				<select name="seasons" id="seasons">
				</select>
				<button onClick={queryData} id="submit">
					Submit
				</button>
				<p>
					Suggested Crop: <br/><b id="suggested-crop"></b>
				</p>
			</div>
			<div className="wiki-main">
				<h1 className="wiki-h1"></h1>
				<p className="wiki-p"></p>
			</div>
		</>
	);
}
