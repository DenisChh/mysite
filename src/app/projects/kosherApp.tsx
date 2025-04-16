'use client'

import Image from 'next/image';
import styles from './projects.module.css'
import './projects.module.css'
import k1 from '../../../public/kosherApp/kosher1.jpg'
import k2 from '../../../public/kosherApp/kosher2.jpg'
import k3 from '../../../public/kosherApp/kosher3.jpg'
import k4 from '../../../public/kosherApp/kosher4.jpg'
import k5 from '../../../public/kosherApp/kosher5.jpg'
import k6 from '../../../public/kosherApp/kosher6.jpg'
import k7 from '../../../public/kosherApp/kosher7.jpg'
import k8 from '../../../public/kosherApp/kosher8.jpg'
import leftArrow from '../../../public/larrow.png'
import rightArrow from '../../../public/rarrow.png'
import { useState } from 'react';

const KosherApp = () => {
    const [screenNumber, setScreenNumber] = useState(7)
    const screenshot = [k1, k2, k3, k4, k5, k6, k7, k8]

    function incrementScreenNumber() {
        let n = screenNumber;

        n + 1 > 7 ? n = 0 : n++;
        setScreenNumber(n)
    }

    function decrementScreenNumber() {
        let n = screenNumber;

        n - 1 < 0 ? n = 7 : n--;
        setScreenNumber(n)
    }

    return (
        <div className={styles.projectDescription}>
            <h1 id={styles.header}> 100%Kosher </h1>
            <h3>
                <span className={styles.title}> Description </span> : App alimentaire visant à renseigner les utilisateurs sur les
                produits et magasins qui correspondent à leurs critères de consommation, conformément à un
                régime alimentaire spécifique.
            </h3>
            <h3>
                <span className={styles.title}>Mission </span> : conception et développement complet de l'app
                <ul>
                    <li>
                        UI / UX React Native, API NestJS, BDD PostgreSQL
                    </li>
                    <li>
                        Backoffice en React, hébergement sur Microsoft Azure
                    </li>
                    <li>
                        Authentification Firebase / OAuth2 / JWT, Intégration React Geolocation, Stripe
                    </li>
                    <li>
                        Publication sur Google Playstore
                    </li>
                </ul>
            </h3>
            <div className={styles.row}>
                <div className={styles.arrow} onClick={incrementScreenNumber}>
                    <Image
                        src={leftArrow}
                        alt=''
                        width={50}
                        height={50}
                    />
                </div>
                <div className={styles.screenshots} onClick={decrementScreenNumber}>
                    <Image
                        src={screenshot[screenNumber]}
                        alt='app screen 8'
                        width={250}
                        height={500}
                    />
                </div>
                <div className={styles.arrow} onClick={decrementScreenNumber}>
                    <Image
                        src={rightArrow}
                        alt=''
                        width={50}
                        height={50}
                    />
                </div>

                {/*<Image
                    src={k7}
                    alt='app screen 7'
                    width={200}
                    height={400}
                />
                <Image
                    src={k6}
                    alt='app screen 6'
                    width={200}
                    height={400}
                />
                <Image
                    src={k5}
                    alt='app screen 5'
                    width={200}
                    height={400}
                />
                <Image
                    src={k4}
                    alt='app screen 4'
                    width={200}
                    height={400}
                />
                <Image
                    src={k3}
                    alt='app screen 3'
                    width={200}
                    height={400}
                />
                <Image
                    src={k2}
                    alt='app screen 2'
                    width={200}
                    height={400}
                />
                <Image
                    src={k1}
                    alt='app screen 1'
                    width={200}
                    height={400}
                />*/}
            </div>
        </div>
    )
}

export default KosherApp;