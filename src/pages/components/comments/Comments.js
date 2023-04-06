import React, { useState } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import "./comments.css"

function Comments({comment}) {

    const [isActive, setIsActive] = useState(false)
    const cllick = () => setIsActive(!isActive)
    console.log(cllick)

    return (
        <>
            <ChatIcon fontSize="large" onClick={cllick} />

            <ul className={`${isActive ? "active" : "inactive"}`} >
                <div className='comments_modal'>
                    <p className='comment_text'>
                       {comment}
                    </p>
                </div>
            </ul>

        </>
    )
}

export default Comments;