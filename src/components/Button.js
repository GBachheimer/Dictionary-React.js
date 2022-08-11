import React, {useState, setState} from 'react';

export default function Button(props) {
	return (
		<button type = "button" className = "btn btn-outline-light m-1" onClick = {props.toDo}>
			{props.name}
		</button>
	);
}
