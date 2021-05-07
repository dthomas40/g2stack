import React, { Component } from 'react';
import './Search.css';

class Search extends  Component {
	constructor( props ) {
		super( props );
		this.state = {
			query: '',
                        results: {},
                        loading: false,
                        message: '',
		};
	}
	render() {
		return (
			<div className="shrink navbar navbar-dark bg-dark">
				<input
					type="text"
					value=""
					id="search-input"
					placeholder="Search..."
				/>
			</div>
			)
	}
}
export default Search;