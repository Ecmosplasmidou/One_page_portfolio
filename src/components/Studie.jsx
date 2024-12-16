import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import three_wa from '../assets/company/3WA.png';
import hetic from '../assets/company/HETIC.jpg';
import lms from '../assets/company/lycee_ms.png';

const iconMap = { three_wa, hetic, lms };

const StudieCard = ({ studie }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={studie.date}
      iconStyle={{ background: studie.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={iconMap[studie.icon]}
            alt={studie.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{studie.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {studie.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {studie.points.map((point, index) => (
          <li
            key={`studie-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Studies = () => {
  const { t } = useTranslation();
  const studies = t("studies", { returnObjects: true });
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          {t('studiesSection.subText')}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
        {t('studiesSection.headText')}
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {studies.map((studie, index) => (
            <StudieCard
              key={`studie-${index}`}
              studie={studie}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Studies, "studies");