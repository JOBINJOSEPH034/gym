import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
    const cursorRef = useRef(null)
    const ringRef = useRef(null)
    const mouseX = useRef(0)
    const mouseY = useRef(0)
    const ringX = useRef(0)
    const ringY = useRef(0)
    const rafId = useRef(null)
    const location = useLocation()

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    // Custom Cursor
    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.current = e.clientX
            mouseY.current = e.clientY
            if (cursorRef.current) {
                cursorRef.current.style.left = e.clientX + 'px'
                cursorRef.current.style.top = e.clientY + 'px'
            }
        }

        const animateRing = () => {
            ringX.current += (mouseX.current - ringX.current) * 0.12
            ringY.current += (mouseY.current - ringY.current) * 0.12
            if (ringRef.current) {
                ringRef.current.style.left = ringX.current + 'px'
                ringRef.current.style.top = ringY.current + 'px'
            }
            rafId.current = requestAnimationFrame(animateRing)
        }

        document.addEventListener('mousemove', handleMouseMove)
        rafId.current = requestAnimationFrame(animateRing)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(rafId.current)
        }
    }, [])

    // Scroll reveal logic (Re-run when pathname changes)
    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal')
        // Reset visible state on initial load
        reveals.forEach(el => el.classList.remove('visible'))

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => entry.target.classList.add('visible'), 100)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1 }
        )
        reveals.forEach((el) => observer.observe(el))

        return () => {
            observer.disconnect()
        }
    }, [location.pathname])

    return (
        <>
            <div className="cursor" ref={cursorRef} />
            <div className="cursor-ring" ref={ringRef} />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
