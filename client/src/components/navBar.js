import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
 

  render() {
    return (
      <div className="sidebar-sticky-garba">
        <nav>
            <ul className="nav-garba">
              <li><Link to="/brand">Brand</Link></li>
              <li><Link to="/promo">Promo</Link></li>
              <li><Link to="/source">Source</Link></li>
              <li><Link to="/platform">Platform</Link></li>
              <li className="last-nav-garba"><Link to="/"><button className="btn btn-alert-submit" >Alerta</button></Link></li>
               
            </ul>

               
            
        </nav>
      </div>
    );
  }
}
export default NavBar;