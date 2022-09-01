import Button from "./Button";
import { useState } from "react";
import InputField from "./InputField";

export default function Search(props) {
    const [searchUserInput, setSearchUserInput] = useState("");
    const handleEvent = (event) => {
        setSearchUserInput(event.target.value);
    };
    const searchWord = () => {
		if (props.wordsList.has(searchUserInput.toLowerCase())) {
			props.changeMessage("This word exists in dictionary.");
            document.getElementById(Array.from(props.wordsList).indexOf(searchUserInput)).style.color = "green";
            setTimeout( () => {
                document.getElementById(Array.from(props.wordsList).indexOf(searchUserInput)).style.color = "white";
            }, 1000);
		} else {
			props.changeMessage("OOOPS! This word is not in this dictionary.");
		}
	};
    return(
        <div>
            <InputField userInput = {searchUserInput} onChange = {handleEvent}></InputField>
            <Button name = "Search" toDo = {searchWord} />
        </div>
    );
}