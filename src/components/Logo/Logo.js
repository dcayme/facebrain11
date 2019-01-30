import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
	return(
		<div className="ma4 mt0">
			<Tilt className="Tilt shadow-2 br2" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
			 <div className="Tilt-inner pa3"> <img src={brain} alt='brain' style={{paddingTop:'8px'}} /> </div>
			</Tilt>

		</div>
	)
}

export default Logo;