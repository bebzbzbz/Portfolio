import { motion } from 'motion/react';
import './AboutMe.css'

const AboutMe = () => {
    return ( 
        <motion.section id="about"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{opacity: 1, y: 0, transition: {delay: 0, duration: .4}}}
        viewport={{once: false, amount: 0}}>
            <h2 className='stickyh2'>About Me</h2>
            <div className='grid'>
            <article>
                <p>I'm a Frontend Web Developer with an eye for design and a passion for solving puzzles. I keep the balance between determined clean results and curious and creative playing around.</p>
                <p>As a child with unrestricted internet access (i don't recommend this to your child), I had started editing profile pictures with GIMP and clicking through HTML layouts for fanpages of my favourite cartoon shows very early on. The fascination and familiarity with design and code hasn't left my mind since.</p>
                <p>My professional coding journey started with my last job as a trainee web designer, where I used HTML, CSS, content management systems, Photoshop, but also Javascript and Wordpress to update customer websites according to their wishes and advised them over the phone. Without much proper coding knowledge prior, I was learning quickly as I went and came to love the field.</p>
                <p>During a 6-month long intensive Frontend Web Development Bootcamp - with a focus on TypeScript and React - I have broadened my coding skills immensely. Combined with my background in Communication Design, I am excited to become part of a creative team to develop, create and find solutions for engaging and comprehensive user experiences.</p>
            </article>
            <img src="/img/photo.jpg" alt="Photo of Beatrice"/>
            </div>
        </motion.section>        
    );
}

export default AboutMe