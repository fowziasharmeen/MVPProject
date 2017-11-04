import React from 'react';
import VideoEntry from './playListEntry.jsx';

  const playList=({videos, selectVideo})=>

  (<div>
    {videos.map(video=>
      <playListEntry video={video} selectvideo={selectVideo}/>
    )}
  </div>);




export default playList
