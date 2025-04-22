import { motion } from 'motion/react';
import SingleSkill from '../SingleSkill/SingleSkill';
import './Skillset.css'
import { useRef } from 'react';
import SkillImgs from '../SkillImgs/SkillImgs';

const Skillset = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    return (  
        <motion.section id="skillset"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{opacity: 1, y: 0, transition: {delay: .2, duration: .4}}}
        viewport={{once: false, amount: 0}}
        ref={containerRef}>
            <h2 className='stickyh2'>Skillset</h2>
            
            <div className='skills flex'>
                <SingleSkill title='Tech Stack' skills={[["React.js", ""], ["TypeScript", ""], ["JavaScript", ""], ["HTML5", ""], ["SASS/SCSS", ""], ["CSS3", ""], ["Tailwind CSS", ""]]}/>

                <SingleSkill title='Design' skills={[["Photoshop", ""], ["InDesign", ""], ["Illustrator", ""], ["Premiere Pro", ""], ["Figma", ""]]}/>

                <SingleSkill title='Languages' skills={[["German", " — Native Speaker"], ["English", " — C2"], ["Russian", " — B2"], ["French", " — B2"]]}/>                
            </div>
            <SkillImgs containerRef={containerRef}/>
        </motion.section>
    );
}

export default Skillset;