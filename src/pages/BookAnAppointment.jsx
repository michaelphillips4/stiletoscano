import { useIntl} from "react-intl";
import { getMonthsOptions, stringToArrayHelper } from "../components/BookingForm/BookingDates";
import { getShops, getTime } from "../components/BookingForm/BookingHelpers";
import BookingForm from "../components/BookingForm/BookingForm";


const BookAnAppointment = () => {
  
const getFormatMessage = (messageId) =>
    useIntl().formatMessage({ id: messageId });

const defaultOption = getFormatMessage("bookAnAppointment_selectItem");
const weekDayNames = stringToArrayHelper(getFormatMessage("weekDayNames"));
const monthNames = stringToArrayHelper(getFormatMessage("monthNames"));


  return (
    <>
      <BookingForm  defaultOption={defaultOption}
    title = {getFormatMessage("bookAnAppointment_Title")}
    shops = {getShops(defaultOption)}
    next12Months = {getMonthsOptions(new Date(),monthNames)}
    weekDayNames = {weekDayNames}
    timeSlots = {getTime(defaultOption)}
    emailPlaceHolder = {getFormatMessage("bookAnAppointment_emailPlaceHolder")}
    telPlaceHolder ={getFormatMessage("bookAnAppointment_telPlaceHolder")}
    namePlaceHolder = {getFormatMessage("bookAnAppointment_namePlaceHolder")}
    messageLabel ={getFormatMessage("bookAnAppointment_messageLabel")}
    buttonText ={getFormatMessage("bookAnAppointment_submitLabel")} />
    </>
  );
};

export default BookAnAppointment;
