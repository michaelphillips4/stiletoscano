import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body pt-0 text-center " data-bs-theme="dark">
      <div className="container-fluid">
     
  <a className="navbar-brand " href="#">
  <div className="col-8 m-0 display-1 h1 ps-4 m-1">
          <FormattedMessage id="companyName" />
          </div>
        </a> 
       <button className="navbar-toggler pe-2" type="button" data-bs-toggle="collapse" 
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
