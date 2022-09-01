import "./DisplayAll.css";
export default function DisplayAll(props) {
    return (
        <div className = "wordsStyle font-style">
            {Array.from(props.wordsList).map((value, key) => {return <p id = {key}>{value}</p>})}
        </div>
    );
}