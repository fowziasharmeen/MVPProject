import React from 'react';

// const videoPlayer =(props)=>{
//   return (<div>
//     <h2>The video player will be here; I need to learn bootstrap</h2>
//     <iframe src={'https://www.youtube.com/embed/${props.video.id.videoId}'}></iframe>
//   </div>
//   <div>
//     <button addVideo={props.addVideo(props.video.snippet)}>Add to playlist</button>
//     <h3>{props.video.snippet.title}</h3>
//     <h4>{props.video.snippet.desc}</h4>
//   </div>)
// }

const videoPlayer =(props)=>{

  return (
    <div>
      <div>
      <h2>Play video here.</h2>
      <iframe src={'https://www.youtube.com/watch?v=CAMWdvo71ls'}></iframe>
    </div>

    <div>
      <button addVideo={props.addVideo(props.video)}>Add to playlist</button>
      <h3>{props.video.title}</h3>
      <h4>{props.video.desc}</h4>
    </div>
  </div>
)
}



export default videoPlayer;
