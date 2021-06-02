import React , {useState }from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice'; 
import './loginForm.scss';


const LoginForm = () => {

  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({
      name: name,
      email: email,
      password: password,
      loggedIn:true,
    }))
  }

  return (
      <div id='login'>
        <form className='login__form' onSubmit={e => handleSubmit(e)}>
          <h1>Login</h1>
          <input type='name' placeholder='name' value={name} onChange={e => setName(e.target.value)} />
          <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
          <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
          <button type='submit' className='submit__btn'>Login</button>
        </form>
    
      </div>
    
    );
}
 
export default LoginForm;