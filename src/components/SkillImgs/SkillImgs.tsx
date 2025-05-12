import { motion } from "motion/react";
import { JSX } from "react";

interface SkillImgsProps {
    containerRef: React.RefObject<HTMLDivElement | null>,
    icons: JSX.Element[]
}

const SkillImgs = ({containerRef, icons}: SkillImgsProps) => {
    return (  
        <div className="imgs center-center">
            {icons.map((icon, index) =>
                <motion.div
                initial={{opacity: 0, y: -300}}
                whileInView={{opacity: 1, y: 0, transition:{duration: .5, delay: index * .2, type: "spring", stiffness: 100, damping: 10, mass:2}}}
                drag
                dragConstraints={containerRef}
                dragElastic={.1}
                viewport={{once: true, amount: .8}}>{icon}</motion.div>
            )}
        </div>
    );
}

export default SkillImgs;