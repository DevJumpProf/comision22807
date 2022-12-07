
import './App.css';

/* importar componentes */
import Show from "./components/Show"

/* Importamos router */
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
<Route path='/' element={<Show/>}/>


      </Routes>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
