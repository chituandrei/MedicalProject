import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import TopBar from './components/TopBar/TopBar';
import LoginPage from './components/Login/Login_index';
import HomePage from './components/Home/Home_index';
import SignupPage from './components/SignUp/SignUp';
import ContactPage from './components/Contact/Contact_index';


function App() {
  return (
    <Router basename="/MedicalProject"> {/* Setează aici ruta de bază */}
      <TopBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
