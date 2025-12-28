import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/admin" element={
        <ProtectedRoute>
         <Admin />
        </ProtectedRoute>
      }
      />
    <Route path="*" element={<Login />}/>
      </Routes>
      </BrowserRouter>
  )
}
export default App;