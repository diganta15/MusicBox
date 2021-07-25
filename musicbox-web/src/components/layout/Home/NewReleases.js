import React, { useContext } from 'react';
import Playlists from '../playlists/Playlists';


const NewReleases = ({newReleases}) => {



    return (
        <div className="recent">
            <div className="recently-played">
                <Playlists albums={newReleases} />
            </div>
        </div>
    )
}

export default NewReleases
