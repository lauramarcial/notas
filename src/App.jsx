import {useState} from "react";
function App(){

const [inputState,setInputState] = useState({
  titulo: "",
  fecha: "",
  nota: "",
});

const handleInputChange = (event) => {
  setInputState({
    ...inputState,
  [event.target.name]: event.target.value,
  });
}; 

return (
  <div className="App">
<h3>Notas</h3>
<label htmlFor="titulo">Titulo</label>
<input
  id="titulo"
  name="titulo"
  type="text"
  onChange={handleInputChange}
  value={inputState.titulo}
/>
<label htmlFor="fecha">fecha</label>
<input
  id="fecha"
  name="fecha"
  type="text"
  onChange={handleInputChange}
  value={inputState.fecha}
/>
<label htmlFor="nota">Nota</label>
<input
  id="nota"
  name="nota"
  type="text"
  onChange={handleInputChange}
  value={inputState.nota}
  />
  </div>
  );
}
export default App;