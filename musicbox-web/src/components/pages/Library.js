import React,{useContext, useEffect} from 'react';
import PlaylistContext from '../../context/playlists/playlistContext';
import MyAlbums from '../layout/Home/MyAlbums';
import Artists from '../layout/artists/Artists'

const Library = ({setActive, location}) => {
    const playlistContext = useContext(PlaylistContext);
    const {myAlbumsBrowse, topArtists} = playlistContext;

    useEffect(() => {
        setActive(location.pathname);
    }, [])

    return (
        <div className="library">
            <div className="my-albums-browse">
                <h1 className="name-2">My Albums</h1>
                <MyAlbums myAlbums={myAlbumsBrowse} />
            </div>
            <div className="top-artists">
                <h1 className="name-2">Artists</h1>
                <Artists artists={topArtists} />
            </div>
        </div>
    )
}

export default Library
