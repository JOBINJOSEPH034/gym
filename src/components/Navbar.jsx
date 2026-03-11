import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link to="/" className={styles.logo}>
                IRON<span>FORGE</span>
            </Link>
            <ul className={styles.navLinks}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/programs">Programs</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/trainers">Trainers</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
            </ul>
            <Link to="/pricing" className={styles.navCta}>
                <button style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', textTransform: 'inherit', letterSpacing: 'inherit' }}>
                    Free Trial
                </button>
            </Link>
        </nav>
    )
}
