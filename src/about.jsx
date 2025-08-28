// import './about.css'

// function About() {
//     return(
//         <div className='about-background'>
//             <div className='about-head'>
//             <h1>ABOUT US</h1>
//             </div>
//             <div className='about-down'>  
//                 <div className='about-main22'>
//                 <div className='about-main'>
//                     <div className='about-left'>
//                     <div className='about-leftbox'>
//                         <div className='about-autoscroll-yaxis'>
//                             <img src='./dances-25.jpeg' alt='image1'/>
//                             <img src='./reciption.jpeg' alt='image1'/>
//                             <img src='./wedding-bg3.jpeg' alt='image1'/>
//                             <img src='./haldi.jpeg' alt='image1'/>
//                         </div>
//                     </div>
//                     <div className='about-leftbox'>
//                         <div className='about-autoscroll'>
//                             <img src='./makeup11.jpeg' alt='image1'/>
//                             <img src='./marriage2.jpeg' alt='image1'/>
//                             <img src='./stage-bg6.jpeg' alt='image1'/>
//                             <img src='./Gender reveal.jpeg' alt='image1'/>
//                         </div>
//                     </div>
//                     </div>
//                     <div className='about-left'>
//                     <div className='about-leftbox'>
//                         <div className='about-autoscroll'>
//                         <img src='./makeup11.jpeg' alt='image1'/>
//                             <img src='./marriage2.jpeg' alt='image1'/>
//                             <img src='./stage-bg6.jpeg' alt='image1'/>
//                             <img src='./Gender reveal.jpeg' alt='image1'/>
//                         </div>
//                     </div>
//                     <div className='about-leftbox'>
//                         <div className='about-autoscroll-yaxis'>
//                             <img src='./dances-25.jpeg' alt='image1'/>
//                             <img src='./reciption.jpeg' alt='image1'/>
//                             <img src='./wedding-bg3.jpeg' alt='image1'/>
//                             <img src='./haldi.jpeg' alt='image1'/>
//                         </div>
//                     </div>    
//                     </div>
            
//                 </div>
//                 </div>
//                 <div className='about-right2'>
//                    <div className='about-matter'>
//                        <p> Welcome to Melodia, where your celebrations come to life with elegance, creativity, and a touch of magic! We are a full-service event planning and management company, dedicated to creating extraordinary moments for every type of occasion.</p><br/>
//                         <p>From lavish weddings to fun-filled birthday parties, from private celebrations to charming baby showers, we offer a wide range of customizable services designed to match your vision, theme, and budget.</p>
//                    </div>
//                    <h2>What We Do</h2>
//                    <div className='about-matter-1'>
//                     <div>✨<b> Wedding Planning</b> - Whether it's a traditional ceremony or a modern celebration, we curate each detail with care and love to make your and unforgettable.</div>
//                     <div><b>🎉 Birthday Parties</b> – From kids' themes to milestone celebrations, we bring energy, color, and creativity to every birthday.</div>
//                     <div>🏠 <b>Private Events</b> – Hosting an anniversary, engagement, or a small gathering? We handle everything with elegance and privacy.</div>
//                     <div>👶<b>Baby Showers</b> – We create adorable, cozy, and memorable baby showers for the new arrival.</div>
//                     {/* <div>🏞️<b> Venue Booking</b> – We help you find and book the perfect venue based on your style, guest count, and budget.</div> */}
//                     <div>🎈<b> Decoration Services</b> – Our design team transforms spaces with unique décor concepts, lighting, floral arrangements, and more.</div>
//                    </div>
//                 </div>

//             </div>
//         </div>
//     )
// }
// export default About;


import './about.css'
import { useEffect, useState } from 'react';

function About() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setFadeIn(true), 300); // Delay for animation
        return () => clearTimeout(timer);
    }, []);

    return(
        <div className='about-background'>
            <div className='about-head'>
                <h1>ABOUT US</h1>
            </div>
            <div className='about-down'>  
                <div className='about-main22'>
                    <div className='about-main'>
                        <div className='about-left'>
                            <div className='about-leftbox'>
                                <div className='about-autoscroll-yaxis'>
                                    <img src='./dances-25.jpeg' alt='image1'/>
                                    <img src='./reciption.jpeg' alt='image1'/>
                                    <img src='./wedding-bg3.jpeg' alt='image1'/>
                                    <img src='./haldi.jpeg' alt='image1'/>
                                </div>
                            </div>
                            <div className='about-leftbox'>
                                <div className='about-autoscroll'>
                                    <img src='./makeup11.jpeg' alt='image1'/>
                                    <img src='./marriage2.jpeg' alt='image1'/>
                                    <img src='./stage-bg6.jpeg' alt='image1'/>
                                    <img src='./Gender reveal.jpeg' alt='image1'/>
                                </div>
                            </div>
                        </div>
                        <div className='about-left'>
                            <div className='about-leftbox'>
                                <div className='about-autoscroll'>
                                    <img src='./makeup11.jpeg' alt='image1'/>
                                    <img src='./marriage2.jpeg' alt='image1'/>
                                    <img src='./stage-bg6.jpeg' alt='image1'/>
                                    <img src='./Gender reveal.jpeg' alt='image1'/>
                                </div>
                            </div>
                            <div className='about-leftbox'>
                                <div className='about-autoscroll-yaxis'>
                                    <img src='./dances-25.jpeg' alt='image1'/>
                                    <img src='./reciption.jpeg' alt='image1'/>
                                    <img src='./wedding-bg3.jpeg' alt='image1'/>
                                    <img src='./haldi.jpeg' alt='image1'/>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>

                <div className={`about-right2 ${fadeIn ? 'fade-in' : ''}`}>
                   <div className='about-matter'>
                       <p>Welcome to Melodia, where your celebrations come to life with elegance, creativity, and a touch of magic! We are a full-service event planning and management company, dedicated to creating extraordinary moments for every type of occasion.</p><br/>
                       <p>From lavish weddings to fun-filled birthday parties, from private celebrations to charming baby showers, we offer a wide range of customizable services designed to match your vision, theme, and budget.</p>
                   </div>
                   <h2>What We Do</h2>
                   <div className='about-matter-1'>
                        <div><b> Wedding Planning</b> - Whether it's a traditional ceremony or a modern celebration, we curate each detail .</div>
                        <div><b> Birthday Parties</b> – From kids' themes to milestone celebrations, we bring energy, color, and creativity to every birthday.</div>
                        <div> <b>Private Events</b> – Hosting an anniversary, engagement, or a small gathering? We handle everything with elegance and privacy.</div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default About;
