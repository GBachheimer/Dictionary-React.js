import React, {useState} from 'react';

export default function DisplayAllWords(props) {
	const [message, setMessage] = useState("");
	const displayAll = () => {
		let text = "";
		for (const x of props.wordsList.values()) {
			text += x + " ";
		}
		setMessage(text);
		document.getElementById("list").innerHTML = message;
		
	}
	return (
		<div>
			<button type = "button" className = "btn btn-outline-light m-1" onClick = {displayAll}>
				{props.name}
			</button>
		</div>
			
	);
}
