import UserList from './components/dashboard/UserList';
import CreateUser from './components/createUser/CreateUser'
import ViewDetails from './components/viewDetails/ViewDetails'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<UserList/>} />
          <Route path='/createUser' element={<CreateUser/>} />
          <Route path='/viewDetails/:id' element={<ViewDetails/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
