import React from 'react'

const ArtistItem = ({artist}) => {

    const {name, images} = artist;
    return (
        <div className="artist">
            <img src={images[0].url} alt={name} className="artist-image" />
            <h1 className="artist-name-1">{name}</h1>
        </div>
    )
}

export default ArtistItem
