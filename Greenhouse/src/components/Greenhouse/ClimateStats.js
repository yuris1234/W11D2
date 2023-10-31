import './ClimateStats.css';
import { useClimateContext } from '../../context/ClimateContext';
import { useState, useEffect } from 'react';

function ClimateStats() {

  const { climateTemperature, setClimateTemperature, climateHumidity, setClimateHumidity, currentTemperature, setCurrentTemperature} = useClimateContext();

  
  // debugger

  
  useEffect(() => {
    if (currentTemperature !== climateTemperature) {
      setTimeout(() => {
        if (currentTemperature > climateTemperature){
          setCurrentTemperature(currentTemperature-1);
        } else {
          setCurrentTemperature(currentTemperature+1);
        }
      }, 1000)
    }
  }, [currentTemperature, climateTemperature]);

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