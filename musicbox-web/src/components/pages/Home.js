import React,{Fragment, useContext} from 'react';
import Featured from '../../context/playlists/Featured';
import NavBar from '../layout/NavBar';
import NewReleases from '../layout/Home/NewReleases';
import PlaylistContext from '../../context/playlists/playlistContext';

const Home = () => {


    const playlistContext = useContext(PlaylistContext);

    const { myAlbums, newReleases, featured } = playlistContext;

    return (
       <Fragment>
      <NavBar />
      <div className="home">
                <NewReleases newReleases={newReleases} />
                <Featured featured={featured} />
      </div>
       </Fragment>
    )
}

export default Home
