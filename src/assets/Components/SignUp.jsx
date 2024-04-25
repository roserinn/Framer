import React from 'react';
import Arrow from '../img/icons/arrow_right.png'
import Emojistar from '../img/sectionImg/emojistar.png'
import Helix from '../img/sectionImg/helix.png'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SignUp = () => {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: ".signupSection",
            start: "top 80%",
            end: "bottom 100%",

            onEnter: () => {
                gsap.from(".signupTitle", { opacity: 0, y: -20, delay: 1, stagger: .1});
                gsap.to(".Emojistar", { y: 30, duration: 2, yoyo: true, repeat: -1  });
                gsap.to(".Helix", { y: 30, duration: 2, yoyo: true, repeat: -1  });
            }
        });
    });



    return (
        <section className='bg-gradient-to-t from-[#D2DCFF] to-[#FFFFFF] '>
            <div className='signupSection xl:w-[1400px] lg:w-[1000px] md:w-[700px] w-[350px] mx-auto flex flex-col items-center justify-center md:py-[100px] py-[50px] relative'>
                <img src={Emojistar} alt="Emojistar " className="absolute left-[-15px] top-[-50px] w-[250px] lg:block hidden Emojistar" />
                <h2  className="signupTitle lg:text-[3rem] lg:w-[600px] text-center md:leading-[60px] leading-none text-[2rem] font-bold">Sign up for free today</h2>
                <p className='signupTitle lg:text-[1.3rem] lg:w-[600px]  text-center lg:leading-[35px] my-[40px]'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
                <div className='signupTitle flex gap-6'>
                    <a className='py-2 px-4 bg-black text-white rounded-lg' href="/">Get for free</a>
                    <div className='flex items-center gap-2'>
                        <a href="/">Learn more</a>
                        <img src={Arrow} alt="Arrow" />
                    </div>
                </div> 
                <img src={Helix} alt="Helix" className="absolute right-[-30px] bottom-0 lg:block w-[250px] hidden Helix" />
            </div>
        </section>

    );
}

export default SignUp;
