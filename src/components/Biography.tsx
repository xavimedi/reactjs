import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGithub,
  faHtml5,
  faJava,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";

let headshot = "/headshot.jpg";
let bio = "bio";
let github = "https://github.com/xavimedi";
let blank = "_blank";

function Biography() {
  return (
    <>
      <div className={bio}>
        <div>
          <img src={headshot} />
          <FontAwesomeIcon icon={faJava} />
          <FontAwesomeIcon icon={faSquareJs} />
          <FontAwesomeIcon icon={faCss3} />
          <FontAwesomeIcon icon={faHtml5} />

          <a href={github} target={blank}>
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div>12341234</div>
      </div>
    </>
  );
}

export default Biography;
