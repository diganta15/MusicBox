import "./App.css";
import Home from "./components/pages/Home";
import PlaylistState from "./context/playlists/PlaylistState";
import SongsState from "./context/songs/SongsState";

function App() {
	return (
		<div className='App'>
			<SongsState>
				<PlaylistState>
					<Home />
				</PlaylistState>
			</SongsState>
		</div>
	);
}

export default App;
