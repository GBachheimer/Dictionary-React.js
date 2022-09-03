import Button from "./Button";
import { useState } from "react";
import InputField from "./InputField";
import DisplayFeedback from "./DisplayFeedback";

export default function Search(props) {
    const [searchUserInput, setSearchUserInput] = useState("");
    const [message, setMessage] = useState("");

    const handleEvent = (event) => {
        setSearchUserInput(event.target.value);
    };

    const searchWord = () => {
		if (props.wordsList.has(searchUserInput.toLowerCase())) {
			setMessage("This word exists in dictionary.");
		} else {
			setMessage("OOOPS! This word is not in this dictionary.");
		}
	};
    return(
        <div>
            <InputField userInput = {searchUserInput} onChange = {handleEvent}></InputField>
            <Button name = "Search" toDo = {searchWord} />
            <DisplayFeedback message = {message}></DisplayFeedback>
        </div>
    );
}