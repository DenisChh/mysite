'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './transition.module.css'

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const [displayedPath, setDisplayedPath] = useState(pathname)
    const variants = {
        hidden: { opacity: 0, x: 0, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 0 },
    }

    useEffect(() => {
        setDisplayedPath(pathname)
    }, [pathname])

    return (
        <motion.div
            key={displayedPath}
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className={styles.transitionContainer}
        >
            {children}
        </motion.div>
    )
}