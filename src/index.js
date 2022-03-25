import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// MUI IMPORTS
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

// Create a react component called 'Clock'
class App extends React.Component {
	// Define constructors for the class
	constructor(props) {
		super(props);
		
		this.state = {
			date: new Date(),
			name: '',
		};
	}

	// if the component has been rendered we call the tick function everyone second.
	componentDidMount() {
		this.timerId = setInterval(() => this.tick(), 1000);
	}

	// if the component is ever dropped from render we destroy the setInterval we previous created.
	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	// the tick function takes the this.state prop and sets it to the new date.
	// this happens everytime the tick function is called aka every second the clock is mounted.
	tick() {
		this.setState({
			date: new Date(),
		});
	}
	

	// We then return a message with the clock to the main dom renderer.
	render() {
		return (
			<Container maxWidth="sm">
				<div className="clock">
					<Typography variant="h1" color="common">
						Hello {this.state.name}!
					</Typography>
					<Typography variant="h4" color="primary">
						Current Time: {this.state.date.toLocaleTimeString()}
					</Typography>
				</div>
				<div>
					<form noValidate autoComplete="off">
						<TextField 
						onChange={(e) => this.setState({name: e.target.value})}
							label="Name" 
							variant="outlined" 
							size="small" 
						/>
					</form>
				</div>
			</Container>
		);
	}
}

// We call on the clock class so we can have it render-out on the dom.
// Notice how Clock is caplizied as react will treat lowcase jsx like html elements.
// and it will treat uppercase jsx elements as react components.
ReactDOM.render(<App />, document.getElementById('root'));
