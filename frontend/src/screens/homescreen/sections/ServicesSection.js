import React, { useRef } from 'react';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import Icon from '../../../components/gadgets/Icon';
import ModalHook from '../../../components/gadgets/ModalHook';

const ServicesSection = () => {
  // Ref to Modals
  const modal_1 = useRef(null);
  const modal_2 = useRef(null);
  const modal_3 = useRef(null);

  return (
    <section className="services section" id="services">
      <span className="section__subtitle">
        Lo que puedo ofrecer para crear una web perfecta.
      </span>
      <Container className="services__container" fluid="lg">
        {/**Servicio 1 */}
        <Row
          className="services__content m-0"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <Col className="m-0 p-0">
            <Icon icon="bi bi-box-arrow-in-down-left services__icon" />
            <h3 className="services__title">Desarrollo Web</h3>
          </Col>

          <span
            className="services__button m-0 p-0"
            onClick={() => modal_1.current.open()}
          >
            Ver Más
            <Icon icon="bi bi-arrow-right services__button-icon" />
          </span>

          {/**Services Modal */}
          <ModalHook ref={modal_1}>
            <div centered className="services__modal-content">
              <h3 className="services__modal-title">Desarrollo Web</h3>
              {/**Listado de servicios */}
              <Row className="services__modal-list m-0 p-0">
                <ul className="services__modal-services p-0">
                  <li className="services__modal-service">
                    <Icon icon="bi bi-bookmark-check-fill services__modal-icon" />
                    <p className="services__modal-info">
                      Sistema de login y registro con autenticación JWT.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <Icon icon="bi bi-bookmark-check-fill services__modal-icon" />
                    <p className="services__modal-info">
                      Aplicaciones ECommerce con Stripe.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <Icon icon="bi bi-bookmark-check-fill services__modal-icon" />
                    <p className="services__modal-info">
                      Panel de administración para usuarios, clientes, productos
                      y ventas.
                    </p>
                  </li>
                </ul>
              </Row>
            </div>
          </ModalHook>
        </Row>

        {/**Servicio 2 */}
        <Row
          className="services__content m-0"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <Col className="m-0 p-0">
            <Icon icon="bi bi-box-arrow-in-down-left services__icon" />
            <h3 className="services__title">Diseño UI/UX </h3>
          </Col>

          <span
            className="services__button m-0 p-0"
            onClick={() => modal_2.current.open()}
          >
            Ver Más
            <Icon icon="bi bi-arrow-right services__button-icon" />
          </span>

          {/**Services Modal */}
          <ModalHook ref={modal_2}>
            <div centered className="services__modal-content">
              <h3 className="services__modal-title">Diseño UI/UX </h3>
              {/**Listado de servicios */}
              <Row className="services__modal-list m-0 p-0">
                <ul className="services__modal-services p-0">
                  <li className="services__modal-service">
                    <Icon icon="bi bi-bookmark-check-fill services__modal-icon" />
                    <p className="services__modal-info">
                      Diseño e implementación de la aplicación web.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <Icon icon="bi bi-bookmark-check-fill services__modal-icon" />
                    <p className="services__modal-info">Diseño responsive.</p>
                  </li>

                  <li className="services__modal-service">
                    <Icon icon="bi bi-bookmark-check-fill services__modal-icon" />
                    <p className="services__modal-info">
                      Implementación de elementos interactivos utilizando
                      JavaScript.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <Icon icon="bi bi-bookmark-check-fill services__modal-icon" />
                    <p className="services__modal-info">
                      Desarrollo de interfaces de usuario.
                    </p>
                  </li>
                </ul>
              </Row>
            </div>
          </ModalHook>
        </Row>

        {/**Servicio 3 */}
        <Row
          className="services__content m-0"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <Col className="m-0 p-0">
            <Icon icon="bi bi-box-arrow-in-down-left services__icon" />
            <h3 className="services__title">Más Servicios</h3>
          </Col>

          <span
            className="services__button m-0 p-0"
            onClick={() => modal_3.current.open()}
          >
            Ver Más
            <Icon icon="bi bi-arrow-right services__button-icon" />
          </span>

          {/**Services Modal */}
          <ModalHook ref={modal_3}>
            <div centered className="services__modal-content">
              <h3 className="services__modal-title">Edición</h3>
              {/**Listado de servicios */}
              <Row className="services__modal-list m-0 p-0">
                <ul className="services__modal-services p-0">
                  <li className="services__modal-service">
                    <Icon icon="bi bi-bookmark-check-fill services__modal-icon" />
                    <p className="services__modal-info">
                      Edición especializada en agendas y calendarios con
                      InDesign.
                    </p>
                  </li>
                  <li className="services__modal-service">
                    <Icon icon="bi bi-bookmark-check-fill services__modal-icon" />
                    <p className="services__modal-info">
                      Edición de fotografias con Photoshop.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <Icon icon="bi bi-bookmark-check-fill services__modal-icon" />
                    <p className="services__modal-info">
                      Edición de videos con Premiere Pro.
                    </p>
                  </li>

                  <li className="services__modal-service">
                    <Icon icon="bi bi-bookmark-check-fill services__modal-icon" />
                    <p className="services__modal-info">
                      Edición de material publicitario.
                    </p>
                  </li>
                </ul>
              </Row>
            </div>
          </ModalHook>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;
