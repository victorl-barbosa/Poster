/* eslint-disable react/prop-types */
import Button from '../Button'
import styles from './styles.module.css'

export default function Card(props) {
  return (
    <div className={styles.container}>
      <img src={props.posterImg} alt={props.title} className={styles.poster} />
      <div>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.description}>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
        <Button text="Comprar Agora !"/>
      </div>
    </div>
  )
}