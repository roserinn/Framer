import React from 'react';

const TitleSubtitle = ({className, title, subtitle, text,  }) => {
    return (
        <div className={`flex flex-col items-center justify-center opacity-0 ${className}`}>
            <p className="text-[.8rem] border border-[#0000002f] rounded-lg py-1 px-3 mb-[30px]">{subtitle}</p>
            <h2 className="lg:text-[3rem] lg:w-[600px] text-[2.3rem] sm:w-[500px] w-[350px] text-center lg:leading-[60px] leading-none font-bold mb-[20px] ">{title}</h2>
            <p className="lg:text-[1.3rem] lg:w-[600px] text-[1rem] sm:w-[500px] w-[350px] text-center lg:leading-[35px] leading-[20px] mb-[60px] ">{text}</p>
        </div>
    )
}


export default TitleSubtitle;
