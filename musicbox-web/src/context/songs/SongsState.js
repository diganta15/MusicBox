import React,{useReducer} from 'react';
import SongsContext from './songsContext';
import SongsReducer from './songsReducer';

const SongsState = props => {
    const initialState = {
        recent: {
            items: [
                {
                    track: {
                        href: "https://api.spotify.com/v1/tracks/2gNfxysfBRfl9Lvi9T3v6R",
                        id: "2gNfxysfBRfl9Lvi9T3v6R",
                        name: "Disciples",
                        image: "https://i.scdn.co/image/966ade7a8c43b72faa53822b74a899c675aaafee",
                    },
                },
                {
                    track: {
                        href: "https://api.spotify.com/v1/tracks/2X485T9Z5Ly0xyaghN73ed",
                        id: "2X485T9Z5Ly0xyaghN73ed",
                        name: "Let It Happen",
                        image: "https://i.scdn.co/image/966ade7a8c43b72faa53822b74a899c675aaafee",
                    },
                },
                {
                    track: {
                        href: "https://api.spotify.com/v1/tracks/2X485T9Z5Ly0xyaghN73ed",
                        id: "2X485T9Z5Ly0xyaghN73ed",
                        name: "Let It Happen",
                        image: "https://i.scdn.co/image/966ade7a8c43b72faa53822b74a899c675aaafee",
                    },
                },
                {
                    track: {
                        href: "https://api.spotify.com/v1/tracks/2gNfxysfBRfl9Lvi9T3v6R",
                        id: "2gNfxysfBRfl9Lvi9T3v6R",
                        name: "Disciples",
                        image: "https://i.scdn.co/image/966ade7a8c43b72faa53822b74a899c675aaafee",
                    },
                },
            ],
        },
    };

    const [state, dispatch] = useReducer(SongsReducer, initialState);


    return(<SongsContext.Provider value={{}} >
        {props.children}
    </SongsContext.Provider>)
}

export default SongsState;