import './AboutMe.css'

const AboutMe = () => {
    return ( 
        <section id="about">
            <h2 className='stickyh2'>About Me</h2>
            <div className='grid'>
            <article>
                <p>I'm a Frontend Web Developer with an eye for design and a passion for solving puzzles. I am so curoius and blablabla dfghsadgfa hfhgsf hehjghjf ghe dhhgeh ghfadhfsaghfd shgadfgazfhshgd  fdhgfghdf</p>
                <p>This is another little paragraph about how i have had unrestricted internet access for better or worse :PPPPPP gfhgsfgahgdfgnf</p>
                <p>My coding journey started with my last job as a trainee web designer, where I used HTML, CSS, content management systems, Photoshop, but also Javascript and Wordpress to update customer websites according to their wishes and advised them over the phone. Without much coding knowledge prior, I was learning quickly as I went and came to love the field.</p>
                <p>During a 6-month long intensive Frontend Web Development Bootcamp - with a focus on TypeScript and React - I have broadened my coding skills immensely. Combined with my background in Communication Design, I am excited to become part of a creative team to develop, create and find solutions for engaging and comprehensive user experiences.</p>
            </article>
            <img src="/img/photo.jpg" alt="Photo of Beatrice"/>
            </div>
        </section>        
    );
}

export default AboutMe