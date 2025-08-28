import './destination.css';
import { Link } from 'react-router-dom';

const Destination = () =>{
    return(
        <div>
            <div className='destination-background'>
            <div>
                <h1>Destination Wedding's</h1>
                    <button>Contact us</button>
                    <button className='desti-button'>Learn More</button>
                </div>
            </div>
            <div className='destination-content'>
                <div className='destination-content-left'>
                     <h1> Destination Weddings – Celebrate Love in Paradise with Melodia</h1>
                     <p>Imagine exchanging vows against the backdrop of a serene beach sunset, in a royal palace echoing with tradition, or amidst misty mountains that touch the sky — with Melodia, your dream destination wedding becomes a breathtaking reality.</p>
                     <p>We don’t just plan weddings… we create unforgettable journeys where love meets luxury, tradition blends with trend, and every detail is curated with care.</p>
                </div>
                <div className='destination-content-right'>
                    <div className='destionation-right-box1'>
                        <div className='desti-box1-img'></div>
                    </div>
                    <div className='destionation-right-box2'>
                        <div className='desti-box2-img'></div>
                    </div>
                </div>
            </div>
            <div className='desti-video'>
                <div className='desti-video-box'>
                    <video  src="./destinaction.mp4" autoPlay loop muted /> 
                </div>
            </div>
            <div className='desti-cards'>
                <div className='desti-card-box1'>
                    <div className='desti-box1-top'>
                        <div></div>
                    </div>
                    <div className='desti-box1-down'>
                        <h1>Decor & Ambience</h1>
                        <Link to='/Decoration'><button>Learn More</button></Link>
                    </div>
                </div>
                <div className='desti-card-box2'>
                <div className='desti-box2-top'>
                        <div></div>
                    </div>
                    <div className='desti-box1-down'>
                        <h1>Entertainment</h1>
                        <Link to='/Entertainment'><button>Learn More</button></Link>
                    </div>
                </div>
                <div className='desti-card-box3'>
                <div className='desti-box3-top'>
                        <div></div>
                    </div>
                    <div className='desti-box1-down'>
                        <h1>Photography</h1>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className='desti-card-box4'>
                <div className='desti-box4-top'>
                        <div></div>
                    </div>
                    <div className='desti-box1-down'>
                        <h1>Return Gifts</h1>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Destination;