import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
const App = () => {
  const [temperature, setTemperature] = useState(25); // Initial temperature value

  const decreaseTemperature = () => setTemperature((prevTemp) => prevTemp - 1);
  const increaseTemperature = () => setTemperature((prevTemp) => prevTemp + 1);

  return (
    <>
      <Header temperature={temperature} />
      <Content temperature={temperature} />
      <Footer
        increaseTemperature={increaseTemperature}
        decreaseTemperature={decreaseTemperature}
      />
    </>
  );
};

export default App;
