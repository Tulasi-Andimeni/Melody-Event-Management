
import './photo.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

function Photo () {

    const settings = {
        dots: false,             
        infinite: true,         
        slidesToShow: 4,       
        slidesToScroll: 1,     
        autoplay: true,         
        speed: 1000,
        autoplaySpeed: 1000,    
        cssEase: "linear",      
        arrows: false,        
    };

    return (
        <div>
            <div className='photo-background'>
                <div>
                    <h1>Photo Gallery</h1>
                </div>
            </div>
            <div className='photo-bg-slider'>
                <div className='photo-matter'>
                    <div className='photo-matter-box1'>
                    <h1>Photo Gallery</h1>
                    <div>Capturing Unforgettable Moments</div>
                    <p>Every event is a memory in the making, and what better way to relive those precious moments than through beautiful photographs. Our Event Photo Gallery is more than just a collection of pictures; it's a visual journey through the magic, joy, and emotions that our services bring to life. Whether you're looking to reminisce about your wedding day, the joy of a birthday celebration, or the happiness of a baby shower, our gallery has something to creativity that goes into making every event truly</p>
                    <p className='photo-para'> creativity that goes into making every event truly special.</p>
                    </div>
                </div>
            <div className='photo-slider'>
                <Slider {...settings}>
                    <div className='photo-slider-img'>
                        <img src='destination.jpeg' alt="game1" />
                    </div>
                    <div className='photo-slider-img'>
                        <img src='photo3.jpeg' alt="game2" />
                    </div>
                    <div className='photo-slider-img'>
                        <img src='reciption.jpeg' alt="game2" />
                    </div>
                    <div className='photo-slider-img'>
                        <img src='photo1.jpeg' alt="game1" />
                    </div>
                    <div className='photo-slider-img'>
                        <img src='photo2.jpeg' alt="game2" />
                    </div>
                    <div className='photo-slider-img'>
                        <img src='bday-bg44.jpeg' alt="game1" />
                    </div>
                    <div className='photo-slider-img'>
                        <img src='makeup11.jpeg' alt="game2" />
                    </div>
                    <div className='photo-slider-img'>
                        <img src='baby-10.jpeg' alt="game2" />
                    </div>
                    <div className='photo-slider-img'>
                        <img src='haldi.jpeg' alt="game2" />
                    </div>
                    <div className='photo-slider-img'>
                        <img src='dance2.jpeg' alt="game2" />
                    </div>
                    
                </Slider>
            </div>
            </div>
            <div className='photo-cards'>
                <div className='photo-card-box1'></div>
                <div className='photo-card-box2'></div>
                <div className='photo-card-box3'></div>
                <div className='photo-card-box4'></div>
                <div className='photo-card-box5'></div>
                <div className='photo-card-box6'></div>
                <div className='photo-card-box7'></div>
                <div className='photo-card-box8'></div>
                <div className='photo-card-box9'></div>
            </div>
            <div className='photo-cards2'>
                <div className='photo-card-box10'></div>
                <div className='photo-card-box11'></div>
                <div className='photo-card-box12'></div>
                <div className='photo-card-box13'></div>
                <div className='photo-card-box14'></div>
                <div className='photo-card-box15'></div>
            </div>
        </div>
    );
}

export default Photo;

