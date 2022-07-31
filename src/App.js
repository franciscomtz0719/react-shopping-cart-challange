import "./App.css";
import React, { useState, useEffect } from "react";
import Button from './Components/Button'
import Input from './Components/Input'
function App() {
  
  return (
    <div className="App">
      <Button 
      text="Cerrar sesion"
      className= "btn btn-primary"
      />
    <Input/>

    </div>

  );
}
export default App;
