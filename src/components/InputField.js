import React, {useState, setState} from 'react';

export default function InputField(props) {
	return (
		<input type = "text" className = "form-control-sm m-auto d-inline" value = {props.userInput} onChange = {props.onChange} />
	);
}
