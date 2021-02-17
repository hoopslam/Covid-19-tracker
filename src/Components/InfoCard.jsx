import React from "react";
import numeral from "numeral";

const InfoCard = ({ text, total, today, color="rgb(24, 35, 54)" }) => {
	return (
		<div className="InfoCard-container">
			<div className='InfoCard-title'>{text}</div>
			<div className='InfoCard-total' style={{color: color}}>{numeral(total).format("0,0")}</div>
			<div className='InfoCard-today'>+ {numeral(today).format("0,0")}</div>
		</div>
	);
};

export default InfoCard;
