
import Playlists from '../playlists/Playlists';


const NewReleases = ({newReleases}) => {



    return (
        <div className="recent">
            <h1 className="playlist-title">New Releases</h1>
            <div className="recently-played">
                <Playlists albums={newReleases} />
            </div>
        </div>
    )
}

export default NewReleases
