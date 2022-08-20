import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Landing from "./Pages/studentSignUp"
import Login from './Pages/vendorLogin';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route exact path="/" element={<LoginOptions/>}/> 
      <Route path='/site' element={<Send/>}/> */
      <Route exact path="/" element={<Login/>}/>}
      <Route exact path="/signUp" element={<Landing/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
