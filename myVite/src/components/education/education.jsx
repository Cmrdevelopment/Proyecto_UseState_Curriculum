import "./Education.css";

// Definimos la función de Education a través de una props que hemos llamado education
const Education = ({ education }) => {
  return (
    <div>
      <div className="education card">
        <h3>Education</h3>
        {/* Buscamos la info a través de un .map de education y lo representamos a través de un Json, importante el keys para React lo lea correctamente */}
        {education.map((item) => {
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

export default Education;
