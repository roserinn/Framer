import React from 'react';
import Logo from '../img/icons/logo.png'


const Header = () => {

  const Links = [
    { name: 'About', link: '/' },
    { name: 'Features', link: '/' },
    { name: 'Customers', link: '/' },
    { name: 'Updates', link: '/' },
    { name: 'Help', link: '/' },
  ];
  let [open, setOpen] = React.useState(false);
  return (
    <header className='bg-[#EAEEFE] relative'>
      <nav className='md:flex justify-between items-center py-2 xl:w-[1400px] lg:w-[1000px] md:w-[800px] mx-auto  '>
        <a href="/"><img src={Logo} alt="Logo" className='cursor-pointer md:pl-0 pl-6 ' /></a>
        <div onClick={()=> setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-7 absolute md:static bg-[#EAEEFE] md:z-auto z-10  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`} >
          {Links.map(link => (
            <li key={link.name} className='md:ml-8 md:my-0 my-4' ><a href={link.link} className='font-semibold hover:text-blue-800 duration-300'>{link.name}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
