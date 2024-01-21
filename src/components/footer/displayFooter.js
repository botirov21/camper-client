import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const DisplayFooter = ({ children }) => {
    const location = useLocation();
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        if (location.pathname === '/') {
            setShowNavbar(false);
        } else if (location.pathname === '/register') {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
    }, [location]);

    return <div>{showNavbar && children}</div>;
};

export default DisplayFooter;
