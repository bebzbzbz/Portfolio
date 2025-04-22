import { motion } from 'motion/react';
import SingleSkill from '../SingleSkill/SingleSkill';
import './Skillset.css'

const Skillset = () => {
    return (  
        <motion.section id="skillset"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{opacity: 1, y: 0, transition: {delay: 0, duration: .4}}}
        viewport={{once: false, amount: 0}}>
            <h2 className='stickyh2'>Skillset</h2>
            
            <SingleSkill title='Tech Stack' skills={["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "SASS/SCSS", "Tailwind CSS"]}/>
            <div>
                <img src="/svg/react.svg" alt="" />
                <img src="/svg/typescript.svg" alt="" />
                <img src="/svg/javascript.svg" alt="" />
                <img src="/svg/html5.svg" alt="" />
                <img src="/svg/css3.svg" alt="" />
                <img src="/svg/sass.svg" alt="" />
                <img src="/svg/tailwind.svg" alt="" />
            </div>

            <SingleSkill title='Design' skills={["Photoshop", "InDesign", "Illustrator", "Premiere Pro", "Figma"]}/>

            <div>
                <img src="/svg/photoshop.svg" alt="" />
                <img src="/svg/indesign.svg" alt="" />
                <img src="/svg/illustrator.svg" alt="" />
                <img src="/svg/premiere.svg" alt="" />
                <img src="/svg/figma.svg" alt="" />
            </div>
            
            <SingleSkill title='Languages' skills={["German - Native Speaker", "English - C2", "Russian - B1", "French - B2"]}/>
            
            <div>
                <p>de</p>
                <p>en</p>
                <p>ru</p>
                <p>fr</p>
            </div>
        </motion.section>
    );
}

export default Skillset;