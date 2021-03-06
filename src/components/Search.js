import React, { Component } from 'react';
import '../styles/Search.css';
import cities from '../assets/cities';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      searchResults: [],
    }
    this.updateInputValue = this.updateInputValue.bind(this);
    this.renderSearchEntries = this.renderSearchEntries.bind(this);
    this.updateSearchResults = this.updateSearchResults.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  /**
   * Sets state to updated input and calls function to update search results
   * @param {Event} event
   */
  updateInputValue(event) {
    this.setState({input: event.target.value}, this.updateSearchResults);
  }

  /**
   * Finds and sets state to search results based on the cities in cities.js
   * If the input has less than 3 characters, sets results to null. Otherwise,
   * finds substring matches from cities
   */
  updateSearchResults() {
    let input = this.state.input.toLowerCase();
    while (input.length > 0 && input.charAt(0)===' ') {
      input = input.substring(1);
    }
    if (input.length < 3) {
      this.setState({searchResults: null});
    } else {
      let newResults = [];
      cities.cities.map(function(city, index) {
        if (city.length >= input.length && city.substring(0, input.length)===input) {
          newResults.push(
            {
              name: city,
              id: index
            }
          );
        }
      })
      this.setState({searchResults: newResults});
    }
  }

  /**
   * Updates the search bar input value
   * @param {String} value
   */
  updateInput(value) {
    this.setState({input: value}, this.updateSearchResults);
  }

  /**
   * Renders the search entries based on searchResults in state
   */
  renderSearchEntries() {
    if (this.state.searchResults === null) {
      return (
        <div className="SearchEntryWrapper">
          <div className="Notice">
            <h3><span style={{fontWeight:300}}>Input at least 3 characters</span></h3>
          </div>
        </div>
      );
    } else if (this.state.searchResults.length === 0) {
      return (
        <div className="SearchEntryWrapper">
          <div className="Notice">
            <h3><span style={{fontWeight:300}}>No results found</span></h3>
          </div>
        </div>
      );
    } else {
      return this.state.searchResults.map((city) => {
        let substring = this.state.input.trim().length;
        return (
          <div className="SearchEntryWrapper" key={city.id}>
            <div className="SearchEntry" onClick={() => this.updateInput(city.name)}>
              <h2>
                <span style={{fontWeight:600}}>{city.name.substring(0, substring)}</span>
                <span style={{fontWeight:300}}>{city.name.substring(substring)}</span>
              </h2>
            </div>
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div className="Background">
        <h1 style={{textAlign:'center'}}><font color="#86ACD9">WHAT&#39;S YOUR</font><br/><font color="#FF8159">DESTINATION?</font></h1>
        <input className="Searchbar" type="text" value={this.state.input} onChange={this.updateInputValue} />
        <div className="SearchWrapper">
          <div className="SearchResults">
            {this.renderSearchEntries()}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
