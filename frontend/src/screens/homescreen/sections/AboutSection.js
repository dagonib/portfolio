import React from 'react';

// Components
import Icon from '../../../components/gadgets/Icon';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Assets
import AboutImg from '../../../assets/images/img_about.png';
import CV from '../../../assets/files/CV.pdf';

const AboutSection = () => {
  return (
    <section className="about section" id="about">
      <Container className="about__container" fluid="lg">
        <Row className="about__content m-0 p-0">
          <img
            src={AboutImg}
            alt=""
            className="about__img p-0"
            data-aos="zoom-in-up"
          />
          <Col className="about__data m-0 p-0">
            <Row className="about__info mx-0 p-lg-0">
              <Col
                className="about__box m-0"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <Icon icon="bi bi-person-workspace about__icon" />
                <h3 className="about__title">Experiencia</h3>
                <span className="about__subtitle">3 años trabajando</span>
              </Col>

              <Col
                className="about__box m-0"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <Icon icon="bi bi-clipboard-check-fill about__icon" />
                <h3 className="about__title">Completados</h3>
                <span className="about__subtitle">4 + Proyectos</span>
              </Col>

              <Col
                className="about__box m-0"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <Icon icon="bi bi-headset about__icon" />
                <h3 className="about__title">Soporte</h3>
                <span className="about__subtitle">Online 24/7</span>
              </Col>
            </Row>

            <p className="about__description">
              Facilito el crecimiento de compañías como la tuya combinando tus
              objetivos con las necesidades de tus clientes.
            </p>

            <a download="" href={CV} className="button button-flex">
              Download CV
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
