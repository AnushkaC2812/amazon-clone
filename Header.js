import React from 'react';
import './Header.css';
import Icon from '@material-ui/core/Icon';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from react-router-dom;
import { useStateValue } from './StateProvider';


function Header() {
    const [{basket, user}, dispatch] = useStateValue();    //,user means pulling user from state

    const handleAuthentication = () => {
        if(user) {
            auth.signOut()
        }
    }
    return (
        <div className='NavBar'>
            <Link to='/'>
            
            <div className='logo'>
                <img className='logoimg' 
                src="https://img.maximummedia.ie/her_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtaGVyLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE1XFxcLzA4XFxcLzA2MTUzOTM0XFxcL2FtYXpvbi5qcGdcIixcIndpZHRoXCI6NzAwLFwiaGVpZ2h0XCI6MzcwLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuaGVyLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvaGVyXFxcL25vLWltYWdlLnBuZz9pZD0wZDJkNjI3YzA1OWI5ZWRjYWIwZFwiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiIwZGZjNWM4M2QwYTdkMmQ3OTc3MjY1NjQzMjFkNjRjYzk5OGYyYzMxIn0=/amazon.jpg"/>
            </div>
            </Link>
            <div className='SearchBar'>
                 <input className='SearchInput' type='text' />
                 <FindInPageIcon className='searchicon' />
            </div>
            <div className='NavBarRHS'>
                <Link to= {!user && '/login'}>
                <div onClick = {handleAuthentication} className='option'>
                    <span className = 'optionLine1'>Hello</span>
                    <span className = 'optionLine2'>{user ? 'Sign Out': 'Sign In'} </span>
                </div>
                </Link>
                <div className='option'>
                    <span className = 'optionLine1'>Returns</span>
                    <span className = 'optionLine2'>And Orders</span>  
                </div>
                <div className='option'>
                    <span className = 'optionLine1'>Your</span>
                    <span className = 'optionLine2'>Prime</span> 
                </div>
            
            <Link to='/checkout'>
            <div className='header_optionBasket'>
                    <ShoppingCartIcon />
                    <span className = 'optionLine2 basketCount'>{basket?.length}</span>      
            </div>
            </Link>

            </div>
            
        </div>
    )
}

export default Header
