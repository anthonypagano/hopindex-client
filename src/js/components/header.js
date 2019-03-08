import React from 'react';
import {Link} from 'react-router-dom';
export default function Header() {
    return (
        <header role="banner">
            <Link to={`/`}>
                <h1>The Hop Index</h1>
            </Link>
        </header>
    );
}