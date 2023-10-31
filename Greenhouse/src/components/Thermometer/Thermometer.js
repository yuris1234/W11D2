import ReactSlider from "react-slider";
import './Thermometer.css';
import { useClimateContext } from "../../context/ClimateContext";
import { useEffect } from "react";

function Thermometer() {
  const { climateTemperature, setClimateTemperature, currentTemperature, setCurrentTemperature } = useClimateContext()
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
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {currentTemperature}°F</div>
      <ReactSlider
        value={climateTemperature}
        onAfterChange={(val) => {
          setClimateTemperature(val)
        }}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;