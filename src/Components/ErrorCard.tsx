import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/error.json';

const ErrorCard: React.FC = () => {
    const style = {
        backgroundColor: '#A24936',
        color: 'white',
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
                <h1>Ops, something went wrong</h1>
                <p>It was not possible to load your location</p>
            </div>
        </div>
    );
}

export default ErrorCard;