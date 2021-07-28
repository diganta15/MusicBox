import React from 'react'

const TrackItem = ({track}) => {
  
    return (
        <div>
            <img className="track-img br-1" src={track.images[0].url} alt="" />
            <div className="name-wrapper">
                <h1 className="track-name">{track.name}</h1>
            </div>
        </div>
    )
}

export default TrackItem
