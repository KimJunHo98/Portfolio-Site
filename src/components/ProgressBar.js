import React, { useState, useEffect } from 'react';
import { throttle } from 'lodash';

const ProgressBar = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const updateProgress = throttle(() => {
            console.log('Throttled scroll event'); 
            const scrollY = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
            const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollY / pageHeight) * 100;

            setWidth(progress);
        }, 200);
        
        window.addEventListener('scroll', updateProgress);

        return () => {
            window.removeEventListener('scroll', updateProgress);
        };
    }, []);

    return <div id="progress_bar" className="header_progress_bar" style={{ width: `${width}%` }} />;
};

export default ProgressBar;
