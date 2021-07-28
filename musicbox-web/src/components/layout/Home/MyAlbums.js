import React,{useEffect, useState} from 'react';
import Tracks from '../tracks/Tracks';
import TrackItem from '../tracks/TrackItem';
import PlaylistItem from '../playlists/PlaylistItem'

const MyAlbums = ({myAlbums}) => {
 

   const [singles, setSingles] = useState(null);
   const [albums, setAlbums] = useState(null)

   useEffect(() => {
    setSingles(myAlbums.filter(data => data.album.album_type === 'single'));
       setAlbums(myAlbums.filter(data => data.album.album_type === 'album'));
       console.log(typeof (albums));
   }, [])



   
    return (
        <div className="my-albums">
            <h1 className="category-title">My Albums</h1>
            <div className="grid-5 mg-1">
                {albums && albums.map(album => (<PlaylistItem key={album.album.id} album={album.album} />))}
                {singles && singles.map(single => (<TrackItem key={single.album.id} track={single.album} />))}
            </div>
        </div>
    )
}

export default MyAlbums
