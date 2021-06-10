import React,{useState, useEffect}from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from '../Components/VideoList';
import VideoDetail from '../Components/VideoDetail';
import useVideos from "../Hooks/useVideos";
const App = ()=>{

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos("buildings");
    useEffect(()=>{
        setSelectedVideo(videos[0]);
    },[videos]);



        return (
    <div className="ui container">
        <SearchBar onFormSubmit={search}/>
        <div className="ui grid">
            <div className="ui row">
                <div className="nine wide column">
                    <VideoDetail video={selectedVideo}/>
                    <div className="six wide column">
                        <VideoList onVideoSelected={(video)=>{setSelectedVideo(video)}} videos={videos}/>
                    </div>
                </div>
            </div>

        </div>
    </div>
        );


};



export default App;