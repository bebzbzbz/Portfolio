import { useEffect, useState } from 'react';
import './Hero.css'
import { motion } from 'motion/react';

const Hero = () => {
    const title : string = "Frontend Web Developer"
    const replacementSymbols: Record<string, string[]> = {
        a: ['α', '@', 'ä', 'å', 'ª'],
        b: ['*', '=', '?', '§', ';'],
        c: ['¢', '©', 'ç', 'č', 'ċ'],
        d: ['}', '"', '{', '+', '%'],
        e: ['3', 'ë', 'ē', '€', 'ė'],
        f: ['#', '!', '?', '&', ';'],
        g: ['γ', 'ğ', 'ġ', 'ģ', 'ǥ'],
        h: ['η', 'ħ', 'ȟ', 'ĥ', 'ɦ'],
        i: ['ι', 'ï', 'ī', 'ĭ', 'į'],
        j: ['ĵ', 'ɉ', 'ǰ', 'ʝ', 'ϳ'],
        k: ['κ', 'ķ', 'ĸ', 'ƙ', 'қ'],
        l: ['/', 'ľ', 'ĺ', 'ļ', 'ł'],
        m: ['μ', 'м', 'ɱ', 'ӎ', 'Ӎ'],
        n: ['~', 'ñ', 'ň', '%', '&'],
        o: ['€', 'ø', 'ö', 'ő', '0'],
        p: ['@', '+', '8', '€', '#'],
        q: ['ϙ', 'ҩ', 'ɋ', 'գ', 'ʠ'],
        r: ['°', 'ř', 'ŗ', '?', '#'],
        s: ['š', 'ş', 'ß', 'ś', 'ș'],
        t: ['^', 'ť', ':', '/', '$'],
        u: ['υ', 'ü', 'ū', 'ů', 'ű'],
        v: [':', '7', '=', '9', '1'],
        w: ['#', 'ẁ', 'ẃ', '3', 'ẅ'],
        x: ['ξ', 'х', 'ҳ', 'ӽ', 'ӿ'],
        y: ['γ', 'ÿ', 'ý', 'ŷ', 'ƴ'],
        z: ['ζ', 'ż', 'ź', 'ž', 'ƶ']
    };

    const [transformedTitle, setTransformedTitle] = useState<string[]>(title.split(""));

    const characterHover = (index: number, letter: string) => {
        const symbols = replacementSymbols[letter.toLowerCase()] || [];
        let currentIndex = 0;

        if (symbols.length > 0) {
            const originalLetter = letter;

            const interval = setInterval(() => {
                setTransformedTitle((prev) => {
                    const newTitle = [...prev];
                    newTitle[index] = symbols[currentIndex]
                    return newTitle
                });
                currentIndex++;

                if(currentIndex === symbols.length - 1) {
                    clearInterval(interval)

                    setTimeout(() => {
                        setTransformedTitle((prev) => {
                            const newTitle = [...prev];
                            newTitle[index] = originalLetter;
                            return newTitle;
                        })
                    }, 100);
                }
            }, 100);
            setTransformedTitle((prev) => {
                const newTitle = [...prev];
                newTitle[index] = symbols[currentIndex];
                return newTitle;
            });
        }
    }

    useEffect(() => {
        title.split("").forEach((letter, index) => {
            setTimeout(() => {
                characterHover(index, letter);
            }, index * 100);
        });
    }, []);

    return (  
        <section id='hero' className="flex">
            <h1>{transformedTitle.map((letter, index) => (
                    <motion.span 
                        initial={{ opacity: 0}}
                        whileInView={{opacity: 1,transition: {delay: (index/15), duration: 0}}}
                        key={index}
                        onHoverStart={() => characterHover(index, title[index])}
                    >
                        {letter}
                    </motion.span>
                ))}</h1>
            <a href="#projects" className='arrow'>↓</a>
            <a href="#about" className='logo flex'>
                <motion.img src="/svg/star2.svg" alt="" animate={{rotate: [0, 360], transition: {duration: 5, repeat: Infinity, ease: "linear"}}}/><h4>beatrice balzer</h4></a>
        </section>
    );
}

export default Hero;