import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import searchYouTube from 'youtube-api-search';
import Search from './Search.jsx'
// import VideoList from './videoList.jsx'
import VideoPlayer from './videoplayer.jsx'
// import searchHelpers from './helpers.js'

//
class App extends React.Component{
  constructor (props){
    super(props);
    this.state= {
        videoList: [{ "username" : "bob", "thumbnail" : "String", "video_url" : "https://www.youtube.com/watch?v=CAMWdvo71ls", "title" : "Tout Les Memes", "desc" : "Awesome" }],
        playlist: [],
        currentVideo: 'https://www.youtube.com/watch?v=CAMWdvo71ls'
    };

    this.selectVideo = this.selectVideo.bind(this);
    this.addVideo= this.addVideo.bind(this)
  }

  componentDidMount(){}


  selectVideo(selected){
    this.setState({currentVideo: selected})
  }

  addVideo(selected){
    axios.post('url', )
  }



  render(){
    console.log('inside index', this, this.state)
    return (
       <div>

        <Search onSearch={this.search}/>
        {/* <VideoList videos={this.state.videoList} selectVideo={this.selectVideo}/> */}
        <VideoPlayer video={this.state.currentVideo} addVideo={this.addVideo}/>
      </div>)
    }
  }







// function App(props){
//   return(<h1>VideoList</h1>)
// }




ReactDOM.render(<App />, document.getElementById('app'));
