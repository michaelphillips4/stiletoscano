import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { useState } from "react";

const defaultOption = "Please select a shop";

const options = [
  defaultOption,
  "GENOA - Mazzini Gallery, 42/R",
  "MILAN - Sala Dei Longobardi, 2 (Emporio Falcai)",
  "ROME - Via Veneto 104",
  "Sartoria Rossi - Factory Store - Outlet Marciano Della Chiana",
];

const BookAnAppointment = () => {
  const [value, onChange] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  return (
    <>
      <div className="card mt-5">
        <div className="card-body">
          <div className="card-title">
            <h2>Choose location and date to book your appointment.</h2>
          </div>
          <div className="card-text text-start">
            <form>
              <div className="m-4">
                <label htmlFor="where" className="form-label">
                  Which of our shops would you like to visit
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
                      Please select you ideal time for your visit
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
                      Your Name
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="name"
                      placeholder="Mr A Smith"
                    />
                  </div>
                  <div className="m-4">
                    <label htmlFor="email" className="form-label">
                      Email address
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
                      Telephone
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
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="3"
                    ></textarea>
                  
                      <button type="submit" className="btn btn-dark mt-2">
                        Book
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
