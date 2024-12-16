import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Studie, Tech, Works, Hero, Navbar, StarsCanvas, Footer} from './components';
import './i18n';


const App = () => {
  return (
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
  );
};

export default App;