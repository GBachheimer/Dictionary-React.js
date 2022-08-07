import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Display (props) {
	return <p className = "mx-auto my-2 d-block fs-5">{props.message}</p>;
}

function Button (props) {
	return (
		<button type = "button" className = "btn btn-outline-light m-1" onClick = {props.toDo}>
			{props.name}
		</button>
	);
}

class Dictionary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: "", message: "Enter a word: ", wordsList: new Set(), displayList: ""};
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	
	AddWord() {
		var regex = /^[A-Za-z]+$/;
		if (regex.test(this.state.value)) {
			this.state.wordsList.add(this.state.value.toLowerCase());
			this.setState({message: "Your word was added successfully."});
		} else {
			this.setState({message: "This is not a word."});
		}
	}

	SearchWord() {
		if (this.state.wordsList.has(this.state.value.toLowerCase())) {
			this.setState({message: "This word exists in dictionary."});
		} else {
			this.setState({message: "OOOPS! This word is not in this dictionary."});
		}
	}

	DeleteWord() {
		if (this.state.wordsList.has(this.state.value.toLowerCase())) {
			this.state.wordsList.delete(this.state.value.toLowerCase());
			this.DisplayAllWords();
			this.setState({message: "Word: " + this.state.value + " was deleted successfully."});
		} else {
			this.setState({message: "Word: " + this.state.value + " is not in your dictionary!"});
		}
	}

	DisplayAllWords() {
		let text = "";
		for (const x of this.state.wordsList.values()) {
			text += x + " ";
		}
		this.setState({displayList: text});
	}
	
	render() {
		const name = ["Add", "Search", "Delete", "Display all"];
		return (
			<div className = "btn-dark badge position-absolute top-50 start-50 translate-middle text-center">
				<Display message = {this.state.message} />
				<input type = "text" className = "form-control-lg mx-auto my-2 d-block" value = {this.state.value} onChange = {this.handleChange} />
				<Button name = {name[0]} toDo = {() => this.AddWord()}  />
				<Button name = {name[1]} toDo = {() => this.SearchWord()} />
				<Button name = {name[2]} toDo = {() => this.DeleteWord()} />
				<Button name = {name[3]} toDo = {() => this.DisplayAllWords()} />
				<Display message = {this.state.displayList} />
			</div>
		);
	}
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Dictionary />);
