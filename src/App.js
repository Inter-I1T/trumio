import { Route, Routes } from "react-router-dom";
import { Index } from "./pages";
import Signin from "./pages/Signin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./pages/Register";
import { Navbar } from "./components/navbar/Navbar";
import { Profile } from "./pages/profile";
import Bidder from "./pages/Bidder";
import ProjectForm from "./pages/ProjectForm";
import ProjectDisplay from "./pages/ProjectDisplay";
import Tickets from "./pages/Tickets";
import { Navbar2 } from "./components/navbar/Navbar2";
import { Navbar3 } from "./components/navbar/Navbar3";
import Event from "./pages/Event";
import EventContent from "./components/event/EventContent";
import Payment from "./components/event/Payment";
import AlumniConnect from "./components/event/AluminiAssociation";
import RegistrationForm from "./components/event/AlumniRegistration";

function App() {
  return (
    <>
      <ToastContainer />
      {/* <Navbar/> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Index />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Signin />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              {" "}
              <Navbar />
              <Register />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Navbar2 />
              <Profile />
            </>
          }
        />
        <Route
          path="/form"
          element={
            <>
              <Navbar3 />
              <ProjectForm />
            </>
          }
        />
        <Route
          path="/bid"
          element={
            <>
              <Navbar3 />
              <Bidder />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Navbar3 />
              <ProjectDisplay />
            </>
          }
        />
        <Route
          path="/tickets"
          element={
            <>
              <Navbar3 />
              <Tickets />
            </>
          }
        />
        <Route
          path="/event/home"
          element={
            <>
              <Navbar3 />
              <Event />
            </>
          }
        />
        <Route
          path="/event/description"
          element={
            <>
              <Navbar3 />
              <EventContent />
            </>
          }
        />
        <Route
          path="/event/payment"
          element={
            <>
              <Navbar3 />
              <Payment />
            </>
          }
        />
        <Route
          path="/event/alumniConnect"
          element={
            <>
              <Navbar3 />
              <AlumniConnect />
            </>
          }
        />
        <Route
          path="/event/alumniRegistration"
          element={
            <>
              <Navbar3 />
              <RegistrationForm />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
