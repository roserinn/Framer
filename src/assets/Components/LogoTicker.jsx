import React from 'react';
import Acme from '../img/icons/acme.png'
import Quantum from '../img/icons/quantum.png'
import Echo from '../img/icons/echo.png'
import Celestia from '../img/icons/celestia.png'
import Pulse from '../img/icons/pulse.png'
import Apex from '../img/icons/apex.png'


const LogoTicker = () => {
    return (
        <section>
            <div className='xl:w-[1400px] lg:w-[1000px] md:w-[700px] w-[350px] mx-auto flex items-center justify-between lg:my-[100px] my-[0px]'>
                <img src={Acme} alt="Acme" className='w-[40px] md:w-[100px] xl:w-[150px] '/>
                <img src={Quantum} alt="Quantum" className='w-[40px] md:w-[100px] xl:w-[150px] '/>
                <img src={Echo} alt="Echo" className='w-[40px] md:w-[100px] xl:w-[150px] '/>
                <img src={Celestia} alt="Celestia" className='w-[40px] md:w-[100px] xl:w-[150px] '/>
                <img src={Pulse} alt="Pulse" className='w-[40px] md:w-[100px] xl:w-[150px] '/>
                <img src={Apex} alt="Apex" className='w-[40px] md:w-[100px] xl:w-[150px] '/>
            </div>
        </section>

    );
}

export default LogoTicker;