import './App.css'; 
import Menu from './utils/Menu';
import { Route, Switch } from 'react-router'; 
import { BrowserRouter } from 'react-router-dom'; 
import routes from './route-config';
import configureValidations from './validations'
 
configureValidations();

function App() { 
  return (
    <> 
    <BrowserRouter>
      <Menu/> 
      <div className='container'> 
        <Switch>
           {routes.map(route => <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />)}
        </Switch>
      </div>
    </BrowserRouter> 
    </>
  );
}

export default App;
