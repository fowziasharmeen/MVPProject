import React from 'react';
import VideoEntry from './videoEntry.jsx';

  const videoList=({videos, selectVideo})=>

  (<div className='vertical'>
    {videos.map(video=>
      <VideoEntry video={video} selectvideo={selectVideo}/>
    )}
  </div>);




export default videoList
