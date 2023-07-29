/* import React from "react";
import ReactDOM from "react-dom";

const CampuslandsApp = ()=>{
  return (
    <div>
      <h1>Bienvenidos a Campusland</h1>
      <p>Explora nuestros campus y descubre nuevas experiencias</p>
    </div>
  );
};

ReactDOM.render(<CampuslandsApp/>,document.getElementById('root'))

export default CampuslandsApp; */

//1.3.2 Construir primera aplicación de React como componentes//

//Componentes para la importacion//
import React from "react";
import './App.css';

//Componentes Header//
const Header = ()=>{
  return(
    <header>
      <h1>Bienvenidos a Campuslands</h1>
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Campus</a>
        <a href="#">Contacto</a>
      </nav>
    </header>
  );
};

//Componentes Content//
const Content = ()=>{
  return(
    <div>
      <p>Explora nuestro campus y descubre nuevas experiencias</p>
    </div>
  );
};

//Componentes raiz App//

const App = ()=>{
  return(
    <div>
      <Header/>
      <button className="explore-button">Explorar</button>
      <Content/>
    </div>
  );
}

export default App;