import "./App.css";
import Home from "./components/pages/Home";
import Login from "./components/layout/auth/Login";
import PlaylistState from "./context/playlists/PlaylistState";
import SongsState from "./context/songs/SongsState";
import CategoriesState from "./context/categories/CategoriesState";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
	return (
		<Router>
			<div className='App'>
				<CategoriesState>
					<SongsState>
						<PlaylistState>
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/login" component={Login} />
							</Switch>
						</PlaylistState>
					</SongsState>
				</CategoriesState>
			
			</div>
		</Router>
		
	);
}

export default App;
