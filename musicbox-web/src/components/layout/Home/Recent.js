import React, { useContext } from 'react';
import PlaylistContext from '../../../context/playlists/playlistContext';
import Playlists from '../playlists/Playlists';
import SongsContext from '../../../context/songs/songsContext';

const Recent = () => {
    const playlistContext = useContext(PlaylistContext);
    const songsContext = useContext(SongsContext);

    const { myAlbums } = playlistContext;


    return (
        <div className="recent">
            <div className="recently-played">
            <Playlists albums={myAlbums.albums.items} />
            </div>
        </div>
    )
}

export default Recent
