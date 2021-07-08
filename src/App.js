import React from 'react';
import { useEffect,useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './Spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
//import DataLayer from "./DataLayer";
import {useDataLayerValue} from "./DataLayer";


const Spotify = new SpotifyWebApi();

function App() {
  const[{user,token},dispatch]=useDataLayerValue();

 useEffect(() => {
  const hash= getTokenFromUrl();
  window.location.hash="";
  const _token = hash.access_token;
  if(_token) {
    dispatch({
      type:"SET_TOKEN",
      token:_token,
    });

    Spotify.setAccessToken(_token);
    Spotify.getMe().then((user) =>{
      dispatch({
        type: "SET_USER",
        user: user,
      });
    });
    Spotify.getUserPlaylists().then((playlists)=>{
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
      });
    });
    
    Spotify.getPlaylist('6kJROPt6yAsmAH4xvsUpX6').then(response =>{
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly:response,
        })
    }) ;

  }
  
 }, []);

   return (
    <div className="app">
      {
        token ?
         <Player Spotify={Spotify} />:<Login/>
        
      }
  

    </div>
  );
}

export default App;
