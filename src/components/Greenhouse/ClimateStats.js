import './ClimateStats.css';
import { useClimateContext } from '../../context/ClimateContext';
import { useState, useEffect } from 'react';

function ClimateStats() {

  const { climateTemperature, setClimateTemperature, climateHumidity, setClimateHumidity } = useClimateContext();

  const { currentTemperature, setCurrentTemperature } = useState(50);

  useEffect(() => {
    setInterval(() => {
      if (currentTemperature != climateTemperature) {
        debugger
        setCurrentTemperature(currentTemperature+1);
      }
    }, 1000)
  }, [climateTemperature]);

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {currentTemperature}°F
      </div>
      <div className="humidity">
        Humidity {climateHumidity}%
      </div>
    </div>
  )
}

export default ClimateStats;