import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// // import searchYouTube from 'youtube-api-search';
import Search from './Search.jsx'
import VideoList from './videoList.jsx'
import VideoPlayer from './videoList.jsx'
// import searchHelpers from './helpers.js'

//
class App extends React.Component{
  constructor (props){
    super(props);
    this.state= {
        videoList: [{ "username" : "bob", "thumbnail" : "String", "video_url" : "https://www.youtube.com/watch?v=CAMWdvo71ls", "title" : "Tout Les Memes", "desc" : "Awesome" },
{ "username" : "jane", "thumbnail" : "String", "video_url" : "https://www.youtube.com/watch?v=CAMWdvo71ls", "title" : "Tout Les Memes", "desc" : "Awesome" }],
        playlist: [],
        currentVideo: 'https://www.youtube.com/watch?v=CAMWdvo71ls'
    };
  }

  componentDidMount(){}



  render(){
    return (
       <div>

        <Search onSearch={this.search}/>
        <VideoList videos={this.state.videoList}/>
        <VideoPlayer currentVideo={this.state.currentVideo}/>
      </div>)
    }
  }







// function App(props){
//   return(<h1>VideoList</h1>)
// }




ReactDOM.render(<App />, document.getElementById('app'));
