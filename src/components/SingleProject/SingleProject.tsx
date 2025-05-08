import { motion } from 'motion/react';
import './SingleProject.css'
import { useEffect, useRef } from 'react';

interface SingleProjectProps {
    title: string,
    text: string,
    githubLink: string,
    deployLink: string
    video: string
}

const SingleProject = ({title, text, githubLink, deployLink, video}: SingleProjectProps) => {
    const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)

    const videoEl = useRef<HTMLVideoElement>(null);

    const attemptPlay = () => {
        if(isMobile) {
        videoEl &&
        videoEl.current &&
        videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
        })}
    };

    useEffect(() => {
        attemptPlay();
    }, []);

    return (  
        <motion.div className="flex flex-col teaser"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{opacity: 1, y: 0, transition: {delay: .3, duration: .4}}}
            viewport={{once: false, amount: 0}}>
            <a href={deployLink} target='_blank' className="dropshadow flex center-center" title='View project website'>
                <div className="halftone">
                    <div className="dots"></div>
                <video
                    loop
                    muted
                    playsInline
                    ref={videoEl} 
                    onMouseEnter={(e) => {!isMobile && (e.target as HTMLVideoElement).play()}} 
                    onMouseLeave={(e) => {!isMobile && (e.target as HTMLVideoElement).pause()}}>
                        <source src={video} />
                </video>
                </div>
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