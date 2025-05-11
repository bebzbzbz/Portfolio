import './Nav.css'
import { motion } from 'motion/react';

interface NavProps {
    german: boolean,
    setGerman: (german: boolean) => void
}

const Nav = ({german, setGerman} : NavProps) => {
    const langToggle = () => {
        setGerman(!german)
    }

    return (  
        <motion.nav 
            initial={{ opacity: 0, right: -30}}
            whileInView={{opacity: 1, right: 0, transition: {delay: (.5), duration: .5}}}
            viewport={{once: true, amount: 0}}
            className='flex center-between'>
            <a href="#projects">{german ? "Projekte" : "Projects"}</a>
            <a href="#skillset">Skillset</a>
            <a href="#about">{german ? "Über mich" : "About Me"}</a>
            <a href="#contact">{german ? "Kontakt" : "Contact"}</a>
            <a onClick={langToggle} className="langToggle">({german ? "English" : "Deutsch"})</a>
        </motion.nav>
    );
}

export default Nav;