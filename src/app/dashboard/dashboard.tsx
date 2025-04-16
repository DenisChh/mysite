'use client'

import { useRouter } from 'next/navigation'
import styles from './dashboard.module.css'
import { useNavigation } from '../context/navigation'

const Dashboard = () => {
    const router = useRouter()
    const {selected, setSelected} = useNavigation()

    return (
        <div className={styles.main}>
            <div
                className={!selected ? styles.selected : styles.dashEntry}
                onClick={() => {
                    router.push('/')
                    setSelected(0)
                }}>
                Accueil
            </div>
            <div
                className={selected === 1 ? styles.selected : styles.dashEntry}
                onClick={() => {
                    router.push('/projects')
                    setSelected(1)
                }}>
                Projets
            </div>
            <div
                className={selected === 2 ? styles.selected : styles.dashEntry}
                onClick={() => {
                    router.push('/about')
                    setSelected(2)
                }}>
                À propos
            </div>
            <div
                className={selected === 3 ? styles.selected : styles.dashEntry}
                onClick={() => {
                    router.push('/contact')
                    setSelected(3)
                }}>
                Contact
            </div>
        </div>
    )
}

export default Dashboard;