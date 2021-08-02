import React from 'react'

const CategoriesPlaylist = ({playlist}) => {

    const {name, id, images} = playlist;

    return (
        <div>
            
            <div className="pointer playlist-item" >
                <img className="playlist-img br-1" src={images[0].url} alt="" />
                <div className="name-wrapper">
                    <h1 className="playlist-name">{name}</h1>
                </div>
            </div>

        </div>
    )
}

export default CategoriesPlaylist
