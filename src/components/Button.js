import React, {useState, setState} from 'react';
import "./DisplayAll.css";

export default function Button(props) {
	return (
		<button type = "button" className = "btn btn-outline-light m-1 font-style" onClick = {props.toDo}>
			{props.name}
		</button>
	);
}
