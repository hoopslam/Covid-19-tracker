import React from "react";
import { Doughnut } from "react-chartjs-2";

const Donut = ({ data, options }) => {
	return (
		<div>
			<Doughnut
				data={data}
				options={options}
			/>
		</div>
	);
};

export default Donut;
