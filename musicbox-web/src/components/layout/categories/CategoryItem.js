import React from 'react'

const CategoryItem = ({category}) => {

    const backgroundImg = {
        backgroundImage:`url(${category.icons[0].url})`,
        backgroundRepeat:'no-repeat',
     
        backgroundSize:'cover',
    
    }


    return (
        <div className="category-item pointer" style={backgroundImg}  >
            <div className="category-wrapper">
                <h1 className="category-name">{category.name}</h1>
            </div>
        </div>
    )
}



export default CategoryItem
