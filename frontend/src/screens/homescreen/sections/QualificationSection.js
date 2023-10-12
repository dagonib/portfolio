import React, { useState } from 'react';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Components
import Icon from '../../../components/gadgets/Icon';

const QualificationSection = () => {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <span className="section__subtitle">
        La trayectoria que me permite alcanzar los objetivos.
      </span>

      {/**Main Container */}
      <Container className="qualification__container" fluid="lg">
        {/**Tabs*/}
        <Row className="qualification__tabs mt-0">
          <div
            className={
              toggleState === 1
                ? 'qualification__button qualification__active button-flex p-0'
                : 'qualification__button button-flex p-0'
            }
            onClick={() => toggleTab(1)}
          >
            <Icon icon="bi bi-mortarboard qualification__icon" />
            Formación
          </div>
          <div
            className={
              toggleState === 2
                ? 'qualification__button qualification__active button-flex p-0'
                : 'qualification__button button-flex p-0'
            }
            onClick={() => toggleTab(2)}
          >
            <Icon icon="bi bi-clipboard-data qualification__icon" />
            Experiencia
          </div>
        </Row>

        {/**Secciones*/}
        <Row className="qualification__sections m-0">
          {/**Sección 1*/}
          <Col
            className={
              toggleState === 1
                ? 'qualification__content qualification__content-active p-0'
                : 'qualification__content p-0'
            }
          >
            {/**Data 1*/}
            <div className="qualification__data">
              <div className="qualification__textbox">
                <h3 className="qualification__title">
                  Diploma de Experto Universitario en Diseño Web
                </h3>
                <span className="qualification__subtitle">
                  Universidad Nacional de Educación a Distancia
                </span>
                <div className="qualification__calendar">
                  <Icon icon="bi bi-calendar2-check qualification__calendar-icon" />
                  2020
                </div>
              </div>
              <div className="qualification__set">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/**Data 2*/}
            <div className="qualification__data">
              <div className="qualification__display--none"></div>
              <div className="qualification__set qualification__set--even">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div className="qualification__textbox qualification__textbox--even">
                <h3 className="qualification__title">Desarrollo JAVA</h3>
                <span className="qualification__subtitle">
                  Servicio de Ocupación de Cataluña
                </span>
                <div className="qualification__calendar qualification__calendar--even">
                  <Icon icon="bi bi-calendar2-check qualification__calendar-icon" />
                  2019
                </div>
              </div>
            </div>

            {/**Data 4*/}
            <div className="qualification__data">
              <div className="qualification__textbox">
                <h3 className="qualification__title">
                  Postgrado en Gestión de la Innovación en la Empresa
                </h3>
                <span className="qualification__subtitle">
                  Cámara de Comercio de Barcelona
                </span>
                <div className="qualification__calendar">
                  <Icon icon="bi bi-calendar2-check qualification__calendar-icon" />
                  2008
                </div>
              </div>

              <div className="qualification__set">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/**Data 5*/}
            <div className="qualification__data">
              <div className="qualification__display--none"></div>
              <div className="qualification__set qualification__set--even">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div className="qualification__textbox qualification__textbox--even">
                <h3 className="qualification__title">
                  Master Agua: Análisis Interdisciplinario y Gestión Sostenible
                </h3>
                <span className="qualification__subtitle">
                  Universidad de Barcelona
                </span>
                <div className="qualification__calendar qualification__calendar--even">
                  <Icon icon="bi bi-calendar2-check qualification__calendar-icon" />
                  2007-2009
                </div>
              </div>
            </div>

            {/**Data 6*/}
            <div className="qualification__data">
              <div className="qualification__textbox">
                <h3 className="qualification__title">
                  Ingeniería Técnica Industrial Especialidad en Química
                  Industrial
                </h3>
                <span className="qualification__subtitle">
                  Universidad Politécnica de Cataluña
                </span>
                <div className="qualification__calendar">
                  <Icon icon="bi bi-calendar2-check qualification__calendar-icon" />
                  2003-2007
                </div>
              </div>

              <div className="qualification__set">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </Col>

          {/**Sección 2*/}
          <Col
            className={
              toggleState === 2
                ? 'qualification__content qualification__content-active p-0'
                : 'qualification__content p-0'
            }
          >
            {/**Data 1*/}
            <div className="qualification__data">
              <div className="qualification__textbox">
                <h3 className="qualification__title">Desarrollador Web</h3>
                <span className="qualification__subtitle fw-bold">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.mujersinreglas.info/"
                  >
                    mujersinreglas.info
                  </a>
                </span>
                <div className="qualification__calendar">
                  <Icon icon="bi bi-calendar2-check qualification__calendar-icon" />
                  2023
                </div>
                <span className="qualification__subtitle">
                  Responsable del diseño y desarrollo del frontend con React,
                  SASS y Bootstrap. <br />
                  Creación del servidor backend con Express y Node. <br />
                  Gestión de la base de datos utilizando MongoDB. <br />
                  Control de versiones a través de GitHub y despliegue en
                  Heroku.
                  <br />
                  Integración del servicio de pago Stripe.
                </span>
              </div>
              <div className="qualification__set">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/**Data 2*/}
            <div className="qualification__data">
              <div className="qualification__display--none"></div>
              <div className="qualification__set qualification__set--even">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div className="qualification__textbox qualification__textbox--even">
                <h3 className="qualification__title ">Edición Agenda</h3>
                <span className="qualification__subtitle fw-bold">
                  Mujer Sin Reglas
                </span>
                <div className="qualification__calendar qualification__calendar--even">
                  <Icon icon="bi bi-calendar2-check qualification__calendar-icon" />
                  Marzo 2020 - Septiembre 2023
                </div>

                <span className="qualification__subtitle">
                  Diseño y maquetación: Lideré la creación del diseño y la
                  maquetación de la Agenda Mujer Sin Reglas utilizando Adobe
                  InDesign.
                </span>
              </div>
            </div>

            {/**Data 3*/}
            <div className="qualification__data">
              <div className="qualification__textbox">
                <h3 className="qualification__title ">Desarrollo Web</h3>
                <span className="qualification__subtitle  fw-bold">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="http://www.lavidaenrojo.org/"
                  >
                    lavidaenrojo.org
                  </a>
                </span>
                <div className="qualification__calendar">
                  <Icon icon="bi bi-calendar2-check qualification__calendar-icon" />
                  2021
                </div>

                <span className="qualification__subtitle">
                  Responsable del diseño y desarrollo web de “lavidaenrojo.org”,
                  utilizando tecnologías como React, SCSS, Bootstrap. <br />
                  Control de versiones a través de GitHub y despliegue en
                  Heroku.
                </span>
              </div>

              <div className="qualification__set">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/**Data 4*/}
            <div className="qualification__data">
              <div className="qualification__display--none"></div>
              <div className="qualification__set qualification__set--even">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div className="qualification__textbox qualification__textbox--even">
                <h3 className="qualification__title">Desarrollo Web</h3>
                <span className="qualification__subtitle fw-bold">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="http://www.davidgonzalez.solutions/"
                  >
                    davidgonzalez.solutions
                  </a>
                </span>
                <div className="qualification__calendar qualification__calendar--even">
                  <Icon icon="bi bi-calendar2-check qualification__calendar-icon" />
                  2021
                </div>
                <span className="qualification__subtitle">
                  Diseño y desarrollo web, utilizando tecnologías como React,
                  SCSS, Bootstrap. Control de versiones a través de GitHub y
                  despliegue en Heroku.
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default QualificationSection;
