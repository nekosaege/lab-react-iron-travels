import travelPlansData from "../assets/travel-plans.json";
import { useState } from "react";

function TravelList() {
	const [travelPlans, setTravelPlans] = useState(travelPlansData);

	return (
		<div>
			<h1>Travel Plans</h1>
			{travelPlans.map((plan) => (
				<div
					key={plan.id}
					className="travel-plan"
					style={{
						border: "1px solid #ccc",
						margin: "10px",
						padding: "10px",
					}}
				>
					<h2>{plan.destination} ({plan.days} days)</h2>
					<img
						src={plan.image}
						alt={plan.destination}
						style={{ width: "300px", height: "auto", borderRadius: "8px", position: "left" }}
					/>
					<p>{plan.description}</p>
			
					<p><strong>Price:</strong> €{plan.totalCost}</p>
				</div>
			))}
		</div>
	);
}

export default TravelList;
