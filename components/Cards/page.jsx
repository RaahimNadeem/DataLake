'use client';
import styles from './page.module.css'
import { projects } from './data';
import Card from './Card';

export default function Home() {
  return (
    <main className={styles.main}>
      {
        projects.map( (project, i) => {
          return <Card key={`p_${i}`} {...project} i={i}/>
        })
      }
    </main>
  )
}