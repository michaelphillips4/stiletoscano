import { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import Nav from "./components/Nav";
import ContactDetails from "./pages/ContactDetails";
import Index from "./pages/Index";
import HomeServices from "./pages/HomeServices";
import WhoAreWe from "./pages/WhoAreWe";
import BookAnAppointment from "./pages/BookAnAppointment";
import Footer from "./components/Footer";

function getInitialLocal() {
  // getting stored items
  const savedLocale = localStorage.getItem("locale1");
  return  savedLocale || LOCALES.ENGLISH;;
}

export default function App() {

  const [currentLocale, setCurrentLocale] = useState(getInitialLocal());
  
  const handleChange = (e) => {
    setCurrentLocale(e.target.value);
    localStorage.setItem("locale1", e.target.value);
  };

  return (
     <IntlProvider   
     messages={messages[currentLocale]}
     locale={currentLocale}
     defaultLocale={LOCALES.ENGLISH}>
      <Routes>
        <Route path="/" element={<Layout currentLocale={currentLocale} handleChange={handleChange} />}>
          <Route index element={<WhoAreWe />} />
          <Route path="chi-siamo" element={<WhoAreWe />} />
          <Route path="servizi-a-domicilio" element={<HomeServices />} />
          <Route
            path="prenota-un-appuntamento"
            element={<BookAnAppointment />}
          />
          <Route path="contatti" element={<ContactDetails />} />
          <Route path="*" element={<Index />} />
        </Route>
      </Routes>
      </IntlProvider>
  );
}

function Layout({currentLocale,handleChange} ) {

  return (
    <div>
      <div className="header">
        <Nav /> 
      </div>
      <div className="container pt-5 text-start">
        <Outlet />
 
      </div>
       <br />
       <br />
       <br />
       <br />
      <Footer currentLocale={currentLocale} handleChange={handleChange}  />
    </div>
  );
}
