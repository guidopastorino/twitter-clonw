import { useTheme } from 'next-themes';
import React from 'react';

const LogoSVG = () => {
    const { setTheme: setNextTheme, resolvedTheme } = useTheme();

    return (
        // <svg
        //     viewBox="0 0 24 24"
        //     aria-hidden="true"
        //     className="object-contain w-8 dark:text-white"
        //     style={{ fill: resolvedTheme === "light" ? "#000" : "#fff" }}
        // >
        //     <g>
        //         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        //     </g>
        // </svg>
        <span>ω</span>
    );
};

export default LogoSVG;
