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
  search(){
    console.log('called search in search')
    this.props.searchvideo(this.state.term);
  }

  render(){return(
    <div id="search">
      <h3>Search Videos</h3>
      <input value={this.state.term} onChange={this.onChange.bind(this)}></input>
      <button onClick={this.search.bind(this)}>Submit</button>
    </div>
  )}
}



export default Search;
