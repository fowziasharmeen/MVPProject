import axios from 'axios';
// import searchYouTube from 'youtube-api-search';

searchYouTube(query, callback){
  var params ={
    key: API_KEY
    part: 'snippet'
    q: query,
    maxResults: 10,
    type:'video',
    videoEmbeddable: 'true'

  }

  axios.get('url', params);
};



export default searchHelpers;
