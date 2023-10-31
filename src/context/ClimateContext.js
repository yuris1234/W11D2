// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { createContext, useContext, useState } from "react";

export const ClimateContext = createContext();

export const useClimateContext = () => useContext(ClimateContext);

export const ClimateProvider = (props) => {
    const [climateTemperature, setClimateTemperature] = useState(50);

    return (
        <ClimateContext.Provider value={{climateTemperature, setClimateTemperature}}>
            {props.children}
        </ClimateContext.Provider>
    )
}