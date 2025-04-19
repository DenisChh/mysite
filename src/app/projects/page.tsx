'use client'

import { useState } from 'react';
import styles from './projects.module.css'
import KosherApp from './kosherApp';
import Pong from './onlinePong';
import Minirt from './minirt';
import { Poetsen_One } from 'next/font/google';

const poetsen = Poetsen_One({
    weight: '400',
    subsets: ['latin'],
});

const Projects = () => {
    const [project, setProject] = useState(0)

    return (
        <div className={styles.main}>
            <div className={styles.projectList}>
                <div
                    className={!project ? styles.selected : styles.projectTitle}
                    onClick={() => { setProject(0) }}
                >
                    <div className={poetsen.className}>
                        100%Kosher
                    </div>
                </div>
                <div
                    className={project === 1 ? styles.selected : styles.projectTitle}
                    onClick={() => { setProject(1) }}
                >
                    <div className={poetsen.className}>
                        Online pong
                    </div>
                </div>
                <div
                    className={project === 2 ? styles.selected : styles.projectTitle}
                    onClick={() => { setProject(2) }}
                >
                    <div className={poetsen.className}>
                        Minirt
                    </div>
                </div>
            </div>
            <div className={styles.projectDescription}>
                {!project && <KosherApp />}
                {project === 1 && <Pong />}
                {project === 2 && <Minirt />}
            </div>
        </div>
    )
}

export default Projects;