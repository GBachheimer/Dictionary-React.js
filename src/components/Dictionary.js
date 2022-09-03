import React, {useState} from 'react';
import Search from './Search';
import DisplayAll from './DisplayAll';
import AddWord from './AddWord';
import DeleteWord from './DeleteWord';

export default function Dictionary() {
	const [wordsList, setWordList] = useState(new Set());
	
	return (
		<div className = "btn-dark badge position-absolute top-50 start-50 translate-middle text-start">
			<AddWord wordsList = {wordsList}></AddWord>
			<DeleteWord wordsList = {wordsList}></DeleteWord>
			<Search wordsList = {wordsList}></Search>
			<DisplayAll wordsList = {wordsList}></DisplayAll>
		</div>
			
	);
}
