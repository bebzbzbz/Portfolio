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
                initial={{opacity: 0, y: -400}}
                whileInView={{opacity: 1, y: 0, transition:{duration: .5, delay: index * .2, ease: [0.25, 0.46, 0.45, 0.94]}}}
                drag
                dragConstraints={containerRef}
                dragElastic={.1}
                />
            )}
        </div>
    );
}

export default SkillImgs;