import "./dados.css"


const Dados = ({dado, removeDado}) => {

    return(
        <div className="container-dado">
            <div className="div-button">
                <button onClick={() => removeDado(dado.id)} className="button-tarefa">
                    X
                </button>
            </div>
            <div className="tarefa">
                <p>{dado.tarefa}</p>
            </div>
            <div className="div-checkbox form-switch">
                <input className="form-check-input" type="checkbox"/>
                <label className="form-check-label label-checkbox">Urgente</label>
            </div>
        </div>
    )
}

export default Dados;