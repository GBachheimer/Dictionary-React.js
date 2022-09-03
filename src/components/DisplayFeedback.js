import "./DisplayAll.css";

export default function DisplayFeedback(props) {
	return (
		<p id = "message" className = "mx-auto my-2 d-block font-style">{props.message}</p>
	);
}
