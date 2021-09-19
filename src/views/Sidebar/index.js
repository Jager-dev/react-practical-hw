import React from 'react';
import './index.css'
import {Link} from "react-router-dom";


const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <Link to="/works"><li>Задачи и работы</li></Link>
          <Link to='/'><li>Проекты</li></Link>
          <Link to='/calendar'><li>Календарь</li></Link>
          <Link to='/possibilities'><li>Возможности</li></Link>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;