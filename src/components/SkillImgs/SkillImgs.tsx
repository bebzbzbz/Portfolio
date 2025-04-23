import { motion } from "motion/react";

interface SkillImgsProps {
    containerRef: React.RefObject<HTMLDivElement | null>
}

const SkillImgs = ({containerRef}: SkillImgsProps) => {
    const imgs : string[] = [
        "/svg/react.svg",
        "/svg/typescript.svg",
        "/svg/javascript.svg",
        "/svg/html5.svg",
        "/svg/sass.svg",
        "/svg/tailwind.svg",
        "/svg/photoshop.svg",
        "/svg/indesign.svg",
        "/svg/illustrator.svg",
        "/svg/premiere.svg",
        "/svg/figma.svg",
    ]

    return (  
        <div className='imgs flex center-between'>
            {imgs.map((img, index) =>
                <motion.img src={img}
                initial={{opacity: 0, y: -300}}
                whileInView={{opacity: 1, y: 0, transition:{duration: .5, delay: index * .2, type: "spring", stiffness: 100, damping: 10, mass:2}}}
                drag
                dragConstraints={containerRef}
                dragElastic={.1}
                viewport={{once: true, amount: .8}}
            />
            )}
        </div>
    );
}

export default SkillImgs;