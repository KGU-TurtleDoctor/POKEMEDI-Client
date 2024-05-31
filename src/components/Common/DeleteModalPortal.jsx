import React from 'react';

function DeleteModalPortal({ children }) {
  const el = document.getElementById('delete-modal');
  return ReactDOM.createPortal(children, el);
}

export default DeleteModalPortal;
