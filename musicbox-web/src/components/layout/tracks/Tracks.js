import React from 'react';
import TrackItem from './TrackItem';

const Tracks = ({albums}) => {
    console.log(albums)
    return (
        <div className="grid-5">
           {albums.map(track => <TrackItem key={track.album.id} track={track.album} />)}
        </div>
    )
}

export default Tracks
