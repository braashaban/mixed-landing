import { FaCalendarCheck } from 'react-icons/fa'
import './Section3.css'
import imgsec3 from "../../assets/imges/sec3.png"
import imgline from "../../assets/imges/line.png"

const Section3 = () => {
    return (
        <>
    <img src={imgline} alt="line" className='linee' />
        <div className='Section3'>
            <img src={imgsec3} alt="" />
            <h2>The Designer & Developers
                Foundation UI System. Built with Client-First</h2>
            <button className="btnClub">
                <FaCalendarCheck />
                Browse Componets</button>

        </div>
        </>
    )
}

export default Section3