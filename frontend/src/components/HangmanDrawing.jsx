import React from "react";

export default () => {
    const HEAD = (
        <div className="
            size-[40px] sm:size-[50px] 
            rounded-full border-[4px] sm:border-[6px] border-black 
            absolute top-[40px] sm:top-[50px] 
            right-[-16px] sm:right-[-20px]
        " />
    );

    const BODY = (
        <div className="
            w-[5px] sm:w-[10px] 
            h-[80px] sm:h-[100px] 
            bg-black 
            absolute top-[80px] sm:top-[100px] 
            right-0
        " />
    );

    const RIGHT_ARM = (
        <div className="
            w-[70px] sm:w-[100px] 
            h-[5px] sm:h-[10px] 
            bg-black 
            absolute top-[120px] sm:top-[150px] 
            right-[-70px] sm:right-[-100px] 
            rotate-[-25deg] sm:rotate-[-30deg] 
            origin-bottom-left
        " />
    );

    const LEFT_ARM = (
        <div className="
            w-[70px] sm:w-[100px] 
            h-[5px] sm:h-[10px] 
            bg-black 
            absolute top-[120px] sm:top-[150px] 
            right-[5px] sm:right-[10px] 
            rotate-[25deg] sm:rotate-[30deg] 
            origin-bottom-right
        " />
    );

    const RIGHT_LEG = (
        <div className="
            w-[70px] sm:w-[100px] 
            h-[5px] sm:h-[10px] 
            bg-black 
            absolute top-[150px] sm:top-[190px] 
            right-[-65px] sm:right-[-90px] 
            rotate-[55deg] sm:rotate-[60deg] 
            origin-bottom-left
        " />
    );

    const LEFT_LEG = (
        <div className="
            w-[70px] sm:w-[100px] 
            h-[5px] sm:h-[10px] 
            bg-black 
            absolute top-[150px] sm:top-[190px] 
            right-0
            rotate-[-55deg] sm:rotate-[-60deg] 
            origin-bottom-right
        " />
    );

    return (
        <div className="relative">
            {HEAD}
            {BODY}
            {RIGHT_ARM}
            {LEFT_ARM}
            {RIGHT_LEG}
            {LEFT_LEG}

            {/* Estrutura da forca */}
            <div className="h-[40px] sm:h-[50px] w-[8px] sm:w-[10px] bg-black absolute top-0 right-0"></div>
            <div className="h-[8px] sm:h-[10px] w-[150px] sm:w-[200px] bg-black ml-[80px] sm:ml-[120px]"></div>
            <div className="h-[300px] sm:h-[400px] w-[8px] sm:w-[10px] bg-black ml-[80px] sm:ml-[120px]"></div>
            <div className="h-[8px] sm:h-[10px] w-[200px] sm:w-[250px] bg-black"></div>
        </div>
    );
};