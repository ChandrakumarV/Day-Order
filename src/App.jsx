import Header from "./components/Header";
import "./app.scss";
import Home from "./Pages/Home";
import { Routes ,Route} from "react-router-dom";
import Login from "./Pages/Login";
import ProtectedRoute from "./context/ProtectedRoute";
import { useEffect } from "react";
import ErrorPage from "./components/ErrorPage";

function App() {
  useEffect(()=>{
    
  },[])

  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
