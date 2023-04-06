/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import ShareIcon from '@mui/icons-material/Share';
import facebook from "../../icons/facebook.svg"
import email from "../../icons/mail.svg"
import sends from "../../icons/send.svg"
import shares from "../../icons/share.svg"
import "./send.css"



function Share() {

    const [isActive, setIsActive] = useState(false)
    const cllick = () => setIsActive(!isActive)
    console.log(cllick)

    return (
        <>
            <ShareIcon fontSize="large" onClick={cllick} />
            <div className='send_share'>
            <ul className={`${isActive ? "active" : "inactive"}`} >
                <div className='comments_modal'>
                    <img src={facebook}/>
                    <img src={email}/>
                    <img src={shares}/>
                    <img src={sends}/>
                </div>
            </ul>
            </div>

        </>
    )
}

export default Share;