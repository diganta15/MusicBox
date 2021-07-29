import "./App.css";
import { useState } from "react";
import Home from "./components/pages/Home";
import Login from "./components/layout/auth/Login";
import Library from "./components/pages/Library";
import PlaylistState from "./context/playlists/PlaylistState";
import SongsState from "./context/songs/SongsState";
import CategoriesState from "./context/categories/CategoriesState";
import Browse from "./components/pages/Browse";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from "./components/layout/NavBar";

function App() {
	const [active, setActive] = useState('/')
	return (
		<Router>
			<div className='App'>
				<CategoriesState>
					<SongsState>
						<PlaylistState>
							<Navbar active={active} />
							<Switch>
								<Route exact path="/" render={(props) =>(
									<Home {...props} active={active} setActive={setActive}/>
								)} />
								<Route exact path="/browse" render={(props) => (
									<Browse {...props} active={active} setActive={setActive} />
								)}  />
								<Route exact path="/library" render={(props) => (
									<Library {...props} active={active} setActive={setActive} />
								)} />
								<Route exact path="/login" render={(props) => (
									<Login {...props} active={active} setActive={setActive} />
								)}  />
							</Switch>
						</PlaylistState>
					</SongsState>
				</CategoriesState>
			
			</div>
		</Router>
		
	);
}

export default App;
