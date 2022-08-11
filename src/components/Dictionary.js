import React, {useState} from 'react';
import Button from './Button';
import InputField from "./InputField";
import DisplayFeedback from "./DisplayFeedback";

export default function Dictionary() {
	const [userInput, setUserInput] = useState("");
	const [message, setMessage] = useState("Enter a word: ");
	const [wordsList, setWordList] = useState(new Set());
	
	const handleEvent = (event) => {
		setUserInput(event.target.value);
	}
	
	const addWord = () => {
		var regex = /^[A-Za-z]+$/;
		if (regex.test(userInput)) {
			wordsList.add(userInput.toLowerCase());
			setMessage("Your word " + userInput + " was added successfully.");
		} else {
			setMessage(userInput + " is not a word.");
		}
	};
	
	const searchWord = () => {
		if (wordsList.has(userInput.toLowerCase())) {
			setMessage("This word exists in dictionary.");
		} else {
			setMessage("OOOPS! This word is not in this dictionary.");
		}
	};
	
	const deleteWord = () => {
		if (wordsList.has(userInput.toLowerCase())) {
			wordsList.delete(userInput.toLowerCase());
			setMessage("Word: " + userInput + " was deleted successfully.");
		} else {
			setMessage("Word: " + userInput + " is not in your dictionary!");
		}
	};
	
	const displayAll = () => {
		let text = "";
		for (const x of wordsList.values()) {
			text += x + " ";
		}
		setMessage(text);
	};
	
	return (
		<div className = "btn-dark badge position-absolute top-50 start-50 translate-middle text-center">
			<DisplayFeedback message = {message} />
			<InputField userInput = {userInput} onChange = {handleEvent} />
			<Button name = "Add" toDo = {addWord}  />
			<Button name = "Search" toDo = {searchWord} />
			<Button name = "Delete" toDo = {deleteWord} />
			<Button name = "Display all" toDo = {displayAll} />
		</div>
			
	);
}
