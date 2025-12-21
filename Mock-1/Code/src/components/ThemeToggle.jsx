import { useTheme } from "../context/ThemeContext";
function ThemeToggle(){
    const{toggletheme}=useTheme();
    return <button onClick={toggleTheme}>Switch</button>
} 
export default ThemeToggle;