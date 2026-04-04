import profileImg from '../assets/profile.jpg';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-text">
          <h4>Hi, my name is</h4>
          <h1 className="name-heading">Jeff A. Gentapanan.</h1>
          <h2>
            I'm a student who loves designing and building for the web and currently learning the flow of frontend development and improving my portfolio step by step.
          </h2>
          <p>
            I'm still pretty new to the world of frontend development and design, but I'm 
            really enjoying the process of exploring how it all works. I'm always looking 
            for new things to learn and ways to expand what I know.
          </p>
          <div>
            <a href="#projects" className="btn">Check out my work</a>
          </div>
        </div>
        <div className="about-image-side">
          <div className="image-wrapper-glow">
            <img src={profileImg} alt="Jeff Gentapanan" className="about-profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
}