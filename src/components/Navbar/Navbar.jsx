import { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import './Navbar.scss'

import { images } from '../../constants'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <a href="#home">
                    <img src={images.logo} alt="Logo" />
                </a>
            </div>
            <ul className='app__navbar-links'>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    <li classname='app__flex p-text' key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {
                    toggle && (
                        <motion.div
                            whileInView={{ x: [500, 0] }}
                            transition={{ duration: 1.8, ease: 'easeInOut' }}
                        >
                            <HiX onClick={() => setToggle(false)} />
                            <ul>
                                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                                    <li key={item}>
                                        <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar