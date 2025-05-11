import { motion } from 'motion/react';
import './Contact.css'

interface ContactProps {
    german: boolean;
}

const Contact = ({german} : ContactProps) => {
    const myEmail1 = "balzerbeatrice"
    const myEmail2 = "@gmail.com"

    // (●'◡'●)

    return (  
        <motion.footer id="contact"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{opacity: 1, y: 0, transition: {delay: .1, duration: .4}}}
        viewport={{once: false, amount: 0}}>
            <p>{german ? "Ich freue mich euch kennenzulernen und Teil eines passionierten Teams zu werden!" : "Eager to meet you and become part of your passionate team!"}</p>
            <a href="mailto:balzerbeatrice@gmail.com" title='Send me an email! :)' className='email'>
                {myEmail1.split("").map((letter, index) => <motion.span key={crypto.randomUUID()} className="special"
                initial={{ opacity: 0}}
                whileInView={{opacity: 1,transition: {delay: (index/15), duration: 0}}}
                >{letter}</motion.span>)
                }
                {myEmail2.split("").map((letter, index) => <motion.span key={crypto.randomUUID()}
                initial={{ opacity: 0}}
                whileInView={{opacity: 1,transition: {delay: ((index + 14)/15), duration: 0}}}
                >{letter}</motion.span>)}
            </a>
            <ul className="flex">
                <li>
                    <a href="https://linkedin.com/in/beatrice-balzer" target="_blank" title="Say Hi on LinkedIn">LinkedIn</a>
                </li>
                <li>
                    <a href="https://github.com/bebzbzbz" target="_blank" title="Find me on Github">Github</a>
                </li>
                <li>
                    <a href="/file/cv-2025.pdf" target="_blank" title={german ? "Lebenlauf herunterladen" : "Download my CV"}>{german ? "Lebenlauf herunterladen" : "Download my CV"}</a>
                </li>
                <li>
                    <a href="/file/Beatrice-Balzer-Zertifikat.pdf" target="_blank" title={german ? "Mein Zertifikat" : "My Certificate"}>{german ? "Mein Zertifikat" : "My Certificate"}</a>
                </li>
            </ul>
        </motion.footer>
    );
}

export default Contact;