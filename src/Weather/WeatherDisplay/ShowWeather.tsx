import React from "react";

type Temp = {
  temperature: number;
};

const ShowWeather: React.FunctionComponent<Temp> = (props) => {
  return (
    <div>
      <h2>The Weather</h2>
      <div>
        {props.temperature  === 0  ? ("Click get temp for temperature"
         
        ) : ( <h5>
            Temperature:
            {((props.temperature - 273.15) * 1.8 + 32).toFixed(0)} F
          </h5>
          
        )}
      </div>
    </div>
  );
};

export default ShowWeather;
