import TextType from "./TextType.jsx";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-text">
            <h1 className="Introduction">
             WELCOME
            </h1>
                <h2 className="Introduction">
                  I'M
                </h2>
            <h3 className="intro"><TextType 
                text={["Jeff A. Gentapanan", "Come!", "&", "Explore!"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor
                cursorCharacter=""  
                deletingSpeed={50}
                variableSpeedEnabled={true}
                variableSpeedMin={60}
                variableSpeedMax={150}
                cursorBlinkDuration={0.5} />
            </h3>
            <h4 className="Introduction">
              Currently a 2nd-year IT student at Western Institute of Technology, focusing on building my skills in Front-end development and Designing.
            </h4>
        </div>
      </div>
    </section>
  );
}