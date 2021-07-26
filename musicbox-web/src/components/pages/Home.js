import React,{Fragment, useContext} from 'react';
import Featured from '../layout/Home/Featured';
import NavBar from '../layout/NavBar';
import NewReleases from '../layout/Home/NewReleases';
import MyGenres from '../layout/Home/MyGenres';
import PlaylistContext from '../../context/playlists/playlistContext';
import CategoriesContext from '../../context/categories/categoriesContext'

const Home = () => {


    const playlistContext = useContext(PlaylistContext);
    const categoriesContext = useContext(CategoriesContext);
    const { myAlbums, newReleases, featured } = playlistContext;
    const {categoriesHome} = categoriesContext;

    return (
       <Fragment>
      <NavBar />
      <div className="home">
                <NewReleases newReleases={newReleases} />
                <Featured featured={featured} />
                <MyGenres categoriesHome={categoriesHome} />
      </div>
       </Fragment>
    )
}

export default Home
