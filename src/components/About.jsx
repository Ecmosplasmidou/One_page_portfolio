import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useTranslation } from "react-i18next";
import web from '../assets/web.png';
import mobile from '../assets/mobile.png';
import backend from '../assets/backend.png';
import creator from '../assets/creator.png';


const iconMap = { web, mobile, backend, creator };


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
          <img src={iconMap[icon]} alt={title} className="w-16 h-16 object-contain mb-4"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt> //aller dans constants/index.js/services pour changer les titres et images
  ) 
}

const About = () => {
  const { t } = useTranslation();
  const services = t('services', { returnObjects: true });
  return (
    <>
      <motion.div variants={textVariant()} className="mt-[50px]">
      <p className={`${styles.sectionSubText}`}>{t('aboutSection.subText')}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t('aboutSection.headText')}</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className="mt-4 text-secondary text-[-17px] max-w-3xl leading-[-30px]">
        {t('aboutSection.description')}
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