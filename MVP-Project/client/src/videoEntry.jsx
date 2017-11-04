import React from 'react';

// const videoEntry =(props)=>(
//   <div>
//       <div>
//       <img src={props.video.snippet.thumbnails.default.url}></img>
//       </div>
//       <div>
//       <button addVideo={props.addVideo(props.video.snippet)}>Add to playlist</button>
//       <h3 onClick={props.selectVideo(props.video)}>{props.video.snippet.title}</h3>
//       <h4>{props.video.snippet.desc}</h4>
//     </div>
//   </div>
//   )

const videoEntry =(props)=>(
  <div>
    <p>this is props: {props}</p>
    
      <div>
        <img src={props.video.thumbnail}></img>
      </div>
      <div>
      <button addVideo={props.addVideo(props.video)}>Add to playlist</button>
        <h3 onClick={props.selectVideo(props.video)}>{props.video.title}</h3>
        <h4>{props.video.desc}</h4>
      </div>
  </div>
  )

export default videoEntry
