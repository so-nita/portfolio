import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
    return (
        <div className="container container-2 " style={{ height: 400 }}>
            <div class="row">
                <div class="">
                    <FontAwesomeIcon size='13' icon= {faAngleRight} /> 1.<a href='/about' > About Me </a>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;