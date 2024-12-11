import { Html, useProgress } from '@react-three/drei';
import { useEffect, useState } from "react";



const Loader = () => {
  const { progress } = useProgress();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 450px)"); // Assurez-vous que le point de rupture est correct
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Html center>
      <span className='canvas-load'>
        <p style={{
          fontSize: '14',
          color: 'white',
          textAlign: 'center',
          fontFamily: 'Poppins',
          marginTop: isMobile ? '320px' : '40',
          fontWeight: 'bold',
        }}>
          {progress.toFixed(2)}
        </p>
      </span>
    </Html>
  );
}
export default Loader;

// const Loader = () => {
//   return (
//     <h1>Loader</h1>
//   )
// }
// export default Loader;