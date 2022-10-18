import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react';
import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
    const router = useRouter()

    return (
        <nav className={styles.main_nav}>
            <ul>
                {/* Link way */}
                <Link href='/'><a><li>Home</li></a></Link>

                {/* useRoute way  */}
                <li onClick={() => router.push('/about')}>About</li>

                <Link href='/blog'><a><li>Blog</li></a></Link>
                <Link href='/contact'><a><li>Contact</li></a></Link>
            </ul>
        </nav>
    );
};

export default Navbar;