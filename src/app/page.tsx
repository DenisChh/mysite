import Image from "next/image";
import styles from "./page.module.css";
import profilePic from '../../public/me.jpg'
import background from '../../public/background.jpg'
import Dashboard from "./dashboard/dashboard";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>
        Denis Chheang
      </h1>
      <h2>
        Développeur fullstack
      </h2>
      <h2>
        React TS, React Native / NestJS
      </h2>
    </div>
  );
}
