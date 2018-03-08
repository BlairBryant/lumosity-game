import React, { Component } from 'react';

import './App.css';
class App extends Component {
	constructor() {
		super()

		this.state = {
			color1: { background: '#7CA5B8', width: '100%', height: '33.3vh' },
			color2: { background: '#E5E7E6', width: '100%', height: '33.3vh' },
			color3: { background: '#D4ADCF', width: '100%', height: '33.4vh' }
		}
		this.getRandomInt = this.getRandomInt.bind(this)
		this.getRandomRange = this.getRandomRange.bind(this)
		this.delayedColorChange = this.delayedColorChange.bind(this)
		this.changeColorOne = this.changeColorOne.bind(this)
		this.changeColorTwo = this.changeColorTwo.bind(this)
		this.changeColorThree = this.changeColorThree.bind(this)
		this.loopColors = this.loopColors.bind(this)
	}

	getRandomInt(n) {
		return Math.floor(Math.random() * n)
	}

	getRandomRange(min, max) {
		return (Math.floor(Math.random() * (max - min + 1)) + min)*100
	}

	changeColorOne() {
		let colors1 = ['#7CA5B8', '#C1CAD6', '#7B6D8D', '#F5E3E0', '#E8B4BC', '#B3B7EE', '#F2F7F2']
		let randomColor = colors1[this.getRandomInt(7)]
		console.log('has fired. took color ', randomColor)
		this.setState({
			color1: {
			background: randomColor,
			width: '100%',
			height:'33.3vh'
			}
		})
	}

	changeColorTwo() {
		let colors2 = ['#E5E7E6', '#8E5572', '#DEF6CA', '#F8BDC4', '#4464AD', '#EFD9CE', '#96C5F7']
		let randomColor2 = colors2[this.getRandomInt(7)]
		console.log('2 has fired. took color ', randomColor2)
		this.setState({
			color2: {
			background: randomColor2,
			width: '100%',
			height:'33.3vh'
			}
		})
	}

	changeColorThree() {
		let colors3 = ['#D4ADCF', '#6C756B', '#C3979F', '#694D75', '#F9EAE1', '#CC8B86', '#B2C9AB']
		let randomColor3 = colors3[this.getRandomInt(7)]
		console.log('3 has fired. took color ', randomColor3)
		this.setState({
			color3: {
			background: randomColor3,
			width: '100%',
			height:'33.3vh'
			}
		})
	}

	dotChange() {

	}

	delayedColorChange() {
		window.setTimeout(this.changeColorOne, 1000)
		window.setTimeout(this.changeColorTwo, 1000)
		window.setTimeout(this.changeColorThree, 1000)
  }

	loopColors() {
	  for(let i = 0; i < 10; i++) {
		let arr = [this.delayedColorChange, this.delayedColorChange, this.delayedColorChange, this.delayedColorChange, this.delayedColorChange, this.delayedColorChange, this.delayedColorChange, this.delayedColorChange, this.delayedColorChange, this.delayedColorChange]
		let dotArr = [this.dotChange, this.dotChange, this.dotChange, this.dotChange, this.dotChange, this.dotChange, this.dotChange, this.dotChange, this.dotChange, this.dotChange]
		window.setTimeout(arr[i], i * 1000)
		window.setTimeout(dotArr[i], i * 1000)
	  }
	}


	render() {
		// let sectionColorsArray = ['#7CA5B8', '#E5E7E6', '#D4ADCF', '#C1CAD6', '#7B6D8D', '#F5E3E0', '#E8B4BC', '#B3B7EE', '#F2F7F2', '#8E5572', '#DEF6CA', '#F8BDC4', '#4464AD', '#EFD9CE', '#96C5F7', '#6C756B', '#C3979F', '#694D75', '#F9EAE1', '#CC8B86', '#B2C9AB']
		return (
			<div className="App">
				<span className="dot" style={ {marginTop: '800px', left: '400px'} }></span>


				<section className='leftColor' style={this.state.color1}></section>
				<section style={this.state.color2}></section>
				<section className='RightColor' 
						 style={this.state.color3}>
						 <button onClick={() => this.loopColors()}>change color 1</button>
				</section>
				<footer></footer>
			</div>
		);
	}
}

export default App;