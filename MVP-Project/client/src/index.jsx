import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import searchYouTube from 'youtube-api-search';
import Search from './Search.jsx'
import VideoList from './videoList.jsx'
import VideoPlayer from './videoplayer.jsx'
import searchYouTube from './helpers.js'
import youtubeAPI from '../env/config.js'
import PlayList from './playList.jsx'

//
class App extends React.Component{
  constructor (){
    super();
    this.state= {
        videoList: [],
        playList: [],
        currentVideo: 'https://www.youtube.com/embed?v=CAMWdvo71ls'
    };

    this.selectVideo = this.selectVideo.bind(this);
    this.addVideo= this.addVideo.bind(this);
    this.searchVideo= this.searchVideo.bind(this)
  }

  componentDidMount(){
    var searchCB =(data)=> {
      console.log('inside ssearchCB', data.data.items)
      this.setState({
        videoList: data.data.items,
        currentVideo: data.data.items[0]
      })
    }
    searchYouTube('stromae', searchCB);
}

  selectVideo(selected){
    this.setState({currentVideo: selected})
  }

  addVideo(selected){
    axios.post('url', )
  }

  searchVideo(query){
    // console.log('serach being called')
    var searchCB =(data)=> {
      console.log('inside ssearchCB', data.data.items)
      this.setState({
        videoList: data.data.items,
        currentVideo: data.data.items[0]
      })
      console.log('after setSTate, ssearchCB', this.state.currentVideo, this.state.videoList)
    }

    searchYouTube(query, searchCB);

  }



  render(props){
    console.log('inside index', this.state.videoList)
    return (
       <div>
         <div><Search searchvideo={this.searchVideo}/></div>

         <div> <VideoPlayer video={this.state.currentVideo} addvideo={this.addVideo}/></div>
         <div><VideoList videos={this.state.videoList} selectvideo={this.selectVideo}/></div>
         <div><PlayList videos={this.state.videoList} selectvideo={this.selectVideo}/></div>


      </div>)
    }
  }







// function App(props){
//   return(<h1>VideoList</h1>)
// }




ReactDOM.render(<App />, document.getElementById('app'));
