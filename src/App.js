import Home from "./components/Home";
import WelcomeWorld from "./components/WelcomeWorld";
import CatalogPage from "./components/CatalogPage";
import CreatePage from "./components/CreatePage";
import LoginPage from "./componenets/LoginPage";
import RegisterPage from "./components/RegisterPage"

function App() {
  let routes ={
    '/home': WelcomeWorld,
    '/games': CatalogPage,
    '/create-game': CreatePage,
    '/login': LoginPage, 
    '/register': RegisterPage
  }
  return (
    
    <div id="box">
          <Home/>

    <main id="main-content">
      <WelcomeWorld/>
    </main>


        
    </div>
    
  );
}

export default App;
 