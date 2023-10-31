import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { ThemeContext, useTheme } from '../../context/ThemeContext';
import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {

  const { themeName, setThemeName } = useTheme();

  let src = nightImage;

  if (themeName === 'day') {
      src = dayImage;
  }

  const img = <img className='greenhouse-img' src={src} alt='greenhouse'/>;

  // const img = <img  className='greenhouse-img'
  //           src={dayImage}
  //           alt='greenhouse' 
  //           />

  return (
    <section>
      {img}
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;