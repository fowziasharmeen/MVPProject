const videoList =(props)=>{
  return (<div>
      {props.videos.map((video) =>{
        <VideoEntry video={video}/>
        }
      )}

  </div>)
}
