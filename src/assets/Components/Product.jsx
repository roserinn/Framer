import React from 'react';
import Leaves from '../img/icons/leaves.png'
import ProductImage from '../img/sectionImg/ProductImage.png'
import Target from '../img/icons/target.png'
import Secure from '../img/icons/secure.png'
import Bell from '../img/icons/bell.png'
import Arrow from '../img/icons/arrow_right.png'
import TitleSubtitle from './TitleSubtitle';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const Product = () => {

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: ".productSection",
            start: "top 80%",
            end: "bottom 100%",
            onEnter: () => {
                 gsap.from(".product", {opacity: 0, y: -20, delay: 1, stagger: 1});
            }
        });
        ScrollTrigger.create({
            trigger: ".cards",
            start: "top 80%",
            end: "bottom 100%",
            onEnter: () => {
                 gsap.to(".card", {opacity: 1, x: 30,  stagger: .3});
            }
        });
    });


    return (
        <section className='productSection bg-gradient-to-t from-[#D2DCFF] to-[#FFFFFF] '>
            <div className=" xl:w-[1400px] lg:w-[1000px] md:w-[700px] w-[350px] mx-auto flex flex-col items-center justify-center md:py-[100px] py-[50px]">
                <TitleSubtitle className={'product'} subtitle={'Boost your productivity'} title={'A more effective way to track progress'} text={'Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.'} />
                <img src={ProductImage} alt="Product" className="mb-[50px] product" />

                <div className="cards flex flex-col gap-[40px]  md:grid md:grid-cols-2 justify-between lg:flex lg:flex-row">
                    <div className="card flex flex-col gap-2 items-start opacity-0">
                        <img src={Leaves} alt="Leaves" />
                        <h2 className="text-[1.5rem] font-bold">Integration ecosystem</h2>
                        <p className="text-[1rem]">Track your progress and motivate your efforts everyday.</p>
                        <div className='flex items-center gap-2'>
                            <a href="/">Learn more</a>
                            <img src={Arrow} alt="Arrow" />
                        </div>
                    </div>
                    <div className="card flex flex-col gap-2 items-start opacity-0">
                        <img src={Target} alt="Target" />
                        <h2 className="text-[1.5rem] font-bold">Goal setting and tracking</h2>
                        <p className="text-[1rem]">Set and track goals with manageable task breakdowns.</p>
                        <div className='flex items-center gap-2'>
                            <a href="/">Learn more</a>
                            <img src={Arrow} alt="Arrow" />
                        </div>
                    </div>
                    <div className="card flex flex-col gap-2 items-start opacity-0">
                        <img src={Secure} alt="Secure" />
                        <h2 className="text-[1.5rem] font-bold">Secure data encryption</h2>
                        <p className="text-[1rem]">Ensure your data’s safety with top-tier encryption.</p>
                        <div className='flex items-center gap-2'>
                            <a href="/">Learn more</a>
                            <img src={Arrow} alt="Arrow" />
                        </div>
                    </div>
                    <div className="card flex flex-col gap-2 items-start opacity-0">
                        <img src={Bell} alt="Bell" />
                        <h2 className="text-[1.5rem] font-bold">Customizable notifications</h2>
                        <p className="text-[1rem]">Get alerts on tasks and deadlines that matter most.</p>
                        <div className='flex items-center gap-2'>
                            <a href="/">Learn more</a>
                            <img src={Arrow} alt="Arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Product;
