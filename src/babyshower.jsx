import './babyshower.css';

function BabyShower() {
    return(
        <div>
            <div className='baby-background'>
                <div>
                <h1>Baby Shower</h1>
                    <button>Contact us</button>
                    <button className='baby-button'>Learn More</button>
                </div>
            </div>
            <div className='baby-matter'>
                <div className='baby-matter-left'>

                </div>
                <div className='baby-matter-right'>
                    <h1>Baby Shower – A Celebration of New Life</h1>
                    <div>Celebrate the Joy of New Beginnings with a Beautifully Planned Baby Shower</div>
                    <p> Welcoming a new life into the world is a magical moment, and at Melodia, we ensure your baby shower is just as special. Our team of expert event planners crafts unforgettable baby showers filled with warmth, joy, and personalized touches that reflect the journey of motherhood.</p>
                    <p> Whether you're planning a traditional baby shower, a modern gender reveal party, or a themed celebration, we provide end-to-end services to make everything seamless and stunning.</p>
                </div>
            </div>
            <div className='baby-video'>
            <div>
                <video  src="./baby-video22.mp4" autoPlay loop muted />
                </div>
            </div>
            <div className='baby-cards'>
            <div className='baby-cards-box1'>
                <div className='baby-box1-img'></div>
            </div>
            <div className='baby-cards-box2'>
                <div className='baby-box2-img'></div>
            </div>
            <div className='baby-cards-box3'>
                <div className='baby-box3-img'>
                    <div></div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default BabyShower;