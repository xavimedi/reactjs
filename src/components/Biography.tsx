import headshot from "../assets/headshot.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faSquareGithub,
  faHtml5,
  faJava,
  faSquareJs,
  faLinkedin,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

let bio = "bio";
let skills = "skills";

let github = "https://github.com/xavimedi";
let linkedin = "https://www.linkedin.com/in/xaviergmedina/";
let email = "mailto:xavier.g.medina3@gmail.com";

let blank = "_blank";

let loading = "loading";
let progress = "progress";

function Biography() {
  return (
    <>
      <div className={bio}>
        <div>
          <img src={headshot} className="headshot" />
          <h1>Xavier Medina</h1>
          <h3>Texas | US Army Veteran</h3>
        </div>

        <div className="contact">
          <a href={github} target={blank}>
            <FontAwesomeIcon icon={faSquareGithub} size="2xl" />
          </a>
          <a href={linkedin} target={blank}>
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </a>
          <a href={email} target={blank}>
            <FontAwesomeIcon icon={faEnvelope} size="2xl" />
          </a>
        </div>

        <div className={skills}>
          <div className="skill">
            <div className="skill-icon">
              <FontAwesomeIcon icon={faJava} size="2xl" />
            </div>
            <div className="skillbar">
              <div className="javabar"></div>
              <div className="javabar2"></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-icon">
              <FontAwesomeIcon icon={faSquareJs} size="2xl" />
            </div>
            <div className="skillbar">
              <div className="javascriptbar"></div>
              <div className="javascriptbar2"></div>
            </div>
          </div>

          <div className="skill">
            <div className="skill-icon">
              <FontAwesomeIcon icon={faHtml5} size="2xl" />
            </div>
            <div className="skillbar">
              <div className="htmlbar"></div>
              <div className="htmlbar2"></div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-icon">
              <FontAwesomeIcon icon={faCss3} size="2xl" />
            </div>
            <div className="skillbar">
              <div className="cssbar"></div>
              <div className="cssbar2"></div>
            </div>
          </div>
        </div>

        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </>
  );
}

export default Biography;
