import { useIntl, FormattedMessage } from "react-intl";
import { useReducer } from "react";
import ListWithLabel from "../components/ListWithLabel";
import TextWithLabel from "../components/TextWithlabel";
import { getMonthsOptions, getDaysForMonthOptions } from "../BookingDates";
import { getShops, getTime } from "../Helpers";
import { initialBooking, reducer } from "../pages/BookingFormReducer";
const next12Months = getMonthsOptions(new Date());

const BookAnAppointment = () => {

  const [booking, dispatch] = useReducer(reducer, initialBooking);
  const getFormatMessage = (messageId) => useIntl().formatMessage({ id: messageId });
  const defaultOption = getFormatMessage("bookAnAppointment_selectItem");
  const optionsShops = getShops(defaultOption);
  const timeSlots = getTime(defaultOption);
  const namePlaceHolder = getFormatMessage("bookAnAppointment_namePlaceHolder");
  const emailPlaceHolder = getFormatMessage( "bookAnAppointment_emailPlaceHolder");
  const telPlaceHolder = getFormatMessage("bookAnAppointment_telPlaceHolder");
  const clearDefaultOption =(v) => v === defaultOption ? "" : v;

  return (
    <>
      <h2>
        <FormattedMessage id="bookAnAppointment_Title" />
      </h2>
    {/*   {JSON.stringify(booking)}
      <hr /> */}
      <ListWithLabel
        selectId="where"
        labelMessageId="bookAnAppointment_selectShopLabel"
        options={optionsShops}
        onChangeHandler={(e) =>
          dispatch({ type: "CHANGE-SHOP", shop: clearDefaultOption(e) })
        }
        value={booking.shop}
      />

      {booking.shop && (
        <ListWithLabel
          selectId="month"
          options={[defaultOption, ...next12Months.keys()]}
          labelMessageId="bookAnAppointment_monthLabel"
          onChangeHandler={(v) => {
            if (next12Months.has(v)) {
              const p = next12Months.get(v);
              dispatch({
                type: "CHANGE-MONTH",
                monthKey: clearDefaultOption(v),
                year: p.year,
                month: p.month,
              });
            } else {
              dispatch({
                type: "CHANGE-MONTH",
                monthKey: clearDefaultOption(v),
              });
            }
          }}
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
          onChangeHandler={(e) =>
            dispatch({ type: "CHANGE-DAY", day: clearDefaultOption(e) })
          }
          value={booking.day}
        />
      )}

      {booking.day && (
        <ListWithLabel
          selectId="time"
          options={timeSlots}
          labelMessageId="bookAnAppointment_timeLabel"
          onChangeHandler={(e) =>
            dispatch({ type: "CHANGE-TIME", time: clearDefaultOption(e) })
          }
          value={booking.time}
        />
      )}

      {booking.time && (
        <>
          <TextWithLabel
            id="name"
            labelMessageId="bookAnAppointment_nameLabel"
            placeHolder={namePlaceHolder}
            onChangeHandler={(e) => dispatch({ type: "CHANGE-NAME", name: e })}
            value={booking.name}
          />

          <TextWithLabel
            id="email"
            labelMessageId="bookAnAppointment_emailLabel"
            placeHolder={emailPlaceHolder}
            onChangeHandler={(e) =>
              dispatch({ type: "CHANGE-EMAIL", email: e })
            }
            value={booking.email}
          />

          <TextWithLabel
            id="tel"
            labelMessageId="bookAnAppointment_telLabel"
            placeHolder={telPlaceHolder}
            onChangeHandler={(e) => dispatch({ type: "CHANGE-TEL", tel: e })}
            value={booking.tel}
          />

          <label htmlFor="message" className="form-label ">
            <FormattedMessage id="bookAnAppointment_messageLabel" />
          </label>
          <textarea className="form-control" id="message" rows="3"></textarea>

          <button type="submit" className="btn btn-dark mt-2">
            <FormattedMessage id="bookAnAppointment_submitLabel" />
          </button>
        </>
      )}
    </>
  );
};

export default BookAnAppointment;
