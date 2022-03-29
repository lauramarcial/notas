function App() {
  const handleChangePrueba = (event) => {
    console.log(event.target.name, event.target.value);
  };

  return (
    <div className="App">
  <h3>Notas</h3>
  <label htmlFor="pruebaID">impur de prueba</label>
  <input id="pruebaID" name="prueba" type="text" />
  </div>
  );
}

export default App;
-+