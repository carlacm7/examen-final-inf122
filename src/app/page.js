
import Image from "next/image";
import styles from "./page.module.css";
import PokeCard from "./components/pokeCard";
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap" rel="stylesheet"></link>


export default function Home() {
    
  return (
    <main className={styles.main}>
      <PokeCard/>
    </main>
  );
}


