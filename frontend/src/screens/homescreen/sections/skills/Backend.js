import React from 'react';

// Components
import Icon from '../../../../components/gadgets/Icon';
import ProgressBar from '../../../../components/gadgets/ProgressBar';

const Backend = () => {
  return (
    <div
      className="skills__content"
      data-aos="zoom-in-up"
      data-aos-duration="2000"
    >
      <h3 className="skills__title">Desarrollador Backend</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <Icon icon="bi bi-patch-check-fill skills__icon" />
            <div className="skills__box-progress">
              <h3 className="skills__name">JavaScript</h3>
              <ProgressBar progress={'70'} />
            </div>
          </div>

          <div className="skills__data">
            <Icon icon="bi bi-patch-check-fill skills__icon" />
            <div className="skills__box-progress">
              <h3 className="skills__name">NodeJS</h3>
              <ProgressBar progress={'65'} />
            </div>
          </div>

          <div className="skills__data">
            <Icon icon="bi bi-patch-check-fill skills__icon" />
            <div className="skills__box-progress">
              <h3 className="skills__name">MongoDB</h3>
              <ProgressBar progress={'75'} />
            </div>
          </div>

          <div className="skills__data">
            <Icon icon="bi bi-patch-check-fill skills__icon" />
            <div className="skills__box-progress">
              <h3 className="skills__name">Redux</h3>
              <ProgressBar progress={'80'} />
            </div>
          </div>

          <div className="skills__data">
            <Icon icon="bi bi-patch-check-fill skills__icon" />
            <div className="skills__box-progress">
              <h3 className="skills__name">Express</h3>
              <ProgressBar progress={'70'} />
            </div>
          </div>

          <div className="skills__data">
            <Icon icon="bi bi-patch-check-fill skills__icon" />
            <div className="skills__box-progress">
              <h3 className="skills__name">GIT</h3>
              <ProgressBar progress={'70'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
