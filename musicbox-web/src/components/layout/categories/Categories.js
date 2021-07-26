import React from 'react';
import CategoryItem from './CategoryItem';

const Categories = ({ categoriesHome}) => {
    return (
        <div className="grid-5">
            {categoriesHome.map(category => <CategoryItem key={category.id} category={category} />)}
        </div>
    )
}

export default Categories
