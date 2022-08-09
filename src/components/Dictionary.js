import React from 'react';
import AddWord from './Add';
import SearchWord from './Search';
import DeleteWord from './Delete';
import DisplayAllWords from './DisplayAll';

export default class Dictionary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: "", message: "Enter a word: ", wordsList: new Set(), displayList: ""};
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	
	render() {
		const name = ["Add", "Search", "Delete", "Display all"];
		return (
			<div className = "btn-dark badge position-absolute top-50 start-50 translate-middle text-center">
				<p id = "message" className = "mx-auto my-2 d-block fs-5">{this.state.message}</p>
				<input type = "text" className = "form-control-lg mx-auto my-2 d-block" value = {this.state.value} onChange = {this.handleChange} />
				<AddWord name = {name[0]} value = {this.state.value} wordsList = {this.state.wordsList}  />
				<SearchWord name = {name[1]} value = {this.state.value} wordsList = {this.state.wordsList} />
				<DeleteWord name = {name[2]} value = {this.state.value} wordsList = {this.state.wordsList} />
				<DisplayAllWords name = {name[3]} value = {this.state.value} wordsList = {this.state.wordsList} />
				<p id = "list" className = "mx-auto my-2 d-block fs-5"></p>
			</div>
		);
	}
}
