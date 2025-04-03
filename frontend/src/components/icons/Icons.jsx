import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
  faBars,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Icons = {
  ChevronDown: (props) => <FontAwesomeIcon icon={faChevronDown} {...props} />,
  MagnifyingGlass: (props) => <FontAwesomeIcon icon={faMagnifyingGlass} {...props} />,
  Bars: (props) => <FontAwesomeIcon icon={faBars} {...props} />,
  Phone: (props) => <FontAwesomeIcon icon={faPhone} {...props} />,
  Envelope: (props) => <FontAwesomeIcon icon={faEnvelope} {...props} />,
  Facebook: (props) => <FontAwesomeIcon icon={faFacebookF} {...props} />,
  Twitter: (props) => <FontAwesomeIcon icon={faTwitter} {...props} />,
  YouTube: (props) => <FontAwesomeIcon icon={faYoutube} {...props} />,
};

export default Icons;
