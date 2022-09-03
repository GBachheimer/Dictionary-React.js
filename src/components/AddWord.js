import  { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import DisplayFeedback from "./DisplayFeedback";

export default function AddWord(props) {
    const [word, setWord] = useState("");
    const [message, setMessage] = useState("");

    const updateWord = (event) => {
        setWord(event.target.value);
    };

    const addWord = () => {
        var regex = /^[A-Za-z]+$/;
        if (regex.test(word)) {
			props.wordsList.add(word.toLowerCase());
			setMessage("Your word " + word + " was added successfully.");
		} else {
			setMessage(word + " is not a word.");
		}
    };

    return (
        <div>
            <InputField userInput = {word} onChange = {updateWord}></InputField>
            <Button name = "Add" toDo = {addWord}></Button>
            <DisplayFeedback message = {message}></DisplayFeedback>
        </div>
    );
}