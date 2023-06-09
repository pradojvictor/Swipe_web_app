/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music}) {
    return (
        <div className="video_footer" >
            <div className="videofooter_text">
                <h3>@{name}</h3>
                <p>{description}</p>
                <div className="videoFooter_music">
                    <MusicNoteIcon className="videoFooter_icon" />
                    <div className="videoFooterMusic_text">
                        <p>{music}</p>
                    </div>
                </div>
            </div>
            <img
                className="videoFooter_record"
                alt="imagem de um disco vinil"
                src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
            />

        </div>
    )
}

export default VideoFooter;