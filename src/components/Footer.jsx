import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.brand}>
                    <Link to="/" className={styles.logo} style={{ textDecoration: 'none' }}>
                        IRON<span>FORGE</span>
                    </Link>
                    <p className={styles.desc}>
                        Premium fitness since 2010. Built on science, powered by passion, and driven by your
                        results. Kerala's finest elite training facility.
                    </p>
                </div>
                <div>
                    <p className={styles.colTitle}>Navigate</p>
                    <ul className={styles.links}>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/programs">Programs</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/trainers">Trainers</Link></li>
                    </ul>
                </div>
                <div>
                    <p className={styles.colTitle}>Contact</p>
                    <ul className={styles.links}>
                        <li><a href="mailto:demo@ironforge.in">demo@ironforge.in</a></li>
                        <li><a href="tel:+919633208371">+91 96332 08371</a></li>
                        <li><span>Kochi, Kerala</span></li>
                        <li><span>Open 24/7</span></li>
                    </ul>
                </div>
                <div>
                    <p className={styles.colTitle}>Legal</p>
                    <ul className={styles.links}>
                        <li><Link to="/">Privacy Policy</Link></li>
                        <li><Link to="/">Terms of Service</Link></li>
                        <li><Link to="/">Membership Terms</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.bottom}>
                <p className={styles.copy}>© 2026 IRONFORGE GYM. All rights reserved. | Created by Jobin Joseph</p>
                <div className={styles.socialLinks}>
                    <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">TikTok</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
                </div>
            </div>
        </footer>
    )
}
