'use client'

import styles from './about.module.css'
import profilePic from '../../../public/me.jpg'
import Image from 'next/image'
import rightArrow from '../../../public/rarrow.png'
import { useRouter } from 'next/navigation'
import { useNavigation } from '../context/navigation'

const About = () => {
    const router = useRouter()

    return (
        <div className={styles.main}>
            <div className={styles.row}>
                <div className={styles.profilePic}>
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
                    <h5>
                        Issu d’un environnement peu propice à l’épanouissement personnel,
                        j’ai développé une sensibilité particulière aux enjeux liés à l’éducation,
                        au bien-être, à l’ouverture d’esprit et à l’empathie.
                        Aujourd’hui, je souhaite mettre mes compétences au service de projets porteurs de sens,
                        qui contribuent à un monde plus juste, plus humain et plus inclusif pour chacun·e.
                    </h5>
                    <div className={styles.linksContainer}>
                        <div className={styles.links}>
                            <Image
                                src={rightArrow}
                                alt='arrow icon'
                                width={40}
                                height={40}
                            />
                            <a className={styles.links} href='/CV2025-chess.pdf'>
                                Voir mon CV
                            </a>
                        </div>
                        <div
                            className={styles.links}
                            onClick={() => {
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