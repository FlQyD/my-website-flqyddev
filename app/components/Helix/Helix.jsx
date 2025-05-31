import React from 'react'
import HelixCircle from '../HelixCircle/HelixCircle.jsx'
import './Helix.css'



const helix = ({ text, url }) => {
    return (
        <div className='helix-wrapper'>
            <div className='helix-container'>

                <a className='helix-link' target='_blank' href={url}>{text}</a>
                {/* Inner Red Circles */}
                <HelixCircle color="#ff4d4d" radius="32.5" borderWidth="0.3" borderDasharrayValue="20, 3" timeForOneLap="25" direction="right" />
                <HelixCircle color="#ff3333" radius="33" borderWidth="0.5" borderDasharrayValue="20, 3" timeForOneLap="35" direction="right" />

                {/* Inner Red Circles */}
                <HelixCircle color="#e67300" radius="35" borderWidth="0.3" borderDasharrayValue="20, 3" timeForOneLap="35" direction="right" />
                <HelixCircle color="#e67300e6" radius="35" borderWidth="1" borderDasharrayValue="10, 30" timeForOneLap="40" direction="right" />

                {/* Inner Orange Circles */}
                <HelixCircle color="#ff9933b3" radius="37" borderWidth="1" borderDasharrayValue="40, 5" timeForOneLap="45" direction="right" />
                <HelixCircle color="#ff9933b3" radius="37" borderWidth="1" borderDasharrayValue="15, 25" timeForOneLap="50" direction="right" />

                {/* Inner Yellow Circles*/}
                <HelixCircle color="#ffdb4d" radius="38" borderWidth="0.7" borderDasharrayValue="27, 5, 3, 5" timeForOneLap="60" direction="right" />

                {/*  Inner Light Blue Circles*/}
                <HelixCircle color="#4dd2ff4d" radius="40" borderWidth="2" />
                <HelixCircle color="#4dd2ff" radius="40" borderWidth="0.5" borderDasharrayValue="27, 5, 3, 5" timeForOneLap="90" direction="right" />

                {/*  Blue Outer Circles */}
                <HelixCircle color="#0099ff4d" radius="49" borderWidth="0.7" />
                <HelixCircle color="#0099ff88" radius="49" borderWidth="0.7" borderDasharrayValue="60" timeForOneLap="90" direction="right" />
                <HelixCircle color="#0099ff88" radius="49" borderWidth="0.7" borderDasharrayValue="30" timeForOneLap="60" direction="right" />
                <HelixCircle color="#0099ff88" radius="49" borderWidth="0.7" borderDasharrayValue="60" timeForOneLap="90" direction="left" />
                <HelixCircle color="#0099ff88" radius="49" borderWidth="0.7" borderDasharrayValue="30" timeForOneLap="60" direction="left" />
            </div>
        </div>
    )
}

/**
 * 0.3 - 4d
 * 0.5 - 88
 * 0.7 - b3
 * 0.9 - e6
 */
export default helix