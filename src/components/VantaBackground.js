import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import HALO from 'vanta/dist/vanta.halo.min';

const VantaBackground = ({ children }) => {
    const vantaRef = useRef(null);
    const vantaEffectRef = useRef(null);

    useEffect(() => {
        vantaEffectRef.current = HALO({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            baseColor: 0x143c9d,
            backgroundColor: 0x0f2c70,
            amplitudeFactor: 1.50,
            xOffset: 0.20,
            yOffset: -0.15,
        });

        const handleResize = () => {
            if (vantaEffectRef.current) {
                vantaEffectRef.current.setOptions({ yOffset: -0.4 });
                vantaEffectRef.current.resize();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            if (vantaEffectRef.current) vantaEffectRef.current.destroy();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <div ref={vantaRef} style={{ height: '100vh', width: '100vw', zIndex: 1 }}>{children}</div>;
};

export default VantaBackground;
