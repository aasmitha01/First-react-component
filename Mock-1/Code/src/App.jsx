import { PostsProvider } from "./context/PostsContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import PostsList from "./components/PostsList";
import ThemeToggle from "./components/ThemeToggle";
function AppContext(){
  const {theme}=useTheme();
  return( 
    <div className={theme}>
    <ThemeToggle/>
    <PostsList/>
    </div>
  );
}
function App(){
  return(
    <ThemeProvider>
      <PostsProvider>
        <AppContext/>
      </PostsProvider>
    </ThemeProvider>
  );
}
export default App;