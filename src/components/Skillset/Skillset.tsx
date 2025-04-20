import './Skillset.css'

const Skillset = () => {
    return (  
        <section id="skillset">
            <h2 className='stickyh2'>Skillset</h2>
            <article className="grid">
            <div>
                <h3>Tech Stack</h3>
                <ul>
                    <li>React.js</li>
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>SASS/SCSS</li>
                    <li>Tailwind CSS</li>
                </ul>
            </div>
            <div>
                <h3>Workflow</h3>
                <ul>
                    <li>Responsive Layout</li>
                    <li>Git</li>
                    <li>Debugging</li>
                    <li>Node.js</li>
                    <li>CSS Animations</li>
                    <li>RESTful APIs</li>
                </ul>
            </div>
            
            </article>
            <article className='grid col-2'>
            <div>
                <h3>Design</h3>
                <ul>
                    <li>Photoshop</li>
                    <li>InDesign</li>
                    <li>Illustrator</li>
                    <li>Premiere Pro</li>
                    <li>Figma</li>
                </ul>
            </div>
            <div>
                <h3>Languages</h3>
                <ul>
                    <li>German - Native Speaker</li>
                    <li>English - C2</li>
                    <li>Russian - B1</li>
                    <li>French - B2</li>
                </ul>
            </div>
            </article>
        </section>
    );
}

export default Skillset;