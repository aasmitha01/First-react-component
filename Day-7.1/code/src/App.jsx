import { Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUS";
import Todos from "./pages/Todos";
import NotFound from "./pages/NotFound";
function App(){
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/todos" element={<Todos/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  );
}
export default App;
