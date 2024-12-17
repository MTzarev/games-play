import {useState} from 'react';
import Home from "./components/Home";
import WelcomeWorld from "./components/WelcomeWorld";
import CatalogPage from "./components/CatalogPage";
import CreatePage from "./components/CreatePage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from './components/LoginPage';
import ErrorPage from './components/ErrorPage';
function App() {
 let [page, setPage] = useState('/home');
  let routes = {
    '/home': <WelcomeWorld/>,
    '/games': <CatalogPage/>,
    '/create-game': <CreatePage/>,
    '/register': <RegisterPage/>,
    '/login': <LoginPage/>,
    '/logout': <ErrorPage/>
  }

  let navigationChangeHandler = (pathname)=>{
    
    setPage(pathname);
  }

  return (
    
    <div id="box">
          <Home
          navigationChangeHandler = {navigationChangeHandler}
          />

    <main id="main-content">
      {routes[page] || <h1>No Page Found!</h1>}
    </main>


        
    </div>
    
  );
}

export default App;
 