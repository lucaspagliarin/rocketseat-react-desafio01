import { useState } from 'react';
import styles from './Task.module.css';

import { Trash } from "phosphor-react";

export function Task() {
  const [isChecked, setIsChecked] = useState(false)


  return (
    <div className={styles.task}>
      <input type="checkbox" checked={isChecked} onChange={() => setIsChecked((prev) => !prev)}/>
      <p className={isChecked ? styles.isChecked : styles.notChecked }>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button title='Deletar Tarefa'><Trash size={14}/></button>
    </div>
  )
}