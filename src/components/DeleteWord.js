import InputField from "./InputField";
import Button from "./Button";
import { useState } from "react";
import DisplayFeedback from "./DisplayFeedback";

export default function DeleteWord(props) {
    const [wordToDelte, setWordToDelete] = useState("");
    const [message, setMessage] = useState("");

    const updateInput = (event) => {
        setWordToDelete(event.target.value);
    };

    const deleteWord = () => {
        if (props.wordsList.has(wordToDelte.toLowerCase())) {
            props.wordsList.delete(wordToDelte.toLowerCase());
            setMessage("Word: " + wordToDelte + " was deleted successfully.");
		} else {
			setMessage("Word: " + wordToDelte + " is not in your dictionary!");
		}
    }

    return (
        <div>
            <InputField userInput = {wordToDelte} onChange = {updateInput}></InputField>
            <Button name = "Delete" toDo = {deleteWord}></Button>
            <DisplayFeedback message = {message}></DisplayFeedback>
        </div>
    );
}