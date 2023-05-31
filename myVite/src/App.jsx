import { useState } from "react";
import "./App.css";
import { CV } from "./cv/Cv";
import Hero from "./components/hero/Hero";
import Education from "./components/education/education";
import Experience from "./components/experience/Experience";
import About from "./components/about/about";
import More from "./components/more/more";

const { hero, education, experience, languages, habilities, volunteer } = CV;

const App = () => {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
      <Hero hero={hero} />
      <h3 className="About me">About me</h3>
      <About hero={hero} />
      <Education education={education} />
      <Experience experience={experience} />
      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
      />
      <div className="buttons">
        <button className="btn" onClick={() => setShowEducation(true)}>
          Education
        </button>
        <button className="btn" onClick={() => setShowEducation(false)}>
          Experience
        </button>
      </div>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
    </div>
  );
};

export default App;
