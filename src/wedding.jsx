import './wedding.css';
import { Link } from 'react-router-dom';


function Wedding(){
    return(
        <div>
            <div className='wedding-background'>
                <div>
                    <h1>Wedding's Planner</h1>
                    <button>Contact us</button>
                    <button className='wedding-button'>Learn More</button>
                </div>
            </div>
            <div className='wedding-matter1'>
                <div className='matter1-left'>
                <div className='left-para'>
                    <h2>Enchanting Weddings with Melodia: Your Premier Traditional and Destination Wedding Planners in Hyderabad</h2>
                    <p>Melodia’s wedding planners in Hyderabad, India, provide a wide range of services designed to help couples  Your Premier Traditional  Your Premier Traditional create the perfect wedding day the couple,working our magic to turn those dreams into reality.</p>
                    <p>Melodia’s wedding event planners and managers services are professional services provided  provide a wide range to help couples plan, organize, and execute their create a personalized plan for the wedding day.</p>
                </div>
                </div>
                <div className='matter1-right'>
                <div className='right-image'></div>
                </div>
            </div>
            <div className='wedding-video'>
                <div className='video-box'>
                <video  src="./weddingvideo22.mp4" autoPlay loop muted  playsInline/> 
                </div>
               
            </div>
            <div className='wedding-cards'>
                <div className='card1-row'>
                    <div className='box-1'>
                        <div className='box-top'></div>
                        <div className='box-down'>
                            <h2>Stage Decoration</h2>
                            <Link to="/Stagedecoration"><button>Learn More</button></Link>  
                        </div>
                    </div>
                    <div className='box-1'>
                    <div className='box-top2'></div>
                        <div className='box-down'>
                            <h2>Haldi Function</h2>
                            <Link to="/Haldi"><button>Learn More</button></Link>
                        </div>
                    </div>
                    <div className='box-1'>
                    <div className='box-top3'></div>
                        <div className='box-down'>
                            <h2>Dances</h2>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
                <div className='card1-row'>
                    <div className='box-1'>
                        <div className='box-top4'></div>
                        <div className='box-down'>
                            <h2>Car Decoration</h2>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className='box-1'>
                    <div className='box-top5'></div>
                        <div className='box-down'>
                            <h2>Bride Makeup</h2>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className='box-1'>
                    <div className='box-top6'></div>
                        <div className='box-down'>
                            <h2>Bride & Groom Outfits</h2>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Wedding;