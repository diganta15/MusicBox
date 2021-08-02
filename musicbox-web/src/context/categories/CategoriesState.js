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
		},
		currentCategories: {
			"playlists": {
				"href": "https://api.spotify.com/v1/browse/categories/toplists/playlists?country=BR&offset=0&limit=10",
				"items": [
					{
						"collaborative": false,
						"description": "O que tá bombando tá aqui! A playlist com os maiores hits do país. Foto: Luan Santana",
						"external_urls": {
							"spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0FOF1IUWK1W"
						},
						"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0FOF1IUWK1W",
						"id": "37i9dQZF1DX0FOF1IUWK1W",
						"images": [
							{
								"height": null,
								"url": "https://i.scdn.co/image/ab67706f0000000314f2f1679184580cc827ae58",
								"width": null
							}
						],
						"name": "Top Brasil",
						"owner": {
							"display_name": "Spotify",
							"external_urls": {
								"spotify": "https://open.spotify.com/user/spotify"
							},
							"href": "https://api.spotify.com/v1/users/spotify",
							"id": "spotify",
							"type": "user",
							"uri": "spotify:user:spotify"
						},
						"primary_color": null,
						"public": null,
						"snapshot_id": "MTYyNzkwNTgzOSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
						"tracks": {
							"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0FOF1IUWK1W/tracks",
							"total": 50
						},
						"type": "playlist",
						"uri": "spotify:playlist:37i9dQZF1DX0FOF1IUWK1W"
					},
					{
						"collaborative": false,
						"description": "Os lançamentos dessa semana incluem Billie Eilish, Luan Santana, Alok e mais.",
						"external_urls": {
							"spotify": "https://open.spotify.com/playlist/37i9dQZF1DX34KNiFQJNVm"
						},
						"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX34KNiFQJNVm",
						"id": "37i9dQZF1DX34KNiFQJNVm",
						"images": [
							{
								"height": null,
								"url": "https://i.scdn.co/image/ab67706f000000033549b23da1196fcfcda28d20",
								"width": null
							}
						],
						"name": "Novidades da Semana",
						"owner": {
							"display_name": "Spotify",
							"external_urls": {
								"spotify": "https://open.spotify.com/user/spotify"
							},
							"href": "https://api.spotify.com/v1/users/spotify",
							"id": "spotify",
							"type": "user",
							"uri": "spotify:user:spotify"
						},
						"primary_color": null,
						"public": null,
						"snapshot_id": "MTYyNzY2MTIxNywwMDAwMDRmODAwMDAwMTdhZjgyYjJkMDkwMDAwMDE3YWYzYjBkMGE1",
						"tracks": {
							"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX34KNiFQJNVm/tracks",
							"total": 70
						},
						"type": "playlist",
						"uri": "spotify:playlist:37i9dQZF1DX34KNiFQJNVm"
					},
					{
						"collaborative": false,
						"description": "Super mega hits! Foto: Billie Eilish",
						"external_urls": {
							"spotify": "https://open.spotify.com/playlist/37i9dQZF1DX6aTaZa0K6VA"
						},
						"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6aTaZa0K6VA",
						"id": "37i9dQZF1DX6aTaZa0K6VA",
						"images": [
							{
								"height": null,
								"url": "https://i.scdn.co/image/ab67706f00000003f69dc88e9f74a3f4027f337b",
								"width": null
							}
						],
						"name": "Pop Up",
						"owner": {
							"display_name": "Spotify",
							"external_urls": {
								"spotify": "https://open.spotify.com/user/spotify"
							},
							"href": "https://api.spotify.com/v1/users/spotify",
							"id": "spotify",
							"type": "user",
							"uri": "spotify:user:spotify"
						},
						"primary_color": null,
						"public": null,
						"snapshot_id": "MTYyNzkwNTg1NSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
						"tracks": {
							"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX6aTaZa0K6VA/tracks",
							"total": 90
						},
						"type": "playlist",
						"uri": "spotify:playlist:37i9dQZF1DX6aTaZa0K6VA"
					},
					{
						"collaborative": false,
						"description": "Uma coleção de clássicos da música indie/alternativa para ouvir sem parar! Foto: Phoenix",
						"external_urls": {
							"spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXx6OpWBkqVv"
						},
						"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXx6OpWBkqVv",
						"id": "37i9dQZF1DWXx6OpWBkqVv",
						"images": [
							{
								"height": null,
								"url": "https://i.scdn.co/image/ab67706f0000000371c49636e5c7a93c50f62df5",
								"width": null
							}
						],
						"name": "Indiespensável",
						"owner": {
							"display_name": "Spotify",
							"external_urls": {
								"spotify": "https://open.spotify.com/user/spotify"
							},
							"href": "https://api.spotify.com/v1/users/spotify",
							"id": "spotify",
							"type": "user",
							"uri": "spotify:user:spotify"
						},
						"primary_color": null,
						"public": null,
						"snapshot_id": "MTYxMTY3NzAxNiwwMDAwMDA0OTAwMDAwMTc3M2Y2ZmEyMjIwMDAwMDE2ZDE1MWY4NDFh",
						"tracks": {
							"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXx6OpWBkqVv/tracks",
							"total": 62
						},
						"type": "playlist",
						"uri": "spotify:playlist:37i9dQZF1DWXx6OpWBkqVv"
					},
					{
						"collaborative": false,
						"description": "Aumente o volume e ouça as bandas que estão com tudo no rock! Foto: Måneskin",
						"external_urls": {
							"spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4908CEYEdlz"
						},
						"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4908CEYEdlz",
						"id": "37i9dQZF1DX4908CEYEdlz",
						"images": [
							{
								"height": null,
								"url": "https://i.scdn.co/image/ab67706f000000036e9c80ddf38e04d3f3922d27",
								"width": null
							}
						],
						"name": "Volume Máximo",
						"owner": {
							"display_name": "Spotify",
							"external_urls": {
								"spotify": "https://open.spotify.com/user/spotify"
							},
							"href": "https://api.spotify.com/v1/users/spotify",
							"id": "spotify",
							"type": "user",
							"uri": "spotify:user:spotify"
						},
						"primary_color": null,
						"public": null,
						"snapshot_id": "MTYyNzkwNTg1NywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
						"tracks": {
							"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4908CEYEdlz/tracks",
							"total": 75
						},
						"type": "playlist",
						"uri": "spotify:playlist:37i9dQZF1DX4908CEYEdlz"
					},
					{
						"collaborative": false,
						"description": "Hip Hop pra fazer os corres da vida.",
						"external_urls": {
							"spotify": "https://open.spotify.com/playlist/37i9dQZF1DXb8e91bM8R51"
						},
						"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXb8e91bM8R51",
						"id": "37i9dQZF1DXb8e91bM8R51",
						"images": [
							{
								"height": null,
								"url": "https://i.scdn.co/image/ab67706f000000037bd3578faaa6d80d3621b585",
								"width": null
							}
						],
						"name": "No corre",
						"owner": {
							"display_name": "Spotify",
							"external_urls": {
								"spotify": "https://open.spotify.com/user/spotify"
							},
							"href": "https://api.spotify.com/v1/users/spotify",
							"id": "spotify",
							"type": "user",
							"uri": "spotify:user:spotify"
						},
						"primary_color": null,
						"public": null,
						"snapshot_id": "MTYyNzkwNTg2NiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
						"tracks": {
							"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXb8e91bM8R51/tracks",
							"total": 120
						},
						"type": "playlist",
						"uri": "spotify:playlist:37i9dQZF1DXb8e91bM8R51"
					},
					{
						"collaborative": false,
						"description": "Ouça os hits do momento da música pop brasileira. Foto: Rennan da Penha, Anitta",
						"external_urls": {
							"spotify": "https://open.spotify.com/playlist/37i9dQZF1DWVLcZxJO5zyf"
						},
						"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVLcZxJO5zyf",
						"id": "37i9dQZF1DWVLcZxJO5zyf",
						"images": [
							{
								"height": null,
								"url": "https://i.scdn.co/image/ab67706f000000035549defd0d46d3fdce2c755a",
								"width": null
							}
						],
						"name": "Pop Brasil",
						"owner": {
							"display_name": "Spotify",
							"external_urls": {
								"spotify": "https://open.spotify.com/user/spotify"
							},
							"href": "https://api.spotify.com/v1/users/spotify",
							"id": "spotify",
							"type": "user",
							"uri": "spotify:user:spotify"
						},
						"primary_color": null,
						"public": null,
						"snapshot_id": "MTYyNzYxNDAwMCwwMDAwMDIzYjAwMDAwMTdhZjU1YWI0MGEwMDAwMDE3YWY0YzFlMWVl",
						"tracks": {
							"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWVLcZxJO5zyf/tracks",
							"total": 60
						},
						"type": "playlist",
						"uri": "spotify:playlist:37i9dQZF1DWVLcZxJO5zyf"
					},
					{
						"collaborative": false,
						"description": "Viva o rock nacional! Ouça o melhor do rock brasileiro. Foto: Sugar Kane",
						"external_urls": {
							"spotify": "https://open.spotify.com/playlist/37i9dQZF1DX2nd8BSnFnzT"
						},
						"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2nd8BSnFnzT",
						"id": "37i9dQZF1DX2nd8BSnFnzT",
						"images": [
							{
								"height": null,
								"url": "https://i.scdn.co/image/ab67706f000000036c32efc5e6d47104cced52ea",
								"width": null
							}
						],
						"name": "Pátria Rock",
						"owner": {
							"display_name": "Spotify",
							"external_urls": {
								"spotify": "https://open.spotify.com/user/spotify"
							},
							"href": "https://api.spotify.com/v1/users/spotify",
							"id": "spotify",
							"type": "user",
							"uri": "spotify:user:spotify"
						},
						"primary_color": null,
						"public": null,
						"snapshot_id": "MTYyNzYxNDA2MCwwMDAwMDEyZDAwMDAwMTdhZjU1YjllNTkwMDAwMDE3YWYzZjM2ZGMy",
						"tracks": {
							"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2nd8BSnFnzT/tracks",
							"total": 64
						},
						"type": "playlist",
						"uri": "spotify:playlist:37i9dQZF1DX2nd8BSnFnzT"
					},
					{
						"collaborative": false,
						"description": "Ouça o melhor do hip hop nacional. Foto: NOG, Leviano, Brandão85",
						"external_urls": {
							"spotify": "https://open.spotify.com/playlist/37i9dQZF1DWSIvbYYt1Dvi"
						},
						"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSIvbYYt1Dvi",
						"id": "37i9dQZF1DWSIvbYYt1Dvi",
						"images": [
							{
								"height": null,
								"url": "https://i.scdn.co/image/ab67706f00000003d9f0cbfb5c73e1b22935712b",
								"width": null
							}
						],
						"name": "RAPública",
						"owner": {
							"display_name": "Spotify",
							"external_urls": {
								"spotify": "https://open.spotify.com/user/spotify"
							},
							"href": "https://api.spotify.com/v1/users/spotify",
							"id": "spotify",
							"type": "user",
							"uri": "spotify:user:spotify"
						},
						"primary_color": null,
						"public": null,
						"snapshot_id": "MTYyNzYxNDEyMCwwMDAwMDEyNzAwMDAwMTdhZjU1Yzg4YjYwMDAwMDE3YWYzZmIyNGUy",
						"tracks": {
							"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSIvbYYt1Dvi/tracks",
							"total": 56
						},
						"type": "playlist",
						"uri": "spotify:playlist:37i9dQZF1DWSIvbYYt1Dvi"
					},
					{
						"collaborative": false,
						"description": "Ouça lançamentos e destaques do indie brasileiro. Foto: lalalaura",
						"external_urls": {
							"spotify": "https://open.spotify.com/playlist/37i9dQZF1DWZi7MSnECo7D"
						},
						"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZi7MSnECo7D",
						"id": "37i9dQZF1DWZi7MSnECo7D",
						"images": [
							{
								"height": null,
								"url": "https://i.scdn.co/image/ab67706f000000039e2a0b5ca5a259d4e9d0cf51",
								"width": null
							}
						],
						"name": "Indie Brasil",
						"owner": {
							"display_name": "Spotify",
							"external_urls": {
								"spotify": "https://open.spotify.com/user/spotify"
							},
							"href": "https://api.spotify.com/v1/users/spotify",
							"id": "spotify",
							"type": "user",
							"uri": "spotify:user:spotify"
						},
						"primary_color": null,
						"public": null,
						"snapshot_id": "MTYyNzYxNDEyMCwwMDAwMDFiZDAwMDAwMTdhZjU1Yzg4YjQwMDAwMDE3YWYzZjA2ZjVk",
						"tracks": {
							"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZi7MSnECo7D/tracks",
							"total": 100
						},
						"type": "playlist",
						"uri": "spotify:playlist:37i9dQZF1DWZi7MSnECo7D"
					}
				],
				"limit": 10,
				"next": "https://api.spotify.com/v1/browse/categories/toplists/playlists?country=BR&offset=10&limit=10",
				"offset": 0,
				"previous": null,
				"total": 22
			}
		}
	};

	const [state, dispatch] = useReducer(CategoriesState, initialState);

	return (
		<CategoriesContext.Provider
			value={{ categoriesHome: state.categoriesHome.categories.items,
            categoriesBrowse:state.categoriesBrowse.categories.items,
			currentCategories:state.currentCategories,
            }}>
			{props.children}
		</CategoriesContext.Provider>
	);
};
export default CategoriesState;
