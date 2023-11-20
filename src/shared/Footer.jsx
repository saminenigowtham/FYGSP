import React from 'react';
import foorlogo from "../assets/sistlogologin.png"
import Email from "../assets/email.png"
import Linkedin from "../assets/linkedin.png"
import Insta from "../assets/instagram.png"
const Footer = () => {
  return (
    <footer className="bg-[#9e1c3f] text-gray-200">
      <div className="container mx-auto py-4 px-8 flex items-center justify-between">
        <div className="flex items-center">
          <img src={foorlogo} alt="University Logo" className="object-scale-down h-40 w-80 mr-2" />
         
        </div>
        <div >
          <div>
            <p className="text-lg font-semibold pb-3.5">Visit us at:</p>
          </div>
       <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noopener noreferrer">
       <div className='flex py-1'>
       <img src={Email} alt="" /> &nbsp;
        <p> Mail</p>
       </div>
       </a>
       <a href="https://www.linkedin.com/in/pradeep-pradeep-1bbb3521a/" target="_blank" rel="noopener noreferrer">
       <div className='flex py-1 cursor-pointer' >
              <img src={Linkedin} alt="" /> &nbsp;
              <p>Linkedin</p>
       </div>
            </a>
       <a href="https://www.instagram.com/venkatapradeep.g/" target="_blank" rel="noopener noreferrer">
       <div className='flex py-1'>
       <img src={Insta} alt="" /> &nbsp;
        <p> Instagram</p>
       </div>
       </a>
       </div>
      </div>
      <hr className="mx-20" />
      <div className="container mx-auto py-2 px-8 text-center text-sm">
        &copy; {new Date().getFullYear()} Sathyabama University. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
