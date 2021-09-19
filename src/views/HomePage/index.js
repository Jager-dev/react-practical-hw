import React, {useState} from 'react';
import Sidebar from "../../components/Sidebar";
import './index.css'

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Sidebar/>
      <div className="homepage">
        <h1>Проекты</h1>
        <button className="add_btn" onClick={() => setIsOpen(true)}>Добавить проект</button>
      </div>
    </div>
  );
}

export default HomePage;