import './gallery.css';

function Gallery () {
    return(
        <div>
            <div className='video-background'>
                <div>
                    <h1>Video Gallery</h1>
                </div>
            </div>
            <div className='video-matter'>
                <div className='video-box1'>
                <video  src="./brithdayvideo.mp4" autoPlay loop muted /> 
                </div>
                <div className='video-box2'>
                <video  src="./party-video.mp4" autoPlay loop muted /> 
                </div>
            </div>
            <div className='video-matter2'>
                <div className='video-box3'>
                <video  src="./weddingvideo22.mp4" autoPlay loop muted /> 
                </div>
            </div>
            <div className='video-matter3'>
                <div className='video-box4'>
                <video  src="./destinaction.mp4" autoPlay loop muted /> 
                </div>
            </div>
        </div>
    )
}
export default Gallery;