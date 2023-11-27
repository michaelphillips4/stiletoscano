import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body pt-0 text-center " data-bs-theme="dark">
      <div className="container-fluid">
     
  <a className="navbar-brand display-1" href="#">
            
        </a> 
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
       data-bs-target="#navbarNavDropdown" 
       aria-controls="navbarNavDropdown" 
       aria-expanded="false"
        aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="chi-siamo" className="nav-link active">
                <FormattedMessage id="whoAreWe_Title" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="servizi-a-domicilio" className="nav-link">
                <FormattedMessage id="homeServices_Title" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="prenota-un-appuntamento" className="nav-link">
                <FormattedMessage id="bookAnAppointment_Title" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contatti" className="nav-link">
                <FormattedMessage id="contact_Title" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
