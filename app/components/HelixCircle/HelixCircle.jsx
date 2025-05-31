import React from 'react'
import './HelixCircle.css'

const HelixCircle = ({ color, radius, borderWidth, borderDasharrayValue=0, timeForOneLap=0, direction="none"}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className='helix-circle'
            style={{
                animation: `rotate-${direction} ${timeForOneLap}s linear infinite`
            }}>
            <circle
                style={{
                    fill: "#00000000",
                    stroke: `${color}`,
                    strokeWidth: `${borderWidth}px`,
                    strokeDasharray: `${borderDasharrayValue}`,
                }}
                transform="matrix(1, 0, 0, 0.9999989867210388, -224.35813903808594, -297.1282653808594)"
                cx="274.358"
                cy="347.129"
                r={radius}
            />
        </svg>
    )
}

export default HelixCircle