import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
      The technologies I have learned so far
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        My Technologys
      </h2>
    </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
      {technologies.map((technology)=>(
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
          <p className='text-white-100 text-[14px] pl-1 tracking-wider text-center'>{technology.name}</p>
        </div>
      ))}
    </div>
    </>
  )
}
export default SectionWrapper(Tech, "tech");