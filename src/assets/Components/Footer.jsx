import React from 'react';
import Logo from '../img/icons/logo.png';
import Twitter from '../img/icons/twitter.png';
import Instagram from '../img/icons/inst.png';
import Pinterest from '../img/icons/pinterest.png';
import Linkedin from '../img/icons/linkedin.png';
import Tiktok from '../img/icons/tiktok.png';
import Youtube from '../img/icons/youtube.png';

const Footer = () => {
    return (
        <footer className='bg-black text-white'>
            <div className="xl:w-[1400px] lg:w-[1000px] md:w-[700px] w-[350px] mx-auto py-[50px] flex md:flex-row flex-col lg:justify-between justify-center ">
                <div className="flex flex-col justify-between md:items-baseline items-center lg:gap-[100px] gap-[50px] md:mb-0 mb-[50px]">
                    <div className="flex flex-col justify-between items-center">
                        <img src={Logo} alt="Logo" className='mb-[30px] md:ml-[-190px] ml-14' />
                        <p className='text-gray-500 w-[300px] md:text-left text-center'>Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website. </p>
                    </div>
                    <div className="flex gap-5 items-center">
                        <img src={Twitter} alt="Twitter" />
                        <img src={Instagram} alt="Instagram" />
                        <img src={Pinterest} alt="Pinterest" />
                        <img src={Linkedin} alt="Linkedin" />
                        <img src={Tiktok} alt="Tiktok" />
                        <img src={Youtube} alt="Youtube" />
                    </div>
                </div>
                <div className="flex md:justify-normal justify-center md:gap-[70px] gap-[15px] md:text-[1rem] text-[.8rem] ">
                    <ul>
                        <li className='font-bold mb-[15px]'>Product</li>
                        <li className='mb-[10px]'><a href="/" className='text-gray-500'>Features</a></li>
                        <li className='mb-[10px]'><a href="/" className='text-gray-500'>Integrations</a></li>
                        <li className='mb-[10px]'><a href="/" className='text-gray-500'>Updates</a></li>
                        <li className='mb-[10px]'><a href="/" className='text-gray-500'>FAQ</a></li>
                        <li className='mb-[10px]'><a href="/" className='text-gray-500'>Pricing</a></li>
                    </ul>
                    <ul>
                        <li className='font-bold mb-[15px]'>Company</li>
                        <li className='mb-[10px]'><a href="/" className='text-gray-500'>About</a></li>
                        <li className='mb-[10px]'><a href="/" className='text-gray-500'>Blog</a></li>
                        <li className='mb-[10px]'><a href="/" className='text-gray-500'>Careers</a></li>
                        <li className='mb-[10px]'><a href="/" className='text-gray-500'>Manifesto</a></li>
                        <li className='mb-[10px]'><a href="/" className='text-gray-500'>Press</a></li>
                        <li className='mb-[10px]'><a href="/" className='text-gray-500'>Contact</a></li>
                    </ul>
                    <ul>
                        <li className='font-bold mb-[15px]'>Resources</li>
                        <li className='mb-[10px]'><a href="/" className='text-gray-500'>Examples</a></li>
                        <li className='mb-[10px]'><a href="/" className='text-gray-500'>Community</a></li>
                        <li className='mb-[10px]'><a href="/" className='text-gray-500'>Guides</a></li>
                        <li className='mb-[10px]'><a href="/" className='text-gray-500'>Docs</a></li>
                    </ul>
                    <ul>
                        <li className='font-bold mb-[15px]'>Legal</li>
                        <li className='mb-[10px]'><a href="/" className='text-gray-500'>Privacy</a></li>
                        <li className='mb-[10px]'><a href="/" className='text-gray-500'>Terms</a></li>
                        <li className='mb-[10px]'><a href="/" className='text-gray-500'>Security</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
