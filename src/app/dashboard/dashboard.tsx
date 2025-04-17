'use client'

import { usePathname, useRouter } from 'next/navigation'
import styles from './dashboard.module.css'
import { useNavigation } from '../context/navigation'
import { useEffect } from 'react'
import { Poetsen_One } from 'next/font/google';

const poetsen = Poetsen_One({
    weight: '400',
    subsets: ['latin'],
});

const Dashboard = () => {
    const router = useRouter()
    const pathname = usePathname()
    const { selected, setSelected } = useNavigation()

    useEffect(() => {
        if (pathname.includes('projects'))
            setSelected(1)
        else if (pathname.includes('about'))
            setSelected(2)
        else if (pathname.includes('contact'))
            setSelected(3)
        else
            setSelected(0)
    }, [pathname])

    return (
        <div className={poetsen.className}>
            <div className={styles.main}>
                <div
                    className={!selected ? styles.selected : styles.dashEntry}
                    onClick={() => { router.push('/') }}>
                    Accueil
                </div>
                <div
                    className={selected === 1 ? styles.selected : styles.dashEntry}
                    onClick={() => { router.push('/projects') }}>
                    Projets
                </div>
                <div
                    className={selected === 2 ? styles.selected : styles.dashEntry}
                    onClick={() => { router.push('/about') }}>
                    À propos
                </div>
                <div
                    className={selected === 3 ? styles.selected : styles.dashEntry}
                    onClick={() => { router.push('/contact') }}>
                    Contact
                </div>
            </div>
        </div>
    )
}

export default Dashboard;