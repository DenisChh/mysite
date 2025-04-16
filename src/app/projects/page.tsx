'use client'

import { useState } from 'react';
import styles from './projects.module.css'
import KosherApp from './kosherApp';

const Projects = () => {
    const [project, setProject] = useState(0)

    return (
        <div className={styles.main}>
            <div className={styles.projectList}>
                <div
                    className={!project ? styles.selected : styles.projectTitle}
                    onClick={() => { setProject(0) }}
                >
                    100%Kosher
                </div>
                <div
                    className={project === 1 ? styles.selected : styles.projectTitle}
                    onClick={() => { setProject(1) }}
                >
                    Online pong
                </div>
                <div
                    className={project === 2 ? styles.selected : styles.projectTitle}
                    onClick={() => { setProject(2) }}
                >
                    Minirt
                </div>
            </div>
            {!project && <KosherApp />}
        </div>
    )
}

export default Projects;