import './App.css';
import Dashboard from './components/Dashboard';
import HeaderComponent from './components/layout/HeaderComponent';
import FooterComponent from './components/layout/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddUser from './components/Registration/AddUser';
import Login from './components/Registration/Login';
import { Provider } from 'react-redux';
import store from './store';
import HomeComponent from './components/Home';




function App() {
  return (
    

    <Provider store={store}>
      
      <Router>
        
      <HeaderComponent/>
      <Route exact path="/Home" component={HomeComponent}/>
      <Route exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/addUser" component={AddUser}/>
      <Route exact path="/login" component={Login}/>

  
      
        
        {/* <Route path="/login" component={Login}></Route> */}
  
      <FooterComponent/>
      </Router>
    </Provider>
  
  );
}

export default App;