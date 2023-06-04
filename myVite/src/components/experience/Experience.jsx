import "./Experience.css";

// Definimos la función de Experience a través de una props que hemos llamado experience
const Experience = ({ experience }) => {
  return (
    <div>
      <div className="experience card">
        <h3>Experience</h3>
        {/* Buscamos la info a través de un .map de experience y lo representamos a través de un Json, importante el keys para React lo lea correctamente */}
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">📕 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
