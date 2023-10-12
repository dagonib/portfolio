import React from 'react';
import Container from 'react-bootstrap/Container';

// Components
import Icon from '../components/gadgets/Icon';

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer__container" fluid="lg">
        <h1 className="footer__title">David González</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Sobre Mí
            </a>
          </li>
          {/* <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonios
            </a>
          </li> */}
        </ul>
        <div className="footer__social">
          <a
            href="https://github.com/dagonib"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="footer__social-link px-0"
          >
            <Icon icon="bi bi-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/david-gonzalez-ibanez"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="footer__social-link px-0"
          >
            <Icon icon="bi bi-linkedin" />
          </a>
          <a
            href="mailto:davidgonzalezibanez@gmail.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="footer__social-link px-0"
          >
            <Icon icon="bi bi-envelope-at-fill" />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
