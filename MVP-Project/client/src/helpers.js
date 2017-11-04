import axios from 'axios';
import youtubeAPIkey from '../env/config.js'

// import searchYouTube from 'youtube-api-search';

const searchYouTube = function(query, callback) {
  console.log('working at youtubeSearch', callback.toString())
  var params = {
    key: youtubeAPIkey,
    part: 'snippet',
    q: query,
    maxResults: 5,
    type:'video',
    videoEmbeddable: 'true'

  }

  axios.get('https://www.googleapis.com/youtube/v3/search', {params: params})
  .then(({data}) =>callback({data}))
  .catch((err)=> { console.log('error', err)});
};



export default searchYouTube;
