import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import chatNavbar from "./components/ChatBox/Chat_Navbar";
//import LoginRegister from './components/Registration/LoginRegister';
import Authentication from './components/Authentication/Authentication';
import Welcome from './components/WelcomePage/Welcome';
import { SessionProvider } from './components/Authentication/Session';
function App() {
  return (
    <div className="App">
      <SessionProvider>
      <Router>
      <Routes>
        <Route path="/" element={<Authentication/>} />
        <Route path="/Welcome" element={<Welcome />} />
      </Routes>
      </Router>
      </SessionProvider>
    </div>   
  );
}

export default App;
