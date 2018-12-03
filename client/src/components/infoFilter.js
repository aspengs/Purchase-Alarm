import React from 'react';

class InfoFilter extends React.Component {
 
  render() {
    return (
        <div>
            <ul className="infoFilter">
                <li className="brand">Alerta de: <span>Garbarino</span></li>
                <li className="platform">Plataforma: <span>Browser</span></li>
            </ul>
        </div>
    );
  }
}
export default InfoFilter;