import "./Hero.css";

// Definimos la función de Hero a través de una props y utilzamos como argumento hero
const Hero = ({ hero }) => {
  return (
    <div className="hero">
      {/* Llamamos a la imagen desde el archivo Cv*/}
      <img src={hero.image} alt="imagen de Anthony Edward Stark" />
      <div className="card">
        <h2>
          {/* Llamamos al nombre y apellidos desde el archivo Cv*/}
          {hero.name} {hero.surname}
        </h2>
        {/* Llamamos a la ciudad y la fecha de naciemiento desde el archivo Cv*/}
        <p>🗺️{hero.city} </p>
        <p>🗓️{hero.birthDate}</p>
        <p>
          📧
          {/* Llamamos al dato del email desde el archivo Cv*/}
          <a href={"mailto:" + hero.email}>tony@starkindustries.com</a>
        </p>
        {/* Llamamos al dato del teléfono desde el archivo Cv*/}
        <p>📱 {hero.phone}</p>
        <p>
          {/* Llamamos al dato del su gitHub desde el archivo Cv*/}
          💾<a href={hero.gitHub}>GitHub</a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
