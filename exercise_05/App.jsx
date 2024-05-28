import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
const App = () => {
  const defaultTemperature = 25;
  const [temperature, setTemperature] = useState(25); // Initial temperature value
  const [isOn, setIsOn] = useState(true); // Initial visibility state

  const decreaseTemperature = () => setTemperature((prevTemp) => prevTemp - 1);
  const increaseTemperature = () => setTemperature((prevTemp) => prevTemp + 1);
  const toggleIsOn = () => {
    if (isOn) {
      setIsOn(!isOn);
      setTemperature(defaultTemperature);
    } else {
      setIsOn(!isOn);
      setTemperature(defaultTemperature);
    }
  };

  return (
    <>
      <Header temperature={temperature} toggleIsOn={toggleIsOn} isOn={isOn} />
      <Content temperature={temperature} />
      <Footer
        increaseTemperature={increaseTemperature}
        decreaseTemperature={decreaseTemperature}
      />
    </>
  );
};

export default App;
