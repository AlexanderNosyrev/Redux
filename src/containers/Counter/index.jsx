import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
			insertedNum: 0
		};
	}

	increment = (e) =>{
		let val = this.state.value;
		this.setState({value: val + 1} )
	}

	decrement = (e) =>{
		let val = this.state.value;
		this.setState({value: val - 1} )
	}

	inputChange = (e) => {
		const value = e.target.value;
		this.setState({ insertedNum: value })
	}

	addition = (e) => {
		let val = this.state.value;
		let insertedNum = this.state.insertedNum;
		this.setState({value: Number(val) + Number(insertedNum)})
	}

	clear = (e) =>{
		this.setState({value:0});
	}

	subduction = (e) => {
		let val = this.state.value;
		let insertedNum = this.state.insertedNum;
		this.setState({value: Number(val) - Number(insertedNum)})
	}

	render() {
		const {value, insertedNum} = this.state;
		return (
			<div>
				<div>
					<h3>Result: {this.state.value}</h3>
					<div>
						<p className='margined'>Введите число для совершения простейших арифметических операций</p>
						<input className='margined' onChange={this.inputChange} value={insertedNum} placeholder='Число'/>
					</div>
					<button className='margined' onClick={this.subduction}>Вычесть</button>
					<button className='margined' onClick={this.addition}>Добавить</button>
					<button className='margined' onClick={this.increment}>++</button>
					<button className='margined' onClick={this.decrement}>--</button>
					<br/>
					<button className='margined' onClick={this.clear}>Очистить</button>
				</div>
			</div>
		);
	}
}

export {Counter};