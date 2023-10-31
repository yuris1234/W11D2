import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {
  const { themeName, setThemeName } = useTheme();
  let liteSwitch = 
    <>
      <div className="on">DAY</div>
      <div className="off">NIGHT</div>
    </>;

  const handleClick = () => {
    
    liteSwitch = themeName === 'day' ? 
        <>
          <div className="on">DAY</div>
          <div className="off">NIGHT</div>
        </>
      :
        <>
          <div className="off">DAY</div>
          <div className="on">NIGHT</div>
        </>

      if(themeName === 'day'){
        setThemeName('night')
      }else{
        setThemeName('day')
      }
  }

  return (
    <div className={`light-switch ${themeName}`} onClick={ handleClick }>
      { liteSwitch }
    </div>
  );
}

export default LightSwitch;