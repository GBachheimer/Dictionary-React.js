import React, {useState} from 'react';

export default function DeleteWord(props) {
	const [message, setMessage] = useState("");
	const deleteWord = () => {
		if (props.wordsList.has(props.value.toLowerCase())) {
			props.wordsList.delete(props.value.toLowerCase());
			document.getElementById("message").innerHTML = "Word: {props.value} was deleted successfully.";
		} else {
			document.getElementById("message").innerHTML = "Word: {props.value} is not in your dictionary!";
		}
	};
	return (
		<div>
			<button type = "button" className = "btn btn-outline-light m-1" onClick = {deleteWord}>
				{props.name}
			</button>
		</div>
	);
}
