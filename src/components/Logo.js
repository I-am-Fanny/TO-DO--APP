import React from "react";
import logoFanny from '../images/fanny-logo.png';
import '../App.css';

const Logo = () =>(
  <div className='logo-container'>
    <img 
    className='logo'
    src={logoFanny} 
    alt='Logo' />
  </div>
);

export default Logo;