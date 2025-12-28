import { Navigate } from "react-router-dom";
function ProtectedRoute({childern}){
    const isLoggedIn=localStorage.getItem("isLoggedIn");
    if(!isLoggedIn){
        return <Navigate to="/login"/>;
    }
    return childern;

}
export default ProtectedRoute;