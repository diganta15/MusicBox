import React from 'react'

const PlaylistItem = ({album}) => {
    return (
        <div className="pointer" >
            <img className="playlist-img" src={album.images[0].url} alt="" />
           <div className="name-wrapper">
                <h1 className="playlist-name">{album.name}</h1>
           </div>
        </div>
    )
}

export default PlaylistItem
