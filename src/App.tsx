import './global.css'
import styles from './App.module.css'

import { v4 as uuidv4 } from 'uuid';

import { PlusCircle, ClipboardText } from 'phosphor-react'

import { Header } from './components/Header';
import { Task, ITask } from './components/Task';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

export function App() {
  const [ tasks, setTasks ] = useState<ITask[]>([])
  const [ newTaskText, setNewTaskText ] = useState('')
  const [ completedTaskList, setCompletedTaskList ] = useState(tasks.filter(task => (task.isCompleted == true)))

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    
    const newTaskList = [
      {
        id: uuidv4(),
        description: newTaskText,
        isCompleted: false,
      }, ...tasks
    ]
    setTasks(newTaskList)

    setNewTaskText('');
  }

  function updateTask(taskToUpdate: ITask){
    const newTasks = tasks.map(task => 
      task.id === taskToUpdate.id
      ? { ...task, isCompleted: taskToUpdate.isCompleted } 
      : task
    )

    setCompletedTaskList(newTasks.filter(task => (task.isCompleted == true)))
    setTasks(newTasks)
  }

  function deleteTask(taskToDelete: ITask) {
    const newTasks = tasks.filter(task => task.id !== taskToDelete.id)

    setCompletedTaskList(newTasks.filter(task => (task.isCompleted == true)))
    setTasks(newTasks)   
  }

  function handleNewTaskText(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  function handleNewTaskInvalidText(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  function renderTaskList(tasks: ITask[]) {
    if (tasks.length == 0) {
      return (
        <div className={styles.taskListEmpty}>
        <ClipboardText size={56} />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
      )
      } else {
        return(
          <div className={styles.taskListFilled}>
            {tasks.map(task => {
              return (
                <Task 
                  key={task.id} 
                  id={task.id} 
                  description={task.description} 
                  isCompleted={task.isCompleted} 
                  onUpdateTask={updateTask}
                  onDeleteTask={deleteTask}
                />
              )
            })}
         </div>
        )
        
      }
  
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <form className={styles.newTodo} onSubmit={handleCreateNewTask}>
          <textarea 
            name='comment'
            placeholder='Adicione uma nova tarefa'
            value={newTaskText}
            onChange={handleNewTaskText}
            onInvalid={handleNewTaskInvalidText}
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
              <div className={styles.counter}>{tasks.length}</div>
            </div>
            <div className={styles.completedTask}>
              <strong >Concluídas</strong>
              <div className={styles.counter}>{completedTaskList.length} de {tasks.length}</div>
            </div>
          </div>

          {renderTaskList(tasks)}

        </div>
      </div>

    </div>
  )
}
