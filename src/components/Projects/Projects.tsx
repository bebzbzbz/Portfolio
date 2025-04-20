import SingleProject from "../SingleProject/SingleProject";
import './Projects.css'

const Projects = () => {
    return (  
        <section id="projects">
            <h2 className="stickyh2">Projects</h2>
            <div className="teasers grid">
                <SingleProject 
                    title="Pokemon"  
                    text="A Pokédex app using the public Pokémon API including an overview of Gen 1 Pokémon, detail pages and search functions." 
                    githubLink="https://github.com/bebzbzbz/Project-Pokemon-API" 
                    deployLink="https://pokemon-api-duo-project.vercel.app/" video="/videos/pokemon.mp4"/>
                <SingleProject 
                    title="Rock Paper Scissors" 
                    text="A simple, infinite game of Rock Paper Scissors built with React, featuring my own illustrations." 
                    githubLink="https://github.com/bebzbzbz/Rock-Paper-Scissors-Game" 
                    deployLink="https://bz-rock-paper-scissors.vercel.app/" video="/videos/rockpaperscissors.mp4"/>
                <SingleProject 
                    title="Beer API" 
                    text='A project to showcase a variety of beers by the Beer API with an overview, detail page, random beer function, option to save favourites and view in a favourites ("my beer shelf") page. Developed as a team of two!' 
                    githubLink="https://github.com/bebzbzbz/Project_Beer_API" 
                    deployLink="https://bz-project-beer-api.vercel.app/" video="/videos/beer.mp4"/>
                <SingleProject 
                    title="Calculator" 
                    text="This project is a classic calculator, created during a 6-month web development bootcamp focusing on React.js and TypeScript." 
                    githubLink="https://github.com/bebzbzbz/Calculator-Project" 
                    deployLink="https://bz-calculator-project.vercel.app/" video="/videos/calculator.mp4"/>
                <SingleProject 
                    title="Recipe Haven" 
                    text="This project is a classic calculator, created during a 6-month web development bootcamp focusing on React.js and TypeScript." 
                    githubLink="https://github.com/bebzbzbz/Recipe-Haven" 
                    deployLink="https://bz-recipe-haven.vercel.app/" video="/videos/recipe.mp4"/>
            </div>
        </section>
    );
}

export default Projects;