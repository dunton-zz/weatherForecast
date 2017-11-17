// src/containers/search_bar.js

import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		// take existing function, bing it to this (SearchBar)
		// then reassign it to this.onInputChange
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		console.log(event.target.value);
		this.setState({ term: event.target.value })
	}

	// prevent browser from trying to submit form
	onFormSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Get a five-day forecast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		)
	}
}

export default SearchBar;