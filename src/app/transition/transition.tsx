'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const [displayedPath, setDisplayedPath] = useState(pathname)

    useEffect(() => {
        setDisplayedPath(pathname)
    }, [pathname])

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={displayedPath}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                style={{ height: '100%' }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}