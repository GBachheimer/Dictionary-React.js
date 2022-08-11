import React, {useState, setState} from 'react';

export default function DisplayFeedback(props) {
	return (
		<p id = "message" className = "mx-auto my-2 d-block fs-5">{props.message}</p>
	);
}
