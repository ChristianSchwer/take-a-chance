import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    LOGO <i className='fab fa-typo3' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Items' className='nav-links' onClick={closeMobileMenu}>
                            Items
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Tickets' className='nav-links' onClick={closeMobileMenu}>
                            Tickets
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/AboutUs' className='nav-links' onClick={closeMobileMenu}>
                            About us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-links instagram'
                            to={'//www.instagram.com/schwer_christian/'}
                            target='_blank'
                            aria-label='Instagram'
                            onClick={closeMobileMenu}
                        >
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link className='nav-links facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                            onClick={closeMobileMenu}
                        >
                            <i className='fab fa-facebook'></i>
                        </Link>
                        <Link className='nav-links twitter'
                            to='/'
                            aria-label='Twitter'
                            onClick={closeMobileMenu}
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className='nav-links youtube'
                            to='/'
                            aria-label='Youtube'
                            onClick={closeMobileMenu}
                        >
                            <i className="fab fa-youtube"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}



