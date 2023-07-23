import './global.css'
import styles from './App.module.css'

import { PlusCircle, ClipboardText } from 'phosphor-react'

import { Header } from './components/Header';
import { Task } from './components/Task';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form className={styles.newTodo}>
          <textarea 
            name='comment'
            placeholder='Adicione uma nova tarefa'
            required
          />
          <button>
            <span> Criar </span>
            <PlusCircle size={16}/>
          </button>
        </form>
        <div className={styles.taskListWrapper}>
          <div className={styles.taskHeader}>
            <div className={styles.createdTask}>
              <strong >Tarefas Criadas</strong> 
              <div className={styles.counter}>5</div>
            </div>
            <div className={styles.completedTask}>
              <strong >Concluídas</strong>
              <div className={styles.counter}>2 de 5</div>
            </div>
          </div>
          {/* <div className={styles.taskListEmpty}>
            <ClipboardText size={56} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div> */}
          <div className={styles.taskListFilled}>
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
