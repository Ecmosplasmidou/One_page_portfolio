import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { styles } from '../styles';
// import { ComputersCanvas } from "./canvas";

const Hero = () => {

  const { t } = useTranslation();

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[80px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className=" mt-[100px] flex flex-col justify-center items-center sml:mt-[150px]">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 h-80 xs:h-100 sml:h-100 violet-gradient"></div>
        </div>
        <div className="sml:mt-[180px] mt-[150px] xs:mt-[80px] relative z-10">
          <h1 className={`${styles.heroHeadText} text-white`}>{t('heroSection.greeting')} <span className="text-[#915eff]">Cassam</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>{t('heroSection.description_one')}<br className="sm:block hidden"/>
          {t('heroSection.description_two')}<br className="sm:block hidden"/>
          {t('heroSection.description_three')}
          </p>
        </div>
      </div>   
      {/* <ComputersCanvas /> */}
      <div className="w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 xs:mt-[670px] sml:mt-[700px] mt-[600px]">
            <motion.dev
              animate={{
                y:[0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>   
    </section>
  )
}
export default Hero;