import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import HALO from 'vanta/dist/vanta.halo.min';

const VantaBackground = ({ children }) => {
    const vantaRef = useRef(null);

    useEffect(() => {
        const vantaEffect = HALO({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            amplitudeFactor: 2.20,
            xOffset: 0.20,
            yOffset: -0.15,
            size: 0.70
        });
    
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);

    return <div ref={vantaRef} style={{ height: '100vh' }}>{children}</div>;
  };


export default VantaBackground;