import { motion } from 'motion/react';
import './SingleSkill.css'

interface SingleSkillProps {
    title: string,
    skills: [string, string][]
}

const SingleSkill = ({title, skills}: SingleSkillProps) => {
    return (  
        <article>
            <h3>{title}</h3>
            <ul className='flex'>
                {skills.map((skill: [string, string], index) => <motion.li key={crypto.randomUUID()}
                initial={{opacity: 0, y: 80}}
                whileInView={{opacity: 1, y: 0, transition:{delay: (index/10), duration: .4}}}
                viewport={{once: false, amount: 0}}
                ><b>{skill[0]}</b>{skill[1]}</motion.li>)}
            </ul>
        </article>
    );
}

export default SingleSkill;