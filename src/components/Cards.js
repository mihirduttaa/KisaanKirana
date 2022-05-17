import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
	return (
		<div className="cards">
			<h1>Check out our awesome products for our farmers!</h1><br/><br/><br/>
			<div className="cards_container">
				<div className="cards_wrapper">
					<ul className="cards_items">
						<CardItem
							src="https://i1.wp.com/enterpriseiotinsights.com/wp-content/uploads/2018/04/smart-ag.jpg"
							path="https://krishijagran.com/list-of-seed-companies/"
							label="Private vendor"
							text="Private vendor"
						/> <br/><br/>

						<CardItem
							src="https://commercialobserver.com/wp-content/uploads/sites/3/2018/08/gettyimages-694167496.jpg"
							path="https://dfr.icar.gov.in/OneStopSolution/ListofSeedCompanies"
							label="Public vendor"
							text="Public vendor"
						/> <br/><br/>

						<CardItem
							src="https://images.static-collegedunia.com/public/college_data/images/campusimage/1462516623IARI.jpg"
							path=""
							label="Agricultural and Research Institutes"
							text="Agricultural and Research Institutes"
						/> <br/><br/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
