import React,{Fragment, useContext} from 'react';
import Featured from '../layout/Home/Featured';

import NewReleases from '../layout/Home/NewReleases';
import MyGenres from '../layout/Home/MyGenres';
import MyAlbums from '../layout/Home/MyAlbums';
import MyPlaylists from '../layout/Home/MyPlaylists'
import PlaylistContext from '../../context/playlists/playlistContext';
import CategoriesContext from '../../context/categories/categoriesContext'

const Home = () => {


    const playlistContext = useContext(PlaylistContext);
    const categoriesContext = useContext(CategoriesContext);
    const { myAlbums, newReleases, featured,myPlaylists } = playlistContext;
    const {categoriesHome} = categoriesContext;

    return (
       <Fragment>
    
      <div className="home">
                <NewReleases newReleases={newReleases} />
                <Featured featured={featured} />
                <MyGenres categoriesHome={categoriesHome} />
                <MyAlbums myAlbums={myAlbums} />
                <MyPlaylists myPlaylists={myPlaylists} />
      </div>
       </Fragment>
    )
}

export default Home
