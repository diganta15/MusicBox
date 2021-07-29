import React,{useContext, useEffect} from 'react';
import PlaylistContext from '../../context/playlists/playlistContext';
import MyAlbums from '../layout/Home/MyAlbums';

const Library = ({setActive, location}) => {
    const playlistContext = useContext(PlaylistContext);
    const {myAlbumsBrowse} = playlistContext;

    useEffect(() => {
        setActive(location.pathname);
    }, [])

    console.log(myAlbumsBrowse)
    return (
        <div className="library">
            <div className="my-albums-browse">
                <h1 className="name-2">My Albums</h1>
                <MyAlbums myAlbums={myAlbumsBrowse} />
            </div>
        </div>
    )
}

export default Library
