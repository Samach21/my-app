import img1 from '../images/pic.png'
import img2 from '../images/pic2.jpg'

function Main() {
    return (
        <div className="container">
            <img src={img1} className="img-fluid" alt="..." />
            <img src={img2} className="img-fluid" alt="..." />
        </div>
    );
}

export default Main;