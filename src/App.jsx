import {useState} from "react";

function App(){
//TODO presentarel concepto de "state"
//hoors

const [inputState,setInputState] = useState({
  titulo: "",
  fecha: "",
  nota: "",
});

const handleInputChange = (event) => {
  // console.log(event.target);
  setInputState({
    ...inputState,
  [event.target.name]: event.target.value,
  });
}; 

const handleClickLimpiar = () => {
  setInputState({titulo: "", fecha: "", nota: ""});
};

const handleClickGuardar =() => {
  let arregloNotas = JSON.parse (localStorage.getItem("notas")) || [];
  arregloNotas.push(inputState);
localStorage.setItem("notas", JSON.stringify(arregloNotas));
handleClickLimpiar();
};

return(
   <div className="App container">
     <div className="row">
      <div className="col">
        <h3>listas</h3>
      </div>
      <div className="col" >
        <h3>Notas</h3>
        <label className="mb-2" style={{ width: "100%"}}>
          Titulo
          <input 
          id="titulo"
          name="titulo"
          type="text" 
          onChange={handleInputChange}
          value={inputState.titulo}
          style={{ width: "100%" }}
          />
         </label>
            <br />
            <label className="mb-2" style={{ width: "100%"}}>
              Fecha
              <input 
              id="fecha"
              name="fecha"
              type="text" 
              onChange={handleInputChange}
              value={inputState.fecha}
              style={{ width: "100%" }}
              />
            </label>
            <br />
          <label style={{ width: "100%"}}>
            Nota
              <input 
              id="nota"
              name="nota"
              type="text" 
              onChange={handleInputChange}
              value={inputState.fecha}
              style={{ width: "100%" }}
              />
        </label>
          <hr />
          <div className="ms-2 me-2 mt-2 row">
            <div className="col">
              <span className="row me-1">
                <button
                type="button"
                className="btn btn-primary"
                onClick={handleClickLimpiar}
                >
                  Limpiar
                </button>
              </span>
            </div>
            <div className="col">
              <span className="row ms-1">
                <button
                type="button"
                className="btn btn-primary"
                onClick={handleClickGuardar}
                >
                  Guardar
                </button>
              </span>
            </div>
          </div>
      </div>
     </div>
   </div>
     
);
}
export default App;