import React from 'react';
import Playlists from '../../components/layout/playlists/Playlists';

const Featured = ({featured}) => {


    return (
        <div className="featured">
            <div className="featured-playlist">
                <Playlists albums={featured} />
            </div>
        </div>
    )
}

export default Featured
