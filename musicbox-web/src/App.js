import "./App.css";
import Home from "./components/pages/Home";
import Login from "./components/layout/auth/Login";
import PlaylistState from "./context/playlists/PlaylistState";
import SongsState from "./context/songs/SongsState";
import CategoriesState from "./context/categories/CategoriesState";
import Browse from "./components/pages/Browse";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from "./components/layout/NavBar";

function App() {
	return (
		<Router>
			<div className='App'>
				<CategoriesState>
					<SongsState>
						<PlaylistState>
							<Navbar />
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/browse" component={Browse} />
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
