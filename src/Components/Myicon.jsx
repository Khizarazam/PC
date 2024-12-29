import React, { useEffect } from 'react';
import gsap from 'gsap';

const FlaskIcon = () => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    gsap.utils.toArray('.bubble').forEach((bubble, index) => {
      tl.fromTo(bubble, 
        {
          y: 0,
          x: 0,
          scale: 0.5,
          opacity: 0.8
        },
        {
          y: -100,
          x: 'random(-20, 20)',
          scale: 'random(0.3, 1)',
          opacity: 0,
          duration: 'random(2, 4)',
          delay: index * 0.3,
          ease: 'power1.inOut',
          repeat: -1
        }, 0);
    });

    return () => tl.kill();
  }, []);

  const styles = {
    flask: {
      position: 'relative',
      width: '200px',
      height: '300px'
    },
    bubble: {
      position: 'absolute',
      width: '20px',
      height: '20px',
      background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), rgba(26, 45, 66, 0.4))',
      borderRadius: '50%',
      boxShadow: '0 0 5px rgba(255,255,255,0.3)',
      zIndex: 10
    }
  };

  const bubblePositions = [
    { left: '23%', bottom: '30%' },
    { left: '50%', bottom: '20%' },
    { left: '20%', bottom: '40%' },
    { left: '30%', bottom: '22%' },
    { left: '20%', bottom: '25%' },
    { left: '70%', bottom: '26%' },
    { left: '35%', bottom: '20%' },
    { left: '42%', bottom: '29%' },
    { left: '21%', bottom: '20%' },
    { left: '34%', bottom: '28%' },
    { left: '43%', bottom: '34%' },
    { left: '56%', bottom: '20%' },
    { left: '78%', bottom: '20%' },
    { left: '67%', bottom: '20%' }
  ];

  return (
    <div style={styles.flask} className='ml-36 mt-[100px] relative'>
      <svg className='w-full h-full absolute top-0 left-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113 130">
        <g>
          <path
            fill="none"
            d="M0,0v130h112.084L111.75,0H0z M94.75,128C71,128,56,128,56,128s-14.873,0-38.623,0s-13.945-19.422-6.33-35.945S40,41.25,40,41.25V3h16h11v38.25c0,0,23.901,34.283,31.517,50.805S118.5,128,94.75,128z"
          />
          <path
            fill="green"
            stroke="#1a2d42"
            strokeWidth="5"
            strokeMiterlimit="10"
            d="M56,127.5c0,0-14.873,0-38.623,0s-13.695-19.172-6.08-35.695C18.912,75.283,40.5,41.25,40.5,41.25V2.5h-9H56h19.5h-8v38.75c0,0,23.651,34.033,31.267,50.555c7.615,16.523,19.733,35.695-4.017,35.695S56,127.5,56,127.5z"
          />
        </g>
      </svg>

      {bubblePositions.map((pos, i) => (
        <div
          key={`bubble-${i}`}
          className="bubble"
          style={{ ...styles.bubble, ...pos }}
        />
      ))}
    </div>
  );
};

export default FlaskIcon;
