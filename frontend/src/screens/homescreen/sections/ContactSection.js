import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// Components
import Icon from '../../../components/gadgets/Icon';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const ContactSection = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_pqx9935', //ID Service
      'template_z57wpqo', //ID Template
      form.current,
      'RbbX8ks5GbEzSPSgA' // Public Key
    );
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <span className="section__subtitle">Contáctame.</span>

      {/**Main Container */}
      <Container className="contact__container" fluid="lg">
        {/**Content A: Datos de contacto */}
        <Row className="contact__content m-0">
          <h3 className="contact__title p-0">Contacta directamente</h3>
          <div className="contact__info p-0">
            {/**Card 1 */}
            <Col className="contact__card" data-aos="fade-right">
              <Icon icon="bi bi-envelope-fill" className="contact__card-icon" />
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                davidgonzalezibanez@gmail.com
              </span>
              <a
                href="mailto:davidgonzalezibanez@gmail.com"
                className="contact__button"
              >
                Escríbeme
                <Icon icon="bi bi-arrow-right contact__button-icon" />
              </a>
            </Col>

            {/**Card 2 */}
            <Col className="contact__card" data-aos="fade-right">
              <Icon icon="bi bi-phone-fill" className="contact__card-icon" />
              <h3 className="contact__card-title">Teléfono</h3>

              <span className="contact__card-data">673553223</span>
            </Col>
          </div>
        </Row>

        {/**Content B: Formulario de contacto */}
        <Row className="contact__content m-0">
          <h3 className="contact__title">Explícame tu proyecto</h3>

          {/**Formulario */}
          <Form ref={form} onSubmit={sendEmail} className="contact__form p-0">
            {/**Input Name */}
            <Form.Group className="contact__form-div">
              <Form.Label className="contact__form-tag">Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Introduce tu nombre"
                required
              />
            </Form.Group>

            {/**Input Email */}
            <Form.Group className="contact__form-div">
              <Form.Label className="contact__form-tag">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Introduce tu email"
                required
              />
            </Form.Group>

            {/**Input Project */}
            <Form.Group className="contact__form-div contact__form-div--textarea">
              <Form.Label className="contact__form-tag">Proyecto</Form.Label>
              <Form.Control
                name="description"
                className="contact__form-input contact__form-input--textarea"
                placeholder="Explícame tu proyecto"
                as="textarea"
                rows={3}
                required
              />
            </Form.Group>

            <button className="button button-flex">Enviar Mensaje</button>
          </Form>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
