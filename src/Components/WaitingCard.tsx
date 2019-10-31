import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/loading.json';

const WaitingCard: React.FC = () => {
    const style = {
        backgroundColor: '#A5D8FF',
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
                <h1>Loading...</h1>
            </div>
        </div>
    );
}

export default WaitingCard;