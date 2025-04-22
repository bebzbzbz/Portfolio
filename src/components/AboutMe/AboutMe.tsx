import { motion } from 'motion/react';
import './AboutMe.css'

const AboutMe = () => {
    return ( 
        <motion.section id="about"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{opacity: 1, y: 0, transition: {delay: .2, duration: .4}}}
        viewport={{once: false, amount: 0}}>
            <h2 className='stickyh2'>About Me</h2>
            <div className='text'>
                <article>
                    <motion.p
                    initial={{opacity: 0, y: 80}}
                    whileInView={{opacity: 1, y: 0, transition:{delay: .2, duration: .4}}}
                    >I'm a Frontend Web Developer with an <b>eye for design</b> and a <b>passion for solving puzzles</b>. I keep the balance between determined clean results and <b>curious and creative playing around</b>.</motion.p>
                    <motion.p
                    initial={{opacity: 0, y: 80}}
                    whileInView={{opacity: 1, y: 0, transition:{delay: .2, duration: .4}}}>As a child with unrestricted internet access (don't recommend this parenting style), I had started editing profile pictures with GIMP and clicking through HTML layouts for fanpages of my favourite cartoon shows very early on. The <b>fascination</b> and <b>familiarity with design and code</b> hasn't left my mind since.</motion.p>
                    <motion.p
                    initial={{opacity: 0, y: 80}}
                    whileInView={{opacity: 1, y: 0, transition:{delay: .2, duration: .4}}}>I have a <b>background in studying Communication Design</b>, thanks to which I trained my eye for typography, photography and graphic design. Yet, <b>my professional coding journey</b> started with my last job as a trainee web designer. Without much proper coding knowledge prior, I had learned quickly as I went and came to love the field.</motion.p>
                    <motion.p initial={{opacity: 0, y: 80}}
                    whileInView={{opacity: 1, y: 0, transition:{delay: .2, duration: .4}}}>During a 6-month long intensive Frontend Web Development Bootcamp - with a focus on <b>TypeScript</b> and <b>React</b> - I have broadened my coding skills immensely. I am excited to become part of a creative team to develop, to create and to find solutions for engaging and appealing user experiences.</motion.p>
                </article>
                <img src="/img/photo.jpg" alt="Photo of Beatrice"/>
            </div>
        </motion.section>        
    );
}

export default AboutMe