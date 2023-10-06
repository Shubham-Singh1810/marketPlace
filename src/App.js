import logo from './logo.svg';
import './App.css';
import Authenticate from './pages/Authenticate';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Navbar from './components/Navbar';
import Create from './pages/Create';
import Profile from './pages/Profile';
import EditProfile from './components/EditProfile';
import AllRoutes from './AllRoutes';

function App() {
  return (
    <div>
      {true? <AllRoutes/> : <Authenticate/>}
    </div>
  );
}

export default App;
