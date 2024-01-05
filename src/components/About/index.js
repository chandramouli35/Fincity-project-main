import Navbar from "../Navbar";
import Footer from "../Footer";
import "./index.css";

function About() {
  return (
    <div className="about-bg-container">
      <Navbar />
      <div className="about-container">
        <div className="about-page">
          <h1 className="about-heading">About Me</h1>
          <p className="about-description">
            I'm Tarigopula Chandra Mouli, From Anantapur,  Aspiring MERN Full Stack Developer | Learned at CCBP 4.0 Intensive | Html,
          CSS, Bootstrap, Python , JavaScript, SQLite, Node js , React js
        </p>
          
        </div>
        <hr className="hr" />
        <div className="about-page">
          <h1 className="about-heading">What I do</h1>
          <p className="about-description">
            I am a skilled and passionate Fullstack Developer with experience in
            creating visually appealing and user-friendly websites. I have a
            strong understanding of design and a key eye for detail. I am
            proficient in Html, Css, Bootstrap, Python, JavaScript, ReactJS, NodeJs with ExpressJs and
            SQLite.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
