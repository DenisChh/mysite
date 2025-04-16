'use client'

import Image from 'next/image';
import styles from './projects.module.css'
import './projects.module.css'
import rt1 from '../../../public/minirt/rt1.png'
import rt2 from '../../../public/minirt/rt2.png'
import rt3 from '../../../public/minirt/rt3.png'
import leftArrow from '../../../public/larrow.png'
import rightArrow from '../../../public/rarrow.png'
import { useState } from 'react';

const Minirt = () => {
    const [screenNumber, setScreenNumber] = useState(0)
    const screenshot = [rt1,rt2,rt3]

    function incrementScreenNumber() {
        let n = screenNumber;

        n + 1 > 2 ? n = 0 : n++;
        setScreenNumber(n)
    }

    function decrementScreenNumber() {
        let n = screenNumber;

        n - 1 < 0 ? n = 2 : n--;
        setScreenNumber(n)
    }

    return (
        <div className={styles.projectDescription}>
            <h1 id={styles.header}> Minirt </h1>
            <h3>
                <span className={styles.title}> Description </span> :
                Logiciel de rendu d'image 3D en C exploitant la technique du raytracing.
            </h3>
            <h3>
                <span className={styles.title}>Mission </span> : conception et développement complet de l'app
                <ul>
                    <li>
                        UI / UX en C
                    </li>
                    <li>
                        Rendu de formes géométriques simples, lumières, caméras
                    </li>
                    <li>
                        Déplacements et intéractions avec les objets dans la scène
                    </li>
                    <li>
                        Intégration de coefficients de réflexion et réfraction pour un rendu d'image plus précis
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
                        alt='app screen 8'
                        sizes='(max-width:900px) 200px, 200px'
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

export default Minirt;