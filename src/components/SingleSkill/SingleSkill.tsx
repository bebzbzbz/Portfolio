import './SingleSkill.css'

interface SingleSkillProps {
    title: string,
    skills: string[]
}

const SingleSkill = ({title, skills}: SingleSkillProps) => {
    return (  
        <article>
            <h3>{title}</h3>
            <ul>
                {skills.map((skill: string) => <li>{skill}</li>)}
            </ul>
        </article>
    );
}

export default SingleSkill;