'use client'

import Image from 'next/image';
import styles from './projects.module.css'
import './projects.module.css'
import p1 from '../../../public/pong/p1.png'
import p2 from '../../../public/pong/p2.png'
import p3 from '../../../public/pong/p3.png'
import p4 from '../../../public/pong/p4.png'
import p5 from '../../../public/pong/p5.png'
import p6 from '../../../public/pong/p6.png'
import p7 from '../../../public/pong/p7.png'
import p8 from '../../../public/pong/p8.png'
import p9 from '../../../public/pong/p9.png'
import p10 from '../../../public/pong/p10.png'

import leftArrow from '../../../public/larrow.png'
import rightArrow from '../../../public/rarrow.png'
import { useState } from 'react';

const Pong = () => {
    const [screenNumber, setScreenNumber] = useState(0)
    const screenshot = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10]

    function incrementScreenNumber() {
        let n = screenNumber;

        n + 1 > 9 ? n = 0 : n++;
        setScreenNumber(n)
    }

    function decrementScreenNumber() {
        let n = screenNumber;

        n - 1 < 0 ? n = 9 : n--;
        setScreenNumber(n)
    }

    return (
        <div className={styles.projectDescription}>
            <h1 id={styles.header}> Online Pong </h1>
            <h3>
                <span className={styles.title}> Description </span> :
                Web app permettant de jouer au pong en ligne.
            </h3>
            <h3>
                <span className={styles.title}>Mission </span> : conception et développement complet de l'app
                <ul>
                    <li>
                        UI / UX React, API NestJS, BDD PostgreSQL
                    </li>
                    <li>
                        Authentification 42Api / OAuth2 / JWT, Interface graphique Canvas
                    </li>
                    <li>
                        Jeu, chat, lobby, matchmaking, user profile
                    </li>
                </ul>
            </h3>
            <div className={styles.row}>
                <div className={styles.arrow} onClick={decrementScreenNumber}>
                    <Image
                        src={leftArrow}
                        alt=''
                        width={50}
                        height={50}
                    />
                </div>
                <div className={styles.screenshots} onClick={incrementScreenNumber}>
                <Image
                        src={screenshot[screenNumber]}
                        fill
                        alt='app screen'
                        className={styles.responsiveImage}
                        sizes='(max-width:900px) 600px, 600px'
                    />
                </div>
                <div className={styles.arrow} onClick={incrementScreenNumber}>
                    <Image
                        src={rightArrow}
                        alt=''
                        width={50}
                        height={50}
                    />
                </div>
            </div>
        </div>
    )
}

export default Pong;