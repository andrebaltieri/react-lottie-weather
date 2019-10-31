import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/winter.json';

const WinterCard: React.FC = () => {
    const style = {
        backgroundColor: '#D1D1D1',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    return (
        <div style={style}>
            <div>
                <Lottie options={defaultOptions}
                    height={400}
                    width={400} />
                <h1>Winter</h1>
            </div>
        </div>
    );
}

export default WinterCard;