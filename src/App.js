import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		const movies = [
			{
				id: 0,
				title: 'Avengers: Infinity War',
				overview:
					'As the Avengers and their allies have continued to protect the world from threat too large for any one hero to handle,a new danger has emerged frm the cosmic shadows: Thanos.',
				id: 0,
				title: 'Infinity War',
				overview:
					' and their allies have continued to protect the world from threat too large for any one hero to handle,a new danger has '
			}
		];
	}

	render() {
		return (
			<div className="App">
				<table className="titleBar">
					<tbody>
						<tr>
							<td>
								<img width="50" src="moviedb1.png" alt="app-icon" />
							</td>
							<td>
								<h1>MoviesDB Search</h1>{' '}
							</td>
						</tr>
					</tbody>
				</table>
				<input className="input" placeholder="Enter search here" />
				{this.state.rows}
			</div>
		);
	}
}

export default App;
