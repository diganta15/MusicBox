import React from 'react';
import Categories from '../categories/Categories';


const MyGenres = ({categoriesHome}) => {

    return (
        <div className="my-genres">
            <h1 className="category-title">Genres</h1>
            <div className="categories">
                <Categories categoriesHome={categoriesHome} />
            </div>
        </div>
    )
}

export default MyGenres
