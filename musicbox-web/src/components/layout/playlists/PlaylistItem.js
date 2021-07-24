import React from 'react'

const PlaylistItem = ({album}) => {
    return (
        <div >
            <img className="track-img" src={album.images[1].url} alt="" />
           <h1 className="track-name">{album.name}</h1> 
        </div>
    )
}

export default PlaylistItem
