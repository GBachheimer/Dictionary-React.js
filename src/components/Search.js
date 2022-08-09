import React, {useState} from 'react';


export default function SearchWord(props) {
	const [message, setMessage] = useState("");
	const searchWord = () => {
		if (props.wordsList.has(props.value.toLowerCase())) {
			document.getElementById("message").innerHTML = "This word exists in dictionary.";
		} else {
			document.getElementById("message").innerHTML = "OOOPS! This word is not in this dictionary.";
		}
	};
	return (
		<div>
			<button type = "button" className = "btn btn-outline-light m-1" onClick = {searchWord}>
				{props.name}
			</button>
		</div>
	);
}
