import React, { useReducer } from "react";
import PlaylistContext from "./playlistContext";
import PlaylistReducer from "./playlistReducer";

const PlaylistState = (props) => {
	const initialState = {
		recent: {
			items: [
				{
					track: {
						href: "https://api.spotify.com/v1/tracks/2gNfxysfBRfl9Lvi9T3v6R",
						id: "2gNfxysfBRfl9Lvi9T3v6R",
						name: "Disciples",
						image:"https://i.scdn.co/image/966ade7a8c43b72faa53822b74a899c675aaafee",
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
		myAlbums:{
			albums:{
				"items": [
					{
						"album_type": "single",
						"artists": [
							{
								"external_urls": {
									"spotify": "https://open.spotify.com/artist/2RdwBSPQiwcmiDo9kixcl8"
								},
								"href": "https://api.spotify.com/v1/artists/2RdwBSPQiwcmiDo9kixcl8",
								"id": "2RdwBSPQiwcmiDo9kixcl8",
								"name": "Pharrell Williams",
								"type": "artist",
								"uri": "spotify:artist:2RdwBSPQiwcmiDo9kixcl8"
							}
						],
					
						"external_urls": {
							"spotify": "https://open.spotify.com/album/5ZX4m5aVSmWQ5iHAPQpT71"
						},
						"href": "https://api.spotify.com/v1/albums/5ZX4m5aVSmWQ5iHAPQpT71",
						"id": "5ZX4m5aVSmWQ5iHAPQpT71",
						"images": [
							{
								"height": 640,
								"url": "https://i.scdn.co/image/e6b635ebe3ef4ba22492f5698a7b5d417f78b88a",
								"width": 640
							},
							{
								"height": 300,
								"url": "https://i.scdn.co/image/92ae5b0fe64870c09004dd2e745a4fb1bf7de39d",
								"width": 300
							},
							{
								"height": 64,
								"url": "https://i.scdn.co/image/8a7ab6fc2c9f678308ba0f694ecd5718dc6bc930",
								"width": 64
							}
						],
						"name": "Runnin'",
						"type": "album",
						"uri": "spotify:album:5ZX4m5aVSmWQ5iHAPQpT71"
					},
					{
						"album_type": "single",
						"artists": [
							{
								"external_urls": {
									"spotify": "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4"
								},
								"href": "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4",
								"id": "3TVXtAsR1Inumwj472S9r4",
								"name": "Drake",
								"type": "artist",
								"uri": "spotify:artist:3TVXtAsR1Inumwj472S9r4"
							}
						],
					
						"external_urls": {
							"spotify": "https://open.spotify.com/album/0geTzdk2InlqIoB16fW9Nd"
						},
						"href": "https://api.spotify.com/v1/albums/0geTzdk2InlqIoB16fW9Nd",
						"id": "0geTzdk2InlqIoB16fW9Nd",
						"images": [
							{
								"height": 640,
								"url": "https://i.scdn.co/image/d40e9c3d22bde2fbdb2ecc03cccd7a0e77f42e4c",
								"width": 640
							},
							{
								"height": 300,
								"url": "https://i.scdn.co/image/dff06a3375f6d9b32ecb081eb9a60bbafecb5731",
								"width": 300
							},
							{
								"height": 64,
								"url": "https://i.scdn.co/image/808a02bd7fc59b0652c9df9f68675edbffe07a79",
								"width": 64
							}
						],
						"name": "Sneakin’",
						"type": "album",
						"uri": "spotify:album:0geTzdk2InlqIoB16fW9Nd"
					}
				],
			}
		}
		

		

		
	};

	const [state, dispatch] = useReducer(PlaylistReducer, initialState);

	//Methods

	return (
		<PlaylistContext.Provider value={{ recent: state.recent, myAlbums:state.myAlbums }}>
			{props.children}
		</PlaylistContext.Provider>
	);
};
export default PlaylistState;
