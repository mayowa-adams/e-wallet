import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Landing from "./Pages/Landing"
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route exact path="/" element={<LoginOptions/>}/> 
      <Route path='/site' element={<Send/>}/> */
      <Route exact path="/" element={<Login/>}/>}
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
