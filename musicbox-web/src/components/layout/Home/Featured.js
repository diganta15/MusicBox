import React from 'react';
import Playlists from '../playlists/Playlists';

const Featured = ({featured}) => {


    return (
        <div className="featured">
            <h1 className="playlist-title">Featured Playlists</h1>
            <div className="featured-playlist">
                <Playlists albums={featured} />
            </div>
        </div>
    )
}

export default Featured
