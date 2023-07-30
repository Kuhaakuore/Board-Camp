import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import View from "./components/View";
import NewRentalButton from "./components/NewRentalButton";
import Rentals from "./pages/Rentals";
import Customers from "./pages/Customers";
import Games from "./pages/Games";
import NewRental from "./pages/NewRental";
import Customer from "./pages/Customer";
import NewCustomer from "./pages/NewCustomer";
import NewGame from "./pages/NewGame";
import "./assets/styles/reset.css";
import "./assets/styles/style.css";

export default function App() {
  return (
    <BrowserRouter>
      <View>
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<NewRental />} />
          <Route path="/rentals" exact element={<Rentals />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/games" exact element={<Games />} />
          <Route path="/rentals/new" exact element={<NewRental />} />
          <Route path="/customers/new" exact element={<NewCustomer />} />
          <Route path="/customers/:customerId" exact element={<Customer />} />
          <Route path="/games/new" exact element={<NewGame />} />
        </Routes>
        <NewRentalButton />
      </View>
    </BrowserRouter>
  );
}
