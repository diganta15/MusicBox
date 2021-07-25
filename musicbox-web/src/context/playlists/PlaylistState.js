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
		},
		newReleases: {
			"albums": {
				"href": "https://api.spotify.com/v1/browse/new-releases?country=SE&offset=0&limit=5",
				"items": [
					{
						"album_type": "single",
						"artists": [
							{
								"external_urls": {
									"spotify": "https://open.spotify.com/artist/6Ip8FS7vWT1uKkJSweANQK"
								},
								"href": "https://api.spotify.com/v1/artists/6Ip8FS7vWT1uKkJSweANQK",
								"id": "6Ip8FS7vWT1uKkJSweANQK",
								"name": "Dave",
								"type": "artist",
								"uri": "spotify:artist:6Ip8FS7vWT1uKkJSweANQK"
							}
						],
						"available_markets": [
							"AD",
							"AE",
							"AG",
							"AL",
							"AM",
							"AO",
							"AR",
							"AT",
							"AU",
							"AZ",
							"BA",
							"BB",
							"BD",
							"BE",
							"BF",
							"BG",
							"BH",
							"BI",
							"BJ",
							"BN",
							"BO",
							"BR",
							"BS",
							"BT",
							"BW",
							"BY",
							"BZ",
							"CA",
							"CH",
							"CI",
							"CL",
							"CM",
							"CO",
							"CR",
							"CV",
							"CW",
							"CY",
							"CZ",
							"DE",
							"DJ",
							"DK",
							"DM",
							"DO",
							"DZ",
							"EC",
							"EE",
							"EG",
							"ES",
							"FI",
							"FJ",
							"FM",
							"FR",
							"GA",
							"GB",
							"GD",
							"GE",
							"GH",
							"GM",
							"GN",
							"GQ",
							"GR",
							"GT",
							"GW",
							"GY",
							"HK",
							"HN",
							"HR",
							"HT",
							"HU",
							"ID",
							"IE",
							"IL",
							"IN",
							"IS",
							"IT",
							"JM",
							"JO",
							"JP",
							"KE",
							"KG",
							"KH",
							"KI",
							"KM",
							"KN",
							"KR",
							"KW",
							"KZ",
							"LA",
							"LB",
							"LC",
							"LI",
							"LK",
							"LR",
							"LS",
							"LT",
							"LU",
							"LV",
							"MA",
							"MC",
							"MD",
							"ME",
							"MG",
							"MH",
							"MK",
							"ML",
							"MN",
							"MO",
							"MR",
							"MT",
							"MU",
							"MV",
							"MW",
							"MX",
							"MY",
							"MZ",
							"NA",
							"NE",
							"NG",
							"NI",
							"NL",
							"NO",
							"NP",
							"NR",
							"NZ",
							"OM",
							"PA",
							"PE",
							"PG",
							"PH",
							"PK",
							"PL",
							"PS",
							"PT",
							"PW",
							"PY",
							"QA",
							"RO",
							"RS",
							"RU",
							"RW",
							"SA",
							"SB",
							"SC",
							"SE",
							"SG",
							"SI",
							"SK",
							"SL",
							"SM",
							"SN",
							"SR",
							"ST",
							"SV",
							"SZ",
							"TD",
							"TG",
							"TH",
							"TL",
							"TN",
							"TO",
							"TR",
							"TT",
							"TV",
							"TW",
							"TZ",
							"UA",
							"UG",
							"US",
							"UY",
							"UZ",
							"VC",
							"VN",
							"VU",
							"WS",
							"XK",
							"ZA",
							"ZM",
							"ZW"
						],
						"external_urls": {
							"spotify": "https://open.spotify.com/album/5ABN8cUVC3sZZQQLvGjiUM"
						},
						"href": "https://api.spotify.com/v1/albums/5ABN8cUVC3sZZQQLvGjiUM",
						"id": "5ABN8cUVC3sZZQQLvGjiUM",
						"images": [
							{
								"height": 640,
								"url": "https://i.scdn.co/image/ab67616d0000b2738e401f237540dd0cb3b592ea",
								"width": 640
							},
							{
								"height": 300,
								"url": "https://i.scdn.co/image/ab67616d00001e028e401f237540dd0cb3b592ea",
								"width": 300
							},
							{
								"height": 64,
								"url": "https://i.scdn.co/image/ab67616d000048518e401f237540dd0cb3b592ea",
								"width": 64
							}
						],
						"name": "System (feat. WizKid)",
						"release_date": "2021-07-22",
						"release_date_precision": "day",
						"total_tracks": 1,
						"type": "album",
						"uri": "spotify:album:5ABN8cUVC3sZZQQLvGjiUM"
					},
					{
						"album_type": "single",
						"artists": [
							{
								"external_urls": {
									"spotify": "https://open.spotify.com/artist/6aaMZ3fcfLv4tEbmY7bjRM"
								},
								"href": "https://api.spotify.com/v1/artists/6aaMZ3fcfLv4tEbmY7bjRM",
								"id": "6aaMZ3fcfLv4tEbmY7bjRM",
								"name": "Isaiah Rashad",
								"type": "artist",
								"uri": "spotify:artist:6aaMZ3fcfLv4tEbmY7bjRM"
							},
							{
								"external_urls": {
									"spotify": "https://open.spotify.com/artist/4E2rKHVDssGJm2SCDOMMJB"
								},
								"href": "https://api.spotify.com/v1/artists/4E2rKHVDssGJm2SCDOMMJB",
								"id": "4E2rKHVDssGJm2SCDOMMJB",
								"name": "Iamdoechii",
								"type": "artist",
								"uri": "spotify:artist:4E2rKHVDssGJm2SCDOMMJB"
							}
						],
						"available_markets": [
							"AD",
							"AE",
							"AG",
							"AL",
							"AM",
							"AO",
							"AR",
							"AT",
							"AU",
							"AZ",
							"BA",
							"BB",
							"BD",
							"BE",
							"BF",
							"BG",
							"BH",
							"BI",
							"BJ",
							"BN",
							"BO",
							"BR",
							"BS",
							"BT",
							"BW",
							"BY",
							"BZ",
							"CA",
							"CH",
							"CI",
							"CL",
							"CM",
							"CO",
							"CR",
							"CV",
							"CW",
							"CY",
							"CZ",
							"DE",
							"DJ",
							"DK",
							"DM",
							"DO",
							"DZ",
							"EC",
							"EE",
							"EG",
							"ES",
							"FI",
							"FJ",
							"FM",
							"FR",
							"GA",
							"GB",
							"GD",
							"GE",
							"GH",
							"GM",
							"GN",
							"GQ",
							"GR",
							"GT",
							"GW",
							"GY",
							"HK",
							"HN",
							"HR",
							"HT",
							"HU",
							"ID",
							"IE",
							"IL",
							"IN",
							"IS",
							"IT",
							"JM",
							"JO",
							"JP",
							"KE",
							"KG",
							"KH",
							"KI",
							"KM",
							"KN",
							"KR",
							"KW",
							"KZ",
							"LA",
							"LB",
							"LC",
							"LI",
							"LK",
							"LR",
							"LS",
							"LT",
							"LU",
							"LV",
							"MA",
							"MC",
							"MD",
							"ME",
							"MG",
							"MH",
							"MK",
							"ML",
							"MN",
							"MO",
							"MR",
							"MT",
							"MU",
							"MV",
							"MW",
							"MX",
							"MY",
							"MZ",
							"NA",
							"NE",
							"NG",
							"NI",
							"NL",
							"NO",
							"NP",
							"NR",
							"NZ",
							"OM",
							"PA",
							"PE",
							"PG",
							"PH",
							"PK",
							"PL",
							"PS",
							"PT",
							"PW",
							"PY",
							"QA",
							"RO",
							"RS",
							"RU",
							"RW",
							"SA",
							"SB",
							"SC",
							"SE",
							"SG",
							"SI",
							"SK",
							"SL",
							"SM",
							"SN",
							"SR",
							"ST",
							"SV",
							"SZ",
							"TD",
							"TG",
							"TH",
							"TL",
							"TN",
							"TO",
							"TR",
							"TT",
							"TV",
							"TW",
							"TZ",
							"UA",
							"UG",
							"US",
							"UY",
							"UZ",
							"VC",
							"VN",
							"VU",
							"WS",
							"XK",
							"ZA",
							"ZM",
							"ZW"
						],
						"external_urls": {
							"spotify": "https://open.spotify.com/album/4aceyVJhrJ7gLTlqEPaBKk"
						},
						"href": "https://api.spotify.com/v1/albums/4aceyVJhrJ7gLTlqEPaBKk",
						"id": "4aceyVJhrJ7gLTlqEPaBKk",
						"images": [
							{
								"height": 640,
								"url": "https://i.scdn.co/image/ab67616d0000b2731f5b76066a5d363c721f1c34",
								"width": 640
							},
							{
								"height": 300,
								"url": "https://i.scdn.co/image/ab67616d00001e021f5b76066a5d363c721f1c34",
								"width": 300
							},
							{
								"height": 64,
								"url": "https://i.scdn.co/image/ab67616d000048511f5b76066a5d363c721f1c34",
								"width": 64
							}
						],
						"name": "Wat U Sed (feat. Iamdoechii & Kal Banx)",
						"release_date": "2021-07-23",
						"release_date_precision": "day",
						"total_tracks": 1,
						"type": "album",
						"uri": "spotify:album:4aceyVJhrJ7gLTlqEPaBKk"
					},
					{
						"album_type": "single",
						"artists": [
							{
								"external_urls": {
									"spotify": "https://open.spotify.com/artist/6jeg7JBX9J9097esK752iR"
								},
								"href": "https://api.spotify.com/v1/artists/6jeg7JBX9J9097esK752iR",
								"id": "6jeg7JBX9J9097esK752iR",
								"name": "Smiley",
								"type": "artist",
								"uri": "spotify:artist:6jeg7JBX9J9097esK752iR"
							},
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
						"available_markets": [
							"AD",
							"AE",
							"AG",
							"AL",
							"AM",
							"AO",
							"AR",
							"AT",
							"AU",
							"AZ",
							"BA",
							"BB",
							"BD",
							"BE",
							"BF",
							"BG",
							"BH",
							"BI",
							"BJ",
							"BN",
							"BO",
							"BR",
							"BS",
							"BT",
							"BW",
							"BY",
							"BZ",
							"CA",
							"CH",
							"CI",
							"CL",
							"CM",
							"CO",
							"CR",
							"CV",
							"CW",
							"CY",
							"CZ",
							"DE",
							"DJ",
							"DK",
							"DM",
							"DO",
							"DZ",
							"EC",
							"EE",
							"EG",
							"ES",
							"FI",
							"FJ",
							"FM",
							"FR",
							"GA",
							"GB",
							"GD",
							"GE",
							"GH",
							"GM",
							"GN",
							"GQ",
							"GR",
							"GT",
							"GW",
							"GY",
							"HK",
							"HN",
							"HR",
							"HT",
							"HU",
							"ID",
							"IE",
							"IL",
							"IN",
							"IS",
							"IT",
							"JM",
							"JO",
							"JP",
							"KE",
							"KG",
							"KH",
							"KI",
							"KM",
							"KN",
							"KR",
							"KW",
							"KZ",
							"LA",
							"LB",
							"LC",
							"LI",
							"LK",
							"LR",
							"LS",
							"LT",
							"LU",
							"LV",
							"MA",
							"MC",
							"MD",
							"ME",
							"MG",
							"MH",
							"MK",
							"ML",
							"MN",
							"MO",
							"MR",
							"MT",
							"MU",
							"MV",
							"MW",
							"MX",
							"MY",
							"MZ",
							"NA",
							"NE",
							"NG",
							"NI",
							"NL",
							"NO",
							"NP",
							"NR",
							"NZ",
							"OM",
							"PA",
							"PE",
							"PG",
							"PH",
							"PK",
							"PL",
							"PS",
							"PT",
							"PW",
							"PY",
							"QA",
							"RO",
							"RS",
							"RU",
							"RW",
							"SA",
							"SB",
							"SC",
							"SE",
							"SG",
							"SI",
							"SK",
							"SL",
							"SM",
							"SN",
							"SR",
							"ST",
							"SV",
							"SZ",
							"TD",
							"TG",
							"TH",
							"TL",
							"TN",
							"TO",
							"TR",
							"TT",
							"TV",
							"TW",
							"TZ",
							"UA",
							"UG",
							"US",
							"UY",
							"UZ",
							"VC",
							"VN",
							"VU",
							"WS",
							"XK",
							"ZA",
							"ZM",
							"ZW"
						],
						"external_urls": {
							"spotify": "https://open.spotify.com/album/4ROMS3rcR9JepxAtDRpvc5"
						},
						"href": "https://api.spotify.com/v1/albums/4ROMS3rcR9JepxAtDRpvc5",
						"id": "4ROMS3rcR9JepxAtDRpvc5",
						"images": [
							{
								"height": 640,
								"url": "https://i.scdn.co/image/ab67616d0000b273bfc336878a9695721f721861",
								"width": 640
							},
							{
								"height": 300,
								"url": "https://i.scdn.co/image/ab67616d00001e02bfc336878a9695721f721861",
								"width": 300
							},
							{
								"height": 64,
								"url": "https://i.scdn.co/image/ab67616d00004851bfc336878a9695721f721861",
								"width": 64
							}
						],
						"name": "Over The Top (feat. Drake)",
						"release_date": "2021-07-23",
						"release_date_precision": "day",
						"total_tracks": 1,
						"type": "album",
						"uri": "spotify:album:4ROMS3rcR9JepxAtDRpvc5"
					},
					{
						"album_type": "single",
						"artists": [
							{
								"external_urls": {
									"spotify": "https://open.spotify.com/artist/1tG7s7S4sq2eFFW0QZyLbm"
								},
								"href": "https://api.spotify.com/v1/artists/1tG7s7S4sq2eFFW0QZyLbm",
								"id": "1tG7s7S4sq2eFFW0QZyLbm",
								"name": "Sheff G",
								"type": "artist",
								"uri": "spotify:artist:1tG7s7S4sq2eFFW0QZyLbm"
							}
						],
						"available_markets": [
							"AD",
							"AE",
							"AG",
							"AL",
							"AM",
							"AO",
							"AR",
							"AT",
							"AU",
							"AZ",
							"BA",
							"BB",
							"BD",
							"BE",
							"BF",
							"BG",
							"BH",
							"BI",
							"BJ",
							"BN",
							"BO",
							"BR",
							"BS",
							"BT",
							"BW",
							"BY",
							"BZ",
							"CA",
							"CH",
							"CI",
							"CL",
							"CM",
							"CO",
							"CR",
							"CV",
							"CW",
							"CY",
							"CZ",
							"DE",
							"DJ",
							"DK",
							"DM",
							"DO",
							"DZ",
							"EC",
							"EE",
							"EG",
							"ES",
							"FI",
							"FJ",
							"FM",
							"FR",
							"GA",
							"GB",
							"GD",
							"GE",
							"GH",
							"GM",
							"GN",
							"GQ",
							"GR",
							"GT",
							"GW",
							"GY",
							"HK",
							"HN",
							"HR",
							"HT",
							"HU",
							"ID",
							"IE",
							"IL",
							"IN",
							"IS",
							"IT",
							"JM",
							"JO",
							"JP",
							"KE",
							"KG",
							"KH",
							"KI",
							"KM",
							"KN",
							"KR",
							"KW",
							"KZ",
							"LA",
							"LB",
							"LC",
							"LI",
							"LK",
							"LR",
							"LS",
							"LT",
							"LU",
							"LV",
							"MA",
							"MC",
							"MD",
							"ME",
							"MG",
							"MH",
							"MK",
							"ML",
							"MN",
							"MO",
							"MR",
							"MT",
							"MU",
							"MV",
							"MW",
							"MX",
							"MY",
							"MZ",
							"NA",
							"NE",
							"NG",
							"NI",
							"NL",
							"NO",
							"NP",
							"NR",
							"NZ",
							"OM",
							"PA",
							"PE",
							"PG",
							"PH",
							"PK",
							"PL",
							"PS",
							"PT",
							"PW",
							"PY",
							"QA",
							"RO",
							"RS",
							"RU",
							"RW",
							"SA",
							"SB",
							"SC",
							"SE",
							"SG",
							"SI",
							"SK",
							"SL",
							"SM",
							"SN",
							"SR",
							"ST",
							"SV",
							"SZ",
							"TD",
							"TG",
							"TH",
							"TL",
							"TN",
							"TO",
							"TR",
							"TT",
							"TV",
							"TW",
							"TZ",
							"UA",
							"UG",
							"US",
							"UY",
							"UZ",
							"VC",
							"VN",
							"VU",
							"WS",
							"XK",
							"ZA",
							"ZM",
							"ZW"
						],
						"external_urls": {
							"spotify": "https://open.spotify.com/album/5d1WnOlcSun3ghG0H3dV7z"
						},
						"href": "https://api.spotify.com/v1/albums/5d1WnOlcSun3ghG0H3dV7z",
						"id": "5d1WnOlcSun3ghG0H3dV7z",
						"images": [
							{
								"height": 640,
								"url": "https://i.scdn.co/image/ab67616d0000b2732ff0ae4bc39196d0d84e1e2d",
								"width": 640
							},
							{
								"height": 300,
								"url": "https://i.scdn.co/image/ab67616d00001e022ff0ae4bc39196d0d84e1e2d",
								"width": 300
							},
							{
								"height": 64,
								"url": "https://i.scdn.co/image/ab67616d000048512ff0ae4bc39196d0d84e1e2d",
								"width": 64
							}
						],
						"name": "On Go (feat. Polo G)",
						"release_date": "2021-07-23",
						"release_date_precision": "day",
						"total_tracks": 1,
						"type": "album",
						"uri": "spotify:album:5d1WnOlcSun3ghG0H3dV7z"
					},
					{
						"album_type": "single",
						"artists": [
							{
								"external_urls": {
									"spotify": "https://open.spotify.com/artist/4gzpq5DPGxSnKTe4SA8HAU"
								},
								"href": "https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU",
								"id": "4gzpq5DPGxSnKTe4SA8HAU",
								"name": "Coldplay",
								"type": "artist",
								"uri": "spotify:artist:4gzpq5DPGxSnKTe4SA8HAU"
							}
						],
						"available_markets": [
							"AD",
							"AE",
							"AG",
							"AL",
							"AM",
							"AO",
							"AR",
							"AT",
							"AU",
							"AZ",
							"BA",
							"BB",
							"BD",
							"BE",
							"BF",
							"BG",
							"BH",
							"BI",
							"BJ",
							"BN",
							"BO",
							"BR",
							"BS",
							"BT",
							"BW",
							"BY",
							"BZ",
							"CA",
							"CH",
							"CI",
							"CL",
							"CM",
							"CO",
							"CR",
							"CV",
							"CW",
							"CY",
							"CZ",
							"DE",
							"DJ",
							"DK",
							"DM",
							"DO",
							"DZ",
							"EC",
							"EE",
							"EG",
							"ES",
							"FI",
							"FJ",
							"FM",
							"FR",
							"GA",
							"GB",
							"GD",
							"GE",
							"GH",
							"GM",
							"GN",
							"GQ",
							"GR",
							"GT",
							"GW",
							"GY",
							"HK",
							"HN",
							"HR",
							"HT",
							"HU",
							"ID",
							"IE",
							"IL",
							"IN",
							"IS",
							"IT",
							"JM",
							"JO",
							"JP",
							"KE",
							"KG",
							"KH",
							"KI",
							"KM",
							"KN",
							"KR",
							"KW",
							"KZ",
							"LA",
							"LB",
							"LC",
							"LI",
							"LK",
							"LR",
							"LS",
							"LT",
							"LU",
							"LV",
							"MA",
							"MC",
							"MD",
							"ME",
							"MG",
							"MH",
							"MK",
							"ML",
							"MN",
							"MO",
							"MR",
							"MT",
							"MU",
							"MV",
							"MW",
							"MX",
							"MY",
							"MZ",
							"NA",
							"NE",
							"NG",
							"NI",
							"NL",
							"NO",
							"NP",
							"NR",
							"NZ",
							"OM",
							"PA",
							"PE",
							"PG",
							"PH",
							"PK",
							"PL",
							"PS",
							"PT",
							"PW",
							"PY",
							"QA",
							"RO",
							"RS",
							"RU",
							"RW",
							"SA",
							"SB",
							"SC",
							"SE",
							"SG",
							"SI",
							"SK",
							"SL",
							"SM",
							"SN",
							"SR",
							"ST",
							"SV",
							"SZ",
							"TD",
							"TG",
							"TH",
							"TL",
							"TN",
							"TO",
							"TR",
							"TT",
							"TV",
							"TW",
							"TZ",
							"UA",
							"UG",
							"US",
							"UY",
							"UZ",
							"VC",
							"VN",
							"VU",
							"WS",
							"XK",
							"ZA",
							"ZM",
							"ZW"
						],
						"external_urls": {
							"spotify": "https://open.spotify.com/album/0G0WNcM706ASd6n7UxXuKu"
						},
						"href": "https://api.spotify.com/v1/albums/0G0WNcM706ASd6n7UxXuKu",
						"id": "0G0WNcM706ASd6n7UxXuKu",
						"images": [
							{
								"height": 640,
								"url": "https://i.scdn.co/image/ab67616d0000b2738e6e01a0deaa183a6c3d92a4",
								"width": 640
							},
							{
								"height": 300,
								"url": "https://i.scdn.co/image/ab67616d00001e028e6e01a0deaa183a6c3d92a4",
								"width": 300
							},
							{
								"height": 64,
								"url": "https://i.scdn.co/image/ab67616d000048518e6e01a0deaa183a6c3d92a4",
								"width": 64
							}
						],
						"name": "Coloratura",
						"release_date": "2021-07-23",
						"release_date_precision": "day",
						"total_tracks": 1,
						"type": "album",
						"uri": "spotify:album:0G0WNcM706ASd6n7UxXuKu"
					}
				],
				"limit": 5,
				"next": "https://api.spotify.com/v1/browse/new-releases?country=SE&offset=5&limit=5",
				"offset": 0,
				"previous": null,
				"total": 100
			}
		},
		featured: {
			"message": "Redaktionens val",
			"playlists": {
				"href": "https://api.spotify.com/v1/browse/featured-playlists?country=SE&timestamp=2021-07-25T11%3A20%3A50&offset=0&limit=5",
				"items": [
					{
						"collaborative": false,
						"description": "Let's have some fun!",
						"external_urls": {
							"spotify": "https://open.spotify.com/playlist/37i9dQZF1DX1KNWRo711ed"
						},
						"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1KNWRo711ed",
						"id": "37i9dQZF1DX1KNWRo711ed",
						"images": [
							{
								"height": null,
								"url": "https://i.scdn.co/image/ab67706f00000003d5ffd45a445bb10d75860445",
								"width": null
							}
						],
						"name": "Sunday Funday",
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
						"snapshot_id": "MTYyNzIxMjA0MSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
						"tracks": {
							"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX1KNWRo711ed/tracks",
							"total": 75
						},
						"type": "playlist",
						"uri": "spotify:playlist:37i9dQZF1DX1KNWRo711ed"
					},
					{
						"collaborative": false,
						"description": "It's Hits - bästa och största hitsen just nu.",
						"external_urls": {
							"spotify": "https://open.spotify.com/playlist/37i9dQZF1DWTMYgB8TqtmR"
						},
						"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTMYgB8TqtmR",
						"id": "37i9dQZF1DWTMYgB8TqtmR",
						"images": [
							{
								"height": null,
								"url": "https://i.scdn.co/image/ab67706f00000003a17f462e08cbcc10b41201c0",
								"width": null
							}
						],
						"name": "It's Hits Sweden",
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
						"snapshot_id": "MTYyNjk5NDcxNSwwMDAwMDRjNDAwMDAwMTdhZDA3MTJjMzQwMDAwMDE3YWNlM2M3ODcx",
						"tracks": {
							"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTMYgB8TqtmR/tracks",
							"total": 50
						},
						"type": "playlist",
						"uri": "spotify:playlist:37i9dQZF1DWTMYgB8TqtmR"
					},
					{
						"collaborative": false,
						"description": "Favoritlåtar för lugna och sköna stunder.",
						"external_urls": {
							"spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4Umko6nOmN7"
						},
						"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4Umko6nOmN7",
						"id": "37i9dQZF1DX4Umko6nOmN7",
						"images": [
							{
								"height": null,
								"url": "https://i.scdn.co/image/ab67706f00000003b5d6c9142cdd7c1af587fded",
								"width": null
							}
						],
						"name": "Lugnt & Skönt",
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
						"snapshot_id": "MTYyNzIxMjAzOSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
						"tracks": {
							"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4Umko6nOmN7/tracks",
							"total": 100
						},
						"type": "playlist",
						"uri": "spotify:playlist:37i9dQZF1DX4Umko6nOmN7"
					},
					{
						"collaborative": false,
						"description": "The country we love.",
						"external_urls": {
							"spotify": "https://open.spotify.com/playlist/37i9dQZF1DX5ujBvEDjewo"
						},
						"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5ujBvEDjewo",
						"id": "37i9dQZF1DX5ujBvEDjewo",
						"images": [
							{
								"height": null,
								"url": "https://i.scdn.co/image/ab67706f00000003c3f3cc06935084e71659df80",
								"width": null
							}
						],
						"name": "Dreaming of Nashville",
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
						"snapshot_id": "MTYyNzAxNTAxNiwwMDAwMDAwODAwMDAwMTdhZDFhNmYxODUwMDAwMDE2ZTZmZTZmNWEx",
						"tracks": {
							"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5ujBvEDjewo/tracks",
							"total": 49
						},
						"type": "playlist",
						"uri": "spotify:playlist:37i9dQZF1DX5ujBvEDjewo"
					},
					{
						"collaborative": false,
						"description": "Från norra till södra. Det här är svensk rap.",
						"external_urls": {
							"spotify": "https://open.spotify.com/playlist/37i9dQZF1DX5cpU86I7OAy"
						},
						"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5cpU86I7OAy",
						"id": "37i9dQZF1DX5cpU86I7OAy",
						"images": [
							{
								"height": null,
								"url": "https://i.scdn.co/image/ab67706f0000000393d95dd2fdbe4bf9433fc324",
								"width": null
							}
						],
						"name": "Svensk Rap",
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
						"snapshot_id": "MTYyNzIxMjA1MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
						"tracks": {
							"href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX5cpU86I7OAy/tracks",
							"total": 80
						},
						"type": "playlist",
						"uri": "spotify:playlist:37i9dQZF1DX5cpU86I7OAy"
					}
				],
				"limit": 5,
				"next": "https://api.spotify.com/v1/browse/featured-playlists?country=SE&timestamp=2021-07-25T11%3A20%3A50&offset=5&limit=5",
				"offset": 0,
				"previous": null,
				"total": 14
			}
		},
		

		

		
	};

	const [state, dispatch] = useReducer(PlaylistReducer, initialState);

	//Methods

	return (
		<PlaylistContext.Provider value={{ recent: state.recent, myAlbums:state.myAlbums.albums.items, newReleases:state.newReleases.albums.items, featured:state.featured.playlists.items }}>
			{props.children}
		</PlaylistContext.Provider>
	);
};
export default PlaylistState;
