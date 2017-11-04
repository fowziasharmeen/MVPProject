import React from 'react';

class Search extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        term:''
      };
  }

  onChange(e){
    this.setState({
      term: e.target.value
    })
  }

  render(){return(
    <div id="search">
      <h3>Search Videos</h3>
      <input value={this.state.term} onChange={this.onChange.bind(this)}></input>
      <button>Submit</button>
    </div>
  )}
}



export default Search;
