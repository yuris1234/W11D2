import './ClimateStats.css';
import { useClimateContext } from '../../context/ClimateContext';

function ClimateStats() {

  const { climateTemperature, climateHumidity } = useClimateContext();

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {climateTemperature}°F
      </div>
      <div className="humidity">
        Humidity {climateHumidity}%
      </div>
    </div>
  )
}

export default ClimateStats;