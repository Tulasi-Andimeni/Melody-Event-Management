import './service.css';
import { Link } from 'react-router-dom';

function Service() {
    return(
        <div className="service-background">
          <div className='serivce-head'>
               <h4>OUR SERVICES</h4>
          </div>
          <div className='serivce-head-2'>
            <h2>Services by Melodia® Event Management</h2>
          </div>
          <div className='service-matter'>
              <p >Melodia Events is your trusted partner for unforgettable celebrations. We specialize in offering  </p>
              <p> event management solutions including wedding planning, birthday parties, private events, baby showers, venue bookings, and themed decorations. With a creative and detail-oriented team, we deliver personalized  vibrant reality. Whether it's a celebration, we ensure every event is executed flawlessly across all locations. Get in touch with us and let’s make your moments magical.</p>
          </div>
          <div className='service-down'>
            <div className='service-cards-row1'>
              <div className='card-1'>
                <div className='card-top'>
                    <div className='card-image'></div>
                </div>
                <div className='card-matter'>
                    <h3>Wedding Planners</h3>
                    <p>Have you ever dreamed of planning the perfect dream to be remembered forever</p>
                </div>
                <Link to='/wedding'><div className='card-down'> Learn More </div></Link> 
              </div>
              <div className='card-1'>
              <div className='card-top'>
                    <div className='card-image-bday'></div>
                </div>
                <div className='card-matter'>
                    <h3>Birthday Party's</h3>
                    <p>Dress to shine, bring your sparkle, and let’s make this a to the remember forever!</p>
                </div>
                <Link to='/Bday'><div className='card-down'> Learn More </div></Link>
              </div>
              <div className='card-1'>
              <div className='card-top'>
                    <div className='card-image-private'></div>
                </div>
                <div className='card-matter'>
                    <h3>Private Party's</h3>
                    <p>A special day, a special one, and a close circle of memories, and heartfelt vibes. </p>
                </div>
                <Link to='/party'><div className='card-down'> Learn More </div></Link>
              </div>
              <div className='card-1'>
              <div className='card-top'>
                    <div className='card-image-baby'></div>
                </div>
                <div className='card-matter'>
                    <h3>Baby Shower</h3>
                    <p>A Little One is on the Way! Let’s shower her with hugs, to welcome her bundle of joy! </p>
                </div>
                <Link to='/babyshower'><div className='card-down'> Learn More </div></Link>
              </div>
            </div>
            <div className='service-cards-row1'>
            <div className='card-1'>
                <div className='card-top'>
                    <div className='card-image-desti'></div>
                </div>
                <div className='card-matter'>
                    <h3>Destination Weddings</h3>
                    <p>Pack Your Bags for Love! We’re tying the knot… and on this unforgettable journey! </p>
                </div>
                <Link to='/destination'><div className='card-down'> Learn More </div></Link>
              </div>
              <div className='card-1'>
              <div className='card-top'>
                    <div className='card-image-photo'></div>
                </div>
                <div className='card-matter'>
                    <h3>Photo Gallery</h3>
                    <p>Moments Captured, Memories Cherished Celebrate the journey, snapshot at a time.</p>
                </div>
                <Link to='/photo'><div className='card-down'> Learn More </div></Link>
              </div>
              <div className='card-1'>
              <div className='card-top'>
                    <div className='card-image-video'></div>
                </div>
                <div className='card-matter'>
                    <h3>Video Gallery</h3>
                    <p>Have you ever dreamed of planning the perfect dream to be remembered forever</p>
                </div>
                <Link to='/gallery'><div className='card-down'> Learn More </div></Link>
              </div>
              {/* <div className='card-1'>
              <div className='card-top'>
                    <div className='card-image'></div>
                </div>
                <div className='card-matter'>
                    <h3>Wedding Planners</h3>
                    <p>Have you ever dreamed of planning the perfect dream event to be remembered forever?</p>
                </div>
                <div className='card-down'> Learn More </div>
              </div> */}
            </div>

          </div>
        </div>
    )
}
export default Service;