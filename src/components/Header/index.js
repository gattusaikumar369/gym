import {Link} from 'react-router-dom'
import {Component} from 'react'

import './index.css'

class Header extends Component{
    render(){
        return(
            <nav className='nav-cnt'>
                <div className="header-cnt">
                    
                        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Ffitness-logo&psig=AOvVaw2hYS_n_55-N4acAcnIkcDw&ust=1723541182848000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCOj80r2R74cDFQAAAAAdAAAAABAE" 
                        className='website-logo' alt="logo"
                        /> 
                    <ul className='nav-items-cnt'>
                       <li className='nav-item'>
                         <Link to="/" className="link-item">Home</Link>
                       </li>
                       <li className='nav-item'>
                         <Link to="/about" className="link-item">About</Link>
                       </li>
                       <li className='nav-item'>
                         <Link to="/tutorials" className="link-item">Tutorials</Link>
                       </li>
                       <li className='nav-item'>
                         <Link to="/progress" className="link-item">Progress</Link>
                       </li>
                       <li className='nav-item'>
                         <Link to="/contact" className="link-item">Contact Us</Link>
                       </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Header