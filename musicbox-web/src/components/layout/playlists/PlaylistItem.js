import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistItem = ({album}) => {
    return (
       <Link to={`/playlist/${album.id}`} >
            <div className="pointer playlist-item" >
                <img className="playlist-img br-1" src={album.images[0].url} alt="" />
                <div className="name-wrapper">
                    <h1 className="playlist-name">{album.name}</h1>
                </div>
            </div>
       </Link>
    )
}

export default PlaylistItem
