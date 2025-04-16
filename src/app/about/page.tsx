'use client'

import styles from './about.module.css'
import profilePic from '../../../public/me.jpg'
import Image from 'next/image'
import rightArrow from '../../../public/rarrow.png'
import { useRouter } from 'next/navigation'
import { useNavigation } from '../context/navigation'

const About = () => {
    const router = useRouter()
    const { setSelected } = useNavigation()

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
                    <h3 id={styles.name}>
                        Denis Chheang, développeur fullstack
                    </h3>
                    <div>
                        Dans un monde où la technologie est en perpétuelle évolution, je suis à la recherche
                        de nouveaux défis qui me permettront de contribuer à façonner le monde de demain.
                    </div>
                    <div className={styles.linksContainer}>
                        <div className={styles.links}>
                            <Image
                                src={rightArrow}
                                alt='arrow icon'
                                width={40}
                                height={40}
                            />
                            <div>
                                <a href='/CV2025-chess.pdf'>
                                    Voir mon CV
                                </a>
                            </div>
                        </div>
                        <div
                            className={styles.links}
                            onClick={() => {
                                setSelected(1)
                                router.push('/projects')
                            }}
                        >
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
            </div>
        </div >
    )
}

export default About;