import styles from './about.module.css'
import profilePic from '../../../public/me.jpg'
import Image from 'next/image'

const About = () => {
    return (
        <div className={styles.main}>
            <div className={styles.row}>
                <div>
                    <Image
                        src={profilePic}
                        alt='profile pic'
                        width={150}
                        height={150}
                        style={{ borderRadius: '50%', overflow: 'hidden' }}
                    />
                </div>
                <div>
                    <h3>
                        Denis Chheang, développeur fullstack
                    </h3>
                    <div>
                        Dans un monde où la technologie est en perpétuelle évolution, je suis à la recherche
                        de nouveaux défis qui me permettront de contribuer à façonner le monde de demain.
                    </div>
                    <div className={styles.linksContainer}>
                        <div className={styles.row}>
                            Voir mon CV
                        </div>
                        <div className={styles.row}>
                            Voir mes projets
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About;