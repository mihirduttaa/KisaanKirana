import React from "react";
import "../../App.css";
// import wiki from 'wikijs';

// Used to query data from both selected and use the state and season to find the suggested rop
function queryData() {
	const jsonFile = require("../../data/crop_production.json");
	const statesSelect = document.getElementById("states");
	const seasonsSelect = document.getElementById("seasons");
	const selectedState = statesSelect.value;
	const selectedSeason = seasonsSelect.value;

	for (let i = 0; i < jsonFile.length; i++) {
		if (
			jsonFile[i].State_Name == selectedState &&
			jsonFile[i].Season == selectedSeason
		) {
			let suggestedCrop = jsonFile[i].Crop;
			document.getElementById("suggested-crop").innerText = suggestedCrop;
			// displayWiki(suggestedCrop);
		}
	}
}

// function displayWiki(crop) {
// 	document.getElementById('wiki-h1').innerText = crop;

// 	// wiki()
// 	// 	.page(crop)
// 	// 	.then(page => page.info('definition'))
// 	// 	.then(document.getElementById('wiki-p').innerText)
// }

export default function Services() {
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
					<option value="Andaman and Nicobar Islands">
						Andaman and Nicobar Islands
					</option>
					<option value="Andhra Pradesh">Andhra Pradesh</option>
					<option value="Arunachal Pradesh">Arunachal Pradesh</option>
					<option value="Assam">Assam</option>
					<option value="Bihar">Bihar</option>
					<option value="Chandigarh">Chandigarh</option>
					<option value="Chattisgarh">Chattisgarh</option>
					<option value="Dadra and Nagar Haveli">
						Dadra and Nagar Haveli
					</option>
					<option value="Goa">Goa</option>
					<option value="Gujarat">Gujarat</option>
					<option value="Haryana">Haryana</option>
					<option value="Himachal Pradesh">Himachal Pradesh</option>
					<option value="Jammu and Kashmir">Jammu and Kashmir</option>
					<option value="Jharkhand">Jharkhand</option>
					<option value="Karnataka">Karnataka</option>
					<option value="Kerala">Kerala</option>
					<option value="Madhya Pradesh">Madhya Pradesh</option>
					<option value="Maharashtra">Maharashtra</option>
					<option value="Manipur">Manipur</option>
					<option value="Meghalaya">Meghalaya</option>
					<option value="Mizoram">Mizoram</option>
					<option value="Nagaland">Nagaland</option>
					<option value="Odisha">Odisha</option>
					<option value="Puducherry">Puducherry</option>
					<option value="Punjab">Punjab</option>
					<option value="Rajasthan">Rajasthan</option>
					<option value="Sikkim">Sikkim</option>
					<option value="Tamil Nadu">Tamil Nadu</option>
					<option value="Telangana">Telangana</option>
					<option value="Tripura">Tripura</option>
					<option value="Uttar Pradesh">Uttar Pradesh</option>
					<option value="Uttarakhand">Uttarakhand</option>
					<option value="West Bengal">West Bengal</option>
				</select>
				<select name="seasons" id="seasons">
					<option value="Kharif">Kharif</option>
					<option value="Whole Year">Whole Year</option>
					<option value="Autumn">Autumn</option>
					<option value="Rabi">Rabi</option>
					<option value="Summer">Summer</option>
					<option value="Winter">Winter</option>
				</select>
				<button onClick={queryData} id="submit">
					Submit
				</button>
				<p>
					Suggested Crop: <br />
					<b id="suggested-crop"></b>
				</p>
			</div>
			<div className="wiki-main">
				<h1 className="wiki-h1"></h1>
				<p className="wiki-p"></p>
			</div>
		</>
	);
}
