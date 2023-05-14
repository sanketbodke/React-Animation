import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import "./App.css";
import "./boxes.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <div className="flex">
        <div className="boxes">BOX 1</div>
        <div className="boxes">BOX 2</div>
        <div className="boxes" data-aos="fade-up">BOX 3</div>
        <div className="boxes" data-aos="fade-left">BOX 4</div>
        <div className="boxes" data-aos="fade-right">BOX 5</div>
        <div className="boxes" data-aos="flip-right">BOX 6</div>
        <div className="boxes" data-aos="flip-left">BOX 6</div>
      </div>
    </div>
  );
};

export default App;
