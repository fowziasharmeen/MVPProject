import React from 'react';

const playListEntry =({video, selectvideo})=>(
  <div>

      <div>
        <img src={video.snippet.thumbnails.default.url}></img>
      </div>
      <div>
      {/* <button addvideo={props.addvideo(props.video)}>Add to playlist</button> */}
        <h3 onClick={() => selectvideo(video)}>{video.snippet.title}</h3>
        <h4>{video.snippet.description}</h4>
      </div>
  </div>
  )

export default playListEntry
