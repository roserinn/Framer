import React from 'react';
import CubeHelix from '../img/sectionImg/cube-helix.png';
import Cube from '../img/sectionImg/cube.png';
import TitleSubtitle from './TitleSubtitle';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const EveryThingUNeed = () => {
    
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: ".everythingSection",
            start: "top 80%",
            end: "bottom 100%",
            onEnter: () => {
                gsap.from(".everythingTitle", { opacity: 0, y: -20, delay: 1, stagger: 1 });
                gsap.to(".everythingCard", { opacity: 1, x: 0, delay: 1.4, duration: .5 });
            }
        });
    });


    return (
        <section >
            <div className='everythingSection xl:w-[1400px] lg:w-[1000px] md:w-[700px] w-[350px] mx-auto flex flex-col items-center justify-center md:py-[100px] py-[50px]'>
                <TitleSubtitle className={'everythingTitle'} subtitle={'Everything you need'} title={'Streamlined for easy management'} text={'Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.'} />
                <div className="flex flex-col justify-between md:gap-[20px] md:flex-row gap-[10px]">
                    <div className="md:py-[60px] md:px-[50px] py-[50px] px-[30px]  flex flex-col justify-center items-center text-center gap-7 rounded-[30px] shadow-xl everythingCard opacity-0">
                        <img src={CubeHelix} alt="CubeHelix" />
                        <h2 className="font-bold  text-[1.5rem] ">Integration ecosystem </h2>
                        <p className="leading-[23px]">Enhance your productivity by connecting with your favorite tools, keeping all your
                            essentials in one place.</p>
                    </div>
                    <div className="md:py-[60px] md:px-[50px] py-[50px] px-[30px]  flex flex-col justify-center items-center text-center gap-7 rounded-[30px] shadow-xl everythingCard opacity-0">
                        <img src={Cube} alt="Cube" />
                        <h2 className="font-bold  text-[1.5rem]">Integration ecosystem </h2>
                        <p className="leading-[23px]">Enhance your productivity by connecting with your favorite tools, keeping all your
                            essentials in one place.</p>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default EveryThingUNeed;
