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
			<div className="navbar navbar-dark bg-dark navbar-expand-lg">
				<label className="search-label" htmlFor="search-input">
					<input
						type="text"
						value=""
						id="search-input"
						placeholder="Search..."
					/>
				</label>				
			</div>
			)
	}
}
export default Search;