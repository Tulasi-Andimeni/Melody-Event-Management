import './Bday.css';
import { Link } from 'react-router-dom';

function Bday() {
    return(
        <div>
            <div className="bday-background">
                <div>
                    <h1>Brithday Party's</h1>
                    <button>Contact us</button>
                    <button className='bday-button1'>Learn More</button>
                </div>
            </div>
            <div className='bday-matter'>
                <div className='bday-matter-left'>
                    <h1>Birthday Party Planning – Make Every Year Unforgettable with Melodia</h1>
                    <div>Celebrate Life, One Birthday at a Time</div>
                    <p>Every birthday is a milestone, a moment to cherish the past, and look forward to new beginnings. At Melodia, we believe birthdays should be celebrated with style, laughter, and unforgettable experiences — whether it's your child’s first birthday, a sweet sixteen, an 18th bash, or a grand 60th celebration.</p>
                    <p>We specialize in customized birthday party planning that turns your ideas into vibrant, joy-filled events. From creative themes and stunning decorations to fun games and mouthwatering treats, we take care of everything so you can relax and enjoy the celebration.</p>
                </div>
                <div className='bday-matter-right'>
                    <div></div>
                </div>
            </div>
            <div className='bday-video'>
                <div>
                <video  src="./brithdayvideo.mp4" autoPlay loop muted />
                </div> 
            </div>
            <div className='bday-cards'>
                <div className='bday-card-box1'>
                    <div className='bday-box1-top'>
                        <div></div>
                    </div>
                    <div className='bday-box1-down'>
                        <h1>Decor & Ambience</h1>
                        <Link to="/Decoration"><button>Learn More</button></Link>
                    </div>
                </div>
                <div className='bday-card-box2'>
                <div className='bday-box1-top'>
                        <div className='bday-box2-img'></div>
                    </div>
                    <div className='bday-box1-down'>
                        <h1>Entertainment</h1>
                        <Link to="/Entertainment"><button>Learn More</button></Link>
                    </div>
                </div>
                <div className='bday-card-box3'>
                <div className='bday-box1-top'>
                        <div className='bday-box3-img'></div>
                    </div>
                    <div className='bday-box1-down'>
                        <h1>Music & DJ Services</h1>
                        <Link to="/Music"><button>Learn More</button></Link>
                    </div>
                </div>
                <div className='bday-card-box4'>
                <div className='bday-box1-top'>
                        <div className='bday-box4-img'></div>
                    </div>
                    <div className='bday-box1-down'>
                        <h1>Cake & Dessert Table</h1>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Bday;