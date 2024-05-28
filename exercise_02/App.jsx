import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  const temperature = 25;
  return (
    <>
      <Header temperature={temperature} />
      <Content temperature={temperature} />
      <Footer />
    </>
  );
};

export default App;
