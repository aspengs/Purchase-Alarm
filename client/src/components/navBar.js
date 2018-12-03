import React from 'react';

class NavBar extends React.Component {
 

  render() {
    return (
      <div className="sidebar-sticky-garba">
        <nav>
            <ul className="nav-garba">
                <li><a href="">Brand</a></li>
                <li><a href="">Promo</a></li>
                <li><a href="">Source</a></li>
                <li><a href="">Platform</a></li>
                <li><button className="btn btn-alert-submit" >Alerta</button></li>
            </ul>
            
        </nav>
      </div>
    );
  }
}
export default NavBar;