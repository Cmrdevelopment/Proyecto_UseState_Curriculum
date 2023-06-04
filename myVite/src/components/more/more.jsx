import "./more.css";

// Definimos la función de More a través de tres argumentos (languages, habilities, volunteer)
const More = ({ languages, habilities, volunteer }) => {
  return (
    <div className="more">
      <div className="languages">
        <h3>Languages</h3>
        {/* Llamamos a los idiomas que habla desde el archivo Cv*/}
        <p>Language: {languages.language}</p>
        <p>Writing Level: {languages.wrlevel}</p>
        <p>Speaking Level: {languages.splevel}</p>
      </div>

      <div className="habilities card">
        <h3>Habilities</h3>
        {/* Buscamos la info a través de un .map de habilities y lo representamos a través de un Json, importante el keys para React lo lea correctamente */}
        {habilities.map((hability) => (
          <p key={JSON.stringify(hability)}>{hability}</p>
        ))}
      </div>

      <div className="volunteer">
        <h3>Volunteer Experience</h3>
        {/* Buscamos la info a través de un .map de volunteer y lo representamos a través de un Json, importante el keys para React lo lea correctamente */}
        {volunteer.map((item) => (
          <div key={JSON.stringify(item)}>
            <p className="name">{item.name}</p>
            <p>{item.where}</p>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default More;
