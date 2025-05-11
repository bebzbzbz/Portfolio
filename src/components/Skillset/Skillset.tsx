import { motion } from 'motion/react';
import SingleSkill from '../SingleSkill/SingleSkill';
import './Skillset.css'
import { useRef } from 'react';
import SkillImgs from '../SkillImgs/SkillImgs';

interface SkillsetProps {
    german: boolean;
}

const Skillset = ({german} : SkillsetProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    return (  
        <motion.section id="skillset"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{opacity: 1, y: 0, transition: {delay: .2, duration: .4}}}
        viewport={{once: false, amount: 0}}
        ref={containerRef}>
            <h2 className='stickyh2'>Skillset<a href="#hero" className='arrow' title='Back to top'>↑</a></h2>
            
            <div className='skills flex'>
                <SingleSkill title='Tech Stack' skills={[["React.js", ""], ["TypeScript", ""], ["JavaScript", ""], ["HTML5", ""], ["SASS/SCSS", ""], ["CSS3", ""], ["Tailwind CSS", ""], ["Supabase", ""]]}/>

                <SingleSkill title='Design' skills={[["Canva", ""], ["Photoshop", ""], ["InDesign", ""], ["Illustrator", ""], ["Premiere Pro", ""], ["Figma", ""]]}/>

                <SingleSkill title={german ? "Sprachen" : "Languages"} skills={german ? [["Deutsch", " — Muttersprache"], ["Englisch", " — C2"], ["Russisch", " — B2"], ["Französisch", " — B2"]] : [["German", " — Native Speaker"], ["English", " — C2"], ["Russian", " — B2"], ["French", " — B2"]]}/>                
                
                <SingleSkill title={german ? "In Aussicht" : "In the Future"} skills={[["Shopify", ""], ["Angular", ""], ["Wordpress", ""], ["Icecast", ""], ["Liquidsoap", ""], ["Vue.js", ""], ["React Native", ""]]}/>                
            </div>
            <SkillImgs containerRef={containerRef}/>
        </motion.section>
    );
}

export default Skillset;