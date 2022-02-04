import './App.css';
import { SignUp } from './components/Signup'
// import { Login } from './components/Login';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import RandomBook from './components/randomBook';
import Start from './components/Start';

function App() {
  return (
    <div>
      {/* <SignUp />
      <Login />
      <RandomBook /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<RandomBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;