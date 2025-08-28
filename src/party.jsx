import { Link } from 'react-router-dom';
import './party.css';

function Party (){
    return(
        <div>
            <div className='party-background'>
                <div>
                <h1>Private Party's</h1>
                    <button>Contact us</button>
                    <button className='party-button'>Learn More</button>
                </div>
            </div>
            <div className='party-matter'>
                <div className='party-matter-left'>
                    <h1>Private Parties – Celebrate Life's Best Moments with Melodia</h1>
                    <div>Your Exclusive Celebration, Perfectly Planned</div>
                    <p>Looking to host an intimate and unforgettable private party? Whether it's a cozy gathering, a surprise celebration, or a lavish cocktail night, Melodia brings class, creativity, and comfort to every private event we plan.</p>
                    <p>We believe every moment in life is worth celebrating — and we’re here to curate a private party experience that feels personal, premium, and unforgettable.</p>
                    <p>A private party is a closed, invitation-only celebration tailored for your friends, family, or select guests. These events are typically more personal, stylish, and relaxed, allowing hosts to connect deeply with their guests while enjoying a carefully planned experience.</p>
                </div>
                <div className='party-matter-right'>
                    <div></div>
                </div>
            </div>
            <div className='party-video'>
                <div>
                <video  src="./party-video.mp4" autoPlay loop muted />
                </div>
            </div>
            <div className='party-cards'>
                <div className='party-card-left'>
                    <div className='party-left-top'>
                        <div className='party-card-box2'>
                        <img src='privateparty1.jpeg'/>
                        <div className='party-box1-info'>
                             <h1>Venue Styling</h1>
                             <p>From elegant backdrops to themed setups, we create picture-perfect party stages.</p>
                             <Link to='/Decoration'><button> Learn More</button></Link>
                        </div>
                        </div>
                    <div className='party-card-box1'>
                        <img src='dj-bg4.jpeg'/>
                        <div className='party-box1-info'>
                             <h1>DJ & Sound Setup</h1>
                             <p>From elegant backdrops to themed setups, we create picture-perfect party stages.</p>
                             <Link to='/Music'><button> Learn More</button></Link>
                        </div>
                    </div>
                    <div className='party-card-box4'>
                        <img src='party2.jpg'/>
                        <div className='party-box1-info'>
                             <h1>Bar Management</h1>
                             <p>From elegant backdrops to themed setups, we create picture-perfect party stages.</p>
                             <button> Learn More</button>
                        </div>
                    </div>
                    </div>
                    <div className='party-card-right'>
                    <div className='party-card-box1'>
                        <img src='dance5.jpeg'/>
                        <div className='party-box1-info'>
                             <h1> Entertainment</h1>
                             <p>From elegant backdrops to themed setups, we create picture-perfect party stages.</p>
                             <Link to='/Entertainment'><button> Learn More</button></Link>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Party;