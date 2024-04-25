import React from 'react';
import First from '../img/userAva/1.png';
import Second from '../img/userAva/2.png';
import Third from '../img/userAva/3.png';
import Fourth from '../img/userAva/4.png';
import Fifth from '../img/userAva/5.png';
import Sixth from '../img/userAva/6.png';
import Seventh from '../img/userAva/7.png';
import Eighth from '../img/userAva/8.png';
import Ninth from '../img/userAva/9.png';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Testimonials = () => {

    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: ".TestimonialsSection",
            start: "top 80%",
            end: "bottom 100%",
            onEnter: () => {
                gsap.from(".TestimonialsTitle", { opacity: 0, y: -20, });
                gsap.from(".TestimonialsRow .TestimonialsCard", { opacity: 0, y: -20, delay: 1, stagger: .5 });
            }
        });
    });

    return (
        <section>
            <div className='TestimonialsSection xl:w-[1400px] lg:w-[1000px] md:w-[700px] w-[350px] mx-auto flex flex-col items-center justify-center md:py-[100px] py-[50px]'>
                <p className="TestimonialsTitle text-[.8rem] border border-[#0000002f] rounded-lg py-1 px-3 mb-[10px]">Testimonials</p>
                <h2 className="TestimonialsTitle text-[2rem] text-center leading-[60px] font-bold mb-[100px]">What our users say</h2>
                <div className="flex md:flex-row flex-col gap-[30px] TestimonialsRow">
                
                    <div className='TestimonialsCard'>

                        <div className="rounded-lg shadow-lg px-6 py-14 mb-[20px]">
                            <p className='mb-[15px]'>As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.</p>
                            <div className="flex gap-5 items-center">
                                <img src={First} alt="First " />
                                <div>
                                    <p>Josh Smith</p>
                                    <span>@jjsmith</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg shadow-lg px-6 py-14 mb-[20px]">
                            <p className='mb-[15px]'>As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.</p>
                            <div className="flex gap-5 items-center">
                                <img src={Second} alt="Second" />
                                <div>
                                    <p>Alex Rivera</p>
                                    <span>@jamietech</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg shadow-lg px-6 py-14 mb-[20px]">
                            <p className='mb-[15px]'>As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.</p>
                            <div className="flex gap-5 items-center">
                                <img src={Third} alt="Third " />
                                <div>
                                    <p>Josh Smith</p>
                                    <span>@jjsmith</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='TestimonialsCard'>

                        <div className="rounded-lg shadow-lg px-6 py-14 mb-[35px]">
                            <p className='mb-[15px]'>As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.</p>
                            <div className="flex gap-5 items-center">
                                <img src={Fourth} alt="Fourth" />
                                <div>
                                    <p>Josh Smith</p>
                                    <span>@jjsmith</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg shadow-lg px-6 py-14 mb-[35px]">
                            <p className='mb-[15px]'>As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.</p>
                            <div className="flex gap-5 items-center">
                                <img src={Fifth} alt="Fifth " />
                                <div>
                                    <p>Josh Smith</p>
                                    <span>@jjsmith</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg shadow-lg px-6 py-14 mb-[35px]">
                            <p className='mb-[15px]'>As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.</p>
                            <div className="flex gap-5 items-center">
                                <img src={Sixth} alt="Sixth " />
                                <div>
                                    <p>Josh Smith</p>
                                    <span>@jjsmith</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='TestimonialsCard' >

                        <div className="rounded-lg shadow-lg px-6 py-14 mb-[10px]">
                            <p className='mb-[15px]'>As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.</p>
                            <div className="flex gap-5 items-center">
                                <img src={Seventh} alt="Seventh" />
                                <div>
                                    <p>Josh Smith</p>
                                    <span>@jjsmith</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg shadow-lg px-6 py-14 mb-[10px]">
                            <p className='mb-[15px]'>As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.</p>
                            <div className="flex gap-5 items-center">
                                <img src={Eighth} alt="Eighth" />
                                <div>
                                    <p>Josh Smith</p>
                                    <span>@jjsmith</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg shadow-lg px-6 py-14 mb-[10px]">
                            <p className='mb-[15px]'>As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.</p>
                            <div className="flex gap-5 items-center">
                                <img src={Ninth} alt="Ninth" />
                                <div>
                                    <p>Josh Smith</p>
                                    <span>@jjsmith</span>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
}

export default Testimonials;
