import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Send from "./Pages/Send"
import LoginOptions from './Pages/LoginOptions';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LoginOptions/>}/>
      <Route path='/site' element={<Send/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
