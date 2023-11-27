import Header from "./components/Header";
import Nav from "./components/Nav";
import { Routes, Route, Outlet } from "react-router-dom";
import ContactDetails from "./pages/ContactDetails";
import Index from "./pages/Index";
import HomeServices from "./pages/HomeServices";
import TheCompany from "./pages/TheCompany";
import BookAnAppointment from "./pages/BookAnAppointment";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="chi-siamo" element={<TheCompany />} />
          <Route path="servizi-a-domicilio" element={<HomeServices />} />
          <Route
            path="prenota-un-appuntamento"
            element={<BookAnAppointment />}
          />
          <Route path="contatti" element={<ContactDetails />} />
          <Route path="*" element={<Index />} />
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <div>
      <Header />
      <Nav />
      <div className="container pt-5 text-start ">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
