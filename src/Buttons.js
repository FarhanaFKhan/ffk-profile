import React from "react";
import { Button } from "react-bootstrap";

const Buttons = (props) => {
	return (
		<Button
			onClick={props.handleClick}>
			{props.name}
		</Button>
	);
};

export default Buttons;