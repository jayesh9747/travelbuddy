import './App.css';
import {Routes,Route} from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Home from './Home';

function App() {
  return (
        <UserAuthContextProvider>
        <Routes>
          <Route path="/" element ={<Home />}/>
          <Route path="/login" element ={<Login/>}/>
          <Route path="/Signup" element ={<Signup/>}/>
          <Route path="/home" element ={<Home />}/>
        </Routes>
        </UserAuthContextProvider>
  );
}

export default App;
