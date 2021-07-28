import React,{useReducer} from 'react';
import CategoriesContext from './categoriesContext';
import CategoriesReducer from './categoriesReducer';

const CategoriesState = props => {
    const initialState = {

        categoriesHome: {
            "categories": {
                "href": "https://api.spotify.com/v1/browse/categories?offset=0&limit=5",
                "items": [
                    {
                        "href": "https://api.spotify.com/v1/browse/categories/toplists",
                        "icons": [
                            {
                                "height": 275,
                                "url": "https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg",
                                "width": 275
                            }
                        ],
                        "id": "toplists",
                        "name": "トップリスト"
                    },
                    {
                        "href": "https://api.spotify.com/v1/browse/categories/tokyo",
                        "icons": [
                            {
                                "height": null,
                                "url": "https://t.scdn.co/images/0e5a2f7ea4bf44ca88be919b84a39912",
                                "width": null
                            }
                        ],
                        "id": "tokyo",
                        "name": "Tokyo"
                    },
                    {
                        "href": "https://api.spotify.com/v1/browse/categories/j_tracks",
                        "icons": [
                            {
                                "height": 274,
                                "url": "https://t.scdn.co/media/categories/jtracks_274x274.jpg",
                                "width": 274
                            }
                        ],
                        "id": "j_tracks",
                        "name": "J-トラック"
                    },
                    {
                        "href": "https://api.spotify.com/v1/browse/categories/pop",
                        "icons": [
                            {
                                "height": 274,
                                "url": "https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg",
                                "width": 274
                            }
                        ],
                        "id": "pop",
                        "name": "ポップ"
                    },
                    {
                        "href": "https://api.spotify.com/v1/browse/categories/mood",
                        "icons": [
                            {
                                "height": 274,
                                "url": "https://t.scdn.co/media/original/mood-274x274_976986a31ac8c49794cbdc7246fd5ad7_274x274.jpg",
                                "width": 274
                            }
                        ],
                        "id": "mood",
                        "name": "Mood"
                    }
                ],
                "limit": 5,
                "next": "https://api.spotify.com/v1/browse/categories?offset=5&limit=5",
                "offset": 0,
                "previous": null,
                "total": 48
            }
        },

        genre:{}

    };

    const [state, dispatch] = useReducer(CategoriesState, initialState);

    return(
        <CategoriesContext.Provider value={{categoriesHome:state.categoriesHome.categories.items}}>
            {props.children}
        </CategoriesContext.Provider>
    )

}
 export default CategoriesState;