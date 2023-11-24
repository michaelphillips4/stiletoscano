import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="chi-siamo">chi-siamo</Link>&nbsp;&nbsp;
      <Link to="servizi-a-domicilio">servizi-a-domicilio</Link>&nbsp;&nbsp;
      <Link to="prenota-un-appuntamento">prenota-un-appuntamento</Link>&nbsp;&nbsp;
      <Link to="contatti">contatti</Link>
    </nav>
  );
};
export default Nav;
