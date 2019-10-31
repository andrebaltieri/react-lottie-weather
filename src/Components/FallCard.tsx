import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/fall.json';

const FallCard: React.FC = () => {
    const style = {
        backgroundColor: '#EAD94C',
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
                <h1>Fall</h1>
            </div>
        </div>
    );
}

export default FallCard;