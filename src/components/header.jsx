import'./header.css'

import { Link } from 'react-router-dom';

function Header () {
  

    return(
       <div className="container">

        <div className="header-left">
          {/* <div className="menu-icon" onClick={Menu}>≡</div> */}
            <div className="dropdown"></div>
            <div className="logo">
                <span className="brand-name">Melodia</span>
                <div className="subtext">Event Management</div>
            </div>
        </div>

      <div className='list'>
        <div className='drop-down'>
        <Link to="/"><a href='#' className='heading'>HOME</a></Link>
        </div>
        <div className='drop-down'>
        {/* <div className='heading'>ABOUT US</div> */}
        <a href="#about-section" className="heading">ABOUT US</a>
        </div>
        <div className='drop-downbox'>
        {/* <div className='heading'>SERVICES ▼</div> */}
        <a href="#service-section" className="heading">SERVICES ▼</a>
          <div className='drop-contain'>
            <Link to="/wedding"><div className='heading-1'>Wedding Planner</div></Link>
            <Link to="/Bday"><div className='heading-1'>Birthday Parties</div></Link>
            <Link to="/Party"><div className='heading-1'>Private Parties</div></Link>
            <Link to="/Babyshower"><div className='heading-1'>Baby Showers</div></Link>
            <Link to="/Destination"><div className='heading-1'>Destination Wedding</div></Link>
            
          </div>
        </div>
        <div className='drop-downbox'>
          <a href='#' className='heading'>GALLERY ▼</a>
        
          <div className='drop-contain'>
          <Link to='/Photo'><div className='heading-1'>Photo Gallery</div></Link>
          <Link to='/gallery'><div className='heading-1'>Video Gallery</div></Link>
          </div>
        </div>
        <div className='drop-down'>
        <a href="#contact-section" className="heading">CONTACT US</a>
        </div>
        
      </div>

       </div>

    
    )
}
export default Header;