import { useState, useEffect } from "react";
import {SCREEN_SM, SCREEN_MD, SCREEN_LG} from "../config/widthBreakpoints";

export const useResize = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = (event: UIEvent) => {
            const target = event.target as Window;
            setWidth(target.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return {
        width,
        isScreenSm: width >= SCREEN_SM,
        isScreenMd: width >= SCREEN_MD,
        isScreenLg: width >= SCREEN_LG,
    };
};
