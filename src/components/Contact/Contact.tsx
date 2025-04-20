import './Contact.css'

const Contact = () => {
    const myEmail1 = "balzerbeatrice"
    const myEmail2 = "@gmail.com"

    return (  
        <footer id="contact">
            <p>Eager to work and become part of your passionate team.</p>
            <a href="mailto:balzerbeatrice@gmail.com">
                {myEmail1.split("").map((letter) => <span key={crypto.randomUUID()} className="italic">{letter}</span>)
                }
                {myEmail2.split("").map((letter) => <span key={crypto.randomUUID()}>{letter}</span>)}
            </a>
            <ul className="flex">
                <li>
                    <a href="https://linkedin.com/in/beatrice-balzer" target="_blank" title="Say Hi on LinkedIn">LinkedIn</a>
                </li>
                <li>
                    <a href="https://github.com/bebzbzbz" target="_blank" title="Find me on Github">Github</a>
                </li>
            </ul>
        </footer>
    );
}

export default Contact;