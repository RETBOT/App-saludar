import logo from './logo.svg';
import './App.css';
import Saludar from './components/Saludar';

function App() {
  const user = {
    nombre: "RETBOT",
    edad: "23",
    color: "verde"
  }

  const saludarfn = (nombre, edad) => {
    //console.log("Hola "+nombre+" tiene "+edad+" años.");
    const saludo = `Hola ${nombre} tiene ${edad} años`; 
    console.log(saludo);
    alert(saludo);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo={user} saludarfn={saludarfn} />
      </header>
    </div>
  );
}

export default App;
