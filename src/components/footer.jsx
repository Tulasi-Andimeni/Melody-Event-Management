import './footer.css';

function Footer() {
    return(
        <div>
            <div className="footer-background">
                <div className='footer-bg-matter'>
                    <div className='footer-icons'>
                            {/* <i class="fa-brands fa-instagram" ></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fas fa-coffee"></i> */}
                            <i class="fa-brands fa-youtube"></i> 
                            <i className="fa-brands fa-instagram" ></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div className='footer-logo'>
                        <div><img src='./logoevent.png'/></div>
                    </div>
                    <div className='footer-down'>
                        <div className='footer-left'>
                            <h1>Quick Links</h1>
                            <a href='#'>Home</a>
                            <a href='#'>About</a>
                            <a href='#'>Venues</a>
                            <a href='#'>Gallery</a>
                            <a href='#'>Contact</a>
                        </div>
                        <div className='footer-left'>
                            <h1>Services</h1>
                            <a href='#'>Wedding Planner</a>
                            <a href='#'>Brith Day Parties</a>
                            <a href='#'>Private Parties</a>
                            <a href='#'>Music & Entertainment</a>
                            <a href='#'>Destination Wedding</a>
                        </div>
                        <div className='footer-left'>
                            <h1>Other Links</h1>
                            <a href='#'>Blog</a>
                            <a href='#'>Testimonials</a>
                            <a href='#'>Privacy Policy</a>
                            <a href='#'>Cancellation and Refund</a>
                            <a href='#'>Terms and Conditions</a>
                        </div>
                        <div className='footer-right'>
                            <h1>Contact Info</h1>
                            <p>Melodia Event Management, Kakkanad, Hyderabad 682037</p>
                            <p>Melodia Event Management, Kuriachira, Hyderabad 680006</p>
                            <p>Melodia Event Management, Kozhikode, Hyderabad 673640</p>
                        </div>
                    </div>
                    <div className='footer-last'>
                        <div>+91-859 -001-0011</div>
                        <div>melodiaeventmanagement@gmail.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;