import React from 'react';
import './App.css';

function App() {
	return (
		<div className="App">
			<table className="titleBar">
				<tbody>
					<tr>
						<td>
							<img width="50" src="moviedb.png" alt="website logo" />
						</td>
						<td>
							<h1>MoviesDB Search</h1>{' '}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default App;
