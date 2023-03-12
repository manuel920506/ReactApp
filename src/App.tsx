import './App.css'; 
import Menu from './utils/Menu';
import { Route, Switch } from 'react-router';
import GenreIndices from './genres/genreIndices';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
 
function App() { 
  return (
    <> 
    <BrowserRouter>
      <Menu/> 
      <div className='container'> 
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/genres">
            <GenreIndices />
          </Route>
        </Switch>
      </div>
    </BrowserRouter> 
    </>
  );
}

export default App;
