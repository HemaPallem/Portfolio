import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

import logo from "../assets/logo.jpg";
import { useRef, useState } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MdMenu, MdClose } from 'react-icons/md';




const Header = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }
  return (
    <>
      <header className="d-flex flex-wrap justify-content-between align-items-center py-3  nav-bar">
        <div>
        <img src={logo} alt="myself" className="logo"/>
        <span className="fs-4 text-white m-2">Hema</span>
        <span className="nav-mob-open" onClick={openMenu}><MdMenu size={24}/></span>
        </div>
        <ul className="nav nav-pills" ref={menuRef}>
        <span className="nav-mob-close" onClick={closeMenu}><MdClose size={24}/></span>
          <li className="nav-item"><AnchorLink  href="#Home" className="anchor-link" aria-current="page">Home</AnchorLink></li>
          <li className="nav-item"><AnchorLink offset={50} href="#Aboutme" className="anchor-link" >About me</AnchorLink></li>
          <li className="nav-item"><AnchorLink offset={50} href="#Coding" className="anchor-link" >Coding</AnchorLink></li>
          <li className="nav-item"><AnchorLink offset={50} href="#Projects" className="anchor-link" >Projects</AnchorLink></li>
          <li className="nav-item"><AnchorLink offset={50} href="#Contact" className="anchor-link" >Contact</AnchorLink></li>
        </ul>
        <div className="connect-with-me"><AnchorLink offset={50} href="#Contact" className="text-decoration-none text-white">Connect with me</AnchorLink></div>
      </header>
    </>
  );
};

export default Header;
