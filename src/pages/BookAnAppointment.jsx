import { useIntl, FormattedMessage } from "react-intl";

import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { useState } from "react";


const BookAnAppointment = () => { 
  const getFormatMessage = (messageId) =>  useIntl().formatMessage({ id: messageId });
  const defaultOption =getFormatMessage("bookAnAppointment_selectItem") ;
  const [value, onChange] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState(defaultOption);


const options = [
  defaultOption,
  "GENOA - Mazzini Gallery, 42/R",
  "MILAN - Sala Dei Longobardi, 2 (Emporio Falcai)",
  "ROME - Via Veneto 104",
  "Sartoria Rossi - Factory Store - Outlet Marciano Della Chiana",
];



  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h2><FormattedMessage id="bookAnAppointment_Title" /></h2>
          </div>
          <div className="card-text text-start">
            <form>
              <div className="m-4">
                <label htmlFor="where" className="form-label">
                <FormattedMessage id="bookAnAppointment_selectShopLabel" />
                </label>

                <select
                  id="where"
                  className="form-select"
                  onChange={(e) => setSelectedOption(e.target.value)}
                  value={selectedOption}
                >
                  {options.map((e) => (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
              </div>

         {/*      {selectedOption !== defaultOption && (
                <> */}
                  <div className="m-4">
                    <label htmlFor="visit-date-time" className="form-label">
                    <FormattedMessage id="bookAnAppointment_dateLabel" />
                    </label>
                    <br />
                    <DateTimePicker
                      onChange={onChange}
                      value={value}
                      id="visit-date-time"
                    />
                  </div>

                  <div className="m-4">
                    <label htmlFor="name" className="form-label">
                    <FormattedMessage id="bookAnAppointment_nameLabel" />
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="name"
                      placeholder={getFormatMessage("bookAnAppointment_namePlaceHolder")} 
                    />
                  </div>
                  <div className="m-4">
                    <label htmlFor="email" className="form-label">
                    <FormattedMessage id="bookAnAppointment_emailLabel" />
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="m-4">
                    <label htmlFor="tel" className="form-label">
                    <FormattedMessage id="bookAnAppointment_telLabel" />
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="tel"
                      placeholder="077123456789"
                    />
                  </div>
                  <div className="m-4">
                    <label htmlFor="message" className="form-label">
                    <FormattedMessage id="bookAnAppointment_messageLabel" />
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="3"
                    ></textarea>
                  
                      <button type="submit" className="btn btn-dark mt-2">
                      <FormattedMessage id="bookAnAppointment_submitLabel" />
                      </button>
                   
                  </div>
               {/*  </>
              )} */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAnAppointment;
