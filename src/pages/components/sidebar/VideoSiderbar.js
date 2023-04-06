import React, { useState } from "react";
import "./videoSiderbar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Comments from "../comments/Comments";
import Share from "../send/send";


function VideoSiderbar({likes, messages, shares, comment}) {

    const [liked, setLiked] = useState(false)

    function handdleLike() {
        setLiked(!liked)
    }

    return (
        <div className="videosiderbar">
            <div
                className="videosiderbar_options"
                onClick={handdleLike}
            >
                { liked ? <FavoriteIcon fontSize="large"/> : <FavoriteBorderIcon fontSize="large" />}
                <p>{ liked ? likes + 1 : likes }</p>
            </div>
            <div className="videosiderbar_options">
                <Comments comment={comment}/>
                <p>{messages}</p>
            </div>
            <div className="videosiderbar_options">
                <Share fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSiderbar;