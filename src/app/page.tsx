'use client'

import Image from "next/image";
import styles from "./page.module.css";
import rightArrow from '../../public/rarrow.png';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.main}>
      <div>
        Hey, moi c'est <span className={styles.name}> Denis Chheang</span>.
      </div>
      <div>
        Je suis Développeur fullstack
      </div>
      <div>
        React TS / React Native, NestJS
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.links} onClick={() => router.push('/about')}>
          <Image
            src={rightArrow}
            alt='arrow icon'
            width={40}
            height={40}
          />
          <div>
            En savoir plus
          </div>
        </div>
        <div className={styles.links} onClick={() => router.push('/projects')}>
          <Image
            src={rightArrow}
            alt='arrow icon'
            width={40}
            height={40}
          />
          <div>
            Voir mes projets
          </div>
        </div>
      </div>
    </div>
  );
}
