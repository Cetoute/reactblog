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
					'As the Avengers and their allies have continued to protect the world from threat too large for any one hero to handle,a new danger has emerged frm the cosmic shadows: Thanos.'
			},
			{
				id: 0,
				title: 'The Avengers',
				overview:
					' and their allies have continued to protect the world from threat too large for any one hero to handle,a new danger has'
			}
		];

		let moviesRows = [];
		movies.forEach((movie) => {
			console.log(movie.title);
			moviesRows.push(<p key={movie.id}>movie title: {movie.title}</p>);
		});

		this.state = { rows: moviesRows };
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
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default App;
