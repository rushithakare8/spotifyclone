import React from 'react';
import "./Player.css";
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer'
function Player() {
    return (
        <div className="Player">
            <div className="player_body">

                <Sidebar />

                <Body/>
            </div>
            <Footer />
        </div>
    )
}

export default Player
