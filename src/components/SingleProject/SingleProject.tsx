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
        <div className="flex flex-col teaser">
            <article className="dropshadow flex center-center">
                <video src={video} loop onMouseEnter={(e) => (e.target as HTMLVideoElement).play()} onMouseLeave={(e) => (e.target as HTMLVideoElement).pause()}>
                </video>
            </article>
            <article className="grid">
                <div className="flex flex-col">
                    <h3>{title}</h3>
                    <div className="flex">
                        <a href={githubLink} target="_blank" title="See project on Github">Github</a>
                        <a href={deployLink} target="_blank" title="Visit the deployed project website">Deployment</a>
                    </div>
                </div>
                <p>{text}</p>
            </article>
        </div>
        
    );
}

export default SingleProject;