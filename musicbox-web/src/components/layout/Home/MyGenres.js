import React from 'react';
import Categories from '../categories/Categories';


const MyGenres = ({categories}) => {

    return (
        <div className="my-genres">
            <h1 className="category-title">Categories</h1>
            <div className="categories">
                <Categories categories={categories} />
            </div>
        </div>
    )
}

export default MyGenres
