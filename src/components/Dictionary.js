import React, {useState} from 'react';
import Button from './Button';
import InputField from "./InputField";
import DisplayFeedback from "./DisplayFeedback";
import Search from './Search';
import DisplayAll from './DisplayAll';

export default function Dictionary() {
	const [userInput, setUserInput] = useState("");
	const [message, setMessage] = useState("Enter a word: ");
	const [wordsList, setWordList] = useState(new Set());
	
	const handleEvent = (event) => {
		setUserInput(event.target.value);
	}
	
	const changeMessage = (message) => {
		setMessage(message);
	};

	const addWord = () => {
		var regex = /^[A-Za-z]+$/;
		if (regex.test(userInput)) {
			wordsList.add(userInput.toLowerCase());
			changeMessage("Your word " + userInput + " was added successfully.");
		} else {
			changeMessage(userInput + " is not a word.");
		}
	};
	
	const deleteWord = () => {
		if (wordsList.has(userInput.toLowerCase())) {
			wordsList.delete(userInput.toLowerCase());
			changeMessage("Word: " + userInput + " was deleted successfully.");
		} else {
			changeMessage("Word: " + userInput + " is not in your dictionary!");
		}
	};
	
	return (
		<div className = "btn-dark badge position-absolute top-50 start-50 translate-middle text-start">
			<DisplayFeedback message = {message} />
			<InputField userInput = {userInput} onChange = {handleEvent} />
			<Button name = "Add" toDo = {addWord}  />
			<Button name = "Delete" toDo = {deleteWord} />
			<Search wordsList = {wordsList} changeMessage = {changeMessage}></Search>
			<DisplayAll wordsList = {wordsList}></DisplayAll>
		</div>
			
	);
}
