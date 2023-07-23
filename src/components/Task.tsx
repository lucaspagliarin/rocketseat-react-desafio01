import { useState } from 'react';
import styles from './Task.module.css';

import { Trash } from "phosphor-react";

export interface ITask {
  id: string;
  description: string;
  isCompleted: boolean;
}

interface ITaskProps extends ITask {
  onUpdateTask: (task: ITask) => void;
  onDeleteTask: (task:ITask) => void;
}

export function Task({ id, description, isCompleted, onUpdateTask, onDeleteTask }: ITaskProps) {
  const [isChecked, setIsChecked] = useState(isCompleted)
  
  function handleCheckTask() {
    setIsChecked((isChecked) => !isChecked); 
   
    onUpdateTask({
      id,
      description,
      isCompleted: !isChecked
    })
  }
  function handleDeleteTask() {
    
    onDeleteTask({
      id,
      description,
      isCompleted
    })
  }

  return (
    <div className={styles.task}>
      <input type="checkbox" checked={isChecked} onChange={handleCheckTask}/>
      <p className={isChecked ? styles.isChecked : styles.notChecked }>{description}</p>
      <button title='Deletar Tarefa' onClick={handleDeleteTask}><Trash size={14}/></button>
    </div>
  )
}