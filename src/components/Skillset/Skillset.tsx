import { motion } from 'motion/react';
import SingleSkill from '../SingleSkill/SingleSkill';
import './Skillset.css'
import { useRef } from 'react';
import { transform } from 'motion';

const Skillset = () => {
    const images : string[] = [
        "/svg/react.svg",
        "/svg/typescript.svg",
        "/svg/javascript.svg",
        "/svg/html5.svg",
        "/svg/sass.svg",
        "/svg/tailwind.svg",
        "/svg/photoshop.svg",
        "/svg/indesign.svg",
        "/svg/illustrator.svg",
        "/svg/premiere.svg",
        "/svg/figma.svg",
    ]

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
            <div className='imgs flex center-between'>
                {images.map((image, index) =>
                    <motion.img src={image}
                    initial={{opacity: 0, y: -400}}
                    whileInView={{opacity: 1, y: 0, transition:{duration: .5, delay: index * .2, ease: [0.25, 0.46, 0.45, 0.94]}}}
                    drag
                    dragConstraints={containerRef}
                    dragElastic={.1}
                    />
                    )}
                </div>
        </motion.section>
    );
}

export default Skillset;