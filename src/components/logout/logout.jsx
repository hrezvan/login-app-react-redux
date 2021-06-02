import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './../../features/userSlice';
import { logout } from '../../features/userSlice';
import './logout.scss';

const Logout = () => {

    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }

    return ( 
        <div className='logout'>
            <h1>Welcome &nbsp;<span className='user-name'>{user.name}</span></h1>
            <button className='logout__btn' onClick={handleLogout}>Logout</button>
        </div>
     );
}
 
export default Logout;