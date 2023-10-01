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

let headshot = "/headshot.jpg";
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
          <p>
            <FontAwesomeIcon icon={faJava} size="2xl" />
            <div className={loading}>
              <div className={progress}></div>
              {/*  https://www.w3schools.com/howto/howto_js_progressbar.asp */}
            </div>
          </p>
          <p>
            <FontAwesomeIcon icon={faSquareJs} size="2xl" />
          </p>
          <p>
            <FontAwesomeIcon icon={faCss3} size="2xl" />
          </p>
          <p>
            <FontAwesomeIcon icon={faHtml5} size="2xl" />
          </p>
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
