import React from 'react';
import VideoEntry from './videoEntry.jsx';

  const videoList=(props)=>(
  <div>
    <p>this is props: {props}</p>
    {props.videos.map((video)=> {
      return <VideoEntry video={video} changeVideo={props.changeVideo}/>
    })}
   </div>)




export default videoList
