import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <header role="banner">
            <ul className="header">
                <li className="header header-item"><Link to={`/`}><img src={require("../images/hops.png")} id="the-hop-index" alt="The Hop Index logo" /></Link></li>
                <li className="header header-item"><Link to={`/`}><h1>The <br className="header-breaks" />Hop <br className="header-breaks" />Index</h1></Link></li>
            </ul>
        </header>
    );
}