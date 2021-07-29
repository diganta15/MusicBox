import React from "react";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ active }) => {
	return (
		<div className='navbar'>
			<div className='navbar-top grid'>
				<div className=' navbar-left'>
					<ul className='flex left-list'>
						<Link to='/'>
							<img src={logo} className='logo' alt='' />
						</Link>
						<Link to='/browse'>
							<li
								className={
									active === "/browse" ? "active-button pointer" : "pointer"
								}>
								Browse
							</li>
						</Link>

						<Link to='/library'>
							<li
								className={
									active === "/library" ? "active-button pointer" : "pointer"
								}>
								Library
							</li>
						</Link>

						<Link to='/'>
							<li
								className={
									active === "/" ? "active-button pointer" : "pointer"
								}>
								Home
							</li>
						</Link>
					</ul>
				</div>
				<div className='flex navbar-right'>
					<input
						type='text'
						placeholder='&#61442;  Search'
						name='search'
						id='search'
					/>
					<li id='account'>John Doe</li>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
