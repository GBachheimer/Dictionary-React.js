import React, {useState, setState} from 'react';

export default function AddWord(props) {
	const [message, setMessage] = useState("");
	const testWord = () => {
		var regex = /^[A-Za-z]+$/;
		if (regex.test(props.value)) {
			props.wordsList.add(props.value.toLowerCase());
			document.getElementById("message").innerHTML = "Your word was added successfully.";
		} else {
			document.getElementById("message").innerHTML = "This is not a word.";
		}
	};
	return (
		<div>
			<button type = "button" className = "btn btn-outline-light m-1" onClick = {testWord}>
				{props.name}
			</button>
		</div>
	);
}
