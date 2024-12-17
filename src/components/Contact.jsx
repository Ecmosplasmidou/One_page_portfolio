import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useTranslation } from "react-i18next";

const Contact = () => {

  const { t } = useTranslation();

  const formRef = useRef(null);
  const [form, setForm] = useState(() => ({
    name: "",
    email: "",
    message: "",
  }));
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_0y1w367', 
      'template_kdod19v', 
      {
        from_name: form.name,
        to_name: 'Cassam',
        from_email: form.email,
        to_email:'ecmosdev@gmail.com',
        message: form.message
      },
      '_tHtxLTIm9O3BJmbK')
      .then(() =>{
        setLoading(false);
        alert(t('contactSection.alert200'));
      setForm({
        name: "",
        email: "",
        message: "",
      });
      }, (error)=>{
        setLoading(false);
        console.error(error);
        alert(t('contactSection.alert400'));
      });
  };

  return (
<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden relative">
    <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
      <p className={styles.sectionSubText}>{t('contactSection.subText')}</p>
      <h3 className={styles.sectionHeadText}>{t('contactSection.headText')}</h3>
      <form ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8">
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">{t('contactSection.name')}</span>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder={t('contactSection.placeholderName')}
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">{t('contactSection.email')}</span>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder={t('contactSection.placeholderEmail')}
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">{t('contactSection.message')}</span>
          <textarea rows="7" name="message" value={form.message} onChange={handleChange} placeholder={t('contactSection.placeholderMessage')}
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
        </label>
        <button type="submit"
          className="bg-quadrary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
          {loading ? t('contactSection.sending...') : t('contactSection.send')}
        </button>
      </form>
    </motion.div>
    <motion.div variants={slideIn('right', 'tween', 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
    </motion.div>
  </div>
  )
}
export default SectionWrapper(Contact, "contact");



