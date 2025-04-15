import Image from 'next/image';
import styles from './contact.module.css'
import linkedin from '../../../public/linkedin.png'

const Contact = () => {
    return (
        <div className={styles.main}>
            <h1>
                Denis Chheang
            </h1>
            <h2>
                6 bis rue de la Fraternité
            </h2>
            <h2>
                91200 Athis-Mons
            </h2>
            <h2>
                denis.chheang1@gmail.com
            </h2>
            <h2>
                07 49 57 51 64
            </h2>
            <h2>
            <a href="http://www.linkedin.com/in/denis-chheang">
                <Image
                    src={linkedin}
                    alt='linkedin logo'
                    width={30}
                    height={30}
                />
            </a>
            </h2>
        </div>
    )
}

export default Contact;