import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, websiteIcon, insta  } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useTranslation } from "react-i18next";
import carrent from '../assets/carrent.png';
import jobit from '../assets/jobit.png';
import tripguide from '../assets/tripguide.png';
import trendyparis from '../assets/trendyparis.png';


const projectsPics = { carrent, jobit, tripguide, trendyparis };

const ProjectCard = ( {index, name, description, tags, image, source_code_link, website, instagram }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="works-container flex justify-center items-center">
      <Tilt 
        option={{
          max:45,
          scale:1,
          speed:450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
          <div className="relative w-full h-[230px]">
            <img src={projectsPics[image]}
                alt={name}
                className="w-full h-full object-cover rounded-2xl"/>
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              {source_code_link && (
              <div onClick={()=> 
                window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                  <img src={github} alt={github} 
                    className="w-1/2 h-1/2 object-contain"/>
              </div>
              )}
              {website && (
                <div
                  onClick={() => window.open(website, "_blank")}
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img src={websiteIcon} alt="Website" className="w-1/2 h-1/2 object-contain" />
                </div>
              )}
              {instagram && (
                <div onClick={() => window.open(website, "_blank")}
                className="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                  <img src={insta} alt={instagram} className="mt-1"/>
                </div>
              )}
            </div>
          </div>
          <div className="mt-5">
            <h3><strong>{name}</strong></h3>
            <p>{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
    </motion.div>
  )
}


const Works = () => {

  const { t } = useTranslation();
  const projects = t('projects', { returnObjects: true });

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
        {(t('worksSection.subText'))}
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
        {(t('worksSection.headText'))}
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          {t('worksSection.description')}<strong> {t('worksSection.description_two')}</strong>
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 justify-center me-2 sml:grid sml:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`}
          index={index}
          {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "works");
