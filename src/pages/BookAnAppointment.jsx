import { useIntl, FormattedMessage } from "react-intl";
import { useReducer } from "react";
import ListWithLabel from "../components/ListWithLabel";
import getMonthsOptions from "../MonthsMachine";
import getDaysForMonthOptions from "../DaysForMonthMachine";
let defaultOption = "";
const next12Months = getMonthsOptions(new Date());

const initialBooking = {
  year: null,
  month: null,
  day: "",
  time: "",
  shop: "",
  monthKey: "",
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "CHANGE-SHOP":
      return {
        ...initialBooking,
        shop: action.shop === defaultOption ? "" : action.shop,
      };
    case "CHANGE-MONTH":
      if (next12Months.has(action.monthKey)) {
        const monthDatePart = next12Months.get(action.monthKey);
        return {
          ...initialBooking,
          shop: state.shop,
          year: monthDatePart.year,
          month: monthDatePart.month,
          monthKey: action.monthKey,
        };
      }
      return {
        ...initialBooking,
        shop: state.shop,
      };
    case "CHANGE-DAY":
      return { ...state, day: action.day === defaultOption ? "" : action.day };
    case "CHANGE-TIME":
      return { ...state, time: action.time=== defaultOption ? "" : action.time};
    default:
      return state;
  }
};

const BookAnAppointment = () => {
  const [booking, dispatch] = useReducer(reducer, initialBooking);
  const getFormatMessage = (messageId) =>
    useIntl().formatMessage({ id: messageId });
  defaultOption = getFormatMessage("bookAnAppointment_selectItem");

  const optionsShops = [
    defaultOption,
    "GENOA - Mazzini Gallery, 42/R",
    "MILAN - Sala Dei Longobardi, 2 (Emporio Falcai)",
    "ROME - Via Veneto 104",
    "Sartoria Rossi - Factory Store - Outlet Marciano Della Chiana",
  ];

  const timeSlots = [
    defaultOption,
    "10:15",
    "10:30",
    "10:45",
    "11:00",
    "11:15",
    "11:30",
    "11:45",
    "12:00",
    "12:15",
    "12:30",
    "12:45",
    "13:00",
    "13:15",
    "13:30",
    "13:45",
    "14:00",
    "14:15",
    "14:30",
    "14:45",
    "15:00",
    "15:15",
    "15:30",
    "15:45",
    "16:00",
    "16:15",
    "16:30",
    "16:45",
    "17:00",
    "17:15",
    "17:30",
    "17:45",
    "18:00",
    "18:15",
    "18:30",
    "18:45",
    "19:00",
  ];


  const namePlaceHolder = getFormatMessage("bookAnAppointment_namePlaceHolder") 

  return (
    <>
      <h2>
        <FormattedMessage id="bookAnAppointment_Title" />
      </h2>
     {/*  {JSON.stringify(booking)}
      <hr /> */}
      
      <ListWithLabel
        selectId="where"
        labelMessageId="bookAnAppointment_selectShopLabel"
        options={optionsShops}
        onChangeHandler={(e) => dispatch({ type: "CHANGE-SHOP", shop: e })}
        value={booking.shop}
      />

      {booking.shop && (
        <ListWithLabel
          selectId="month"
          options={[defaultOption, ...next12Months.keys()]}
          labelMessageId="bookAnAppointment_monthLabel"
          onChangeHandler={(e) =>
            dispatch({ type: "CHANGE-MONTH", monthKey: e })
          }
          value={booking.monthKey}
        />
      )}

      {booking.month && (
        <ListWithLabel
          selectId="days"
          options={[
            defaultOption,
            ...getDaysForMonthOptions(booking.month, booking.year).keys(),
          ]}
          labelMessageId="bookAnAppointment_dayLabel"
          onChangeHandler={(e) => dispatch({ type: "CHANGE-DAY", day: e })}
          value={booking.day}
        />
      )}

      {booking.day && (
        <ListWithLabel
          selectId="time"
          options={timeSlots}
          labelMessageId="bookAnAppointment_timeLabel"
          onChangeHandler={(e) => dispatch({ type: "CHANGE-TIME", time: e })}
          value={booking.time}
        />
      )}

      {booking.time &&  <>
          <label htmlFor="name" className="form-label">
            <FormattedMessage id="bookAnAppointment_nameLabel" />
          </label>
          <input
            type="name"
            className="form-control my-2"
            id="name"
            placeholder={namePlaceHolder}
          />

          <label htmlFor="email" className="form-label ">
            <FormattedMessage id="bookAnAppointment_emailLabel" />
          </label>
          <input
            type="email"
            className="form-control my-2"
            id="email"
            placeholder="name@example.com"
          />

          <label htmlFor="tel" className="form-label ">
            <FormattedMessage id="bookAnAppointment_telLabel" />
          </label>

          <input
            type="tel"
            className="form-control my-2 "
            id="tel"
            placeholder="077123456789"
          />

          <label htmlFor="message" className="form-label ">
            <FormattedMessage id="bookAnAppointment_messageLabel" />
          </label>

          <textarea className="form-control" id="message" rows="3"></textarea>

          <button type="submit" className="btn btn-dark mt-2">
            <FormattedMessage id="bookAnAppointment_submitLabel" />
          </button>
        </>
     } 

    </>
  );
};

export default BookAnAppointment;
