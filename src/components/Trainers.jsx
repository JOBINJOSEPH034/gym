import styles from './Trainers.module.css'

const trainers = [
    { img: '/trainer_marcus.png', name: 'Marcus Reid', role: 'Head of Strength', spec: 'Former powerlifting champion. 12 years coaching elite athletes and everyday warriors.' },
    { img: '/trainer_sofia.png', name: 'Sofia Cruz', role: 'HIIT Specialist', spec: 'NSCA-certified. Specializes in fat loss, metabolic conditioning, and athletic prep.' },
    { img: '/trainer_darius.png', name: 'Darius Ko', role: 'Combat Coach', spec: 'Pro MMA background. 8-year veteran trainer in boxing, muay thai, and combat fitness.' },
    { img: '/trainer_aria.png', name: 'Aria Patel', role: 'Performance Coach', spec: 'Sports science MSc. Works with pro athletes on speed, agility, and peak performance.' },
]

export default function Trainers() {
    return (
        <section id="trainers" className={styles.trainers}>
            <div className="reveal">
                <p className="section-label">The Team</p>
                <h2 className="section-title">MEET THE<br />COACHES</h2>
            </div>
            <div className={styles.grid}>
                {trainers.map((t) => (
                    <div key={t.name} className={`${styles.card} reveal`}>
                        <div className={styles.img} style={{ backgroundImage: `url(${t.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className={styles.overlay} />
                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.name}>{t.name}</h3>
                            <p className={styles.role}>{t.role}</p>
                            <p className={styles.spec}>{t.spec}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
