/* eslint-disable eqeqeq */
import React, { useRef, useState } from "react";
import "./video.css"
import clip from "../videos/clipnatureza.mp4"

function Video() {

    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)

    function handdleStart(){
        if (play) {
            videoRef.current.pause()
            setPlay(false)
        } else {
            videoRef.current.play()
            setPlay(true)
        }   
    }

    return (
        <>
            <div className="video">

                <video
                    className="video_player"
                    ref={videoRef}
                    onClick={handdleStart}
                    loop
                    src={clip}
                    >
                
                </video>
            </div>
            
        </>

    )
}

export default Video;