import React from 'react';
import {Link} from 'react-router-dom';

const CategoryItem = ({category}) => {

    const backgroundImg = {
        backgroundImage:`url(${category.icons[0].url})`,
        backgroundRepeat:'no-repeat',
     
        backgroundSize:'cover',
    
    }


    return (
        <Link to={`/categories/${category.id}`} className="link">
            <div className="category-item pointer" style={backgroundImg}  >
                <div className="category-wrapper">
                    <h1 className="category-name">{category.name}</h1>
                </div>
            </div>
        </Link>
    )
}



export default CategoryItem
