import React,{useContext, useEffect, useState} from 'react';
import PlaylistContext from '../../context/playlists/playlistContext';
import CategoriesContext from '../../context/categories/categoriesContext';
import Playlists from '../layout/playlists/Playlists';
import Categories from '../layout/categories/Categories'

const Browse = ({active, setActive,location}) => {
    const playlistContext = useContext(PlaylistContext);
    const categoriesContext = useContext(CategoriesContext)
    const {newReleasesBrowse, featuredBrowse} = playlistContext;
    const {categoriesBrowse} = categoriesContext;
    useEffect(() => {
       setActive(location.pathname);
    }, [])
    return (
        <div className="browse mt-1">
            <div className="recent-browse">
                <h1 className="name-2">Recent Releases</h1>
                <Playlists albums={newReleasesBrowse} />
            </div>
            <div className="categories-browse">
                <h1 className="name-2">Categories</h1>
                <Categories categories={categoriesBrowse} />
            </div>
            <div className="featured-browse">
                <h1 className="name-2">
                    Featured
                </h1>
                <Playlists albums={featuredBrowse} />
            </div>
        </div>
    )
}

export default Browse
