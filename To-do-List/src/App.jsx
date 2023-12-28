import "./App.css"

import { useState, useEffect } from 'react'
import Title from "./Components/title"
import Form from "./Components/Form"
import Dados from "./Components/Dados"
import axios from "axios"

function App() {

  const [dados, setDados] = useState([])

  const addDados = (tarefa) => {
    const newDados = [...dados, {
      id: Math.floor(Math.random() * 10000),
      tarefa
    }]
    setDados(newDados)
  }
  const fetchDados = async () => {
    try{
      const response = await axios.get('http://localhost:8080/tarefa/list');
      setDados(response.data)
    } catch (error){
        console.error("Erro no fecth", error)
      }
  };
  const removeDado =  async (id) => {
    try{
      await axios.delete(`http://localhost:8080/tarefa/deletar/${id}`);
      fetchDados();
      console.log("Removido");
    } catch (error){
      console.error("Erro na remoção", error);
    }
  }
  useEffect(() => {
    fetchDados();
  }, []);
  
return(
  <div>
    <Title/>
    <div className='container'>
      <Form addDados={addDados}/>
      {
        dados.map((dado) => (
          <Dados key={dado.id} dado={dado} removeDado={removeDado}/>
        ))
      }
    </div>
  </div>
)
}
export default App
