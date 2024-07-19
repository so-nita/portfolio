import { color } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import HALO from 'vanta/dist/vanta.halo.min';
import { color2Rgb } from 'vanta/src/helpers';

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
            baseColor: color2Rgb(11, 25, 47),
            backgroundColor: color2Rgb(11, 25, 47),
            amplitudeFactor: 1.50,
            xOffset: 0.20,
            yOffset: -0.15,
        });
    
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);

        return <div ref={vantaRef} style={{ height: '100vh', backgroundColor: 'rgb(11, 25, 47)' }}>{children}</div>;
    };


export default VantaBackground;