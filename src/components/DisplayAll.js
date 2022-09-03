import "./DisplayAll.css";
import { useState } from "react";
import Button from "./Button";

export default function DisplayAll(props) {
    const [test, setTest] = useState([]);

    const updateList = () => {
        setTest(Array.from(props.wordsList));
    };

    return (
        <div className = "font-style">
            <Button name = "Show All" toDo = {updateList}></Button>
            {test.map((value, key) => {return <p id = {key} className = "listStyle">{value}</p>})}
        </div>
    );
}