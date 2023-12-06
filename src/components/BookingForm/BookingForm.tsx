import { useReducer, useState } from "react";
import ListWithLabel from "../ListWithLabel";
import TextWithLabel from "../TextWithlabel";
import { initialBooking, reducer } from "./BookingFormReducer";
import { getDaysForMonthOptions } from "./BookingDates";
import { FormattedDate} from "react-intl";

interface Props {
  defaultOption: string;
  title: string;
  shops: string[];
  next12Months: Map<string, { month: number; year: number }>;
  weekDayNames: string[];
  timeSlots: string[];
  namePlaceHolder: string;
  emailPlaceHolder: string;
  telPlaceHolder: string;
  messageLabel: string;
  buttonText: string;
}

const BookingForm = ({
  defaultOption,
  title,
  shops,
  next12Months,
  weekDayNames,
  timeSlots,
  emailPlaceHolder,
  telPlaceHolder,
  namePlaceHolder,
  messageLabel,
  buttonText,
}: Props) => {

  const [booking, dispatch] = useReducer(reducer, initialBooking);
  const [bookingComplete, setBookingComplete] = useState(false);
  const clearDefaultOption = (v: string) => (v === defaultOption ? "" : v);

  const isFormValid = () =>
    booking.shop &&
    booking.year &&
    booking.month &&
    booking.day &&
    booking.time &&
    booking.tel &&
    booking.email &&
    booking.name;

let bookingDate = new Date(booking.year,booking.month,parseInt(booking.day));


    const monthChangeHandler =(v: string)=>
    {
        let m = null,y = null;
        if (next12Months.has(v)) {
           const p = next12Months.get(v);
           m= p.month; y= p.year;
        } 
        dispatch({type: "CHANGE-MONTH",monthKey: clearDefaultOption(v), year: y, month: m});
      
    }



  return (
    <>

{/* {JSON.stringify(booking)} */}

       {bookingComplete && (<>
        <h3>
         Thank you {booking.name} your Appointment is booked.   <i className="bi bi-check2"></i></h3>
         <br />
         <b>Time:</b> {booking.time} 
         <br />
         <b>Day:</b> <FormattedDate value={bookingDate}  
         year="numeric"
         month="long"
         day="2-digit" />
         <br />
         <b>At:</b> {booking.shop}.        
      
      </>)}

      {!bookingComplete && (
        <>
          <h2>{title}</h2>

          <ListWithLabel
            selectId="where"
            labelMessageId="bookAnAppointment_selectShopLabel"
            options={shops}
            onChangeHandler={(v : string) =>
              dispatch({ type: "CHANGE-SHOP", shop: clearDefaultOption(v) })
            }
            value={booking.shop}
          />

          {booking.shop && (
            <ListWithLabel
              selectId="month"
              options={[defaultOption, ...next12Months.keys()]}
              labelMessageId="bookAnAppointment_monthLabel"
              onChangeHandler={(v :string) => monthChangeHandler(v)}
              value={booking.monthKey}
            />
          )}

          {(booking.month !== null || booking.month) && (
            <ListWithLabel
              selectId="days"
              options={[
                defaultOption,
                ...getDaysForMonthOptions(
                  booking.month,
                  booking.year,
                  weekDayNames
                ).keys(),
              ]}
              labelMessageId="bookAnAppointment_dayLabel"
              onChangeHandler={(v: string) =>
                dispatch({ type: "CHANGE-DAY", day: clearDefaultOption(v) })
              }
              value={booking.day}
            />
          )}

          {booking.day && (
            <ListWithLabel
              selectId="time"
              options={timeSlots}
              labelMessageId="bookAnAppointment_timeLabel"
              onChangeHandler={(v: string) =>
                dispatch({ type: "CHANGE-TIME", time: clearDefaultOption(v) })
              }
              value={booking.time}
            />
          )}

          {booking.time && (
            <>
              <TextWithLabel
                Id="name"
                labelMessageId="bookAnAppointment_nameLabel"
                placeHolder={namePlaceHolder}
                onChangeHandler={(v: string) =>
                  dispatch({ type: "CHANGE-NAME", name: v })
                }
                value={booking.name}
              />

              <TextWithLabel
                Id="email"
                labelMessageId="bookAnAppointment_emailLabel"
                placeHolder={emailPlaceHolder}
                onChangeHandler={(v: string) =>
                  dispatch({ type: "CHANGE-EMAIL", email: v })
                }
                value={booking.email}
              />

              <TextWithLabel
                Id="tel"
                labelMessageId="bookAnAppointment_telLabel"
                placeHolder={telPlaceHolder}
                onChangeHandler={(v :string) =>
                  dispatch({ type: "CHANGE-TEL", tel: v })
                }
                value={booking.tel}
              />

              <label htmlFor="message" className="form-label ">
                {messageLabel}
              </label>
              <textarea className="form-control" id="message"></textarea>
              <button
                type="submit"
                className={`btn btn-dark mt-2 ${
                  isFormValid() ? "" : "disabled"
                }`}
                onClick={() => setBookingComplete(true)}
              >
                {buttonText}
              </button>
            </>
          )}
        </>
      )}
    </>
  );
};

export default BookingForm;
