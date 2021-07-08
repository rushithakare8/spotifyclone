import React from 'react';
import './Body.css';
import Header from './Header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import {useDataLayerValue} from './DataLayer';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SongRow from './SongRow';

function Body({Spotify}) {
    const [{discover_weekly},dispatch] = useDataLayerValue();
    return (
        <div className="body">
                <Header Spotify={Spotify}/>


            <div className="body_info">
                <img src ={discover_weekly?.images[0].url} />
                <div className="body_infotext">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly
                    </h2>
                    <p>{discover_weekly?.description}</p>
                </div>


            </div>
           <div className="body_song">
               <div className="body_icons">
                   <PlayCircleFilledIcon className="shuffle"/>
                   <FavoriteIcon fontSize="large" />
                   <MoreHorizIcon />


               </div>
               {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}

           </div>
        </div>
    )
}

export default Body
