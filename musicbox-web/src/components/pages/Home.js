import React,{Fragment} from 'react'
import Recent from '../layout/Home/Recent'
import NavBar from '../layout/NavBar'

const Home = () => {
    return (
       <Fragment>
      <NavBar />
      <div className="home">
                <Recent />
      </div>
       </Fragment>
    )
}

export default Home
