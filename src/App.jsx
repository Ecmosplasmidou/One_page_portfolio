import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Studie, Tech, Works, Hero, Navbar, StarsCanvas, Footer} from './components';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';


const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
          <div className='relative z-10 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Studie />
            <Tech />
            <Works />
          </div>
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
            <Footer />
          </div>
      </BrowserRouter>
    </I18nextProvider>
  );
};

export default App;