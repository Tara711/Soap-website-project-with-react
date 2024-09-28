import React from 'react';

const CancelButton = ({ onClick }) => {
  return (
    <button className="cross-button" onClick={onClick} aria-label="Cancel">
      &times; {/* Cross symbol */}
    </button>
  );
};

export default CancelButton;
