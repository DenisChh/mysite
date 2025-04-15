'use client'

import { useRouter } from 'next/navigation'
import styles from './dashboard.module.css'

const Dashboard = () => {
    const router = useRouter()

    return (
        <div className={styles.main}>
            <div className={styles.dashEntry} onClick={() => router.push('/')}>
                Accueil
            </div>
            <div className={styles.dashEntry}>
                Projets
            </div>
            <div className={styles.dashEntry} onClick={() => router.push('/about')}>
                À propos
            </div>
            <div className={styles.dashEntry}>
                Contact
            </div>
        </div>
    )
}

export default Dashboard;