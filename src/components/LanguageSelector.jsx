import { useTranslation } from 'react-i18next';
import { useState } from 'react'

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language)

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng).then(() => {
    setLanguage(lng);
    window.history.replaceState(null, null, `/One_page_portfolio/`);
  });
}

  return (
    <div className="flex gap-2">
      <button onClick={() => changeLanguage('en')} className="text-white">EN</button>
      <button onClick={() => changeLanguage('fr')} className="text-white">FR</button>
    </div>
  );
};

export default LanguageSelector;