import React from 'react';

// Components
import Icon from '../../../../components/gadgets/Icon';
import ProgressBar from '../../../../components/gadgets/ProgressBar';

const Frontend = () => {
  return (
    <div
      className="skills__content"
      data-aos="zoom-in-up"
      data-aos-duration="2000"
    >
      <h3 className="skills__title">Desarrollador Frontend</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <Icon icon="bi bi-patch-check-fill skills__icon" />
            <div className="skills__box-progress">
              <h3 className="skills__name">HTML5</h3>
              <ProgressBar progress={'90'} />
            </div>
          </div>

          <div className="skills__data">
            <Icon icon="bi bi-patch-check-fill skills__icon" />
            <div className="skills__box-progress">
              <h3 className="skills__name">Javascript</h3>
              <ProgressBar progress={'70'} />
            </div>
          </div>

          <div className="skills__data">
            <Icon icon="bi bi-patch-check-fill skills__icon" />
            <div className="skills__box-progress">
              <h3 className="skills__name">CSS/SASS</h3>
              <ProgressBar progress={'80'} />
            </div>
          </div>

          <div className="skills__data">
            <Icon icon="bi bi-patch-check-fill skills__icon" />
            <div className="skills__box-progress">
              <h3 className="skills__name">Bootstrap</h3>
              <ProgressBar progress={'90'} />
            </div>
          </div>

          <div className="skills__data">
            <Icon icon="bi bi-patch-check-fill skills__icon" />
            <div className="skills__box-progress">
              <h3 className="skills__name">React</h3>
              <ProgressBar progress={'70'} />
            </div>
          </div>

          <div className="skills__data">
            <Icon icon="bi bi-patch-check-fill skills__icon" />
            <div className="skills__box-progress">
              <h3 className="skills__name">Responsive</h3>
              <ProgressBar progress={'95'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
