import { useState } from "react";
import "./App.css";
import { CV } from "./cv/Cv";
import Hero from "./components/hero/Hero";
import Education from "./components/education/education";
import Experience from "./components/experience/Experience";
import About from "./components/about/About";
import More from "./components/more/more";

// destructuring para extraer datos del CV
const { hero, education, experience, languages, habilities, volunteer } = CV;

const App = () => {
  // useState crea un estado cuyo valor inicial es showEducation y la función que lo cambia es setShowEducation
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
      {/* Traemos la función de los archivos Hero, About me, Education, Experience y More para que se ejecute en app */}
      <Hero hero={hero} />
      <h3 className="About me">About me</h3>
      <About hero={hero} />
      {/* Se crea los botones de Education y Experience. La forma de que se represente los datos de educación o experience es dandole un true o false al setShowEducation */}
      <div className="buttons">
        <button className="btn" onClick={() => setShowEducation(true)}>
          Education
        </button>
        <button className="btn" onClick={() => setShowEducation(false)}>
          Experience
        </button>
      </div>
      {/* Traemos y pintamos educación o experience según la opción elegida */}
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      {/* Traemos y pintamos desde el archivo more los datos de languages, habilities y volunteer */}
      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
      />
      {/* pie de página */}
      <div className="pieCopy">@cmrbolsa - 2023 - CV Edward Stark -</div>
    </div>
  );
};

export default App;
