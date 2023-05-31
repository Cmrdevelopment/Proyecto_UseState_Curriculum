import "./About.css";

const About = ({ hero }) => {
  return <div className="About">{AboutMe(hero.aboutMe)}</div>;
};

// const showAboutMe = (aboutMeArr) =>
//   aboutMeArr.map((aboutMe) => <p>{aboutMe.info}</p>);

const AboutMe = (aboutMeArr) =>
  aboutMeArr.map((aboutMe) => (
    <div key={JSON.stringify(aboutMe)}>
      <p>{aboutMe.info}</p>
    </div>
  ));

export default About;
