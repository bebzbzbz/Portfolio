import { motion } from "motion/react";
import SingleProject from "../SingleProject/SingleProject";
import './Projects.css'

const Projects = () => {
    return (  
        <motion.section id="projects"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{opacity: 1, y: 0, transition: {delay: .2, duration: .4}}}
        viewport={{once: false, amount: 0}}>
            <h2 className="stickyh2">Projects</h2>
            <div className="teasers grid">
                <SingleProject 
                    title="Recipe Haven" 
                    text="A platform for browsing recipes or becoming a member to create and edit your own." 
                    githubLink="https://github.com/bebzbzbz/Recipe-Haven" 
                    deployLink="https://bz-recipe-haven.vercel.app/" video="/videos/recipe.mp4"/>
                <SingleProject 
                    title="Pokémon DB"  
                    text="A Pokédex adjacent app using the public Pokémon API. Includes Pokémon detail pages, all generations and search functions." 
                    githubLink="https://github.com/bebzbzbz/Project-Pokemon-API" 
                    deployLink="https://pokemon-api-duo-project.vercel.app/" video="/videos/pokemon.mp4"/>
                <SingleProject 
                    title="The Beer Bar" 
                    text='A collection of beers with the option to save and view in a favourites ("my beer shelf") page.' 
                    githubLink="https://github.com/bebzbzbz/Project_Beer_API" 
                    deployLink="https://bz-project-beer-api.vercel.app/" video="/videos/beer.mp4"/>
                <SingleProject 
                    title="Rock Paper Scissors!" 
                    text="A simple, infinite game of Rock Paper Scissors built with React.js, featuring my own illustrations." 
                    githubLink="https://github.com/bebzbzbz/Rock-Paper-Scissors-Game" 
                    deployLink="https://bz-rock-paper-scissors.vercel.app/" video="/videos/rockpaperscissors.mp4"/>
                <SingleProject 
                    title="Classic Calculator" 
                    text="Classic calculator in a modern design. Programmed with TypeScript." 
                    githubLink="https://github.com/bebzbzbz/Calculator-Project" 
                    deployLink="https://bz-calculator-project.vercel.app/" video="/videos/calculator.mp4"/>               
            </div>
        </motion.section>
    );
}

export default Projects;