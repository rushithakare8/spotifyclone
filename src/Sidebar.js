import React from 'react';
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SearchIcon from '@material-ui/icons/Search';
import { useDataLayerValue } from './DataLayer';
function Sidebar() {
    const[{playlists},dispatch] =useDataLayerValue();
    console.log(playlists);
    return (
        <div className="sidebar">
            <img className="sidebar_logo" src="https://i.pinimg.com/originals/9b/84/14/9b84143eb318f738166337637b0fb9e2.jpg"/>
      
        <SidebarOption Icon={HomeIcon} title="Home"/>
        <SidebarOption Icon={SearchIcon} title="Search"/>
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
        <br/>
        <strong className="sidebar_title">PLAYLISTS</strong>
        <hr/>
        {playlists?.items?.map((playlists) => {
            <SidebarOption title={playlists.name}/>
        })}
     
        </div>
    )
}

export default Sidebar
