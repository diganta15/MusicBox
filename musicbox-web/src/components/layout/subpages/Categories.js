import React,{useContext} from 'react';
import CategoriesContext from '../../../context/categories/categoriesContext';
import CategoriesPlaylist from '../categories/CategoriesPlaylist';

const Categories = (props) => {
    const categoriesContext = useContext(CategoriesContext);
    const {items} = categoriesContext.currentCategories.playlists;
    return (
        <div className="categories-playlist grid-5">
         {items.map(item => <CategoriesPlaylist key={item.id} playlist={item} />)}
        </div>
    )
}

export default Categories
