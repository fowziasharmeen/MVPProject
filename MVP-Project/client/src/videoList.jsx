import React from 'react';
import VideoEntry from './videoEntry.jsx';

function videoList(props){
return
{props.videos.map((video)=>(<VideoEntry video={video}/>))}
  // render() {(<div>
  //         <h1>VIDEO</h1>
  //       {props.videos.map((video) =>(
  //       return  <VideoEntry video={video}/>
  //       )
  //       )}
  //
  //   </div>)
  // }
}



export default videoList
