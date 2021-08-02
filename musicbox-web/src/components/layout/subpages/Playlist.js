import React,{useContext} from 'react';
import PlaylistContext from '../../../context/playlists/playlistContext';
import {Link} from 'react-router-dom'

const Playlist = (props) => {
    const playlistContext = useContext(PlaylistContext);
    const {name,images,artists} = playlistContext.currentPlaylist;
    const {items} = playlistContext.currentPlaylist.tracks;
  
    const millisToMinutesAndSeconds =(millis)=> {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    // console.log(typeof (millisToMinutesAndSeconds(6099)))
  
    return (
        <div className="playlist-details">
            <div className="cover-image">
                <img src={images[0].url} alt="" className="cover" />
                <p className="artist-name">{artists.map(artist => artists.indexOf(artist) !== (artists.length - 1) ? `${artist.name}, `: `${artist.name}`)}</p>
            </div>
            <h1 className="album-title">{name}</h1>

            <div className="tracks">
                {items.map(item =>(
                  
                        <div key={item.id} className="">
                            <div className="flex sp playlist-track-details pointer">
                                <p>{item.name}</p>
                                <p>{millisToMinutesAndSeconds(item.duration_ms)}</p>
                            </div>
                        </div>
              
                ))}
            </div>
        </div>
    )
}

export default Playlist
