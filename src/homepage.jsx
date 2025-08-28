import Header from "./components/header";
import Footer from "./components/footer";
import {  Outlet } from "react-router-dom";

function Homepage() {
    return(
        
        <div>
            <Header/>
            <Outlet/>   
            <div id="contact-section"> 
                <Footer />
            </div>
          
        </div>
    )
}
export default Homepage;