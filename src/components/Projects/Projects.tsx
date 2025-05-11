import { motion } from "motion/react";
import SingleProject from "../SingleProject/SingleProject";
import './Projects.css'

interface ProjectsProps {
    german: boolean;
}

const Projects = ({german} : ProjectsProps) => {
    return (  
        <motion.section id="projects"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{opacity: 1, y: 0, transition: {delay: .2, duration: .4}}}
        viewport={{once: false, amount: 0}}>
            <h2 className="stickyh2">{german ? "Projekte" : "Projects"}<a href="#hero" className="arrow" title='Back to top'>↑</a></h2>
            <div className="teasers grid">
                <SingleProject 
                    title="Sparkle Community" 
                    text={german ? "Eine Social Media Platform" : "A social media platform for users to create personalized profiles to share their photos and thoughts connected to joyful or mindful moments."} 
                    githubLink="https://github.com/bebzbzbz/Sparkle-App" 
                    deployLink="https://sparkle-community.vercel.app/" video="/videos/sparkle_mobile.mp4"/>
                <SingleProject 
                    title="Recipe Haven" 
                    text={german ? "Eine Plattform zum Durchstöbern von Rezepten oder um Mitglied zu werden und eigene Rezepte zu erstellen und bearbeiten zu können." : "A platform for browsing recipes or becoming a member to create and edit your own."} 
                    githubLink="https://github.com/bebzbzbz/Recipe-Haven" 
                    deployLink="https://bz-recipe-haven.vercel.app/" video="/videos/recipehaven_mobile.mp4"/>
                <SingleProject 
                    title="Pokémon DB"  
                    text={german ? "Eine Pokédex ähnliche App mithilfe der öffentlichen Pokémon-API. Enthält Pokémon-Detailseiten, alle Generationen, sowie Suchfunktionen." : "A Pokédex adjacent app using the public Pokémon API. Includes Pokémon detail pages, all generations and search functions."}
                    githubLink="https://github.com/bebzbzbz/Project-Pokemon-API" 
                    deployLink="https://pokemon-api-duo-project.vercel.app/" video="/videos/pokemon_mobile.mp4"/>
                <SingleProject 
                    title="Rock Paper Scissors!" 
                    text={german ? "Ein simples, unendliches Schere-Stein-Papier-Spiel, gebaut mit React.js und illustriert von mir selbst." : "A simple, infinite game of Rock Paper Scissors built with React.js, featuring my own illustrations."}
                    githubLink="https://github.com/bebzbzbz/Rock-Paper-Scissors-Game" 
                    deployLink="https://bz-rock-paper-scissors.vercel.app/" video="/videos/rockpaperscissors_mobile_cut.mp4"/>
                <SingleProject 
                    title="Classic Calculator" 
                    text={german ? "Ein klassischer Taschenrechner in modernem Design, programmiert mit TypeScript" : "Classic calculator in a modern design, programmed with TypeScript."}
                    githubLink="https://github.com/bebzbzbz/Calculator-Project" 
                    deployLink="https://bz-calculator-project.vercel.app/" video="/videos/calc_mobile.mp4"/>               
            </div>
        </motion.section>
    );
}

export default Projects;