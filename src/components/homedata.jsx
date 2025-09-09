// import './homedata.css';

// import Service from "../service";
// import LoginPage from "../loginpage";
// import About from '../about';


// function HomeData() {
//     return(
//         <div>
//             <div className='background'>
//             <h1>home data</h1>
//             </div>
//             <About/>
//             <LoginPage/>
//             <Service/>
//         </div>
//     )
// }
// export default HomeData;

import './homedata.css';
import Service from "../service";
import LoginPage from "../loginpage";
import About from '../about';




function HomeData() {
    return (
        <div>
            <div className='background'>
                <div className='data-bg'>
                    <div className='data-bg-matter'>
                    <div>TAKE A TRIP INTO PARADISE</div>
                    <h1>Partner with Melodia Event Management in Hyderabad</h1>
                    <div className='data-matter-line'>Hyderabad's #1 Exclusive Event Company </div>
                    <div className='data-icons'></div>
                    <button>Contact Us</button>
                    </div>
                </div>
            </div>

            <div id="about-section">
                <About />
            </div>

            <LoginPage />
            <div id='service-section'>
                <Service />
            </div>

            {/* <div id="contact-section">
                <Footer />
            </div> */}
        </div>
    );
}

export default HomeData;
