import React from 'react';
import Playlists from '../playlists/Playlists';

const MyPlaylists = ({myPlaylists}) => {
    return (
        <div className="my-playlists">
            <h1 className="playlist-title">My Playlists</h1>
            <Playlists albums={myPlaylists} />
        </div>
    )
}

export default MyPlaylists
