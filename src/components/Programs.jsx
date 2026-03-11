const programs = [
    { num: '01', icon: '🔥', title: 'Strength & Power', desc: 'Progressive overload programming designed to maximize muscle hypertrophy and raw strength. Barbell-focused, results-driven.' },
    { num: '02', icon: '⚡', title: 'HIIT & Cardio', desc: 'High-intensity interval training that torches fat and builds cardiovascular endurance. 45-minute sessions, maximum burn.' },
    { num: '03', icon: '🥊', title: 'Combat Fitness', desc: 'Boxing, kickboxing, and MMA conditioning. Develop explosive power, coordination, and mental toughness.' },
    { num: '04', icon: '🧘', title: 'Recovery & Mobility', desc: 'Stretch, recover, and optimize. Guided mobility work, foam rolling, and breathwork to keep you training hard every day.' },
    { num: '05', icon: '🏃', title: 'Athletic Performance', desc: 'Speed, agility, and sport-specific conditioning. Used by professional athletes and serious competitors.' },
    { num: '06', icon: '🎯', title: 'Personal Training', desc: 'One-on-one coaching tailored entirely to your goals. Custom programming, nutrition guidance, and dedicated support.' },
]

import styles from './Programs.module.css'

export default function Programs() {
    return (
        <section id="programs" className={styles.programs}>
            <div className={`${styles.header} reveal`}>
                <div>
                    <p className="section-label">What We Offer</p>
                    <h2 className="section-title">OUR<br />PROGRAMS</h2>
                </div>
                <a href="#pricing" className="btn-ghost">View All Plans</a>
            </div>
            <div className={styles.grid}>
                {programs.map((p) => (
                    <div key={p.num} className={`${styles.card} reveal`}>
                        <div className={styles.cardNum}>{p.num}</div>
                        <span className={styles.cardIcon}>{p.icon}</span>
                        <h3 className={styles.cardTitle}>{p.title}</h3>
                        <p className={styles.cardDesc}>{p.desc}</p>
                        <span className={styles.cardArrow}>→</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
