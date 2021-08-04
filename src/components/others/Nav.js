import React from 'react';
import {
    Link
  } from "react-router-dom";

import logoImg from '../../images/webdxd.png';
import sampleAvatarImg from '../../images/sample-avatar.png';


class Nav extends React.Component {
    render() {
        return (
        <nav className="nav-bar">
            <div className="container nav-container">
                <ul>
                    <li><Link to='/'><img className="logo" src={logoImg} alt="webdxd" /></Link></li>
                    <li><Link to='/'>Home</Link></li>
                </ul>
                <div>
                    <Link to="/profile"><img className="avatar-sm" src={sampleAvatarImg} alt="avatar" /></Link>
                </div> 
            </div>
        </nav>
        );
    }

}

export default Nav;
