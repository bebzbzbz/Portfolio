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
            <div className='text'>
                <article>
                    <motion.p
                    initial={{opacity: 0, y: 80}}
                    whileInView={{opacity: 1, y: 0, transition:{delay: .2, duration: .4}}}
                    dangerouslySetInnerHTML={{
                        __html: german ? 
                    "Hi, <b>ich bin Bea!</b>"
                    : "Hi, <b>I'm Bea!</b>"
                    }}></motion.p>
                    <motion.p
                    initial={{opacity: 0, y: 80}}
                    whileInView={{opacity: 1, y: 0, transition:{delay: .2, duration: .4}}}
                    dangerouslySetInnerHTML={{
                        __html: german ?
                    "Ich bin Frontend Web Entwickler*in mit einem <b>Auge für Design</b> und einer <b>Leidenschaft fürs Rätsellösen</b>. Ich schaffe Ausgewogenheit zwischen <b>disziplinierten, sauberen Ergebnissen</b> und <b>neugierigem, kreativem Herumspielen</b>."
                    : "I'm a Frontend Web Developer with an <b>eye for design</b> and a <b>passion for solving puzzles</b>. I keep the balance between <b>disciplined clean results</b> and <b>curious and creative playing around</b>."
                    }}></motion.p>
                    <motion.p
                    initial={{opacity: 0, y: 80}}
                    whileInView={{opacity: 1, y: 0, transition:{delay: .2, duration: .4}}}
                    dangerouslySetInnerHTML={{
                        __html: german ? 
                    "Als Kind mit uneingeschränktem Internetzugang (Erziehungsstil nicht empfohlen) hatte ich schon sehr früh angefangen, Profilbilder mit GIMP zu bearbeiten und mich durch HTML-Layouts der Fanpages meiner Lieblingscartoons zu klicken. Die <b>Faszination und Vertrautheit mit Design und Code</b> habe ich seitdem nicht verloren."
                    :"As a child with unrestricted internet access (don't recommend this parenting style), I had started editing profile pictures with GIMP and clicking through HTML layouts for fanpages of my favourite cartoon shows very early on. The <b>fascination</b> and <b>familiarity with design and code</b> hasn't left my mind since."
                    }}></motion.p>
                    <motion.p
                    initial={{opacity: 0, y: 80}}
                    whileInView={{opacity: 1, y: 0, transition:{delay: .2, duration: .4}}}
                    dangerouslySetInnerHTML={{
                        __html: german ?
                    "Ich habe einen <b>Hintergrund im Kommunikationsdesign Studium</b>, dank welchem ich mein Auge für Typografie und Grafikdesign schulen durfe. Meine <b>berufliche Reise in die Programmierung</b> begann jedoch mit meinem letzten Job als angehender Webdesigner. Ohne große Coding-Vorkenntnisse eignete ich mir Wissen direkt in der Praxis an und lernte das Gebiet lieben."
                    : "I have a <b>background in studying Communication Design</b>, thanks to which I was able to train my eye for typography and graphic design, among others. Yet, <b>my professional coding journey</b> started with my last job as a trainee web designer. Without much proper coding knowledge prior, I had learned quickly as I went and came to love the field."
                    }}></motion.p>
                    <motion.p initial={{opacity: 0, y: 80}}
                    whileInView={{opacity: 1, y: 0, transition:{delay: .2, duration: .4}}}
                    dangerouslySetInnerHTML={{
                        __html: german ? 
                    "Durch ein 6-monatiges, intensives Frontend Web Development Bootcamp - mit Fokus auf <b>TypeScript</b> und <b>React.js</b> - habe ich meine Coding Skills seitdem immens erweitern können. Ich freue mich darauf, meinen Platz innerhalb eines kreativen Teams zu finden und gemeinsam Lösungen für spannende User Experiences zu entwickeln."
                    : "During a 6-month long intensive Frontend Web Development Bootcamp - with a focus on <b>TypeScript</b> and <b>React.js</b> - I have broadened my coding skills immensely. I am excited to become part of a creative team to develop solutions for engaging user experiences."}}></motion.p>
                </article>
                <img src="/img/photo.jpg" alt="Photo of Beatrice"/>
            </div>
        </motion.section>        
    );
}

export default AboutMe