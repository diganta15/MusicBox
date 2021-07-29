import React, { useReducer } from "react";
import CategoriesContext from "./categoriesContext";
import CategoriesReducer from "./categoriesReducer";

const CategoriesState = (props) => {
	const initialState = {
		categoriesHome: {
			categories: {
				href: "https://api.spotify.com/v1/browse/categories?offset=0&limit=5",
				items: [
					{
						href: "https://api.spotify.com/v1/browse/categories/toplists",
						icons: [
							{
								height: 275,
								url: "https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg",
								width: 275,
							},
						],
						id: "toplists",
						name: "トップリスト",
					},
					{
						href: "https://api.spotify.com/v1/browse/categories/tokyo",
						icons: [
							{
								height: null,
								url: "https://t.scdn.co/images/0e5a2f7ea4bf44ca88be919b84a39912",
								width: null,
							},
						],
						id: "tokyo",
						name: "Tokyo",
					},
					{
						href: "https://api.spotify.com/v1/browse/categories/j_tracks",
						icons: [
							{
								height: 274,
								url: "https://t.scdn.co/media/categories/jtracks_274x274.jpg",
								width: 274,
							},
						],
						id: "j_tracks",
						name: "J-トラック",
					},
					{
						href: "https://api.spotify.com/v1/browse/categories/pop",
						icons: [
							{
								height: 274,
								url: "https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg",
								width: 274,
							},
						],
						id: "pop",
						name: "ポップ",
					},
					{
						href: "https://api.spotify.com/v1/browse/categories/mood",
						icons: [
							{
								height: 274,
								url: "https://t.scdn.co/media/original/mood-274x274_976986a31ac8c49794cbdc7246fd5ad7_274x274.jpg",
								width: 274,
							},
						],
						id: "mood",
						name: "Mood",
					},
				],
				limit: 5,
				next: "https://api.spotify.com/v1/browse/categories?offset=5&limit=5",
				offset: 0,
				previous: null,
				total: 48,
			},
			
		},

		genre: {},
		categoriesBrowse: {
			"categories": {
				"href": "https://api.spotify.com/v1/browse/categories?country=US&offset=0&limit=20",
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
						"name": "Top Lists"
					},
					{
						"href": "https://api.spotify.com/v1/browse/categories/hiphop",
						"icons": [
							{
								"height": 274,
								"url": "https://t.scdn.co/media/original/hip-274_0a661854d61e29eace5fe63f73495e68_274x274.jpg",
								"width": 274
							}
						],
						"id": "hiphop",
						"name": "Hip Hop"
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
						"name": "Pop"
					},
					{
						"href": "https://api.spotify.com/v1/browse/categories/country",
						"icons": [
							{
								"height": null,
								"url": "https://t.scdn.co/images/a2e0ebe2ebed4566ba1d8236b869241f.jpeg",
								"width": null
							}
						],
						"id": "country",
						"name": "Country"
					},
					{
						"href": "https://api.spotify.com/v1/browse/categories/rock",
						"icons": [
							{
								"height": 274,
								"url": "https://t.scdn.co/media/derived/rock_9ce79e0a4ef901bbd10494f5b855d3cc_0_0_274_274.jpg",
								"width": 274
							}
						],
						"id": "rock",
						"name": "Rock"
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
						"href": "https://api.spotify.com/v1/browse/categories/latin",
						"icons": [
							{
								"height": null,
								"url": "https://t.scdn.co/images/26a60378-a374-4cd7-b894-28efa5e154cb.jpg",
								"width": null
							}
						],
						"id": "latin",
						"name": "Latin"
					},
					{
						"href": "https://api.spotify.com/v1/browse/categories/workout",
						"icons": [
							{
								"height": null,
								"url": "https://t.scdn.co/media/links/workout-274x274.jpg",
								"width": null
							}
						],
						"id": "workout",
						"name": "Workout"
					},
					{
						"href": "https://api.spotify.com/v1/browse/categories/rnb",
						"icons": [
							{
								"height": 274,
								"url": "https://t.scdn.co/media/derived/r-b-274x274_fd56efa72f4f63764b011b68121581d8_0_0_274_274.jpg",
								"width": 274
							}
						],
						"id": "rnb",
						"name": "RnB"
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
					},
					{
						"href": "https://api.spotify.com/v1/browse/categories/focus",
						"icons": [
							{
								"height": 274,
								"url": "https://t.scdn.co/media/original/genre-images-square-274x274_5e50d72b846a198fcd2ca9b3aef5f0c8_274x274.jpg",
								"width": 274
							}
						],
						"id": "focus",
						"name": "Focus"
					},
					{
						"href": "https://api.spotify.com/v1/browse/categories/edm_dance",
						"icons": [
							{
								"height": 274,
								"url": "https://t.scdn.co/media/derived/edm-274x274_0ef612604200a9c14995432994455a6d_0_0_274_274.jpg",
								"width": 274
							}
						],
						"id": "edm_dance",
						"name": "Dance/Electronic"
					},
					{
						"href": "https://api.spotify.com/v1/browse/categories/fresh_finds",
						"icons": [
							{
								"height": null,
								"url": "https://t.scdn.co/images/16e40e64d2a74fa8a0a020d456e6541d.jpeg",
								"width": null
							}
						],
						"id": "fresh_finds",
						"name": "Fresh Finds"
					},
					{
						"href": "https://api.spotify.com/v1/browse/categories/summer",
						"icons": [
							{
								"height": null,
								"url": "https://t.scdn.co/images/8e508d7eb5b843a89c368c9507ecc429.jpeg",
								"width": null
							}
						],
						"id": "summer",
						"name": "Summer"
					},
					{
						"href": "https://api.spotify.com/v1/browse/categories/indie_alt",
						"icons": [
							{
								"height": null,
								"url": "https://t.scdn.co/images/fe06caf056474bc58862591cd60b57fc.jpeg",
								"width": null
							}
						],
						"id": "indie_alt",
						"name": "Indie"
					},
					{
						"href": "https://api.spotify.com/v1/browse/categories/sleep",
						"icons": [
							{
								"height": 274,
								"url": "https://t.scdn.co/media/derived/sleep-274x274_0d4f836af8fab7bf31526968073e671c_0_0_274_274.jpg",
								"width": 274
							}
						],
						"id": "sleep",
						"name": "Sleep"
					},
					{
						"href": "https://api.spotify.com/v1/browse/categories/chill",
						"icons": [
							{
								"height": 274,
								"url": "https://t.scdn.co/media/derived/chill-274x274_4c46374f007813dd10b37e8d8fd35b4b_0_0_274_274.jpg",
								"width": 274
							}
						],
						"id": "chill",
						"name": "Chill"
					},
					{
						"href": "https://api.spotify.com/v1/browse/categories/inspirational",
						"icons": [
							{
								"height": null,
								"url": "https://t.scdn.co/images/e023f691436b4518aec8c3b18973268e",
								"width": null
							}
						],
						"id": "inspirational",
						"name": "Christian & Gospel"
					},
					{
						"href": "https://api.spotify.com/v1/browse/categories/regional_mexican",
						"icons": [
							{
								"height": null,
								"url": "https://t.scdn.co/images/c765fa1ce6994fce8796d2d0d93c1e61.jpeg",
								"width": null
							}
						],
						"id": "regional_mexican",
						"name": "Regional Mexican"
					},
					{
						"href": "https://api.spotify.com/v1/browse/categories/frequency",
						"icons": [
							{
								"height": null,
								"url": "https://t.scdn.co/images/cad629fb65a14de4beddb38510e27cb1",
								"width": null
							}
						],
						"id": "frequency",
						"name": "Frequency"
					}
				],
				"limit": 20,
				"next": "https://api.spotify.com/v1/browse/categories?country=US&offset=20&limit=20",
				"offset": 0,
				"previous": null,
				"total": 60
			}
		}
	};

	const [state, dispatch] = useReducer(CategoriesState, initialState);

	return (
		<CategoriesContext.Provider
			value={{ categoriesHome: state.categoriesHome.categories.items,
            categoriesBrowse:state.categoriesBrowse.categories.items
            }}>
			{props.children}
		</CategoriesContext.Provider>
	);
};
export default CategoriesState;
