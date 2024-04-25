import React from 'react';
import TitleSubtitle from './TitleSubtitle';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Pricing = () => {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: ".pricingSection",
            start: "top 80%",
            end: "bottom 100%",
            onEnter: () => {
                gsap.to(".pricingTitle", { opacity: 1, y: -20, delay: 1, stagger: 1 });
                gsap.to(".pricingCard", { opacity: 1, y: -30, delay: 1.4, duration: .5, stagger: .5 });
            }
        });


    });

    return (
        <section>
            <div className="pricingSection xl:w-[1400px] lg:w-[1000px] md:w-[700px] w-[350px] mx-auto flex flex-col items-center justify-center md:py-[100px] py-[50px]">
                <TitleSubtitle className={'pricingTitle'} subtitle={'Boost your productivity'} title={'A more effective way to track progress'} text={'Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.'} />
                <div className="flex flex-col items-end justify-between md:gap-[20px] md:flex-row gap-[10px]">
                    <div className="flex flex-col gap-6 items-baseline px-[70px] py-[50px] rounded-[30px] shadow-lg pricingCard opacity-0">
                        <span className='text-gray-400 font-bold'>Free</span>
                        <p className='text-gray-400'><span className='text-[3rem] font-bold  text-black'>$0</span>/monthly</p>
                        <a className='py-2 text-center w-[100%] bg-black text-white rounded-lg' href="/">Get started for free</a>
                        <ul className='list-disc'>
                            <li className='mb-3'>Up to 5 project members</li>
                            <li className='mb-3'>Unlimited tasks and projects</li>
                            <li className='mb-3'>2GB storage</li>
                            <li className='mb-3'>Integrations</li>
                            <li className='mb-3'>Basic support</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-6 items-baseline px-[70px] py-[50px]  rounded-[30px] bg-black text-white shadow-lg pricingCard opacity-0">
                        <span className='text-gray-400 font-bold'>Pro</span>
                        <p className='text-gray-400'><span className='text-[3rem] font-bold  text-white'>$9</span>/monthly</p>
                        <a className='py-2 text-center w-[100%] bg-white text-black rounded-lg' href="/">Sign up now</a>
                        <ul className='list-disc'>
                            <li className='mb-3'>Up to 5 project members</li>
                            <li className='mb-3'>Unlimited tasks and projects</li>
                            <li className='mb-3'>2GB storage</li>
                            <li className='mb-3'>Priority support</li>
                            <li className='mb-3'>Advanced support</li>
                            <li className='mb-3'>Basic support</li>
                            <li className='mb-3'>Export support</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-6 items-baseline px-[70px] py-[50px] rounded-[30px] shadow-lg pricingCard opacity-0">
                        <span className='text-gray-400 font-bold'>Business </span>
                        <p className='text-gray-400'><span className='text-[3rem] font-bold text-black'>$19</span>/monthly</p>
                        <a className='py-2 text-center w-[100%] bg-black text-white rounded-lg' href="/">Sign up now</a>
                        <ul className='list-disc'>
                            <li className='mb-3'>Up to 5 project members</li>
                            <li className='mb-3'>Unlimited tasks and projects</li>
                            <li className='mb-3'>2GB storage</li>
                            <li className='mb-3'>Integrations</li>
                            <li className='mb-3'>Dedicated account manager</li>
                            <li className='mb-3'>Custom fields</li>
                            <li className='mb-3'>Advanced analytics</li>
                            <li className='mb-3'>Export capabilities</li>
                            <li className='mb-3'>API access</li>
                            <li className='mb-3'>Advanced security features</li>
                        </ul>
                    </div>



                </div>
            </div>
        </section>

    );
}

export default Pricing;
