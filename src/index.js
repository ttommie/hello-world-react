import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// MUI IMPORTS
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			date: new Date(),
			name: '',
		};
	}

	componentDidMount() {
		this.timerId = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	tick() {
		this.setState({
			date: new Date(),
		});
	}

	render() {
		return (
			<Container maxWidth="sm">
				<div className="textDiv">
					<Typography variant="h1" color="common">
						Hello {this.state.name}
					</Typography>
					<Typography variant="h4" color="primary">
						Current Time: {this.state.date.toLocaleTimeString()}
					</Typography>
				</div>
				<div>
					<form noValidate autoComplete="off">
						<TextField onChange={(e) => this.setState({ name: e.target.value })} label="Name" variant="outlined" size="small" />
					</form>
				</div>
			</Container>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
