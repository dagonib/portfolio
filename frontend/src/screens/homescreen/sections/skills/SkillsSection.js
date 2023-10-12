import React from 'react';

import ProgressBar from '../../../../components/gadgets/ProgressBar';
import Row from 'react-bootstrap/Row';

// Logos
import HTML5_logo from '../../../../assets/images/logos/html5.png';
import CSS3_logo from '../../../../assets/images/logos/css3.png';
import express_logo from '../../../../assets/images/logos/express.png';
import github_logo from '../../../../assets/images/logos/github.png';
import indesign_logo from '../../../../assets/images/logos/indesign.png';
import javascript_logo from '../../../../assets/images/logos/javascript.png';
import mongodb_logo from '../../../../assets/images/logos/mongodb.png';
import nodejs_logo from '../../../../assets/images/logos/nodejs.png';
import photoshop_logo from '../../../../assets/images/logos/photoshop.png';
import react_logo from '../../../../assets/images/logos/react.png';
import C_logo from '../../../../assets/images/logos/C.png';

// Bootstrap Components
import Container from 'react-bootstrap/Container';

const SkillsSection = () => {
  return (
    <section className="skills section" id="skills">
      <span className="section__subtitle">Mi nivel técnico.</span>

      <Container className="skills__container" fluid="lg">
        <Row className="skills__content m-0">
          <div className="skills__box p-0">
            <img
              src={HTML5_logo}
              alt="logo de HTML5"
              className="skills__logo p-0"
            />
            <p className="skills__name">HTML5</p>
            <div className="skills__progress-box">
              <ProgressBar progress={'90'} />
            </div>
          </div>

          <div className="skills__box p-0">
            <img
              src={CSS3_logo}
              alt="logo de HTML5"
              className="skills__logo p-0"
            />
            <p className="skills__name">CSS3</p>
            <div className="skills__progress-box">
              <ProgressBar progress={'80'} />
            </div>
          </div>

          <div className="skills__box p-0">
            <img
              src={javascript_logo}
              alt="logo de HTML5"
              className="skills__logo p-0"
            />
            <p className="skills__name">Javascript</p>
            <div className="skills__progress-box">
              <ProgressBar progress={'70'} />
            </div>
          </div>

          <div className="skills__box p-0">
            <img src={C_logo} alt="logo de C" className="skills__logo p-0" />
            <p className="skills__name">C</p>
            <div className="skills__progress-box">
              <ProgressBar progress={'40'} />
            </div>
          </div>

          <div className="skills__box p-0">
            <img
              src={react_logo}
              alt="logo de HTML5"
              className="skills__logo p-0"
            />
            <p className="skills__name">React</p>
            <div className="skills__progress-box">
              <ProgressBar progress={'60'} />
            </div>
          </div>

          <div className="skills__box p-0">
            <img
              src={github_logo}
              alt="logo de HTML5"
              className="skills__logo p-0"
            />
            <p className="skills__name">GitHub</p>
            <div className="skills__progress-box">
              <ProgressBar progress={'75'} />
            </div>
          </div>

          <div className="skills__box p-0">
            <img
              src={nodejs_logo}
              alt="logo de HTML5"
              className="skills__logo p-0"
            />
            <p className="skills__name">Node.js</p>
            <div className="skills__progress-box">
              <ProgressBar progress={'50'} />
            </div>
          </div>

          <div className="skills__box p-0">
            <img
              src={express_logo}
              alt="logo de HTML5"
              className="skills__logo p-0"
            />
            <p className="skills__name">Express.js</p>
            <div className="skills__progress-box">
              <ProgressBar progress={'50'} />
            </div>
          </div>

          <div className="skills__box p-0">
            <img
              src={mongodb_logo}
              alt="logo de HTML5"
              className="skills__logo p-0"
            />
            <p className="skills__name">MongoDB</p>
            <div className="skills__progress-box">
              <ProgressBar progress={'60'} />
            </div>
          </div>

          <div className="skills__box p-0">
            <img
              src={photoshop_logo}
              alt="logo de HTML5"
              className="skills__logo p-0"
            />
            <p className="skills__name">Photoshop</p>
            <div className="skills__progress-box">
              <ProgressBar progress={'70'} />
            </div>
          </div>

          <div className="skills__box p-0">
            <img
              src={indesign_logo}
              alt="logo de HTML5"
              className="skills__logo p-0"
            />
            <p className="skills__name">Indesign</p>
            <div className="skills__progress-box">
              <ProgressBar progress={'40'} />
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default SkillsSection;
