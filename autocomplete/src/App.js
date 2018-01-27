import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
    }
    this.updateInputValue = this.updateInputValue.bind(this);
  }


  updateInputValue(event) {
    this.setState({input: event.target.value});
  }

  render() {

    return (
      <div className = "Background">
        <div>
          <h1 style={{textAlign:'center'}}><font color="#86ACD9">WHAT&#39;S YOUR</font><br/><font color="#FF8159">DESTINATION?</font></h1>
          <input className = "Searchbar" type="text" value={this.state.value} onChange={this.updateInputValue} />
        </div>
      </div>
    );
  }

}

export default App;
