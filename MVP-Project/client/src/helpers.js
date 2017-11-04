import axios from 'axios';
// import searchYouTube from 'youtube-api-search';

searchYouTube({key: API_KEY, term: term, maxResults: 6}, (videos) => {
            console.log(videos);
        });



export default searchHelpers;
