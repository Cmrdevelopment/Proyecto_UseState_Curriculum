import "./About.css";

// Función a través de un props para llamar a los datos de aboutMe
const About = ({ hero }) => {
  return <div className="About">{AboutMe(hero.aboutMe)}</div>;
};

// Buscamos los datos a través de un .map de aboutMe a través del argunmento aboutMeArr y lo representamos en un Json, importante el keys para React lo lea correctamente
const AboutMe = (aboutMeArr) =>
  aboutMeArr.map((aboutMe) => (
    <div key={JSON.stringify(aboutMe)}>
      <p>{aboutMe.info}</p>
    </div>
  ));

export default About;

//
//
// Otra manera de hacerlo seria con está función:

// const showAboutMe = (aboutMeArr) =>
//   aboutMeArr.map((aboutMe) => <p>{aboutMe.info}</p>);
