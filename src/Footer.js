import React from 'react';
import "./Footer.css";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat'

import {Grid, Slider} from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
function Footer() {
    return (
      <div className="footer">
        <div className="footer_left">
          <img src ="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270 " alt=""/>
          <div className="song_info">
            <h4>the Rage</h4>
            <p>
              Admin Rushi
            </p>
          </div>

        </div>

        <div className="footer_center">

          
          <ShuffleIcon className="footer_green"/>
          <SkipPreviousIcon className = "footer_icon"/>
          <PlayCircleOutlineIcon fontSize="large" className="footer_icon"/>
          <SkipNextIcon className ="footer_icon"/>
          <RepeatIcon  className = "footer_green"/>
        </div>

        <div className="footer_right">
          <Grid container spacing ={2}>
            <Grid item>
              <PlaylistPlayIcon/>
            </Grid>
            <Grid item>
              <VolumeDownIcon/>
            </Grid>
            <Grid item xs>
              <Slider />
            </Grid>
          </Grid>
        
        

        </div>
      </div>
    )
}

export default Footer
