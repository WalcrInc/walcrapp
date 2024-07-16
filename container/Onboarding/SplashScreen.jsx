import { useState, useEffect } from 'react';

const SplashScreen = ({ onFinish }) => {
    const [isAnimationFinished, setIsAnimationFinished] = useState(false);

    useEffect(() => {
        // Set a timeout to simulate the animation duration
        // Replace this with actual animation end detection if possible
        const timer = setTimeout(() => {
            setIsAnimationFinished(true);
            onFinish();
        }, 2000); // Adjust this value to match your SVG animation duration

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="splash-screen">
            <img src='/images/onboarding.svg' />
            <style jsx>{`
        .splash-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #000;
          z-index: 9999;
        }
        img {
          width: 100%;
          height: 100%;
        }
      `}</style>
        </div>
    );
};

export default SplashScreen;