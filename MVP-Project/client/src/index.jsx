import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// // import searchYouTube from 'youtube-api-search';
import Search from './Search.jsx'
// import searchHelpers from './helpers.js'

//
class App extends React.Component{
  constructor (props){
    super(props);
    this.state= {
        videoCollection: [],
        playlist: [],
        currentVideo: 'https://www.youtube.com/watch?v=CAMWdvo71ls'
    };
  }

  componentDidMount(){}



  render(){
    return (
       <div>
    
        <Search onSearch={this.search}/>
        {/* <VideoList onSearch={this.state.videoCollection}/> */}
      </div>)
    }
  }







// function App(props){
//   return(<h1>VideoList</h1>)
// }




ReactDOM.render(<App />, document.getElementById('app'));
