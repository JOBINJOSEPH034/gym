import styles from './About.module.css'

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className="reveal">
                <p className="section-label">Who We Are</p>
                <h2 className="section-title">MORE THAN A<br />GYM.</h2>
                <p className="section-body">
                    IRONFORGE is a performance training facility built for those who take their results
                    seriously. We combine cutting-edge equipment, science-backed programming, and elite
                    coaching to deliver a training experience unlike anything else.
                </p>
                <p className="section-body" style={{ marginTop: '20px' }}>
                    From strength and conditioning to recovery and nutrition, every detail is engineered
                    for one purpose — your transformation.
                </p>
                <a href="#programs" className="btn-ghost" style={{ marginTop: '40px', display: 'inline-flex' }}>
                    Explore Programs
                </a>
            </div>
            <div className={`${styles.visual} reveal`}>
                <div className={styles.boxMain}>
                    <div className={styles.bigStat}>
                        <div className={styles.bigStatNum}>15+</div>
                        <div className={styles.bigStatLabel}>Years of Excellence</div>
                    </div>
                </div>
                <div className={styles.boxAccent} />
            </div>
        </section>
    )
}
