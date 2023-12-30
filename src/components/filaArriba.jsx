import { Welcome } from "./filaArriba/welcome";
import './filaArriba.css';

function FilaArriba() {
  return (
    <div className="container-main-title">
      <div className="icon-and-text">
        <i className="fas fa-list icon"></i>
        <Welcome />
      </div>
    </div>
  );
}

export { FilaArriba };