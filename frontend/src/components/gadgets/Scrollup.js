import React from 'react';
import Icon from './Icon';

const Scrollup = () => {
  window.addEventListener('scroll', function () {
    const scrollUp = this.document.querySelector('.scrollup');

    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
  });

  return (
    <a href="#home" className="scrollup">
      <Icon icon="bi bi-arrow-up-square scrollup__icon" />
    </a>
  );
};

export default Scrollup;
