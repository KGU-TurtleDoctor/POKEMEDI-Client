import ReactDOM from 'react-dom';

function DeleteModalPortal({ children }) {
  const el = document.getElementById('delete-modal');
  return ReactDOM.createPortal(children, el);
}

export default DeleteModalPortal;
