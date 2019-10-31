import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/spring.json';

const SpringCard: React.FC = () => {
    const style = {
        backgroundColor: '#E18AD4',
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
                <h1>Spring</h1>
            </div>
        </div>
    );
}

export default SpringCard;