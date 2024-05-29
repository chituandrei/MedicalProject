import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import PatientNavbar from './components/Navbar/PatientNavbar';
import DoctorNavbar from './components/Navbar/DoctorNavbar';
import LoginPage from './components/Login/Login_index';
import HomePage from './components/Home/Home_index';
import SignupPage from './components/SignUp/SignUp';
import ContactPage from './components/Contact/Contact_index';
import PacientHomePage from './components/Pacient/Pacient_home';
import DoctorHomePage from './components/Doctor/Doctor_home';
import ThankYouPage from './components/SignUp/ThankYou';
import Doctor_list from './components/Pacient/DoctorList';
import Editeaza_pacient from './components/Pacient/Editeaza_pacient';
import MyPacient from './components/Doctor/My_Pacient';

function App() {
  return (
    <Router basename="/MedicalProject">
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();

  const renderNavbar = () => {
    if (location.pathname.startsWith('/pacient') || location.pathname.startsWith('/doctor_list')) {
      return <PatientNavbar />;
    } else if (location.pathname.startsWith('/doctor')) {
      return <DoctorNavbar />;
    } else {
      return <Navbar />;
    }
  };

  return (
    <>
      {renderNavbar()}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pacient" element={<PacientHomePage />} />
        <Route path="/doctor" element={<DoctorHomePage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/doctor_list" element={<Doctor_list />} />
        <Route path="/editeaza_pacient" element={<Editeaza_pacient />} />
        <Route path="/my_pacient" element={<MyPacient />} />
      </Routes>
    </>
  );
}

export default App;