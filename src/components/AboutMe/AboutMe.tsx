import { motion } from 'motion/react';
import './AboutMe.css'

interface AboutMeProps {
    german: boolean;
}

const AboutMe = ({german} : AboutMeProps) => {
    return ( 
        <motion.section id="about"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{opacity: 1, y: 0, transition: {delay: .2, duration: .4}}}
        viewport={{once: false, amount: 0}}>
            <h2 className='stickyh2'>{german ? "Über mich" : "About Me"}<a href="#hero" className='arrow' title='Back to top'>↑</a></h2>
            <div className='text flex'>
                <article>
                    <motion.p
                    initial={{opacity: 0, y: 80}}
                    whileInView={{opacity: 1, y: 0, transition:{delay: .2, duration: .4}}}
                    dangerouslySetInnerHTML={{
                        __html: german ?
                    "Hi, <b>ich bin Bea!</b> Frontend Web Entwickler*in mit einem <b>Auge für Design</b> und <b>leidenschaftliche*r Rätsellöser*in</b>. Ich balanciere zwischen <b>disziplinierten, sauberen Ergebnissen</b> und <b>kreativer Neugier</b>."
                    : "Hi, <b>I'm Bea!</b> Frontend Web Developer with an <b>eye for design</b> and <b>passionate puzzle solver</b>. I keep the balance between <b>disciplined clean results</b> and <b>creative curiosity</b>."
                    }}></motion.p>
                    <motion.p
                    initial={{opacity: 0, y: 80}}
                    whileInView={{opacity: 1, y: 0, transition:{delay: .2, duration: .4}}}
                    dangerouslySetInnerHTML={{
                        __html: german ? 
                    "Code und Design sind für mich seit meiner Kindheit <b>faszinierend und vetraut</b>. Ich hatte sehr früh angefangen, Profilbilder mit GIMP zu bearbeiten und mich durch HTML-Layouts der Fanpages meiner Lieblingscartoons zu klicken."
                    :"Code and design have felt <b>fascinating</b> and <b>familiar</b> ever since I had been a child. I had started editing profile pictures with GIMP and clicking through HTML layouts for fanpages of my favourite cartoon shows very early on."
                    }}></motion.p>
                    <motion.p
                    initial={{opacity: 0, y: 80}}
                    whileInView={{opacity: 1, y: 0, transition:{delay: .2, duration: .4}}}
                    dangerouslySetInnerHTML={{
                        __html: german ?
                    "Ich habe einen <b>Hintergrund im Kommunikationsdesign Studium</b>, durch welches ich meinen Blick für Typografie und Grafikdesign schulen durfte. Meine <b>berufliche Reise in die Programmierung</b> begann mit meinem letzten Job als Trainee Webdesigner, wo ich ohne große Coding-Vorkenntnisse mir Wissen direkt in der Praxis aneignete."
                    : "I have a <b>background in studying Communication Design</b>, which trained my eye for typography and graphic design. <b>My professional coding journey</b> started with my job as a trainee web designer, where without much prior coding knowledge, I had picked up on coding quickly as I went along."
                    }}></motion.p>
                    <motion.p initial={{opacity: 0, y: 80}}
                    whileInView={{opacity: 1, y: 0, transition:{delay: .2, duration: .4}}}
                    dangerouslySetInnerHTML={{
                        __html: german ? 
                    "Nach einem 6-monatigen, intensiven Frontend Web Development Bootcamp - mit Fokus auf <b>TypeScript</b> und <b>React.js</b> - bin ich zertifizierte*r Frontend Web Developer*in. Ich freue mich darauf, meinen Platz in einem kreativen Teams zu finden, um gemeinsam Lösungen und User Experiences zu entwickeln."
                    : "After studying in a 6-month long intensive Frontend Web Development Bootcamp - with a focus on <b>TypeScript</b> and <b>React.js</b> - I am now a certified Web Developer. I am excited to become part of a creative team to develop solutions and user experiences."}}></motion.p>
                </article>
                <img src="/img/photo.jpg" alt="Photo of Beatrice"/>
            </div>
        </motion.section>        
    );
}

export default AboutMe