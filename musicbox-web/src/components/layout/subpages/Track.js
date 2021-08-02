import React,{useContext} from 'react';
import SongsContext from '../../../context/songs/songsContext';

const Track = (props) => {
    const songsContext = useContext(SongsContext);

    const {current} = songsContext;
    console.log(current);


    console.log(props.match.params.id);
    return (
        <div>
           <h1>Hello</h1>
        </div>
    )
}

export default Track
