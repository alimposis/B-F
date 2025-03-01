import { useEffect, useState } from "react";

interface WindowSize {
    width: number;
    }
export const useWindowSize = (): WindowSize => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: window.innerWidth,
    });

    useEffect(() => {
        const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
        });
        };
        window.addEventListener("resize", handleResize);
        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);
        return windowSize;
    };