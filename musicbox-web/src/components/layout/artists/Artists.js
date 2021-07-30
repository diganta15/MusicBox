import React from 'react';
import ArtistItem from './ArtistItem';

const Artists = ({artists}) => {
   
    const sliced = artists.slice(0,10);
    console.log(sliced);
    return (
        <div className="grid-5">
            {
                sliced.map(artist => (<ArtistItem key={artist.id} artist={artist} />))
            }
        </div>
    )
}

export default Artists
