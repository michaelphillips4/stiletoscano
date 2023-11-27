import { FormattedMessage } from "react-intl";

const Header = () => {
 
  return ( <div className="header">
 
         <h1 className="m-0 display-1">
          <FormattedMessage id="companyName" />
       </h1>

 </div>
  );
};

export default Header;
