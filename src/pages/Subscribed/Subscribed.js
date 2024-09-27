import React from 'react';
import './subscribed.css';

const Subscribed = ({ email, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className="modal-message">Subscribed with Email: <b>{email}</b></p>
        <button className="modal-button" onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default Subscribed;
