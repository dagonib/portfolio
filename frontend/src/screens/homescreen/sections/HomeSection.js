import React from 'react';

// Components
import Icon from '../../../components/gadgets/Icon';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomeSection = () => {
  return (
    <section className="home section" id="home">
      <Container className="home__container" fluid="lg">
        <Row className="home__content m-0">
          <Col className="home__social p-0 m-0">
            <a
              href="https://github.com/dagonib"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="home__social-icon px-0"
            >
              <Icon icon="bi bi-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/david-gonzalez-ibanez"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="home__social-icon px-0"
            >
              <Icon icon="bi bi-linkedin" />
            </a>
          </Col>
          <Col className="home__img p-0  m-0"></Col>
          <Col className="home__data  p-0 m-0">
            <h1 className="home__title">David González</h1>

            <h3 className="home__subtitle">Desarrollador Fullstack</h3>
            <p className="home__description">
              +3 años de experiencia como desarrollador web en el conjunto de
              herramientas MERN. Soy una persona emprendedora y autodidacta,
              siempre en busca de expandir mis habilidades. <br />A lo largo de
              mi carrera, he construido una sólida base en el desarrollo web y
              aspiro a ampliar aún más mis conocimientos y capacidades en este
              campo.
            </p>
            <a href="#contact" className="button button-flex">
              Contacta
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeSection;
