import './Hero.css'

const Hero = () => {
    return (  
        <section id='hero' className="flex">
            <h1>Frontend Web Developer</h1>
            <a href="#projects">↓</a>
            <div className='flex'><img src="/svg/star2.svg" alt="" /><h4>beatrice balzer</h4></div>
        </section>
    );
}

export default Hero;