import React from 'react';
import CategoryItem from './CategoryItem';

const Categories = ({ categories}) => {
    return (
        <div className="grid-5">
            {categories.map(category => <CategoryItem key={category.id} category={category} />)}
        </div>
    )
}

export default Categories
