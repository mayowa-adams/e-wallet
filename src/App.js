import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Landing from "../Pages/Landing"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route exact path="/" element={<LoginOptions/>}/>
      <Route path='/site' element={<Send/>}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
