import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

const changeLanguage = (lng) => {
  i18n.changeLanguage(lng).then(() => {
    window.location.href='/One_page_portfolio/';
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