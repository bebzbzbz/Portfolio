import './Nav.css'

interface NavProps {
    german: boolean,
    setGerman: (german: boolean) => void
}

const Nav = ({german, setGerman} : NavProps) => {
    const langToggle = () => {
        setGerman(!german)
    }

    return (  
        <nav className='flex center-between'>
            <a href="#projects">{german ? "Projekte" : "Projects"}</a>
            <a href="#skillset">Skillset</a>
            <a href="#about">{german ? "Über mich" : "About Me"}</a>
            <a href="#contact">{german ? "Kontakt" : "Contact"}</a>
            <a onClick={langToggle} className="langToggle">({german ? "English" : "Deutsch"})</a>
        </nav>
    );
}

export default Nav;