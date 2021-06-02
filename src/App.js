import {useSelector} from 'react-redux';
import { selectUser } from './features/userSlice';
import LoginForm from './components/loginForm/loginForm';
import Logout from './components/logout/logout';
import './App.css';



function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      {user ? <Logout /> : <LoginForm />}
    </div>
  );
}

export default App;
