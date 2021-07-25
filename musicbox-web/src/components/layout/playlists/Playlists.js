import React from 'react';
import PlaylistItem from './PlaylistItem';


const Playlists = ({albums}) => {
    console.log(albums);
    return (
        <div className="grid-5">
            {albums.map(album => (<PlaylistItem key={album.id} album={album} />))}
        </div>
    )
}

export default Playlists
