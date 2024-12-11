import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";


const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div 
            options={{
              max: 45,
              scale: 1,
              speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-center items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain mb-4"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt> //aller dans constants/index.js/services pour changer les titres et images
  ) 
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-[50px]">
      <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className="mt-4 text-secondary text-[-17px] max-w-3xl leading-[-30px]">
      After five years of working in a field that didn’t align with my true interests, I made the decision to follow my passion and pursue a career in full-stack development. 
      The world of coding, problem-solving, and creating digital solutions has always fascinated me. 
      This passion drove me to take the leap and invest in learning the skills necessary to build dynamic, user-friendly applications. 
      Today, I’m proud to say that I’ve successfully transitioned into a field that not only excites me but also allows me to grow and thrive as a full-stack developer.
      </motion.p>
      <div className="mt-20 grid sm:grid-cols-2 gap-10">
        {services.map((service, index)=>
          <ServiceCard key={service.title} index={index} {...service} />
        )}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");