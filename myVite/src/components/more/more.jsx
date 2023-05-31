import "./more.css";

const More = ({ languages, habilities, volunteer }) => {
  return (
    <div className="more">
      <div className="languages">
        <h3>Languages</h3>
        <p>Language: {languages.language}</p>
        <p>Writing Level: {languages.wrlevel}</p>
        <p>Speaking Level: {languages.splevel}</p>
      </div>

      <div className="habilities card">
        <h3>Habilities</h3>

        {habilities.map((hability) => (
          <p key={JSON.stringify(hability)}>{hability}</p>
        ))}
      </div>

      <div className="volunteer">
        <h3>Volunteer Experience</h3>
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
