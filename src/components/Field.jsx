import React from 'react';

function Field(props){
	return (
		<div className='field' onClick={props.onClick}>
		<p>{props.value}</p>
		</div>
	);
}

export {Field}