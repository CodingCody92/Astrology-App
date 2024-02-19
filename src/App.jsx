import React, { useState } from "react";
import "./App.css";
import { Affirms_Info } from "./components/affirms";
import { theSigns } from "./components/signs";
import headImg from "./assets/zodiac.png";
// const affirms = ["Embrace your boldness and take courageous action","Ground Yourself and savor lifes pleasures confidently"];

function getRanNum(max) {
  return Math.floor(Math.random() * (max + 1));
}


function App() {
  const [zodSign, setZodSign] = useState(theSigns[getRanNum(11)]);
  const [affirms, setAffirms] = useState(Affirms_Info[getRanNum(11)].description);

  // const affirmGoals = affirms[getRanNum(1)];
  const handleRefresh = () => {
    setZodSign(theSigns[getRanNum(11)]);
    setAffirms(Affirms_Info[getRanNum(11)].description);
  }
  return (
    <div>
      <header>
        <div id="top-ctn">
          {/* <img className="top" src={headImg} alt="" /> */}
        </div>
        <h2>Astrological Affirmations</h2>
        <div className="sign">
          {/* <h1> <span className="name">{zodSigns},</span> {affirmGoals}.</h1> */}
          <h1>
            <span className="name">{zodSign},</span> {affirms}.
          </h1>
        </div>
       <div className="btn-ctn">
        <button className="btn" onClick={handleRefresh}>New Affirmation</button>
       </div>
      </header>
      {/* <footer>Marathon Web Design</footer> */}
    </div>
  );
}

export default App;
