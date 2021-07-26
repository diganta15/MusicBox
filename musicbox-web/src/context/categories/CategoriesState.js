import React,{useReducer} from 'react';
import CategoriesContext from './categoriesContext';
import CategoriesReducer from './categoriesReducer';

const CategoriesState = props => {
    const initialState = {

    };

    const [state, dispatch] = useReducer(CategoriesState, initialState);

    return(
        <CategoriesContext.Provider>
            {props.children}
        </CategoriesContext.Provider>
    )

}
 export default CategoriesState;