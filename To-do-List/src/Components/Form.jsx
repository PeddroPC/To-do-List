import { useState } from "react";
import "./form.css";


const Form = ({addDados}) => {

    const [tarefa, setTarefa] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (tarefa) {
            try{
                const response = await fetch('http://localhost:8080/tarefa/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({tarefa}),
                })
                if (response.ok) {
                    setTarefa("")
                    const data = await response.json();
                    addDados(tarefa)
                } else{
                    alert("Inválidado")
                }
            } catch (error){
                console.error("Erro na conexão", error)
            }
        } else{
            alert("Inválido")
        }
    }
    return(
        <form onSubmit={handleSubmit} className="container-form">
            <div className="div-input">
                <input className="input" type="text" value={tarefa} placeholder="Tarefa: " onChange={(e) => setTarefa(e.target.value)}/>
            </div>
            <div>
                <button className="button-form" type="submit">✔</button>
            </div>
        </form>
    )
}

export default Form;