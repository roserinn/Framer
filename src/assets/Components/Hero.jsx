import React from 'react';
import Vurtel from '../img/sectionImg/Visual.png'
import Cylinder from '../img/sectionImg/cylinder.png'
import Torus from '../img/sectionImg/half-torus.png'
import Arrow from '../img/icons/arrow_right.png'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const Hero = () => {

gsap.registerPlugin(useGSAP);

    useGSAP(() => {

        gsap.from(".text", { x: -360, stagger: .2, opacity: 0, ease: 'back', duration: 1 });

        gsap.from(".Vurtel", { y: -30, duration: 2, yoyo: true, repeat: -1 });

        gsap.from(".Cylinder", { y: 30, duration: 1, yoyo: true, repeat: -1 });

        gsap.from(".Torus", { rotate: 30, ease: 'bounce', duration: 5, yoyo: true, repeat: -1 });

    });


    return (
        <section className='bg-gradient-to-t from-[#183EC2] to-[#EAEEFE] '>
            <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center xl:w-[1400px] lg:w-[1000px] md:w-[700px] w-[350px] mx-auto mb-[50px] lg:pb-[100px] xl:pt-0 md:pt-[50px] py-[50px] gap-7">
                <div className='xl:w-[40%] lg:text-left md:text-center text-center'>
                    <h1 className="text xl:text-[6rem] xl:leading-[100px] lg:text-[5rem] lg:leading-[80px] md:text-[4rem] leading-none text-[3rem] font-bold ">Pathway to productivity</h1>
                    <p className="text xl:text-[1.5rem] xl:my-[50px] md:text-[1.2rem] lg:my-[40px] my-[30px] text-[1rem] my:50px ">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>
                    <div className='text flex gap-6 justify-center lg:justify-start'>
                        <a className='py-2 px-4 bg-black text-white rounded-lg' href="/">Get for free</a>
                        <div className='flex items-center gap-2'>
                            <a href="/">Learn more</a>
                            <img src={Arrow} alt="Arrow" />
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src={Vurtel} alt="Vurtel" className="Vurtel w-[250px] lg:w-auto" />
                    <img src={Cylinder} alt="Cylinder" className="Cylinder absolute top-[-20px] right-[90%] hidden lg:block" />
                    <img src={Torus} alt="Torus" className="Torus absolute bottom-[-220px] right-[-50px] hidden lg:block" />
                </div>
            </div>
        </section>

    );
}

export default Hero;
