import { FormattedMessage } from "react-intl";

const WhoAreWe = () => {
  return (
  <div className="text-start">
    <h2>
      <FormattedMessage id="whoAreWe_Heading" />
    </h2>
    <p className="lh-lg text-body-secondary">
      <FormattedMessage id="whoAreWe_SubHeading" />
    </p>
    <p>
      <FormattedMessage id="whoAreWe_Text" />
    </p>
  </div>)
};

export default WhoAreWe;
