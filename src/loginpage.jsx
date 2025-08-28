import './loginpage.css'
function LoginPage() {
    return(
        <div className='login-background'> 
         <div className='login-contain'>
            <div className='login-left'>
               <div className='login-boxmatter'>
                 <div className='matter-line1'>MELODIA - HYDERABAD'S VERY OWN EVENT COMPANY</div>
                 <div className='matter-line2'>
                    <h1>Looking for the Most Creative & Innovative Event Planners in Hyderabad?</h1>
                 </div>
                 <div className='matter-line3'>
                    <p>Imagine celebrating the most special events of your life without worrying about a single thing. Melodia® Events is here to make your dream events come true! Our expert event management team offers professional event planning and management services in cities, villages, and small towns across Hyberabad, from south to north, using creative and innovative methods to plan and curate perfect, hassle-free celebrations that will captivate your attendees.</p>
                    <p>Contact us today to bring your vision to life and create unforgettable memories!</p>
                 </div>
               </div> 
            </div>
            <div className='login-right'>
               <div className='input-box'>
                <input type='text' placeholder='Enter Your Full Name ' />
                <input type='number' placeholder='Enter Your Phone Number ' />
                <input type='email' placeholder='Enter Your Email ID ' />
                <div className='input-type'>
                <input type='text' placeholder='Message ' className='message-box'/>
                </div>

                <button type='submit' >SUBMIT</button>
               </div>
            </div>
         </div>

        </div>
    )
}
export default LoginPage;