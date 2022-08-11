import React, {useState, setState} from 'react';

export default function InputField(props) {
	return (
		<input type = "text" className = "form-control-lg mx-auto my-2 d-block" value = {props.userInput} onChange = {props.onChange} />
	);
}
