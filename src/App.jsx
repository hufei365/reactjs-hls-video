import React, { useRef, useState } from 'react'
import videojs from 'video.js';
import './App.css'
import VideoPlayer from './components/VideoPlayer';
import Uploader from './components/Uploader';


function App() {
    const playerRef = useRef(null);
    const [videoSrc, setVideoSrc] = useState(null)

    const videoJsOptions = {
        autoplay: true,
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
            src: videoSrc,
            type: 'application/x-mpegURL'
        }],
    };


    const handlePlayerReady = (player) => {
        playerRef.current = player;

        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };


    return (
        <>
            <Uploader onUpdate={setVideoSrc} />
            {videoSrc && (
                <div>
                    <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
                </div>)
            }
        </>
    )
}


export default App
