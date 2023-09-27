import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faSquareGithub,
  faHtml5,
  faJava,
  faSquareJs,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

let headshot = "/headshot.jpg";
let bio = "bio";
let skills = "skills";

let github = "https://github.com/xavimedi";
let linkedin = "https://www.linkedin.com/in/xaviergmedina/";
let email = "mailto:xavier.g.medina3@gmail.com";

let blank = "_blank";

function Biography() {
  return (
    <>
      <div className={bio}>
        <div>
          <img src={headshot} className="headshot" />
          <h1>Xavier Medina</h1>
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
          <FontAwesomeIcon icon={faJava} />
          <FontAwesomeIcon icon={faSquareJs} />
          <FontAwesomeIcon icon={faCss3} />
          <FontAwesomeIcon icon={faHtml5} />
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
