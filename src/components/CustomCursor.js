import React, { useRef, useEffect } from 'react';

const CustomCursor = () => {
    const mainCursorRef = useRef(null);
    const pointerCursorRef = useRef(null);

    const mouseX = useRef(0);
    const mouseY = useRef(0);
    const mainPosX = useRef(0);
    const mainPosY = useRef(0);
    const pointerPosX = useRef(0);
    const pointerPosY = useRef(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.current = e.clientX;
            mouseY.current = e.clientY;
        };

        const followCursor = () => {
            mainPosX.current += (mouseX.current - mainPosX.current) * 0.1;
            mainPosY.current += (mouseY.current - mainPosY.current) * 0.1;
            pointerPosX.current += (mouseX.current - pointerPosX.current) * 0.2;
            pointerPosY.current += (mouseY.current - pointerPosY.current) * 0.2;

            // Adjust these values to align with the upper end of the cursor arrow
            const cursorOffsetX = 25; 
            const cursorOffsetY = 25;

            if (mainCursorRef.current) {
                mainCursorRef.current.style.transform = `translate(${mainPosX.current - cursorOffsetX}px, ${mainPosY.current - cursorOffsetY}px)`;
            }
            if (pointerCursorRef.current) {
                pointerCursorRef.current.style.transform = `translate(${pointerPosX.current - cursorOffsetX}px, ${pointerPosY.current - cursorOffsetY}px)`;
            }

            requestAnimationFrame(followCursor);
        };

        document.addEventListener('mousemove', handleMouseMove);
        followCursor();

        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <div ref={mainCursorRef} className="cursor-circle-main"></div>
            <div ref={pointerCursorRef} className="cursor-circle-pointer"></div>
        </>
    );
};

export default CustomCursor;
