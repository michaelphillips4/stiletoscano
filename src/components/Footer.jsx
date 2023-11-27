import { FormattedMessage } from "react-intl";
import { LOCALES } from "../i18n/locales";
const languages = [
  { name: "English", code: LOCALES.ENGLISH },
  { name: "Italian", code: LOCALES.ITALIAN },
];

const Footer = ({ currentLocale, handleChange }) => {
  return (
    <footer>
      <select
        onChange={handleChange}
        value={currentLocale}
        className="float-start"
      >
        {languages.map(({ name, code }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
      <FormattedMessage id="VATnumber" />
      &nbsp;&nbsp; +39 342 5537425&nbsp;&nbsp; info@stiletoscano.eu
    </footer>
  );
};

export default Footer;