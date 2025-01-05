import { useState, useEffect } from 'react'



function App() {
  const [input,setInput] = useState('')
  const [tarefa, setTarefa] = useState([
    'pagar conta de Luz',
    'Estudar mais React e Next',
    'Finalizar o php'
  ])

  function sub(e){
    e.preventDefault();
    // pego todas que tenho dentro da minha lista
    setTarefa([...tarefa, input ]) //adiciona mais um elemento dentrodo input
    
    setInput('')//limpa o campo
  }

  // USEEFETC É USADO PARA CONTROLAR ALTERAÇÕES NO COMPONETE 
  // useEffetc [ ] quando a pagina for carregada
  useEffect(()=>{
    // busca todos os dados do local storege
    const locals = localStorage.getItem('@tarefa');

    // se tiver alguma consa dentro pegue e guarde em tarefas
    if(locals){
      setTarefa(JSON.parse(locals))
    }
  },[])

  useEffect(()=>{
    // armazena todo o conteudo no local storege do navegador
    localStorage.setItem('@tarefa',JSON.stringify(tarefa))
  },[tarefa])

  return (
    <>
      <form onSubmit={sub}>
        <label>
          Nome da tarefa:
        </label>
        <br />

        <input type="text" 
        placeholder='Digite uma tarefa'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />

        <div>
          <ul>
          {tarefa.map(tarefas=>(
            <li key={tarefas}>{tarefas}</li>
          ))} 

          </ul>
        </div>

        <button type='sumit'>Enviar</button>
      </form>
    </>
  )
}

export default App
