import { FormattedDate, FormattedNumber, FormattedPlural,FormattedMessage } from "react-intl";

const HomeServices = () => {
 return     <div className="container mt">
    {/* ... */}
<h2><FormattedMessage id="homeServices_Title" /></h2>
<FormattedDate
      value={Date.now()}
      year="numeric"
      month="long"
      day="2-digit"
    />
    <br />
    <FormattedNumber value={2000} style={`currency`} currency="EUR" />
    <br />
    <br />
    <FormattedNumber value={2000}  style={`currency`} currency="GBP" />
    <br />
    <FormattedPlural value={5} one="1 click" other="5 clicks" />
  </div>

   
}

export default HomeServices;