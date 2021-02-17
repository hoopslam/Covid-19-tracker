import React from "react";
import { Doughnut } from "react-chartjs-2";

const Donut = ({ data }) => {
	return (
		<div>
			<Doughnut
				data={data}
				options={{
					title: {
						display: true,
						text: "TEST",
					},
				}}
			/>
		</div>
	);
};

export default Donut;
