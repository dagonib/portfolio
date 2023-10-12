import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar">
      <span
        className="progress-bar--percentaje"
        style={{ width: progress + '%' }}
      ></span>
    </div>
  );
};

export default ProgressBar;
