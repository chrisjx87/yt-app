import axios from 'axios';
const KEY="AIzaSyBZI2aBl_q_3EpsPACbPpogV_Ru-kNAtbs";
export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params: {
        part:'snippet',
        type:'video',
        maxResults:5,
        key:KEY
    }
});