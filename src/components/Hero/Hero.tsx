import { useEffect, useState } from 'react';
import './Hero.css'
import { motion } from 'motion/react';

const Hero = () => {
    const name : string = "Beatrice Balzer"
    const title : string = "Frontend Web Developer"
    const replacementSymbols: Record<string, string[]> = {
        a: ['4', '@', 'ä', 'å', '*'],
        b: ['*', '=', '?', '§', ';'],
        c: ['¢', '©', 'ç', 'č', 'ċ'],
        d: ['}', '"', '{', '+', '%'],
        e: ['3', 'ë', 'ē', '€', 'ė'],
        f: ['#', '!', '?', '&', ';'],
        g: ['γ', 'ğ', 'ġ', 'ģ', 'ǥ'],
        h: ['η', 'ħ', 'ȟ', 'ĥ', 'ɦ'],
        i: ['1', 'ï', 'ī', ':', 'į'],
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
        z: ['2', 'ż', 'ź', '7', '?']
    };

    const [transformedTitle, setTransformedTitle] = useState<string[]>(title.split(""));
    const [transformedName, setTransformedName] = useState<string[]>(name.split(""));

    const characterHover = (index: number, letter: string, toTransform: "Title" | "Name") => {
        const symbols = replacementSymbols[letter.toLowerCase()] || [];
        let currentIndex = 0;

        if (symbols.length > 0) {
            const originalLetter = letter;

            const interval = setInterval(() => {
                if(toTransform === "Title") {
                    setTransformedTitle((prev) => {
                        const newTitle = [...prev];
                        newTitle[index] = symbols[currentIndex]
                        return newTitle
                    });
                } else {
                    setTransformedName((prev) => {
                        const newName = [...prev];
                        newName[index] = symbols[currentIndex]
                        return newName
                    })
                }
                
                currentIndex++;

                if(currentIndex === symbols.length - 1) {
                    clearInterval(interval)

                    setTimeout(() => {
                        if(toTransform === "Title") {
                            setTransformedTitle((prev) => {
                                const newTitle = [...prev];
                                newTitle[index] = originalLetter;
                                return newTitle;
                            })
                        } else {
                            setTransformedName((prev) => {
                                const newName = [...prev];
                                newName[index] = originalLetter;
                                return newName;
                            })
                        }
                    }, 100);
                }
            }, 100);
            if(toTransform === "Title") {
                setTransformedTitle((prev) => {
                    const newTitle = [...prev];
                    newTitle[index] = symbols[currentIndex];
                    return newTitle;
                });
            } else {
                setTransformedName((prev) => {
                    const newName = [...prev];
                    newName[index] = symbols[currentIndex];
                    return newName;
                });
            }
        }
    }

    useEffect(() => {
        title.split("").forEach((letter, index) => {
            setTimeout(() => {
                characterHover(index, letter, "Title");
            }, index * 100);
        });
        name.split("").forEach((letter, index) => {
            setTimeout(() => {
                characterHover(index, letter, "Name");
            }, index * 100);
        });
    }, []);

    return (  
        <section id='hero' className="flex">
            <h1 className='flex flex-col'>
                <span>
                {transformedName.map((letter, index) => (
                    <motion.span 
                        initial={{ opacity: 0}}
                        whileInView={{opacity: 1,transition: {delay: (index/14), duration: 0}}}
                        key={index}
                        onHoverStart={() => characterHover(index, name[index], "Name")}
                    >
                        {letter}
                    </motion.span>
                ))}
                </span>
                <span>{transformedTitle.map((letter, index) => (
                    <motion.span 
                        initial={{ opacity: 0}}
                        whileInView={{opacity: 1,transition: {delay: (index/15), duration: 0}}}
                        key={index}
                        onHoverStart={() => characterHover(index, title[index], "Title")}
                    >
                        {letter}
                    </motion.span>
                ))}</span>
            </h1>
            <a href="#projects" className='arrow'>↓</a>
            <motion.img 
                src="/svg/star2.svg" 
                alt="Star" 
                animate={{rotate: [0, 360], transition: {duration: 15, repeat: Infinity, ease: "linear"}}}/>
            <motion.img 
                src="/svg/star2.svg" 
                alt="Star" 
                animate={{rotate: [0, 360], transition: {duration: 12, repeat: Infinity, ease: "linear"}}}/>
        </section>
    );
}

export default Hero;