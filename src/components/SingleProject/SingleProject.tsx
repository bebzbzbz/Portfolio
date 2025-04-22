import { motion } from 'motion/react';
import './SingleProject.css'

interface SingleProjectProps {
    title: string,
    text: string,
    githubLink: string,
    deployLink: string
    video: string
}

const SingleProject = ({title, text, githubLink, deployLink, video}: SingleProjectProps) => {

    return (  
        <motion.div className="flex flex-col teaser"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{opacity: 1, y: 0, transition: {delay: .3, duration: .4}}}
            viewport={{once: false, amount: 0}}>
            <a href={deployLink} target='_blank' className="dropshadow flex center-center">
                <video src={video} loop onMouseEnter={(e) => (e.target as HTMLVideoElement).play()} onMouseLeave={(e) => (e.target as HTMLVideoElement).pause()}>
                </video>
            </a>
            <article className="grid">
                <div className="flex flex-col">
                    <h3>{title}</h3>
                    <div className="flex">
                        <a href={githubLink} className='btn' target="_blank" title="See the project on Github">Github</a>
                        <a href={deployLink} className='btn' target="_blank" title="Visit the deployed project website">Deployment</a>
                    </div>
                </div>
                <p>{text}</p>
            </article>
        </motion.div>
        
    );
}

export default SingleProject;