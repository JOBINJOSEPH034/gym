import styles from './Hero.module.css'

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.heroBg} />
            <div className={styles.heroLines} />
            <div className={styles.heroNumber}>01</div>
            <div className={styles.heroContent}>
                <p className={styles.heroTag}>Est. 2010 — Premium Fitness</p>
                <h1 className={styles.heroTitle}>
                    FORGE<br />YOUR<br /><em>LIMIT</em>
                </h1>
                <p className={styles.heroSub}>
                    Where champions are built. Elite training, world-class coaches, and a community
                    that pushes you beyond what you thought possible.
                </p>
                <div className={styles.heroActions}>
                    <a href="#pricing" className="btn-primary">Start Today</a>
                    <a href="#programs" className="btn-ghost">See Programs</a>
                </div>
            </div>
        </section>
    )
}
